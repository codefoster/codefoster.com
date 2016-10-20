---
title: Query Your DOM
categories: []
tags: []
date: 2001-01-01
permalink: query
---

Your HTML describes the structure and sequence of your document. It's the starting point for your UI. But it's just the starting point. Things change. Items get added, removed, or moved. Styles change. Dialogs appear and disappear, and the user touches things and drags them around. All (or at least most) of this interaction happens in JavaScript where you can instruct your document in the language of code to react to your user and do what you command.
<!-- more -->

Before you can move something, remove something, or add to something, though, you'll need to select it. That's what I'm going to talk about here. I'm going to talk about selecting one or more elements from your document object model (DOM) from JavaScript so you can work with them. This is called _querying the DOM_.

It used to be rather difficult to query the DOM. When I was a kid I not only had to walk uphill to school both ways, but I also had to use rudimentary and often proprietary JavaScript functions for getting access to in my HTML. The popular getElementById() was helpful but it only ever got one thing at a time. Usually, I resorted to looping through document.all() and asking questions about each and every element on the page to see if it was in my reticle for the change I had in mind.

Today, things are different. When I first met jQuery and started selecting from the DOM using the CSS selector syntax I already knew, it was love at first $. When I started Windows 8 development using HTML/JS I remember thinking "okay... but only if I get to take jQuery in with me". But since I've hardly used it. The reason is that ECMAScript 5 introduced querySelector() and querySelectorAll(). These yumful functions take CSS queries just like the jQuery selector syntax and return (respectively) a single DOM element or a list of nodes.

Besides these selection methods, WinJS also added a couple of functions (that just wrap querySelector and querySelectorAll BTW). They are id() and query() and they're in the WinJS.Utilities namespace.

I talk all about of these selection methods in a previous post called [Selecting Elements in a Windows 8 HTML App](/post/2012/03/15/Selecting-Elements-in-a-Windows-8-HTML-App.aspx).

I liked using querySelector and querySelectorAll because they were the closest to the metal being right in the JavaScript language, but there was one thing I didn't like about them. querySelector returns a DOM element... that's fine. querySelectorAll returns a node list, though and I usually want to work with an array so I can use all of the ECMAScript 5 array functions. So I wrote a wrapper that I simply call q() which stands for query. It's short and has a little bit of abstract functionality that I like, and I wrote a post about it too. It's called [Query Selector Helper for Metro Apps](/q). But I have since upgraded the helper function to allow the caller to force the result of the call to be an array. That way, even if it is only a single result that is returned, it will return it as an array of one, so the caller doesn't have to have switching logic.

I keep the latest version of this function in my ocho.js library which is part of my [codeSHOW](http://codeshow.codeplex.com/) project on CodePlex. So to get the latest version of the helper, simply go to [http://codeshow.codeplex.com](http://codeshow.codeplex.com), go to the Source Code tab, choose Browse, and then browse to /codeSHOW/js/ocho.js.

Enjoy!