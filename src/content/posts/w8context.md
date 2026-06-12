---
title: Local Context and Web Context in Windows 8
categories: []
tags: []
date: 2012-03-05
---

When you're developing a JavaScript app for Windows 8, you need to know about the local context and the web context, and this table (from [here](http://msdn.microsoft.com/en-us/library/windows/apps/hh465373.aspx)) does a great job of summing up the technical differences between the two.

<!-- <a href="http://codefoster.files.wordpress.com/2012/03/contexts.png"><img style="background-image:none;padding-top:0;padding-left:0;display:inline;padding-right:0;border:0;" title="contexts" src="http://codefoster.files.wordpress.com/2012/03/contexts_thumb.png" alt="contexts" width="567" height="293" border="0" /></a> -->

As you can see, some of the things we as web developers have come to accept as restricted (I'm thinking of windows.close and cross-domain XHR requests) are allowed in the local context.

Other things like the ability to reference external script is not allowed from the local context. It’s easy, though, to just import your library of choice into your project and then reference it internally.

Take note of the difference in behavior between how WinJS behaves when it's local versus when it's in the web context (see same link as above).

For more information on the differences between the local and web contexts in Windows 8, see this [MSDN article](http://msdn.microsoft.com/en-us/library/windows/apps/hh465380.aspx)</a>.