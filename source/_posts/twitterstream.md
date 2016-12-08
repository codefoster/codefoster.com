---
title: Taking Twitter by Stream
categories: []
tags: []
date: 2014-11-25
permalink: twitterstream
---

I found a number of examples of how to hook in to Twitter&#39;s Streaming API using JavaScript (via Node.js) and _every example I found was too hard_. Not _really_ hard, but too hard.

I find so much value in simple examples. It&#39;s the whole reason I created [codeShow](http://github.com/codefoster/codeshow).

Listen, bloggers. Most of the time, folks aren&#39;t interested in your entire awesome solution. I know it&#39;s awesome, but you have to consider the time it&#39;s going to take for people to get their heads around a) what it is you&#39;re trying to do (your domain), and b) all of the other stuff you&#39;re doing that they don&#39;t care about.

So, in the interest of keeping it simple, let&#39;s take a look at a simple Node.js app for hooking in to the excellent streaming API by Twitter. Let&#39;s take a look at it in 15 lines of code.

First, a note as to why you&#39;d want to do this. Of course, you could do the atrocious - that is, hit twitter.com and scrape some results. Yuck. Or you could do the classic - that is, use the standard Twitter API and start asking it every 5 seconds if they have anything you&#39;re interested in yet. But why do the atrocious or the classic when you could do the fantabulous? The fantabulous is hooking into the streaming API and then letting your app just sit there waiting for Twitter to call you saying "Hey, we found something you&#39;re interested in."

Here it is... _in its entirety_...

``` js
var twitter = require(&#39;twitter&#39;);

var twit = new twitter({
    consumer_key: &#39;PtSsmBwqSPtc8zQRDJ3GtbhKj&#39;,
    consumer_secret: &#39;CsAsJ8fMDS3EPvhQhLawo8La6MwSiuEm1pAZbEDKDYULQFO513&#39;,
    access_token_key: &#39;176376243-RgYPr0nf9GWNe7ppxU5fLq9KXbmu5m2AT3qB0Box&#39;,
    access_token_secret: &#39;P0V8b94x0Csmw41GubwfI45h9p4gKPNAIWNtMauFtz8vT&#39;
});

twit.stream(&#39;filter&#39;, { track: &#39;dog&#39; }, function (stream) {
    stream.on(&#39;data&#39;, function (data) {
        console.log(data.text);
    });
});
```

The above code has a simple dependency on a rather popular Node.js module called _twitter_. I&#39;m obviously assuming you are familiar with installing Node.js modules here, but that&#39;s pretty easy to pick up.

The magic about the above code is that a) it does what it&#39;s supposed to and b) it doesn&#39;t do anything else.

The documentation for the twitter module is pretty sparse, but you don&#39;t need to know much about it. You really need the documentation for the Twitter Streaming API. That will teach you what a _filter_ type stream is, how to add a search term as a _track_, and how to handle the _data_ that is returned.

That&#39;s all for now.

_(and yes, those keys are obfuscated :)_