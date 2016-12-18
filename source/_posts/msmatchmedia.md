---
title: msMatchMedia - programmatic access to media queries
categories: [HTML/CSS]
tags: []
date: 2012-08-25
---

If you throw down with a media query like this...

``` css
@media screen and (-ms-view-state: fullscreen-portrait) {
    p { color: purple; }
}
```

...then you&#39;re going to get purple text in all of your paragraphs, right?

Well, what if you wanted to check to see if you were in fullscreen-portrait from your code so you could do something fancy. Of course, you get some help from Windows with that. If you&#39;re using the _navigation_ project template then you can implement an _updateLayout_ method when you define a page and one of the parameters you&#39;ll receive is _viewState_.

But you might not be in the updateLayout method and you might want to check some other media query property such as whether the screen is at least 600px wide.

That&#39;s where you may benefit from accessing media queries programmatically.

To execute the media query above from could you can do this...

``` js
if (msMatchMedia("(-ms-view-state: fullscreen-portrait)").matches) {
    //do something if we're in portrait
}
```

This _msMatchMedia_ method hangs off of the window object.

I know that there are usually properties in the DOM API that will allow you to discover these things about your environment, but if media queries are your thing and you can solve the issue that way, then there you go.