---
title: Windowing in Windows 8.1
tags: []
date: 2016-10-02 16:03:46
---

Windows (the OS) has always had windows - rectangular portals into an application that allow shrinking, expanding, moving, maximizing, minimizing, and whatever else. A window is a foundational element of many UI&#39;s. It&#39;s not right for every UI, but it&#39;s great for many and is a part of many popular operating systems.

In Windows XP, I used a utility app called Resizer (I think that was the name) that allowed me to quickly relegate a window to a certain quadrant of the screen (upper right, for instance). It also showed the width and height in pixels of the selected window to allow for easier web development compatibility checking.

Windows 7, then, introduced some nifty windowing features obviating the need to install a third party app (for me anyway). In Windows 7, you could use WIN + LEFT/RIGHT to send a window to the left or right half of the screen and WIN + UP/DOWN to maximize, restore, and minimize it. I quickly developed a dependency on these shortcuts.

Desktop windows in Windows 8 still listen for these keyboard shortcuts, but the new Windows Store apps introduce a dramatically different windowing model altogether.

In 8.0, Windows Store apps are in snap mode, fill mode, or full mode and the WIN + . (period) shortcut toggles between them. This was pretty cool, but snap and fill windows modes were destined to live a short life. Windows 8.1 demolished them with a fluid windowing system that allows apps to be any size the user wants down to a minimum determined by the developer.

I want to show you how to use your keyboard to get some pretty cool control over this windowing in Windows 8.1\. You can try this at home, but don&#39;t try this with Windows 8.0 or you&#39;ll be sorely disappointed.

First, let&#39;s get some modern apps open. I&#39;m going to open Bing Food &amp; Drink, Alarms, and Windows Reading List. These apps are all Windows 8.1 apps that recognize and take advantage of the new windowing system.

Note as you&#39;re playing with this that the classic desktop itself acts like a single app, and individual desktop apps do not participate in the new windowing behavior. So you&#39;ll see the entire desktop as a single entity appear as if it&#39;s a modern app.

So I&#39;ll start by opening Bing Food &amp; Drink from the Start Screen.

![](http://codefoster.blob.core.windows.net/site/image/1feaa39b8a6e45e8a682d3ad2a4b089a/windowing_01_1.png)

And that app opens full screen. I now have a single Windows Store app running in addition to a bunch of stuff running in desktop mode.

![](http://codefoster.blob.core.windows.net/site/image/fd60c4310dd640eb8c442a4b1e0c91a3/windowing_02_1.png)

Now, while still in the Bing Food &amp; Dining app, let me hit Start and launch the Alarms app the same way. It will also open full screen, replacing the Bing Food &amp; Drink app.

![](http://codefoster.blob.core.windows.net/site/image/8c3dabb1cd9c4258aa881d3d2987be98/windowing_03_1.png)

Perhaps you haven&#39;t seen the new Alarms app in Windows 8.1\. I think it&#39;s really cool with some nice radial controls and lots of features.

Now let&#39;s get our hands on the keyboard. Try just pressing WIN + RIGHT once. That will send the active Alarms app to the right half of the screen and leave the left half unoccupied. Now press WIN + TAB and you&#39;ll see that the Bing Food &amp; Drink apps will occupy the left side. That was two quick keystrokes to get ourselves into a great side-by-side workspace. Notice too that the slider control between the apps has a a subtle glyph rendered on the left side indicating that the Bing Food &amp; Drink app is the active app.

> WIN + LEFT/RIGHT sends the active app to the left/right
> 
> WIN + UP maximizes the selected app
> 
> WIN + DOWN _closes_ the selected app (unlike desktop mode where the app is restored/minimized)
> 
> WIN + TAB switches through open Windows Store apps

![](http://codefoster.blob.core.windows.net/site/image/853bfc34aeab4a0aa1a98386dd514523/windowing_04_1.png)

Now try tapping WIN + RIGHT again to swap the order of the windows. The Bing Food &amp; Drink app is sent to the right effectively swapping it for the Alarms app. Notice that the Bing Food &amp; Drink app is still the active app as designated by the glyph on the slider.

You can also use WIN + UP and WIN + DOWN to maximize or close the active app. Try that now with the Bing Food &amp; Drink app.

![](http://codefoster.blob.core.windows.net/site/image/882202eeb2054c3eb405a81ec63caa70/windowing_07_1.png)&nbsp;![](http://codefoster.blob.core.windows.net/site/image/06fc46b1144b4533b8f7b13dc4ec80b4/windowing_05_1.png)

Let me show you another shortcut now. First, get your two apps back to split mode.

> WIN + . (period) &quot;grabs&quot; the active app and used repeatedly toggles through all visible apps&nbsp;_and_ the slider itself.

So with Alarms on the left and Bing Food &amp; Drink on the right as the active app, press WIN + . quickly one time. Not much happens, right? The Bing Food &amp; Drink app does a small animation indicating that it is being &quot;grabbed&quot;, but when you let go of the WIN key, it goes right back to where it was.

![](http://codefoster.blob.core.windows.net/site/image/dd04276ccf144ef3a6f6a60cd50f80dd/windowing_06_1.png)

Now hold down WIN and press the period key repeatedly. You can see that you are changing which visible app is &quot;grabbed&quot; and when you let go, you find that you have activated another app (or the slider).

While holding the WIN key, repeatedly press the period key until you have activated the slider. Without letting up the WIN key, press the left and right arrow keys. You are able to incrementally change the position of the slider and thus the size of the adjacent apps to your hearts content. That&#39;s pretty fun.

Also, try this. While holding the WIN key, repeatedly press the period key until you have &quot;grabbed&quot; an app. Without letting up the WIN key, try pressing the left, right, up, and down arrow keys. Left and right have the same effect as WIN + LEFT/RIGHT, up allows you to maximize the window size, and down allows you to close the app.

> WIN + . (period), ARROW KEYS also allow for moving windows left and right, maximizing, and closing an app