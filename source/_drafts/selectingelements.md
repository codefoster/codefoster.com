---
title: Selecting Elements in a Windows 8 HTML App
categories: []
tags: []
date: 2012-03-15
permalink: selectingelements
---

[![Windows 8 Logo](http://codefoster.blob.core.windows.net/site/image/3aa0b63f9bfe4a7aa30a126c29e30eac/selectingelements_01_1.jpg "12950-windows-_article")](http://codefost.w05.winhost.com/image.axd?picture=Windows-Live-Writer/e0bf766857da/077C1324/12950-windows-_article.jpg)

In antiquity, I selected DOM objects on my HTML pages by using the [document.getElementById](http://msdn.microsoft.com/en-us/library/ie/ms536437(v=vs.85).aspx) method, and I always hated it. I hated it because it was one of my very few options for find the element I wanted and it was so narrow. So it was a great breakthrough to me to see how it worked in the [jQuery](http://jquery.com/) library. CSS selectors are an awesome way to specify exactly which elements I want whether it's one or many.

So when I saw my first Windows 8 HTML/JS example and it was using getElementById I panicked some. I didn't want to go back in time! My first thought was "I don't want to use this." My second thought was "Actually I do, but can I use jQuery?" (the answer to which is yes). And finally, after some research, I realized that even without the aid of jQuery we're in good shape thanks to some functions built into WinJS. There are a few though so I want to just enumerate what we've got.

## The JavaScript Way

Of course, you can still use document.getElementById, but that always makes me feel like I'm regressing. :)

So first, we have the JavaScript functions **querySelector** and **querySelectorAll**. These are part of the W3C recommendations, and show up as part of the JavaScript language. You can read extensively about the W3C recommendation [here](http://www.w3.org/TR/selectors-api/).

querySelector is the single and querySelectorAll is the plural. If you know that you want a single element (even if there are multiple that match your query) then use the former, and if you know your query will be returning more than one then use the latter.

One thing to note about these JS functions is that they exist both on the <span style="text-decoration: underline;">document object as well as on the <span style="text-decoration: underline;">element object. So, we can query the document to find all matching results in the entire document, or we can just query a single element to find all objects under it. Keep in mind also, that you can enter multiple CSS selectors in the query that you pass in. Just separate them with commas and the query will be performed with a logical "or" operation to give you the union of all of your queries.

``` js
var myDiv = document.querySelector('#myDiv'); var allDivs = document.querySelectorAll('div');
```

The result of the singular querySelector function is a DOM element. The result of the plural querySelectorAll function is a [staticNodeList](http://msdn.microsoft.com/en-us/library/ie/dd347147(v=vs.85).aspx).

## The WinJS Way

Next, we have the methods that WinJS provides for selecting elements. They are in the WinJS.Utilities namespace and they are **id()** and **query()**. These WinJS functions actually just wrap the formerly mentioned querySelector and querySelectorAll functions, so keep this in mind. You might ask why we would use them if they are just wrappers for the JS functions. The answer is that their return result is a QueryCollection object that has all sorts of friendly functions hanging off making certain operations on a collection of elements quite easy.

The id and query functions work mostly as you might expect. id selects an element by its id, but you do <span style="text-decoration: underline;">not specify a hash symbol on the query. The query function, then, takes a query that you're expecting to return multiple elements and the query syntax for it is the same syntax that querySelectorAll uses, so anything that works in one works in the other.

``` js
var u = WinJS.Utilities; var myDiv = u.id('myDiv'); var allDivs = u.query('div');
```

The result in both cases here is a [QueryCollection](http://msdn.microsoft.com/en-us/library/windows/apps/br211878.aspx).

## The jQueryWay

Finally, if you want to bring a jQuery library into your project then the terse $(&lsquo;<query>') selector syntax will also do just fine.

``` js
var myDiv = $('#myDiv'); var allDivs = $('div')
```

The result of these jquery function calls is (like practically all jQuery functions) another [jQuery](http://api.jquery.com/jquery/) object. If you want the actual DOM element for the singular call, use the [get](http://api.jquery.com/get/) function, and if you want an array of all of the DOM elements for the plural call, use the [toArray](http://api.jquery.com/toArray/) function.

## Conclusion

So you've seen that there are, as always, many ways to skin a cat. The deciding factors regarding which to use in my opinion are:

*   What result type works best for you? Do you want an actual DOM element (or list of DOM elements) or would a QueryCollection or jQuery object give you more functionality?
*   Is your app exclusively on the Windows 8 client platform? If so then you're certainly going to want a dependency on the WinJS library and thus the WinJS method might be your best bet.
*   Have you already decided to take a dependency on the jQuery library? Are you already really familiar with using jQuery?

It's good to have choices. Happy selecting.