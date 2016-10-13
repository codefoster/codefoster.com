---
title: Horizontal Panning
categories: []
tags: []
date: 2001-01-01
permalink: 
---

If you drop a ListView into your HTML page and fill it with data that fills up your page and overflows, what happens to the overflow? The answer is that it gets cut off by the right side of the screen and thus hints to the user to swipe to scroll the rest of the content into view. Easy.

But what if you aren't using a ListView, or what if you have some content that you want to show _next to_ your ListView and you want them to both pan together when the user swipes?

Well, I'm going to tell you.

The answer in short is... <span style="font-size: large;">**overflow-x: scroll**</span>.

And the answer in long follows.

Try this simple HTML.

``` html
<section aria-label="Main content" role="main">
    <div class="sidescroll">
        <p>Now is the time ... his country.</p> 
        ...
        <p>Now is the time ... his country.</p> 
    </div>
</section>
```

The _section_ should already be defined in you app if you started with a project template, so you should only need to define the div. Where I've put ellipses (...) you should add a bunch of text so that this div contains more text than a single screen should hold.

Now add some CSS to make this act the way you want. This should do it...

``` css
.mypage section[role=main] .sidescroll {
    height:600px;
    overflow-x: scroll;
    column-width: 300px;
}
```

(Note that this style rule starts with _.mypage_. If you are using the navigation template, then that is necessary to scope the style rule to this page only and keep it from affecting other pages. If you didn't start with the navigation template or if the style rule isn't working for you, then try simply removing that.)

The magic (well, it's just science actually) line there is _overflow-x: scroll_. If we just used _overflow: scroll_ then the div would try to allow scrolling on both axes. We only want horizontal scrolling though, so overflow-x is the property of choice.

Sometimes you want one element to stay fixed while the rest of the page pans. In that case, you would just drop the element outside of and before this scrolling div. Easy peasy.

That's it. Happy panning!