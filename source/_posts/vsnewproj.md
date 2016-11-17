---
title: Save New Projects When Created
categories: []
tags: []
date: 2012-04-05
permalink: vsnewproj
---

Do you occasionally write a one-off project in Visual Studio that you know is not going to go anywhere?
<!-- xmore -->

I used to have a console application that I called Sandbox that I had a shortcut to. I could open it, write some code, and then close without caring what it&#39;s state was when it closed. The bummer was when I opened it, sometimes I had to do a little cleanup to get it ready for fresh code. It wasn&#39;t ideal and I abandoned the practice a long time ago.

There&#39;s a better way though. It seems there always is.

If you go to Tools | Options | Projects and Solutions in Visual Studio...

![](/files/vsnewproj_01.png)

...and uncheck the Save new projects when created, Visual Studio makes the above scenario very nice.

The New Project dialog quits asking for a file path. What it actually does behind the scenes is create the project in your temporary files. Only when you try to close or save the project does it actually decide you need to specify a name and path for the project. The dialog actually gives you the option to either Save your project or Discard it.

![](/files/vsnewproj_02.png)

Discarding eliminates it without a trace and leaves you about your merry way. I like this feature a lot.