---
title: Try Unsnap
tags: []
date: 2016-10-02 16:03:46
---

Here&rsquo;s a tidbit that is easy to miss if you&rsquo;re not looking for it.

If your user has snapped your app, but then they take an action in your app that gives you reason to attempt to get back out of snap mode, you can do so by calling&hellip;

<pre class="brush: js;">
Windows.UI.ViewManagement.ApplicationView.tryUnsnap();</pre>

This method returns&nbsp; a value of true if it has successfully been unsnapped or false if it was not able to. It&rsquo;s only going to unsnap for you if your app is in the foreground.

I&rsquo;m using this method in my [codeSHOW project](http://codeshow.codeplex.com). If the user snaps codeSHOW and then attempts to browse to one of the demos, then codeSHOW will unsnap itself to allow that demo to run full screen.

Hope that helps.

<div class="cf-info-box">Important: the tryUnsnap() method will not work if it&#39;s called from code that is not user initiated.</div>