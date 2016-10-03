---
title: 'msMatchMedia: programmatic access to media queries'
tags: []
date: 2016-10-02 16:03:46
---

If you throw down with a media query like this&hellip;

<pre class="brush: css;">
@media screen and (-ms-view-state: fullscreen-portrait) {
    p { color: purple; }
}</pre>

&hellip;then you&rsquo;re going to get purple text in all of your paragraphs, right?

Well, what if you wanted to check to see if you were in fullscreen-portrait from your code so you could do something fancy. Of course, you get some help from Windows with that. If you&rsquo;re using the _navigation_ project template then you can implement an _updateLayout _method when you define a page and one of the parameters you&rsquo;ll receive is _viewState_.

But you might not be in the updateLayout method and you might want to check some other media query property such as whether the screen is at least 600px wide.

That&rsquo;s where you may benefit from accessing media queries programmatically.

To execute the media query above from could you can do this&hellip;

<pre class="brush: js;">
if (msMatchMedia(&quot;(-ms-view-state: fullscreen-portrait)&quot;).matches) {
    //do something if we&#39;re in portrait
}</pre>

This _msMatchMedia_ method hangs off of the window object.

I know that there are usually properties in the DOM API that will allow you to discover these things about your environment, but if media queries are your thing and you can solve the issue that way, then there you go.