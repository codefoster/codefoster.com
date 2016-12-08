---
title: 8tracks for Windows 8
categories: []
tags: []
date: 2014-02-17
permalink: 8tracks
---


**ME: Hi, Paul. Would you mind introducing yourself. Tell us where you work and what&#39;s the most interesting thing you&#39;re working on.**
<!-- xmore -->

![](/files/8tracks_01.jpg)

PT: My name is Paul Tidwell, I have been writing code as a hobby since I was 12\. I currently work for Bungie, Inc where we are in the processes of bringing the world of &quot;Destiny&quot; to life.  For fun, I am getting 8tracks ready for the Xbox 360.

**ME: Okay, so what&#39;s this 8tracks app you made? What&#39;s the purpose of the app and was it your idea?**

![](/files/8tracks_02.png)

PT: 8tracks is a small company from San Francisco founded in 2006.  It provides a [streaming music service ](http://8tracks.com/)similar to how people think of Pandora or Spotify. 8tracks is different from those in at least one important way: its content is provided by its community of users. That is the users upload music from their own collection, organize it into a &lsquo;mix&#39; and then share it with the world. The clever folks at 8tracks figured out how to do this legally by making sure the artists are paid for their work and by following the rules set out in the Digital Millennium Copyright Act (DMCA).

I got involved with 8tracks when I was looking for a first project to do on Windows Phone. I had been using 8tracks (from their website) as a source of music and music discovery, when I happened to noticed they offered a public API for accessing and playing back their music. When I tried it out on Windows Phone, it worked beautifully and my first Windows Phone app [&quot;Mixtapes&quot;](http://www.windowsphone.com/en-us/store/app/mixtapes/a059e6b8-c3c8-4131-a198-737bb5314a3a) was born.  Mixtapes was a moderately successful Windows Phone app and got the attention of the folks at 8tracks.

In early fall of 2012, 8tracks approached me and asked if I would be interested in developing their official Windows 8 app. I agreed.

**ME: Did you have help with 8tracks or did you work alone?**

PT: I worked with the lead designer at 8tracks who provided wireframes and mockups of how the app should look at work and I put it all together.  The folks at 8tracks also helped me test the app.

**ME: How long did the project take, and did it take more or less time than you expected?**

PT: The project got started in December 2012 and was approved in the store by March 2013, so about three months for the first release.  I have released a couple of updates including a port to Windows 8.1.

**ME: Can you tell us about what technologies you used? Did you write the app in C#? Did you use any significant libraries?**

PT: I used Visual Studio 2012 Ultimate (although Express would have worked too), TFS online ([visualstudio.com](http://www.visualstudio.com)) which, by the way, is an amazing resource. The app is written using XAML and C#.  I didn&#39;t really use any major libraries except for a small wrapper around Google analytics making it accessible from C#.

**ME: What were the biggest obstacles you had to overcome making this app?**

<div>**New to XAML?** Spend some online time with Jerry Nixon and Daren May in their [MVA JumpStart series](http://blogs.msdn.com/b/jerrynixon/archive/2013/05/10/ready-to-learn-xaml.aspx)</div>

PT: The biggest obstacle was my limited knowledge of XAML. At some point I ended up buying a [big thick book on WPF ](http://www.amazon.com/gp/product/1430272058/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=1430272058&amp;linkCode=as2&amp;tag=codefostercom-20)which I read cover to cover.  This helped me understand important concepts like [Dependency Properties](http://msdn.microsoft.com/en-us/library/ms752914(v=vs.110).aspx) and [Routed Events ](http://msdn.microsoft.com/en-us/library/ms742806(v=vs.110).aspx)that I had been using by mimicking example code but never really understanding. This knowledge helped me debug issues and write better controls.

**ME: What advice would you give an app developer starting out on his first app today?**

PT: Make sure you understand your [app lifecycle](http://msdn.microsoft.com/en-us/library/windows/apps/hh464925.aspx) (suspend, terminate, resume, etc) early on. Don&#39;t save it for last. Your project will be smoother if you consider and test these scenarios from the very start. The new [async pattern](http://msdn.microsoft.com/en-us/library/windows/apps/hh464924.aspx) that Windows 8 embraces is really beautiful, but it can also bite you when you least expect it. Users can, for example, navigate away from a page waiting for an async operation to complete, and when the operation resumes, surprising things (like crashes) can happen because the state of the app has changed.

**ME: Thank you very much for sharing your experience with us today, Paul. On a personal note, I use 8tracks most every day. I do like the built in Xbox Music app for playing music from my own library, but when I am looking for some new music to match my mood, I go straight to 8tracks. Good luck, Paul, on your future coding endeavors.**

 

 