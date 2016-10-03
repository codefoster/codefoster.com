---
title: Stayin’ Alive
tags: []
date: 2016-10-02 16:03:46
---

Of course now that you&#39;ve seen my post title, you&#39;re going to have the Bee Gees stuck in your head for the foreseeable future. Sorry about that. I&#39;m actually not talking about the song at all, but rather about getting your Windows 8 app to tell the system that something happening and it should not go to sleep.

You have to use good judgment here for obvious reasons. Keeping your users system alive is obviously going to peg their battery and may disappoint. Often times, however, it&#39;s exactly the functionality the user wants. Who wants to start a video and then have the system lock 5 minutes in?

The app I&#39;m working on that this applies to is called CamView ([http://aka.ms/camviewapp](http://aka.ms/camviewapp)). It shows a web cam, and my wife and I use it to keep an eye on our 10 months old son as he sleeps. When we bring him up on the big screen TV, we don&#39;t want the system to lock. We want it to stay alive. So there&#39;s our use case and the solution is simple. I&#39;ll show the implementation in JavaScript of course, but the C# is practically identical.

First of all, I add this in my default.js page _outside_ of the immediate function so it&#39;s available to my entire app.

<span style="color: blue;"><span style="font-family: Consolas; font-size: 10pt;">var<span style="color: black;">&nbsp;app&nbsp;=&nbsp;WinJS.Application;</span></span> </span>

Then on the page that shows the webcam image I do this&hellip;

<span style="color: black; font-family: Consolas; font-size: 10pt;">app.dispRequest&nbsp;=&nbsp;<span style="color: blue;">new<span style="color: black;">&nbsp;Windows.System.Display.DisplayRequest; </span></span></span>

This line takes advantage of the dynamic nature of JavaScript and adds the dispRequest property to the app object though it didn&#39;t exist before. It then instantiates the dispRequest to a new instance of the DisplayRequest from the Windows namespace.

In the page&#39;s ready method, then, I can call&hellip;

<span style="color: black; font-family: Consolas; font-size: 10pt;">app.dispRequest.requestActive(); </span>

Which will tell Windows that my app is currently doing something that should block the default locking behavior and stay alive.

The &quot;being a good citizen&quot; part starts here. You&#39;ve told Windows when to stay alive, but you also need to tell Windows when you&#39;re _done_ staying alive. You would do this anytime the user leaves the screen with video, anytime the video stops or pauses, or generally anytime you can. My webcam view page doesn&#39;t have any kind of stop or pause, so I&#39;m just disabling the requestActive as soon as the user navigates away from the page. I put that in the unload event for my Page object, and it goes like this&hellip;

<span style="color: black; font-family: Consolas; font-size: 10pt;">unload:&nbsp;<span style="color: blue;">function<span style="color: black;">()&nbsp;{</span></span></span>

<span style="color: black; font-family: Consolas; font-size: 10pt;">&nbsp;&nbsp;&nbsp;&nbsp;app.dispRequest.releaseRequest();</span>

<span style="color: black; font-family: Consolas; font-size: 10pt;">} </span>

It&#39;s yet another simple task that helps add up to great user experience. It&#39;s a matter of sweating the small stuff and considering every little nuance of your app that might delight the user. Now let&#39;s hope I make my millions off of CamView so I can retire.