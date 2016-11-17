---
title: Overview of Windows' New Architecture
categories: []
tags: []
date: 2012-04-25
permalink: overviewofwinrt
---

At the heart of Windows 8 development is WinRT. This is NOT Win32 and it's not .NET. It's a brand new set of APIs that's designed for modern software development and designed for user experience with an asynchronous model that allows your app to remain fast and fluid.
<!-- xmore -->

The real joy is that you get to write code against this API in your language of choice. You can choose JavaScript, C#, Visual Basic, or C++. The code you author in your language of choice is projected into WinRT code and runs native on Windows. Additionally, you get all of the inherent benefits of your language. So for JavaScript, you still get to call all of the existing browser APIs. For the .NET languages, you get a tailored .NET profile with namespaces and classes that work much like you've come to expect. And with C++ you get to call C components and C/C++ libraries (again within a tailored subset of Win32).

All of this new functionality is available in addition to the ways you've always done things. It does not eliminate it. So you can still write web apps, .NET apps, and native apps against Win32 like you always have. That's excellent.

In case it's news to you, here's an API overview of the Windows 8 Platform. You can find more information at buildwindows.com and dev.windows.com.

![](/files/overviewofwinrt_01.png)