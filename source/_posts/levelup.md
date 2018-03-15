---
title: Level Up Your JavaScript Game!
categories: [JavaScript]
tags: [Node.js,Node,node,js,javascript,ecmascript,promise,promises,async]
date: 2018-02-21 09:14:17
---

A fellow developer recently expressed a sentiment I've heard and felt many times myself.

"There are a lot of JavaScript concepts I know, but I don't think I could code them live in front of you right now."

It's one thing to understand the concept of a _Promise_ <!-- link --> or _destructuring_ <!-- link --> in JavaScript, but it's quite another to be able to pull the code out of your shiver without a web search or a copy/paste.

There are _so many_ concepts like this for me as a developer. They're my gaps - the pieces I _know_ are missing. I know they won't take long to fill, but it's just a matter of finding and making the time. My strategy is to...

1. **Record them**
    As I become aware of these gaps, I write them on my task list. I may not get to them right away, and that's fine. When I have a spare hour though, I turn to these items in my task list and then off I go, learning something new.

1. **Write into permanent memory storage**
    Computers can save things permanently with a single write. For me, it takes 4 or 5 writes. For example, a long time ago, I wanted to learn how to write a super basic web server in Node.js - from memory. So I looked it up and found something like this...

    ```js
    var html = require('html');
    html.createServer((req,res) => {
        res.end('hi')
    }).listen(3000)
    ```

    I found it, tried to memorize it, tried to write it from memory, failed, looked it up, and tried again as many times as it took until I could. Now I have it. I can whip it up in a hurry if I'm trying to show basic Node concepts to someone.

In counseling my friend on what JavaScript concepts would be beneficial to practice, I decided to compose this rollup blog post called _Level Up Your JavaScript Game!_ to share more broadly.

There are 5 things I recommend you not only grok generally, but know deeply and can whip up on request...

1. [Promises and Async/Await](/levelup-async)
1. [Manipulating an array](/levelup-arrays)
1. [Regular Expressions](/levelup-regex)
1. [ES6 Module](/levelup-modules)
1. [Other ES6 Language Features](/levelup-es6)