---
title: Save New Projects When Created
categories: []
tags: []
date: 2001-01-01
permalink: 
---

Do you occasionally write a one-off project in Visual Studio that you know is not going to go anywhere?

I used to have a console application that I called Sandbox that I had a shortcut to. I could open it, write some code, and then close without caring what it's state was when it closed. The bummer was when I opened it, sometimes I had to do a little cleanup to get it ready for fresh code. It wasn't ideal and I abandoned the practice a long time ago.

There's a better way though. It seems there always is.

If you go to Tools | Options | Projects and Solutions in Visual Studio...

![](http://codefoster.blob.core.windows.net/site/image/d0a2da4cf5894c84b19120b7c0955053/vsnewproj_01_1.png)

...and uncheck the Save new projects when created, Visual Studio makes the above scenario very nice.

The New Project dialog quits asking for a file path. What it actually does behind the scenes is create the project in your temporary files. Only when you try to close or save the project does it actually decide you need to specify a name and path for the project. The dialog actually gives you the option to either Save your project or Discard it.

![](http://codefoster.blob.core.windows.net/site/image/a95eba4d5a534640b634b811e2defbdf/vsnewproj_02_1.png)

Discarding eliminates it without a trace and leaves you about your merry way. I like this feature a lot.