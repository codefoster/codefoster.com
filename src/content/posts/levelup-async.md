---
title: Level Up Your JavaScript Game! - Asynchrony
categories: [JavaScript]
tags: [Node.js,Node,node,js,javascript,ecmascript,promise,promises,async]
date: 2018-02-21 09:30:26
---

> See [Level Up Your JavaScript Game!](/levelup) for related content.

Most any JavaScript application you touch now uses asynchrony, so it's a critical concept although it's not a simple one.

I usually start any discussion on asynchrony by clarifying the difference between _asynchrony_ and _concurrency_. _Concurrency_ is branching tasks out to separate threads. That's not what we're talking about here. We're talking here about _asynchrony_ which is using a single thread more efficiently by basically using the gaps where we were otherwise frozen waiting for a long process.

One of the tough things about asynchrony in JavaScript is all the options that have emerged over time. Options are a double-edged sword. It's both good and bad to have 20 different ways to accomplish a task.

To level up in JavaScript asynchrony, I recommend you learn...

## ...to call a function that returns a promise. ##

This is the most basic thing to understand about promises. How to call a function that returns one and determine what happens when the promise resolves.

To review, calling a regular (synchronous) function goes...

```js
let x = f();
function f() {
    //do something... even if it takes a while
    return "answer";
}
//x = answer
```

And the problem is that if `f` takes a while, then the thread is blocked and you don't get to be more efficient and do work in the meantime.

The solution is returning from `f` with a "place holder" - called a Promise - immediately and then "resolving" it when the work is done (or "rejecting" it if there's an exception). Here's what that looks like...

```js
let x = f().then(() => {
    //do something after the function is done
};

//do something even before the function comes back

function f() {
    //do something that takes a while, but return a promise immediately
}
```

One more thing. When a promise is resolved, it can contain a payload, and in your `.then()` function you can simply define an argument list in your handler function to get that payload...

```js
let x = f().then(payload => {
    //do something... payload is available
});
```

Luckily, a lot of functions already return promises. If you want to read a file using the `fs` module in Node, for instance, you call `fs.readFile()` and what you get back is a promise. Again, it's the simplest case for asynchrony, and here's what that would look like...

```js
const fs = require('fs');
fs.readFile('myfile.txt').then(file => {
    //do something with file
});
//do something even before `fs.readFile` comes back from accessing a file on disk and reading its contents
```

## ...to write a function that passes on a promise.

If the simplest case for asynchrony is calling functions that return promises, then the next step is defining your own function which passes a promise on. Recall the example I used where we wanted to use `fs.readFile`. Well, what if we wanted to refactor our code and put that function call into our own function.

It's important to realize that **it's rarely sensible to create a _sychronous_ function which itself calls an _asychronous_ function**. If your function needs to do something internally that is asynchronous, then you very likely want to make your function itself asynchronous. How? By passing on a promise.

Let's write that function for reading a file...

```js
getFileText('myfile.txt').then(file => {
    //do something with file
})

function getFileText(name) {
    return fs.readFile(name);
}
```

Easy, eh? If `fs.readFile` returns a promise, then we can `return` that promise to our caller. By definition, if our function returns a promise, then it's an asynchronous function.

## ...to write a function that creates and returns a promise.

But what if you want to create an asynchronous function that itself doesn't necessarily call a function that returns a promise? That's where we need to create a new promise from scratch.

As an example, let's look at how we would use `setTimeout` to wait for 5 seconds and then return a promise. The `setTimeout` function in JavaScript (both in the browser and in Node) is indeed asynchronous, but it does not return a promise. Instead it takes a callback. This is an extremely common pattern in JavaScript. If you have a function that needs to call another function that wants a callback, then you need to either keep with the callback pattern (no thank you) or essentially transform that callback pattern into a promise pattern. Let's go...

```js
waitFive().then(() => {
    //do something after 5 seconds
})
//do something immediately... this will execute first

function waitFive() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    });
}
```

See how the first statement in the `waitFive` function is a `return`. That lets you know that function is going to come back with an answer immediately. Within the `new Promise()` call we pass in a handler - a function that takes 2 arguments: `resolve` and `reject`. In the body of our handler, `resolve` and `reject` are not static variables - they're functions, and we call them when we're done, either because things went well or they didn't. It's just super neat that we're able to call them from inside of a callback. This is possible due to the near magic of [JavaScript closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures). 

## ...to chain promises and catch exceptions.
    
You should be sure you understand how promise chaining is done. Chaining is a huge advantage to the promise pattern and it's great for orchestrating global timing concerns in your application - i.e. first I want this to happen and then this and then this.

Here's what a chain looks like...

```js
f()
    .then(() => { /* do something */ })
    .then(() => { /* do something */ })
    .then(() => { /* do something */ })
```

...where each of those handlers that we're passing to the `.then()` functions can have payloads.

There's some wizardry that the `.then()` function will do for us as well. It will coerce the return value of each handler function so that it returns a promise every time! Watch this...

```js
f()
    .then(() => { return "foo"; })
    .then((result) => { /* result = foo */ })
```

Pay close attention to what's happening here. The first `.then()` is returning a string, but we're able to hang another `.then()` off of it. Why? Because `.then()` coerced `"foo"` into a promise with a payload of `"foo"`. This is the special sauce that allows us to chain.

There's a shortcoming with promises here by the way. Let me set it up...

```js
f()
    .then(() => { return "value 1"; })
    .then((value1) => {
        //do something with value1
        return "value2";
    })
    .then((value2) => {
        //PROBLEM: value2 is available, but value 1 is not
    })
```

The unfortunate remedy to this problem is...

```js
let v1;

f()
    .then(() => { return "value 1"; })
    .then((value1) => {
        //do something with value1
        v1 = value1
        return "value2";
    })
    .then((value2) => {
        //value2 is available, and value 1 is available as v1
    })
```

That's a bit hacky, but it's a problem that's solved very elegantly by `async/await` coming up.

## ...to save a promise so you can check with it at any point and see if it’s been resolved.

This is great for coordinating timing in a complex application.

This is a little trick that I use quite a bit, though I don't think it's very common. It's quite cool though and I don't see any drawbacks.

```js
let ready = f();

ready.then(() => { /* do something */ });

...

ready.then(() => { /* do something */ });

...

ready.then(() => { /* do something */ });
```

What I'm doing is saving the result of my function call to a variable and then calling `.then()` on it any time I want throughout my codebase.

You might wonder why this is necessary. Wouldn't the first call be the only one that needs to "wait" for the promise? Actually, no. If you're creating code that must not run until `f()` is done, then you need to wait for it. It's very likely that subsequent references to the promise happen when the promise is already resolved, but that's fine - your handler code will simply run immediately. This just assures that that thing (`f()` in this case) has been done first.

## ...to write an asynchronous function using `async` instead of creating a promise and calling it using `await` instead of `.then()`.

The async/await pattern is one that some clever folks <!-- consider reference --> at Microsoft came up with some years ago in C#. It was and is so great, that it's made its way into other languages like JavaScript. It's a standard feature in the most recent versions of Node.js, so it's ready for you out of the box.

In JavaScript, async and await still use promises. They just make it feel good.

For defining the asynchronous function, instead of...

```js
function f() {
    return new Promise((resolve, reject) => {
        //do something that takes a while
        resolve("result");
    })
}
```

...you do...

```js
async function f() {
    //do something that takes a while
    return "result";
}
```

And the angels rejoice! That's way more understandable code.

Likewise, on the calling side, instead of...

```js
f().then(result => {
    //do something with result
});
```

...you do...

```js
let result = await f();
```

Yay! How great is that.

It seems odd at first, but the statements that come _after_ the line with await do not execute until after `f()` comes back with its answer. I like to mentally envision those statements as being inside of a callback or a `.then()` so I understand what's happening.

As I eluded to before, this solves that nasty little problem we had with the promise calling pattern...

```js
let value1 = await f1();
//do something... value1 is available

let value2 = await f2(value1);
//do something... value1 and value2 are available

async function f1() { return "value 1"; }
async function f2(value1) {
    //do something with value1
    return "value 2";
}    
```

Notice that I was a bit more verbose in that I defined `f2`. I didn't have to, but the code is far more readable and more importantly, `value1` is available not only inside of `f2`, but also between the function calls and after both.

Very cool.

## ...to understand the difference between each of the following lines of code.
    
```js
let x = f;
let y = f();
let z = await f();
```

The differences may not be obvious at first.

The first line makes `x` to be the asynchonous function that `f` is. After the first line executes, you would be able to call `x()`.

The second executes `f()` and sets `y` equal to the resulting promise. After the second line executes, you would be able to use `y.then()` or `await y` to do something after `f()` resolves.

The third executes `f()` and sets `z` equal to the _payload_ of the promise returned by `f()`.

Let me finally add one random tidbit, and that is that you should understand that the `async` operator can be added to a fat arrow function just as well as a normal function. So you may write something like...

```js
setTimeout(async () => {
    let results = await fetch("http://mywebservice.com/api/widgets");
    return results;
})
```

You can't use `await` except inside of a function marked with `async`.

If you find yourself trying to call `await` but you're not in an async function, you could do something like this...

```js
(async () => {
    //use await
})();
```

That simply declares and invokes a function that's marked as async. It's a bit odd, but it works a treat.

That'll do it for asynchrony. Now head back to [Level Up Your JavaScript Game!](/levelup) or move on to the next topic on [arrays](/levelup-arrays).