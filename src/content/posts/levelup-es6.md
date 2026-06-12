---
title: Level Up Your JavaScript Game! - Other ES6 Language Features
categories: [JavaScript]
tags: [Node.js,Node,node,js,javascript,ecmascript,promise,promises,async,es6,destructuring,spread operator]
date: 2018-02-21 09:31:08
---

> See [Level Up Your JavaScript Game!](/levelup) for related content.

Sometimes it takes a while to learn new language features, because many are semantic improvements that aren't absolutely necessary to get work done. Learning new features right away though is a great way to get ahead. Putting off learning new features leaves you lagging the crowd and constantly feeling like you're catching up. I've noticed that junior developers often know more modern language features than senior developers.

There are quite a few language features that were introduced in ES5 and ES6, and you'd be well off to learn them all! Certainly, though, look into at least the ones I'm going to talk about here. I recommend you learn...

## ...to effectively use the object and array spread operators.

From [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax): "Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected."

> The spread operator is an ellipsis (`...`), but don't confuse it with the pre-existing rest operator (also an ellipsis). The rest operator is used in the argument list of a function _definition_. The spread operator on the other hand is used... well, I'll show you.

Think of the spread operator's function as breaking the elements of an array (or the properties of an object) out into a comma delimited list. So `[1,2,3]` becomes `1,2,3`. The _array_ spread operator is most helpful for either passing elements to a function call as arguments or constructing a new array. The _object_ spread operator is most helpful for constructing or merging objects properties.

If you have an array of values, you can pass them to a function call as separate arguments like this...

```js
myFunction(...[1,2,3]);
//equivalent to myFunction(1,2,3)
```

If you have two objects - A and B - and you want C to be a superset of the properties on A and B you do this...

```js
let C = {...A, ...B};
```

Therefore...

```js
{...{"name":"Sally"},...{"age":10}}
//{"name":"Sally", "age":10}
```
## ...to get into the habit of using destructuring where appropriate.
Destructuring looks like magic when you first see it. It's not just a gimmick, though. It's quite useful.

Destructuring allows you to assign variables (on the left hand side of the assignment operator (`=`)) using an object or array pattern. The assignment will use the pattern you provide to extract values out of an object or array and put them where you want them.

```js
let {name,age} = {name:"Sally",age:10};
//name == "Sally"
//age == 10
```

That's a lot better than the alternative...

```js
let person = {name:"Sally",age:10};
let name = person.name;
let age = person.age;
```

It works with nested properties too...

```js
let {name,address.zip:zip} = {name:"Sally",age:10,address:{city:"Seattle",zip:12345}};
//name == "Sally"
//zip == 12345
```

It works with arrays too...

```js
let [first,,third] = ["apple","orange","banana","kiwi"]
// first == "apple"
// third == "banana"
```

Destructuring is handy when you've fetched an object or array and need to use a subset of it's properties or elements. If your webservice call returns a huge object, destructuring will help you pull out just the parts you actually care about.

Destructuring is also handy when creating _mixins_ - objects that you wish to sprinkle functionality into by adding certain properties or functions.

Destructuring is also handy when you're manipulating array elements.

## ...to use template literals in _most_ of your string compositions.

I recommend you get in the habit of defining string literals with the backtick (`) operator. These strings are called _template literals_ and they do some great things for us.

First, they allow us to line wrap our string literal without using any extra operators. So as opposed to the existing method...

```js
let pet = "{" +
    "name:\"Jim\"," +
    "type:\"dog\"," +
    "age:8" +
"}"
```

...we can use...

```js
let pet = `{
    name:"Jim",
    type:"dog",
    age:8
}`
```

Elegant!

## ...to understand the nuances of lambda (=>) functions (aka fat-arrow functions).

And it looks like I've saved one of the best for last, because lambdas have so dramatically increased code concision. Not to overstate it, but lambda functions delight me.

I was introduced to lambda functions in C#. I distinctly remember one day in particular asking a fellow developer to explain what they are and when you would use one. I distinctly remember not getting it. Man, I've written a lot of lambda functions since then!

The main offering of the lambda is, in my opinion, the concision. Concise code is readible code, grokkable code, maintainable code.

They don't replace standard functions or class methods, but they mostly replace anonymous functions in case you're familiar with those. I very rarely use anonymous functions anymore. They're great for those functions you end up passing around in JavaScript, because... well, JavaScript. You use them in scenarios like passing a callback to an asynchronous function.

Allow me to demonstrate how much more concise a lambda function is.

Here's a call to that readFile function we were using in an earlier post. This code uses a pattern where functions are explicitly defined before being passed as callbacks. This is the most verbose pattern.

```js
fs.readFile('myfile.txt', readFileCallback);

function readFileCallback(contents) {
    //do something with the contents
}
```

Now let's convert that function an anonymous function to save some lines of code. This is recommended unless of course you're paid by the line of code.

```js
fs.readFile('myfile.txt', function(contents) {
    //do something with the contents
});

```

Notice that the function name went away. I for one strongly dislike the first pattern. When a callback function is only used once, I feel like it belongs inline with the function call. If of course, you're reusing a function for a callback then that's a different story.

Now let's go big! Or small, rather. Let's turn our anonymous function into a lambda.

```js
fs.readFile('myfile.txt', txt => {
    //do something with the txt
})
```

I love it! Notice, we were able to do away with the `function` keyword altogether and we specified it's argument list (in this case only a single argument) on its own. Notice too that I called that argument `txt`. I could have, of course, kept the name `contents`, but I tend to use short (often only a single letter) arguments in lambda functions to amplify the brevity. Lambda functions are very rarely complex, so this works out well.

The loss of the function name and keyword saved some characters, but lambda functions get even shorter. If a lambda contains only a single expression, the curly braces can be dropped. The expression in this case becomes the return value of the lambda.

To illustrate, let me use a new example - this one from [my post on arrays](/levelup-arrays) in this series...

```js
let numbers = [1,2,3,4,5,6];
let smallNumbers = numbers.filter(n => n <= 3);
```

In this example, `n => n <= 3` is a complete lambda function. I know, concise right?! This example illustrates the value of the single letter arguments and also introduces you to the expression syntax. The _body_ of the lambda is `n <= 3`. That's an _expression_. It's not a statement such as...

```js
let n = 3;
```

And it's not a block of statements such as...

```js
{
    let m = 3;
    let n = 4;
    let o = 5;
}
```

...and like I said, when the body of your lambda is a simple express, you can drop the curly braces and the expression becomes your return value.

So in the example, the `.filter()` function wants a function which evaluates to `true` or `false`. Our expression `n <= 3` does just that, and returns the result.

There are two caveats that I'll draw out.

First, if you have 1 argument in your lambda function, you do not need parenthesis around the argument list. In our previous example, `n => n <= 3` is a good example of that. If you have 0 arguments or more than 1 argument, however, you do. These are all valid...

```js
() => console.log('go!') //0 arguments
x => x * x //1 argument
(a,b) => a + b //2 arguments
(prefix, firstName, lastName) => `${lastName}, ${prefix} ${firstName}` //3 arguments
```

> If you use TypeScript, you may notice that the presence of a type on a single argument lambda function requires you to wrap it with parenthesis as well, such as `(x:number) => x * x`.

The second caveat is when your lambda returns an expression, but that expression is an object literal wrapped in curly braces (`{}`). In this case, the compiler confuses your intention to return an object with an intention to create a statement block.

This, then, is _not_ valid...

```js
let generatePerson = (first,last) => {name:`${first} ${last}`}
```

To direct the compiler just do what you always did in complex mathematical statements in high school - add some more parenthesis! We could correct this as so...

```js
let generatePerson = (first,last) => ({name:`${first} ${last}`})
```

And there's one more thing about lambdas that you should know. Lambdas have a feature to remediate a common problem in JavaScript anonymous functions - the dreaded `this` assignment.

Anonymous functions (and named functions) in JavaScript are Objects, and as such they have a `this` operator that references them. Lambda functions do not. If you use `this` in a lambda function, chances are the sun will keep shining and the object you intended to reference will be referenced. No more `_this = this` or `that = this` or whatever else you used to use everywhere.

That'll do it for arrays, and in fact that'll do it for this series. If you jumped here from a search, headback to [Level Up Your JavaScript Game!](/levelup) to see the rest of the content.

Thanks for reading and happy hacking!