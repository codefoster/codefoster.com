---
title: Super Simple Swipe Sections
tags: []
date: 2016-10-02 16:03:46
---

Yesteryear we used tabs in UI. The problem with tabs and similar navigation aides is that they demand pixels to tell users about where they _might_ go, whereas, good Windows 8 design tells users about where they _are_.

If you&rsquo;re on a page that shows multiple entities or sections or parts or whatever, just hint to the user that there&rsquo;s more off the page by giving yourself a left margin but cutting content off on the right.

I made a pretty simple way to do this for a Windows 8 app and you&rsquo;re free to steal it.

Just add this to your default.css&hellip;

<pre class="brush: css;">
/*Swipers*/
.swiper {
    width:100%;
    display: -ms-flexbox;
    -ms-scroll-snap-x: mandatory snapInterval(0%, 80%);
    overflow-x: scroll;
    overflow-y: hidden;
}

.swiper &gt; * {
    box-sizing: border-box;
    width: 80%;
    padding-right:80px;
}

    .swiper &gt; * &gt; h2 {
        margin-bottom: 20px;
    }</pre>

Then add class=&rdquo;swiper&rdquo; to the main section on your page (the one that has a _role _of _main_)&hellip;

<pre class="brush: xml;">
&lt;section aria-label=&quot;Main content&quot; role=&quot;main&quot; class=&quot;swiper&quot;&gt;
    ...
&lt;/section&gt;</pre>
..

You might want to give you main section the standard 120 pixel left margin like this&hellip;

<pre class="brush: css;">
.myPage section[role=main] {
    margin-left: 120px;
}</pre>

Then give it contents something like this&hellip;

<pre class="brush: xml;">
&lt;section aria-label=&quot;Main content&quot; role=&quot;main&quot; class=&quot;swiper&quot;&gt;
    &lt;div&gt;
        &lt;h2&gt;Section One&lt;/h2&gt;
        ...
    &lt;/div&gt;
    &lt;div&gt;
        &lt;h2&gt;Section Two&lt;/h2&gt;
        ...
    &lt;/div&gt;
    &lt;div&gt;
        &lt;h2&gt;Section Three&lt;/h2&gt;
        ...
    &lt;/div&gt;
    &lt;div&gt;&lt;/div&gt;
&lt;/section&gt;</pre>

Notice a few things&hellip;

*   the swiper&rsquo;s immediate children can be any type of element (*). I&rsquo;m using divs in my example.
*   the children will be 80% and have 80% snappoint intervals. This is so that the content from the next page will show up on screen and _hint_ to the user to swipe and see more
*   there is an extra &lt;div&gt;&lt;/div&gt; at the end. This is necessary for being able to snap to the last section with a swipe gesture
*   each section has a header (h2) and it will automatically have the correct 20 pixels under it

That&rsquo;s it. I hope it comes in useful to you.

<font size="2">Copyright (c) Microsoft. All rights reserved. The code provided in this post is licensed under the </font>[<font size="2">MS-Limited Public License</font>](http://msdn.microsoft.com/en-us/cc300389.aspx#P)