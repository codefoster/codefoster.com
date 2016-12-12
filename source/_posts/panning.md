---
title: But WHY do we pan horizontally?
categories: [App Development]
tags: []
date: 2012-08-22
permalink: panning
alias:
- post/2012/08/22/panning.aspx
- post/2012/08/22/panning/
---

You may have heard or read or noticed, that in Windows 8, things move side to side. What&#39;s with that? We&#39;ve been scrolling vertically on the web since the stone age (and by stone age I&#39;m referring to the early 90&#39;s). And while we&#39;re on the subject, what&#39;s the difference between panning and scrolling anyway?! Hold your britches... you&#39;re about to find out.

First the second question and then second the first.

_What&#39;s the difference between panning and scrolling?_

Usually, when terms are being defined, the author looks up definitions from reputable sources like Merriam Webster or Wikipedia (*Noah turns over*). But I&#39;m going to avoid the bias and just shoot from the hip with the bullets on hand. That&#39;s _cowboy_ for I&#39;m going to define them myself.

**scrolling **= moving the contents of a smaller, fixed viewport so that some subsequent content is made visible while some other content falls out of view

Not bad. Here&#39;s _panning_.

**panning **= horizontally moving the contents of a one&#39;s view so that some subsequent content is made visible while some other content falls out of view

Hopefully, you can see the differences there. First, panning is horizontal. When you&#39;re watching a movie and the scene slides to one side or the other it&#39;s because the cameraman has _panned_ the camera. If the scene moved up or down, the cameraman would have been _tilting_ the camera.

It would technically be more accurate to describe a lateral movement of content on the screen as a strafe, which _moves_ the camera to the side instead of rotating it, but I don&#39;t know... maybe strafebars just doesn&#39;t roll off the tongue well enough.

So, scrolling involves a viewport that doesn&#39;t necessarily coincide with "one&#39;s view". In other words, panning occurs when all (or perhaps mostly all) of your view is moving, and again always in a horizontal direction.

And this is exactly what tends to happen in a Windows 8 app. Modern views and especially modern Windows 8 views tend to contain more focused content. Instead of a myriad of fragments of information representing what a user _might_ do, Windows 8 tries to immerse the user in the _one_ thing they are doing at that moment. So instead of having many small islands of information to scroll, users are free to pan the entire view.

Now on to the _why horizontal_ question. _Why does most everything in a Windows 8 application pan horizontally?_

There are a number of reasons. And they&#39;re all really good.

First, more devices have landscape oriented screens than portrait. That means that the horizontal axis is the long one and it&#39;s much more elegant to pan content along the long axis, because more data fits on the long axis than fits on the short one.

Second, more of the languages in the world are read horizontally (left to right or right to left) than are read vertically, so the eye is accustomed to the general content flow being horizontal.

Third, the human hand and arm system is more comfortable swiping side to side then up and down. Try making an exaggeratedly large vertical motion with your hand and then try the same horizontally. I think you&#39;ll agree.

Finally, horizontal panning is unique and differentiating. Which is fitting seeing as this is one of the most unique and differentiating operating systems I&#39;ve ever seen released.