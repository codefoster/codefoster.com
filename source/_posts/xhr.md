---
title: Using WinJS.xhr to Fetch This and That
categories: []
tags: []
date: 2012-09-26
permalink: xhr
---

You know the story. A call to a website used to be little more than a single request with its single response. But times have changed. The web is all grown up and any given visit to a website is often accompanied by multiple requests for more atomic bits of data.

The popular thing to do now, in fact, is to implement websites using a single page architecture where the user does one primary request and response to get the core document, and then the rest of his or her time spent in the app consists only of these tiny requests/response cycles that bring just what&#39;s necessary.

This is how Windows 8 apps using HTML/JS work - they are single page apps. And to play in this sandbox, you need to get good at using WinJS.xhr(). WinJS.xhr() is not a fancy function. It doesn&#39;t do a lot more than any of the other libraries do when they wrap the XmlHttpRequest. It makes for good, simple, elegant though and I like that.

Watch this screencast of the xhr() function in action and enjoy.

<iframe frameborder="0" height="240" src="http://channel9.msdn.com/Blogs/codefoster/xhrfetch/player?w=512&amp;h=288" width="320"></iframe>