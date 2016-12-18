---
title: The Simplest Node Website
categories: [Node.js]
tags: [web, website, webserver, express, node, node-js, node.js]
date: 2015-07-10
---

I&#39;ll start with the code...

``` js
require('express')().get('/',function(req,res){

    res.send('hello world');

}).listen(3000);
```

There it is. The simplest Node.js webserver/website. Three lines of code.

I know I&#39;ve got it a bit mungled together. I&#39;m not recommending this code. Just having fun.

Notice that I&#39;m hanging a `()` directly off of the `require('express')`. The require statement returns a function. This is one of the most popular of the [Node module patterns](http://bites.goodeggs.com/posts/export-this/). Since it returns a function, hanging parenthesis off of it executes the function.

The execution of the function returns an express app, and the app supports chaining like jQuery or LINQ, so you do a `.get()` and then a `.listen()` and those are both methods of an express app.

The `.get()` creates the root route (`'/'`)  and then allows you to provide a function to handle that route. The function does a simple hello world.

The `.listen()` starts up the engine.

After creating a JavaScript file called app.js with this content in it, just type `node app`, and you should get zero feedback. But then hit `http://localhost:3000` in your browser of choice and you&#39;ll get the reassuring &quot;hello world&quot;.

By the way, if you&#39;re using ES2015, that gets even shorter...

`require('express')().get('/',(req,res)=>res.send('hi')).listen(3000);`