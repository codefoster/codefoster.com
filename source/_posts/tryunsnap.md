---
title: Try Unsnap
categories: [Windows]
tags: []
date: 2012-10-26
alias: post/2012/10/26/tryunsnap.aspx
---

Here&#39;s a tidbit that is easy to miss if you&#39;re not looking for it.

If your user has snapped your app, but then they take an action in your app that gives you reason to attempt to get back out of snap mode, you can do so by calling...

``` js
Windows.UI.ViewManagement.ApplicationView.tryUnsnap();
```

This method returns  a value of true if it has successfully been unsnapped or false if it was not able to. It&#39;s only going to unsnap for you if your app is in the foreground.

I&#39;m using this method in my [codeSHOW project](http://codeshow.codeplex.com). If the user snaps codeSHOW and then attempts to browse to one of the demos, then codeSHOW will unsnap itself to allow that demo to run full screen.

Hope that helps.

**Important: the tryUnsnap() method will not work if it&#39;s called from code that is not user initiated.**