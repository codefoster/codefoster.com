---
title: Super Simple Swipe Sections
categories: []
tags: []
date: 2012-10-02
permalink: swipe
---

Yesteryear we used tabs in UI. The problem with tabs and similar navigation aides is that they demand pixels to tell users about where they _might_ go, whereas, good Windows 8 design tells users about where they _are_.
<!-- xmore -->

If you&#39;re on a page that shows multiple entities or sections or parts or whatever, just hint to the user that there&#39;s more off the page by giving yourself a left margin but cutting content off on the right.

I made a pretty simple way to do this for a Windows 8 app and you&#39;re free to steal it.

Just add this to your default.css...

``` css
/*Swipers*/
.swiper {
    width:100%;
    display: -ms-flexbox;
    -ms-scroll-snap-x: mandatory snapInterval(0%, 80%);
    overflow-x: scroll;
    overflow-y: hidden;
}

.swiper > * {
    box-sizing: border-box;
    width: 80%;
    padding-right:80px;
}

    .swiper > * > h2 {
        margin-bottom: 20px;
    }
```

Then add `class='swiper'` to the main section on your page (the one that has a _role_ of _main_)...

``` xml
<section aria-label="Main content" role="main" class="swiper">
    ...
</section>
```
..

You might want to give you main section the standard 120 pixel left margin like this...

``` css
.myPage section[role=main] {
    margin-left: 120px;
}
```

Then give it contents something like this...

``` xml
<section aria-label="Main content" role="main" class="swiper">
    <div>
        <h2>Section One</h2>
        ...
    </div>
    <div>
        <h2>Section Two</h2>
        ...
    </div>
    <div>
        <h2>Section Three</h2>
        ...
    </div>
    <div></div>
</section>
```

Notice a few things...

*   the swiper&#39;s immediate children can be any type of element (*). I&#39;m using divs in my example.
*   the children will be 80% and have 80% snappoint intervals. This is so that the content from the next page will show up on screen and _hint_ to the user to swipe and see more
*   there is an extra <div></div> at the end. This is necessary for being able to snap to the last section with a swipe gesture
*   each section has a header (h2) and it will automatically have the correct 20 pixels under it

That&#39;s it. I hope it comes in useful to you.