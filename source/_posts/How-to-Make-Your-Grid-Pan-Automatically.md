---
title: How to Make Your Grid Pan Automatically
categories: []
tags: []
date: 2001-01-01
permalink: 
---

I got a question at an event a few weeks ago that sounded at first like it was going to implicate a rather complicated answer. In the end, it turned out to be not so bad.

The question was...

**_On the start screen when the user moves his mouse to the edge, the tiles pan automatically. How do I make the grid in my app work just like that?_**

And the answer - or rather _an_ answer is here...

``` js
var timer = null; 
element.querySelector(".groupeditemslist").onmousemove = function (ev) { 
    clearInterval(timer); 
    timer = -1; 
    if (ev.screenX > (document.body.scrollWidth - 50)) 
        timer = setInterval(function () { listView.scrollPosition += 30; }, 1); 
    else if (ev.screenX < 50) 
        timer = setInterval(function () { listView.scrollPosition -= 30; }, 1); 
};
```

Let me unpack that for you.

When the user's mouse is within the grid (that's the _.groupeditemslist_), then check the event argument that our event function received and see what the location of the user's mouse is on the screen (that's _screenX_).

If it is withing 50 pixels of the right side of the page (that's the _document.body.scrollWidth_) then set _timer_ to a new interval that runs a simple function every 1 millisecond. The body of the function that runs is _listView.scrollPosition += 30,_ which you have likely guessed scrolls (pans) to the right by 30 pixels. And the opposite should obviously happen if the user moves his mouse close to the left edge.

<disclaimer>

I wrote this rather quickly and have not tested it thoroughly. It appears to work well and does not have any significant performance impact (even though the interval is a single millisecond). That said - I would highly encourage you to tweak the numbers and see what works best for you. If you come up with a better combination, please leave a comment below.

</disclaimer>

I hope every is having as much fun with this Windows 8 development as I am!

Happy panning.