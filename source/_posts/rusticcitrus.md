---
title: The Design of Rustic Citrus - Interview with an Indie Game Dev
categories: [Developer Stories]
tags: []
date: 2013-10-14
---

I love writing code, but I also love the developer community and talking to other developers that have made or are working on great apps.


The way I see it, apps are a medium for expression much like so many other forms of media. Apps take it a bit further though, since they have form and function as well. I know that good art adds real value to our lives, and so do good apps. They inspire us, but they also offer entertainment, communication, and time savings &ndash; true utilities.

Does a game have function? Of course it does. A game conquers boredom, stimulates the brain, entertains the children, and much more. Enter Rustic Citrus.

I met over coffee recently (because [that's what we do](http://en.wikipedia.org/wiki/Seattle_Coffee_Culture) in the Pacific Northwest) with Jacob Wenger to talk about his game [Rustic Citrus](http://apps.microsoft.com/windows/en-us/app/c7f73eae-9de1-48ef-a99d-6a61105d8349) - published on Windows 8 under his publisher name, Floating House Studios.

![](/files/rusticcitrus_01.jpg)

<div>Jacob's day job is working on the Internet Explorer team at Microsoft. Naturally, he's adept at all things HTML and JavaScript, and so he chose the web platform for implementing his first game. In fact, Windows 8 offers all kinds of help to a developer that is choosing to write a JavaScript app - an animation library, some composite UI controls, and more, but Jacob decided to go almost entirely with pure JavaScript - even deciding to take on very little in the way of JavaScript libraries as dependencies.</div>

<div> </div>

<div>Just like I did with [My Q&amp;A with Indie Game Dev Studio, Random Salad](/randomsalad), I interviewed Jacob to try and get some of his experience and learning out to you - my readers. Here's what transpired.</div>

### Meet Jacob Wenger of Floating House Studios

**ME: Hi, Jacob. Tell us who you are, what you do, and how you came to create Floating House Studios?**

JW: Hey, Jeremy! Thanks for having me. I graduated from the University of Notre Dame in 2012 as a computer science major and soon after I began working as a software developer for Microsoft. Ever since my first computer science class years ago, I have constantly had some sort of side project going on outside of class or work. I created Floating House Studios as an umbrella company for all of these projects to fall under in order to give them a consistent branding. Rustic Citrus is my first app for the Windows Store and it is also the first big title for Floating House Studios.

**ME: So naming and branding is important to you?**

JW: To me, naming and branding lends a real air of legitimacy to products. For a small indie developer like myself, I feel like it's important for me to establish a brand which people recognize and towards which they associate positive experiences. I want people to assume an app is beautifully designed and addictive simply by the fact that it comes from Floating House Studios. Towards that end I've spent a lot of time tuning the look and feel of Rustic Citrus to provide a high-value, beautiful experience in order to start the Floating House Studios brand out on a good foot.

**ME: What is your role at Microsoft and how long have you been on board?**

JW: I've been a software developer on the Internet Explorer team within Microsoft for a little over a year now. My team within Internet Explorer is focused on both the performance of the browser's myriad APIs and compatibility with other browsers.This is my first full-time job after college and I have to say that after working on class projects seen by a dozen people at most, it's quite an experience working on a product with hundreds of millions of daily users. Working on a browser has also shown me how powerful the modern web standards are and how much easier it is now to create games like Rustic Citrus than it was even five years ago.

**ME: Did you work alone on Rustic Citrus?**

JW: Right now Floating House Studios is a one-man shop. I'm the only one writing code and actively promoting Rustic Citrus but I work with a fantastic graphic designer named [Amanda Jonovski](http://www.linkedin.com/profile/view?id=69980705&amp;locale=en_US&amp;trk=tyah&amp;trkInfo=tas%3Aamanda) who I went to school with at Notre Dame. Outside of the beautiful graphical assets she made, the rest of the app is my own creation. I of course should give a hat tip to several friends and family members who helped me test the app by finding bugs and offering suggestions for new features.

### 
<video controls="controls" height="240" src="/files/rusticcitrus_02.mp4" width="320"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" height="240" width="320"><param name="src" value="/admin/js/tiny_mce/plugins/media/moxieplayer.swf" /><param name="flashvars" value="url=/files/rusticcitrus_02.mp4&amp;poster=/admin/content/" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="true" /><embed allowfullscreen="true" allowscriptaccess="true" flashvars="url=/files/rusticcitrus_02.mp4&amp;poster=/admin/content/" height="240" src="/admin/js/tiny_mce/plugins/media/moxieplayer.swf" type="application/x-shockwave-flash" width="320"></embed></object></video>

### Let's talk about the design and the code of Rustic Citrus

**ME: So you created Rustic Citrus. Can you tell us how you came up with the game idea and where you got the name?**

JW: Rustic Citrus initially began as a class project during my sophomore year at Notre Dame. I was a big fan of TextTwist growing up but I never really liked how the game looked. I wanted to create a game in the same spirit while focusing more on providing a delightful experience. This meant I had to have a great name. Since the game is about spelling words given a set of random letters, I wanted a name which was inspired by this. I wrote a program to generate all six letter words which are anagrams of each other to see if anything promising showed up. When I saw the words "rustic" and "citrus" next to each other, I knew Rustic Citrus was what I had to call it. It provided me with not only a great theme and color palette but also a nice play on words. Even after that class ended, I couldn't get the idea of turning Rustic Citrus into a full-fledged app out of my head. The summer after I graduated in 2012, I started developing Rustic Citrus as a Windows Store app and have been working on it ever since.

**ME: The design and user experience in Rustic Citrus are first class. Can you give us a few examples of things a game developer can do to create great user experience and attractive design?**

JW: When it comes to designing the look and user experience of an app - especially a mobile app - a lot of small things add up quickly. Having a consistent theme to your game makes your game memorable and stand out. For Rustic Citrus, this meant repeating the fruit theme on the game's buttons and the rustic theme on the wood and paint background images. In a similar vein, you also need to maintain a consistent color palette and font choices. Another thing to focus on is making your game look like a native app on the operating system for which you are developing. A lot of games on the Windows Store don't necessarily follow the modern look of Windows 8\. Making an app which does this can help you stand out in a crowded market. With games it is also important to not make the app overly complex. You want to provide quick access to things like instructions, options, and of course the ability to actually play the game.

**ME: What sort of work did you have to put into the UX of the app?**

JW: I've already logged plenty of hours playing with a wide range of apps across the Windows 8 platform. One of the great things about them is that they all follow a similar design philosophy, making each one look like it was developed specifically for Windows 8\. This is true for almost every app category in the Windows Store except games. As I just mentioned a minute ago, most games don't follow the grid and animation paradigms Windows 8 tries to champion and I thought this was a shame. So that was one of my major goals in building Rustic Citrus - follow the design guidelines provided by Microsoft while taking some liberties to make the app shine. Thankfully, the WinJS library Microsoft provides makes it easy for any app to adopt the look and feel of Windows 8\. I chose to embrace this and give it my own spin.

**ME: Can you explain your monetization strategy for Rustic Citrus and your reasoning behind it?**

JW: I wanted to price Rustic Citrus competitively with other games on the Windows Store platform while still allowing me a chance for it to generate revenue. I noticed that, on a whole, apps on tablet, laptop, and desktop devices cost more than on smaller mobile devices like phones. For example, a game like Angry Birds may be $0.99 on an iPhone but it was $4.99 in the Windows Store. For this reason, I figured that offering a high-quality game at $1.99 would give people a sense of getting a deal on the app. I also wanted to offer a free one day trial to get people hooked on the app without having to pay upfront. Everything I read online told me that apps on the Windows Store with free trials made many times more revenue than those without one. I also created a slimmed-down, free version of Rustic Citrus available at [www.rusticcitrus.com](http://www.rusticcitrus.com) which I use in my marketing efforts to try to give people a taste of what to expect before actually paying for the game. My whole focus was to provide just enough incentive in the free versions to convince people to pay the $1.99 for the full app.

**ME: What languages, libraries, or frameworks did you use to create Rustic Citrus?**

JW: My experience on Internet Explorer has shown me just how far native web technologies like HTML5, CSS, and JavaScript have come over the past few years. Thanks to the fact that Internet Explorer is now so standards-compliant, I had access to a huge range of APIs out of the box. Therefore, Rustic Citrus is almost built entirely out of web standards. However, I do make use of three JavaScript libraries: the WinJS library provided by Microsoft, the ever-useful [jQuery](http://jquery.com/) library, and a vector graphics library called RaphaelJS to create the game board. I'm hoping in the future that I can even get rid of some of those dependencies.

**ME: Is game development something you genuinely enjoy?**

JW: I enjoy game development because it allows me to express my creative side. Building an app from the ground up allows me to tap into a part of my brain that I don't get to use during my day job. Controlling every aspect of a project from how it looks to how users interact with it to how you get people to buy it is at the same time challenging and rewarding. And there really is no greater joy for a programmer than seeing someone using your app or playing your game with a smile on their face. I've worked on a lot of projects that never saw the light of day, so seeing my friends, family, and especially strangers playing Rustic Citrus and enjoying themselves has been very fulfilling.

**ME: Can you tell us why you chose to develop for the Windows platform first?**

JW: I actually always figured I would build Rustic Citrus for iOS first. iOS has consistently been the platform which generates the most revenue for app developers and I had already done some iOS development with a previous project of mine. However, the issue with the App Store is that it is over-saturated and app discovery is entirely broken. It's next to impossible for a small studio to get an app in the top 25 which is where you have to be if you want your app to generate any substantial amounts of downloads or money. Right around when I started to focus on Rustic Citrus development, Microsoft released Windows 8 and I saw the Windows Store as a huge opportunity. I could get access to hundreds of millions of users on a new operating system with a young app store without a lot of big names to compete against. I was hoping the youth of the Windows Store would allow me to get a foothold there and then I could use that momentum to get into the top 25 on other app stores on platforms.

**ME: How much time did it take to develop Rustic Citrus?**

JW: I don't have an exact count of the number of hours I've been working on Rustic Citrus, but it has definitely been north of 100 hours. I unfortunately don't get to work on it as much as I'd like to since I have to fit time in after fulfilling my duties for my full time job, but I do get to work on it for an hour or two on most days.

**ME: Would you rather have high reviews or a ton of downloads?**

JW: That's a great question. While both are obviously great things to strive for, I would have to say getting high reviews are more important to me because they should lead directly to a ton of downloads. It's of primary importance for me to put out a product which makes people smile and keeps them coming back. That means making the app experience addictive, easy to understand, and crash-free. I feel like I've done that with Rustic Citrus so far and my app rating of around 5 stars has proven that. I know that putting together such a great experience will ultimately lead more people to give it a try and it will garner more downloads. I'm hoping someday the time I've put into making this a first-rate app will lead to a snowball effect in the number of downloads I see.

**ME: So what's next for Rustic Citrus?**

JW: I recently released version 1.1 of Rustic Citrus which adds some new features including 55 achievements which users can earn, the ability to end rounds early instead of waiting for the timer to run out, the ability to reset all your game data, and some miscellaneous bug fixes and performance improvements. The next big thing on my to do list for Rustic Citrus is to add a multiplayer mode where you can play against your friends or against other random players. Once I have that working, I'm going to look to expand to other platforms like Windows Phone, iOS, and Android. I want to get Rustic Citrus into as many people's hands as possible.

 

Big thanks to Jacob for doing this interview with me. It's great to get people and projects like this in front of the rest of us that are working hard to get our apps in the store. If you have Windows 8, you should [download Rustic Citrus](http://apps.microsoft.com/windows/en-us/app/c7f73eae-9de1-48ef-a99d-6a61105d8349) and give it a whirl.