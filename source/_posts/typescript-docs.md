---
title: TypeScript for Documentation
categories: [JavaScript]
tags: [developer-joy,documentation,types,typescript]
date: 2018-04-13
---

TypeScript is wonderful for a variety of reasons and there’s one I want to hightlight right now.

TypeScript allows a developer or team to sprinkle types in to their codebase. These types make it much easier for your IDE to tell you you’re doing something you don’t intend to do in your logic. That’s excellent.

But the types also document your codebase well.

Here’s a function without types…

``` js
function sum(n1, n2) {
    return n1 + n2;
}
```

And then with types…

``` ts
function sum(n1:number,n2:number):number {
    return n1 + n2;
}
```

And the obvious advantage is that at a glance, I as a human can see what kinds of variables this function is expecting and what it’s going to give me back.

Additionally, my IDE can inspect these types and give me some information about the expected parameter types without even make the journey to the source code to look…

![](/files/typescript-docs_01.png)

I can take that a step further and add some comments to the source and get even better descriptions.

![](/files/typescript-docs_02.png)

And now I can be more awesome.