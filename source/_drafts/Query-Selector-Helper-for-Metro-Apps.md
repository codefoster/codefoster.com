---
title: Query Selector Helper for Metro Apps
tags: []
date: 
---

I wrote a [post](/selectingelements) sometime back  about selecting DOM elements in your Metro apps. I have since written myself a helper method that I find quite useful and perhaps you will too. It looks like this...;

<pre class="brush: javascript; toolbar: false">
function q(query, context) {
    context = context || document;
    var result = context.querySelectorAll(query);
    if (result.length > 1) return Array.prototype.slice.call(result);
    else if (result.length == 1) return result[0];
    else return null;
}</pre>

I just drop it in the global namespace (*handslap*) so I don&rsquo;t have to worry about qualifying it with a namespace prefix. So, more specifically, I just add it outside of the function on the default.js page, and that makes it available to all of the pages in my app.

The original goal was to make it easier to type then things like...;

<pre class="brush: javascript; toolbar: false">
var fredDiv = document.querySelector("div#fred");</pre>

...or...

<pre class="brush: javascript; toolbar: false">
var allDivs = document.querySelectorAll("div");</pre>

But I subsequently decided to combine the selection of single elements and multiple elements. The logic dictates that if multiple results are found, then they are all returned, but if just one is found then that one is returned. Furthermore, you can see that I am turning the NodeList result that comes back in the case of multiple results into a standard JavaScript array using a slice. This way I can use array methods like .map, .filter, etc.

It accepts a context which if it&rsquo;s omitted will default to the _document_ object. If provided, however, then the selection is done below the DOM element specified. Therefore this...;

<pre class="brush: javascript; toolbar: false">
var allDivs = q("div");</pre>

...;will find all div elements in the entire document, but...;

<pre class="brush: javascript; toolbar: false">
var footer = q("div#footer");
var childDivs = q("div", footer);</pre>

...;will find all div elements underneath the div called &ldquo;footer&rdquo;.

Use it if you like it. Happy selecting.

<span style="font-size: xx-small;">Copyright (c) Microsoft. All rights reserved. The code provided in this post is licensed under the </span>[<span style="font-size: xx-small;">MS-Limited Public License</span>](http://msdn.microsoft.com/en-us/cc300389.aspx#P)