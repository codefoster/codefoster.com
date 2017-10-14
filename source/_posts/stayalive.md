---
title: Stayin' Alive
categories: [App Development]
tags: []
date: 2012-12-20
---

Of course now that you've seen my post title, you're going to have the Bee Gees stuck in your head for the foreseeable future. Sorry about that. I'm actually not talking about the song at all, but rather about getting your Windows 8 app to tell the system that something happening and it should not go to sleep.

You have to use good judgment here for obvious reasons. Keeping your users system alive is obviously going to peg their battery and may disappoint. Often times, however, it's exactly the functionality the user wants. Who wants to start a video and then have the system lock 5 minutes in?

The app I'm working on that this applies to is called CamView ([http://aka.ms/camviewapp](http://aka.ms/camviewapp)). It shows a web cam, and my wife and I use it to keep an eye on our 10 months old son as he sleeps. When we bring him up on the big screen TV, we don't want the system to lock. We want it to stay alive. So there's our use case and the solution is simple. I'll show the implementation in JavaScript of course, but the C# is practically identical.

First of all, I add this in my default.js page _outside_ of the immediate function so it's available to my entire app.

``` js
var app = WinJS.Application;
```

Then on the page that shows the webcam image I do this...

``` js
app.dispRequest = new Windows.System.Display.DisplayRequest;
```

This line takes advantage of the dynamic nature of JavaScript and adds the dispRequest property to the app object though it didn't exist before. It then instantiates the dispRequest to a new instance of the DisplayRequest from the Windows namespace.

In the page's ready method, then, I can call...

``` js
app.dispRequest.requestActive();
```

Which will tell Windows that my app is currently doing something that should block the default locking behavior and stay alive.

The "being a good citizen" part starts here. You've told Windows when to stay alive, but you also need to tell Windows when you're _done_ staying alive. You would do this anytime the user leaves the screen with video, anytime the video stops or pauses, or generally anytime you can. My webcam view page doesn't have any kind of stop or pause, so I'm just disabling the requestActive as soon as the user navigates away from the page. I put that in the unload event for my Page object, and it goes like this...

``` js
unload: function() {
    app.dispRequest.releaseRequest();
}
```

It's yet another simple task that helps add up to great user experience. It's a matter of sweating the small stuff and considering every little nuance of your app that might delight the user. Now let's hope I make my millions off of CamView so I can retire.