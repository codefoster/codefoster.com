---
title: Easy Caching in WinJS Apps
categories: []
tags: []
date: 2001-01-01
permalink: easycache
---

I set out the other day to help a developer add some cache functionality for his app.
<!-- more -->

The app is 1Vigor and there's a version for [swimmers](http://apps.microsoft.com/windows/en-us/app/f616e79d-42b6-4acb-bf62-4d99a119c0db), one for [runners](http://apps.microsoft.com/windows/en-us/app/f9d94f63-4ce4-4683-9f06-a1bf1f941e67), and another for learning how to generate peak performance in whatever sport or fitness activity you're doing (not quite ready for the Store). The 1Vigor apps pull content from the 1vigor.com website and provide some great articles for athletes. The authors of the articles are first rate and the amount of content available is impressive too.

The swimming and running apps are already in the store, but if you download them, you'll discover that you'll be required to maintain an internet connection while you fetch your next article to read, since no cache functionality exists. So if you're on a submarine without wifi, you're going to be out of luck. I'm not completely sure, but I don't think that wifi availability on submarines is quite caught up with commercial airlines.

My first thought was that I was going to have to take a very manual approach to caching. I was prepared to enumerate each article and save a copy in local storage or something like that. As it turned out, it was a much easier task.

Here's the only code required to accomplish the task at hand...

``` js
var results = WebData.articles.map(function (a) {
    return WinJS.xhr({ url: a.contentUrl });
});
WebData.articlesCached = WinJS.Promise.join(results);
```

And here's what that does. It starts with the WebData.articles - an array containing objects with the metadata about the articles and including a URL (contentUrl) linking to the HTML of the article from 1vigor.com.

It maps that array to a WinJS.xhr call. If you're not familiar with the .map() function, listen up. The .map() function works for all arrays (because it exists in the prototype for the Array object). When you _map_ an array, you are changing all of its elements to something else.

Let's say you have an array (A) of numbers and you want to create a new array (B) where all of the numbers from A are doubled. You could do that with...

``` js
var B = A.map(function(i) { return i*2; });
```

So, back to the first block of code... the value of the results variable is going to be an array of Promise objects.

You can wait for _all_ of the promises in an array to complete by using WinJS.Promise.join(myArrayOfPromises).

So the articlesCached variable which I hang on the WebData object is going to be a promise that completes when all of the individual calls to the article content are complete.

Now, you might be wondering at this point what I do with the results of those HTTP requests. The answer is that I do _nothing_ with them. I don't need to. GET requests over HTTP are cached by default, so the next time the user launches an article and the system attempts to access its content using the .contentUrl, it essentially says "Hey, I've done this before. I'll just use the results of that last network call instead of doing another one."

And that's all it took.

Not bad, eh?