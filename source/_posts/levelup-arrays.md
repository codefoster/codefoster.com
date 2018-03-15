---
title: Level Up Your JavaScript Game! - Arrays
categories: [JavaScript]
tags: [Node.js,Node,node,js,javascript,ecmascript,arrays,collections]
date: 2018-02-21 09:30:47
---

> See [Level Up Your JavaScript Game!](/levelup) for related content.

Working with JavaScript arrays is practically an everyday task.

Arrays are simply collections of things, and we often find need to perform some function to each of their items or perhaps to subsets of their items.

Years ago, ES5 introduced a bunch of new array functions that you should be or become familiar with. The three I'll highlight are filter, map, and reduce.

To level up in JavaScript arrays, I recommend you learn...

## ...to use the `.filter()` function to reduce an array down to a subset.

This is not a difficult topic, but it's an important one. If you have a set of numbers `[1,2,3,4,5,6]` and you'd like to limit it to numbers less than or equal to 3, you would do...

```js
let numbers = [1,2,3,4,5,6];
let smallNumbers = numbers.filter(n => n <= 3);
```

Take note of what the fact that `.filter()` hangs off of an array. It is in fact a function on `Array.prototype` and is thus available from every array. So `[].filter` is valid.

`.filter()` asks for a function with a single argument that represents a single item in the array. The `.filter()` function is going to execute the function you give it on _each and every item_ in the array. If your function returns `true`, then it's going to include that item in the resulting set. Otherwise it won't. In the end, you'll have a subset of the array you called `.filter()` on.

This brings up something I see a lot in folks that have been programming a while.

Imagine this common pattern...

```js
let people = [
    {id:1, name:"Jill", age:34, gender:"female"},
    {id:2, name:"John", age:42, gender:"male"},
    {id:3, name:"Jane", age:19, gender:"female"},
    {id:4, name:"Jake", age:31, gender:"male"},
];
for(let i = 0; i < people.length; i++) {
    if(people[i].age < 40 && people[i].gender == "female") {
        fetch("http://mywebservice.com/api/ordersByPeopleId/" + people[i].id)
            .then((results) = {
                //do something with results for Jill and Jane
            });
    }
}
```

What's wrong with that code? Well, it works, so there's nothing _functionally_ wrong with it. It's too verbose though. If we use some array functions, we could drastically increase the readibility and maintainability. Let's try...

```js
people.forEach(p => {
    if(p.age < 40 && p.gender == "female") {
        fetch("http://mywebservice.com/api/ordersByPeopleId/" + people[i].id)
            .then((results) = {
                //do something with results for Jill and Jane
            });
    }
})
```

Here, we replaced the `for` loop with a `forEach` array function that we hang right on our array. This allows us to refer, inside our loop, to simply `p` instead of `people[i]`. I love this. I find `for` loops difficult and unnatural to write.

>Some argue against using single-letter variables like `p` and would prefer to call that something like `person`. Do what makes you happy and works well with your team, but I like single-letter variables inside of fat-arrow functions where concision is king.

Lets do another round...

```js
people
    .filter(p => p.age < 40 && p.gender == "female")
    .forEach(p => {
        fetch("http://mywebservice.com/api/ordersByPeopleId/" + people[i].id)
            .then((results) = {
                //do something with results for Jill and Jane
            });
    })
```

Here, we pulled the `if` statement out of our loop and added it as a `.filter()` function before our `.forEach()` function in a chain of array functions. This effectively separates the logic we use for filtering with the logic we which to take effect on our subset of people - a very good idea.

I might even take the separation of `.filter()` a step further and do...

```js
people
    .filter(p => p.age < 40)
    .filter(p => p.gender == "female")
    .forEach(p => {
        fetch("http://mywebservice.com/api/ordersByPeopleId/" + people[i].id)
            .then((results) = {
                //do something with results for Jill and Jane
            });
    })
```

To me, that's more clear.

## ...to use the `.map()` function to transform elements in an array.

Think of arrays, for a second, like you do database tables. An array entry is analogous to a database table's row, and an array property is analogous to a database table's column.

In this analogy, the `.filter()` function reduces the _rows_, and the `.map()` function which I'd like to talk about now reduces (potentially) the _columns_ - more generally, it _transforms_ the element.

That transformation is entirely up to you and it can be severe. You might do something simple like pull a person's name property out because it's the only one you're concerned with. You might just as well do something more complex like transform each person to a web service call and the resulting promise. Let's try that with our previous code...

```js
let orderPromises = people
    .filter(p => p.age < 40)
    .filter(p => p.gender == "female")
    .map(p => fetch(`http://mywebservice.com/api/ordersByPeopleId/${p.id}`)
    })
```

Notice that now, each of the females under 40 is fetched from a webservice. The `fetch()` function returns a promise, so each array item is _transformed_ from a person object to a promise. After the run, `orderPromises` is an array of promises. By the way, you could then execute code after all orders have been retrieved, using...

```js
let ordersByPerson = await Promise.all(orderPromises);
//do something with ordersByPerson
```

## ...to use reduce to turn an array into some scalar value.

If you really want to be a JavaScript ninja, don't miss the `.reduce()` array function and it's zillion practical uses!

As opposed to `.map()` which acts on each element in an array and results in a new array, `.reduce()` acts on each element in an array and results in a scalar object by _accumulating_ a result with each step.

For example, if you have an array of orders and you want to calculate sales tax on each order based on total and location, you would use `.map()` to turn `arrayOfOrders` into `arrayOfOrdersWithSalesTax` (start with an array and end with an array).

```js
let arrayOfOrdersWithSalesTax = arrayOfOrders
    .map(o => ({...o, salesTax: calculateSalesTax(o.total,o.location) }));
```

&nbsp;

>The `.map()` function in the preceding example uses an _object spread operator_ (...) to tack another property onto each order item. You can read more about the spread operator in my [Level Up Your JavaScript Game! - ES6 Features](/levelup-es6) post.

If, however, you wanted to calculate the total sales tax for all orders, you would use `.reduce()` to turn `arrayOfOrders` into `totalSalesTax` (start with an array and end with a scalar).

```js
let totalSalesTax = arrayOfOrdersWithSalesTax
    .reduce((a,o) => { a += calculateSalesTax(o.total, o.location); }, 0);
```

It's not immediately apparent how that reduce function works, so let me walk you through it.

The `.reduce()` function asks for a function with 2 arguments - an _accumulator_ which I'm calling `a` and a _current_ which I'm calling `o` because I know that my current item on each loop is actually an order. This makes it clear to me in my function that `o` means order. Finally, the reduce function itself takes a second argument - the initial state. In my sample, I'm using 0. Before we've added up any sales tax, our total sales tax should be 0, right?

The function you pass in to `.reduce()` then executes for each item in the array and by our definition, it calculates the sales tax and adds (or _accumulates_) the result to the `a` object. When the `.reduce()` function has completed its course, it returns the value of `a`, and my code saves that in a new local variable calle3d `totalSalesTax`.

Pretty cool, eh?

Let me be clear that I said that `.reduce()` turns an array into a scalar, but that scalar can most anything you want including a new array.

That'll do it for arrays. Now head back to [Level Up Your JavaScript Game!](/levelup) or move on to the next topic on [regular expressions](/levelup-regex).