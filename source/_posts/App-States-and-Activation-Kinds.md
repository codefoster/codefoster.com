---
title: App States and Activation Kinds
tags: []
date: 2016-10-02 16:03:46
---

_Process Lifetime Management_ (PLM) is also known as the _Application Lifecycle_, but don&#39;t confuse it with _Product Lifecycle Management_ (also PLM)&nbsp;or with the general Application Lifecycle Management (ALM).

By Microsoft&#39;s conventional definitions and in the best of my understanding, _Process Lifetime Management_ and _Application Lifecycle_ are one and the same, are defined (for Windows 8) [here](http://msdn.microsoft.com/en-us/library/windows/apps/hh464925.aspx), and are defined as such...

> This topic describes the lifecycle of an app, from the time it is deployed through its removal. By suspending and resuming your app appropriately, you ensure that your customer has the best possible experience with your app.

The means by which an app developer considers and targets the lifecycle of an app is well documented on the above page and in a few other blogs I found with some easy searching, so let&#39;s consider that outside the scope of this quick study.

I&#39;d just like to define some terms and share a little utility I made to help you understand what&#39;s happening and when. Emphasis on the word _little_ please.

The application&#39;s _state_ is one of three logical values: Running, Not Running, or Suspended. That&#39;s easy. And the values are easy to understand when you look at this diagram...

![](http://codefoster.blob.core.windows.net/site/image/8e948beaa2604443876313ddbf08d70d/appstate_01_1.png)

But the actual states that an app can be in are actually enumerated (in JavaScript) in the [ApplicationExecutionState object](http://msdn.microsoft.com/en-us/library/windows/apps/windows.applicationmodel.activation.applicationexecutionstate.aspx) as notRunning, running, suspended, terminated, and closedByUser.

When you&#39;re writing code for your app - even in the onactivated function that lives by default in the default.js file of your project - the value of the app&#39;s state isn&#39;t all that helpful, since it will always be _running_.

But what you might be interested in is the applications state _the last time_ the app was running - you know, before it got activated. And that&#39;s available in the onactivated function under args.detail.previousExecutionState. You might need to know this to, for instance, determine that Windows had to terminate the app due to resource constraints.

The other value you&#39;ll be interested in when your app gets activated is the _activation kind_. The activation kind is the means by which this app was launched. At first, you might wonder how an app can be launched besides you touching the app tile on the start screen. There are a myriad of ways though let me assure you. In Windows 8.1, there are 23.

In the simple case, your app was launched by the user, so the value of the args.detail.kind variable is simple _launch_ (actually it&#39;s the integer value of the [Windows.ApplicationModel.Activation.ActivationKind](http://msdn.microsoft.com/en-us/library/windows/apps/windows.applicationmodel.activation.activationkind.aspx) enumeration), but the user may also have executed a protocol handler that is registered to your app (protocol), opened a file whose type is registered to your app (file), launched your app via Cortana (voiceCommand), or one of 19 more.

And now the _little_ utility.

LifeCycleState is on github at [github.com/codefoster/LifeCycleState](https://github.com/codefoster/LifeCycleStates).

Run it and it simply shows the previous app state and the means by which the app was launched. Something like...

![](http://codefoster.blob.core.windows.net/site/image/75b4fe1749304aa191928f3536242890/appstate_02_1.png)

Hopefully it&#39;s helpful for understanding the different states and activations kinds there are and when or how you trigger them. Run it through a few scenarios such as opening the app. Try switching to another and then back (activation does not occur). Try using various means of closing the app (ALT + F4, swipe from the top, swipe from the top and hold at the bottom of the screen until the tile flips, mouse click the X in the top right, etc.). Also, don&#39;t forget about the Lifecycle Events that you can trigger using Visual Studio. Look for this button...

![](http://codefoster.blob.core.windows.net/site/image/e7b5eb06a4984e5495cbce6addf67c0e/appstate_03_1.png)

There you have it.