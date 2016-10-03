---
title: Adding a New Page in Windows 8
tags: []
date: 2016-10-02 16:03:46
---

If you&rsquo;re a veteran of web development, answer this question: how do you add a new HTML page to your web project? You do a right click | Add | New Item&hellip; and then you choose HTML Page, right? Easy enough. Turns out with Windows 8 if you do this you get exactly what you asked for but perhaps not exactly what you expected. Certainly a new HTML file lands in your project and here are the contents:

<font face="Consolas">&lt;!DOCTYPE html&gt;

&lt;html&gt;

&nbsp; &lt;head&gt;

&nbsp;&nbsp;&nbsp; &lt;title&gt;&lt;/title&gt;

&nbsp; &lt;/head&gt;

&nbsp; &lt;body&gt;

&nbsp; &lt;/body&gt;

&lt;/html&gt;</font>

That&rsquo;s HTML by anyone&rsquo;s definition, but it&rsquo;s not going to get you very far in Windows 8 if you&rsquo;re using the standard navigation model.

What you really wanted to do is to add a Page Control. Try Right click | Add | New Item&hellip; and then choose Page Control and you should get more than just an HTML file. You should also get a JavaScript file (.js) and a stylesheet (.css). Furthermore, the HTML file is a bit more robust:

<font face="Consolas">&lt;!DOCTYPE html&gt;

&lt;html&gt;

&lt;head&gt;

&nbsp;&nbsp;&nbsp; &lt;meta charset=&quot;utf-8&quot;&gt;

&nbsp;&nbsp;&nbsp; &lt;title&gt;pagecontrol&lt;/title&gt;

&nbsp;&nbsp;&nbsp; &lt;!-- WinJS references --&gt;

&nbsp;&nbsp;&nbsp; &lt;link href=&quot;//Microsoft.WinJS.0.6/css/ui-dark.css&quot; rel=&quot;stylesheet&quot;&gt;

&nbsp;&nbsp;&nbsp; &lt;script src=&quot;//Microsoft.WinJS.0.6/js/base.js&quot;&gt;&lt;/script&gt;

&nbsp;&nbsp;&nbsp; &lt;script src=&quot;//Microsoft.WinJS.0.6/js/ui.js&quot;&gt;&lt;/script&gt;

&nbsp;&nbsp;&nbsp;

&nbsp;&nbsp;&nbsp; &lt;link href=&quot;pagecontrol.css&quot; rel=&quot;stylesheet&quot;&gt;

&nbsp;&nbsp;&nbsp; &lt;script src=&quot;pagecontrol.js&quot;&gt;&lt;/script&gt;

&lt;/head&gt;

&lt;body&gt;

&nbsp;&nbsp;&nbsp; &lt;div class=&quot;pagecontrol fragment&quot;&gt;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;header aria-label=&quot;Header content&quot; role=&quot;banner&quot;&gt;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;button class=&quot;win-backbutton&quot; aria-label=&quot;Back&quot; disabled&gt;&lt;/button&gt;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;h1 class=&quot;titlearea win-type-ellipsis&quot;&gt;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;span class=&quot;pagetitle&quot;&gt;Welcome to pagecontrol&lt;/span&gt;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/h1&gt;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/header&gt;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;section aria-label=&quot;Main content&quot; role=&quot;main&quot;&gt;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;p&gt;Content goes here.&lt;/p&gt;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/section&gt;

&nbsp;&nbsp;&nbsp; &lt;/div&gt;

&lt;/body&gt;

&lt;/html&gt;</font>

Now you&rsquo;re talkin&rsquo;! There are a number of things in this file that are all but essential to a standard Windows 8 page. Here are a few I&rsquo;d like to point out:

*   References to the .js and .css files that just got created for you too. This promotes an excellent separation of concerns: Structure, Style, and Script. Structure (markup) goes in your .html (and will likely be quite brief), style goes in your .css, and script goes in your .js.
*   A header with a back button and a title which is going to be very important on most Windows 8 pages.
*   Finally, you get a div with a class of &ldquo;pagecontrol fragment&rdquo; and inside that a section with a role of &ldquo;main&rdquo;. These are essential in getting your page to render and behave as you would expect. Experiment with removing either of them and see what you get.

As soon as you&rsquo;ve added this Page Control, make a habit of dragging the .css file to your css folder and the .js file to the js folder.

Remember that although this is all web page based, in most scenarios, you should not be hyper-linking from one page to the next. Not only will that kill Windows&rsquo; ability to keep your structure and help you with everything, but it also jumps you into the web context and you lose your native-ness. Instead use something like the following to get to your new page:

<font face="Consolas">WinJS.Navigation

&nbsp; </font><font face="Consolas">.navigate(&quot;/html/myCoolNewPage.html&quot;, { someCoolKey: someCoolValue });</font>

If you create a simple project starting with the Grid Application template, you&rsquo;ll get a good example of this in action.