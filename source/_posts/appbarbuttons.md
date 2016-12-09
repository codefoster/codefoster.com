---
title: Good Design for App Bar Button Placement
categories: [Design]
tags: []
date: 2012-05-21
permalink: appbarbuttons
---

I&#39;ve watched a few developers port their existing apps over to Windows 8.

The first thing they do is drop all of their UI into their new app and run it to see it work. It&#39;s nice to see things work, but Windows 8 is more than just a new API for accessing modern computer hardware. It&#39;s a completely new design for user experience as well. So after you drop all of your buttons into your new app and see it work, you should migrate most of those buttons to the app bar.
<!-- xmore -->

The app bar, for the uninitiated, is the bar that slides up from the bottom of the screen whenever the user swipes up from off screen (and sometimes it appears all on its own). That app bar is nice. It avoids bothering the user by appearing only when the user requests it.

Here are some questions that developers raise when they&#39;re learning to design and develop for Windows 8...

1.  Why can&#39;t I put my buttons on the screen like I always have?
2.  Okay, fine, but which buttons should I put in the app bar and which should remain on the canvas?
3.  Do I put the buttons on the left, the right, or what?
4.  What if they don&#39;t all fit?
5.  How do I control when buttons appear?

I&#39;ll take these one at a time...

## Why can&#39;t I put my buttons on the screen like I always have?

It&#39;s because it&#39;s 2012 now! The modern trend has been to cram as much information into a user&#39;s screen as possible, but we&#39;ve had enough! When I see so may things I cease to see anything. It&#39;s time to take a step back, take a deep breath, and think about what the user is actually doing right now and dedicate every pixel on the screen to it, immersing the user.

Look at the website versus the Metro versions of the Times of India...

![](/files/appbarbuttons_01.png)

![](/files/appbarbuttons_02.png)

Most of the space in the website version is taken up with navigation commands (hyperlinks), which is a good example of an app telling you about &quot;where you might go&quot; instead of telling you where you are and letting the user navigate with the content.

## Okay, fine, but which buttons should I put in the app bar and which should remain on the canvas?

First off, most of the buttons should be in the app bar. It won&#39;t take long for a user to learn that that&#39;s where the interactions are and start to swipe that bar up automatically. Since the app bar is hidden at first (usually), many wonder if their command won&#39;t be apparent enough to the user. Keep in mind, however, that when a user draws up the app bar, they are specifically searching for a command. It takes away the need for discoverability and arguably makes your command more apparent - not less.

Some buttons should be on the canvas though. You would decide to put a button on the canvas when it&#39;s part of the workflow a user is traversing. A case could be made that the workflow itself is the content at that point. If I&#39;m adding products to my cart and checking out, I&#39;m not here to browse content anymore. I&#39;m engaged in the purchasing workflow. If you&#39;re a retailer making a Windows 8 app, I would recommend that you diligently immerse the user in your products and their supporting media to make them love the browsing experience. Then when they decide to checkout, transition them to a slightly more utilitarian mode with canvas buttons and progress feedback.

## Do I put the buttons on the left, the right, or what?

In general, the right side is for global commands, and the left side is for contextual commands. There are exceptions, however.

**Global commands **are those that apply to the entity represented by the current page. If you&#39;re on the _friend_ page, then _add to favorites_ is a global command because it applies to the friend.

**Contextual commands **are those that apply to the entity or entities the user has selected. If you&#39;re on the _my friends_ page, then _add to favorite_ is going to require that you swipe select one or more friends and would then be a contextual command.

One exception to this is when you don&#39;t have any (and aren&#39;t going to have any) contextual commands because you have nothing for the user to select. In this case, the entire app bar can be dedicated to global commands and the left and right sides should be used to separate the most disparate functions. You could, for instance, put your filtering commands on the left and your sort commands on the right.

## What if they don&#39;t all fit?

If you have more commands then you have app bar, then go vertical by combining commands into menus. For instance, if this is what you have on your app bar...

![](/files/appbarbuttons_03.png)

...then combine all of your filters into one menu and your sorts into another. That would bring 9 buttons down to only 4!

## How do I control when buttons appear?

If you&#39;re using HTML/JavaScript for your app, the recommended way to add app bar buttons and control when they appear is to declare them all on the default.html file and then in the .js file for each page just control their visibility. This avoids having to manipulate the DOM each time a page is loaded. There are easy functions for doing this such as...

``` js
appbar.showOnlyCommands(["add-template-item","delete-global"]);
```

If you&#39;re using XAML/C# then (from what [Jerry Nixon](http://www.jerrynixon.com) tells me), you will actually create the app bar buttons on the page where they&#39;ll appear.

Finally, don&#39;t forget to account for snap view. When your app is snapped, you only have room for 5 app bar command buttons. If you have more then they will wrap up to a second row and it will look funny and your users will laugh at you. And that&#39;s not the response you&#39;re likely looking for.

Happy commanding!