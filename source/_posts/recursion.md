---
title: Recursion Plain and Simple
categories: []
tags: []
date: 2001-01-01
permalink: recursion
---

I&#39;m not setting out to explain recursion in full detail right now. I just want to do my best to relay the concept.
<!-- xmore -->

Recursion, in simple terms, is logic that depends on itself. I honestly can&#39;t tell you whether it&#39;s the simplest or the most complicated of concepts. It&#39;s sort of both. Let me attempt to explain.

A typical programming function looks like this (in JavaScript)...

``` js
function f(a,b) {
  return a+b;
}
```

It receives some things (a and b) and it returns something (the sum of those). It starts when it is called and it ends when it returns. It&#39;s as simple as that.

But a recursive function is one that calls itself. What?! It&#39;s a little weird. Let&#39;s try this...

``` js
f(1,1);

function f(a,b) {
  return f(a,b); //the function calls itself!
}

//stack overflow!
```

Now, technically this is a recursive function, because it&#39;s calling itself. But it&#39;s not a very good one.

What&#39;s wrong?

Can you tell what&#39;s going to happen? It&#39;s fun. It&#39;s called a _stack overflow_. That is, when we call the function and it calls itself, that causes it to call itself, which causes it to call itself, which causes it to call itself, lather, rinse, repeat. Eventually (rather quickly actually) our system runs out of memory to hold this infinite stack of function calls and it throws an exception.

So, we successfully created a recursive function, but we didn&#39;t limit it in any way. It&#39;s like when you get a microphone too close to a speaker and it forms a feedback loop. Or it&#39;s like when you plug a video camera into a TV and then point it at the TV. Or when you look in parallel mirrors just right. In every case, a somewhat perfect case is fulfilled. The output becomes the input... exactly as it is every iteration. The amplification continues, and you get strange and very extreme results.

Let&#39;s change our function a bit so that instead of adding two numbers together, it simply takes a single number and then continues adding that number to itself minus one until it runs out of numbers (gets to zero). So you should be able to see that we now have a limiting case until we run out of numbers. That&#39;s important.

``` js
f(17);

function f(n){
  return (n - 1 > 0 ? n + f(n-1) : n);
}

//153
```

Notice that the condition inside the function is asking if we reduce n by 1, is that still going to be bigger than zero?, and if it&#39;s not (if n is 1 and thus n - 1 is zero) then we just return n. We don&#39;t call ourselves again. That&#39;s the critical piece. In order to avoid a stack overflow, there has to be some logic in your function that at some point allows the function to complete without calling itself again.

So, recursion obviously works great for finite mathematical operations like my example, but where else might you find this concept in the wild? The answer is _all over the place_. As it turns out, there are quite a lot of use cases. If you have ever worked with a folder structure or perhaps with a tree view control, you&#39;ve likely discovered that recursion can turn hundreds of lines of code into a handful. Any data structure that contains an entity that can be involved as either the parent or child in relationships is inherently recursive. After all, who knows how deep the tree is? Who knows how many levels deep the relationships go?

I hope this helps you wrap your head around the concept of recursion. It&#39;s a foundational one and mastering it gets you one step closer to being a computer scientist.