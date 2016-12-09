---
title: App Dev Entry Points
categories: [Other]
tags: []
date: 2014-01-30
permalink: entrypoints
---

If you&#39;re standing at the proverbial door of app development and wondering how to get started, please read on. From the inside, let me just admit that it&#39;s confusing. There are so many ways to do the same thing and even though you&#39;re a bright and competant person (I can only assume since you&#39;re reading my blog :), sometimes you just don&#39;t know where to begin.

I&#39;ve attempted to enumerate the options in the following slides.

You should not make the entry point decision based souly on where your skillset currently lies. You should strategically consider your apps future and the entire landscape of platforms that exists. How many platforms are you going to target?

I faced this decision recently on my own app and decided that if I create an iOS app first, first of all, I would have to write Objective-C (ice pick, meet toenail) and my app would be a complete rewrite to target the others. Same goes for Android. But if I start with C#, then not only do I get to write C# (fun like eating bacon) but I can also use Xamarin to get onto the other platforms while still providing a truly native experience.

The app entry points.

First, the methods for creating a regular app. I&#39;m talking about a business app, a content app, or whatever. Basically, an app that&#39;s _not_ a game. If you&#39;re only interested in making games, then still look at these entry points, but also be sure to scroll down and see the game engines slide. Here they are...

![](http://codefoster.blob.core.windows.net/site/image/4047d1f2c9b34dc4af73494276387bbe/entrypoints_01_1.png)

Let&#39;s start with the easy methods. These really are easy too. I&#39;m not quite sure a caveman could create an app with App Studio or Project Siena, but close.

I&#39;d love to find the time to do a blog post on each of the strategies in these slides, but for now be satisfied with a short description of each.

**App Studio** is for creating Windows Phone apps. With the diminished complexity comes diminished power, but if you&#39;re not trying to create all sorts of custom functionality, then it might just do what you need. If it does cover your case, then you&#39;re in luck because it&#39;s only going to take you a couple of hours at most to make an app. Use App Studio to make a Windows Phone app that shows off your city, your super hero, or your favorite hobby, or use it to pull news, images, and videos from a few disparate sites and deliver them to users in one app. Check out [apps.windowsstore.com](http://apps.windowsstore.com).

**Project Siena** is a Windows 8 app for making Windows 8 apps. How recursive, eh? The app is quite an impressive feature set and certainly gets the job done, though I find it a little awkward to do development in the modern, flat UI style. The app allows you to suck data in through a myriad of methods including straight from an Excel workbook and then display that data with modern flair. It takes some getting used to, but if you can figure out how to program your coffee machine, you can make an app. Check out [aka.ms/projectsiena](http://aka.ms/projectsiena).

**Touch Develop** is another highly abstracted app engine for making many types of apps from many platforms. You can make apps from your iPad, iPhone, Android phone or tablet, PC, Mac, or Windows Phone! Whoa. It&#39;s pretty fun to sit on the bus and develop apps. You don&#39;t actually write much code, since most of the logic you enter into your app is entered with the touch of a button. Check out [touchdevelop.com](http://www.touchdevelop.com).

And that does it for what I&#39;m dubbing the _easy ways_ to make an app. Let&#39;s move on to the so-so ways.  For the methods from here out, you&#39;re going to have to write some curly braces. If that scares you then stop reading now. But if you&#39;re not scared off by code, then you&#39;ll reap the benefit of a lot more powerful and customizable apps.

**C#** is great. Semantic. Efficient. Portable. For many apps, this is the mecca of entry points. If you start writing your business logic in C# you&#39;ll avoid nasty surprises down the road when you try moving to other platforms. I know many think of JavaScript as the cross-platform language of choice, but the problem with JavaScript is that its exclusive UI language is HTML and with the exception of Windows 8, HTML buys you an app, but not a native app on most platforms. C# doesn&#39;t pretend to be your UI solution. Every platform has its own UI solution. But C# solves your every woe in your app logic. C# is one of the languages I always encourage beginners to start learning.

**JavaScript** is great like C# but it&#39;s also hip... like Converse... or more so. As I mentioned, JavaScript is good at getting you on a ton of platforms and it&#39;s a blast to write. It&#39;s another language I recommend everyone learns and especially beginners. One area JavaScript really shines is in games. Since you don&#39;t really need to worry about a native UI if you&#39;re making a game, if you develop the game in JavaScript you&#39;ll have no problem getting onto pretty much every platform in the universe. It&#39;s cool the way Windows 8 allows apps written in HTML/JavaScript and it is capable of treating it like a first class citizen. For your Windows 8 app, you&#39;ll be able to access device sensors, local storage, and all of the cool Windows characteristics like searching and sharing directly with your JavaScript code.

**C++** is the low-level language of choice on many levels and what it offers is basically direct access to the hardware without a framework like .NET or JVM in between. It&#39;s fast. It&#39;s powerful. It&#39;s hard. If you want to break into C++, you&#39;re going to have to break open a few books. But if you do, you&#39;ll always have a job. That&#39;s because C++ must be written and a massive number of developers are simply unwilling to write it. On Windows 8, you can write a standard app using C++, but where I think it makes the most sense is coupled with Direct X in highly performant games. Use C++ as your entry point if you&#39;ve read all the warnings, you know what to expect, and you require 5 hours or less of sleep per night.

**Objective-C** is the native language of iOS. The OS stands for operating system and the i doesn&#39;t stand for anything, but you may have heard of the iPhone and the iPad - those are running iOS. iOS runs on Objective-C. Even if, for some reason, you are going to make an app for iOS and iOS alone, I would still recommend that you start with C#. Why? Because a) it&#39;s much, much, much, much more fun to write and b) it will keep you from getting stuck on iOS. Getting stuck on iOS is not a good idea at this point since it&#39;s the only of the top three mobile platforms that is shrinking as opposed to growing on a quarterly basis. That said, if you&#39;re simply an Apple fan and have the bumper sticker to prove it, then dive headlong into Objective-C and don&#39;t look back. Take a look at [xamarin.com/csharp](http://xamarin.com/csharp) to see how Objective-C stacks up against C# syntactically. Check out [developer.apple.com](https://developer.apple.com/).

**Java** has historically held strong appeal for its potential to cross the platform lines, but it doesn&#39;t really fill that bill these days. Practically speaking, it will only take you to an Android phone or tablet today. Again, even if you only want to target Android devices, I would still recommend you learn C#, and would only recommend Java if you have a robot sticker on your car. Check out [developer.android.com](http://developer.android.com).

And another good means to get an app out the door (assuming your app is a game) is by using a game engine.

![](http://codefoster.blob.core.windows.net/site/image/8e7c0d998d0e472b8653d16a38ba939f/entrypoints_02_1.png)