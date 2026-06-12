---
title: A Simple Brain
categories: [Machine Learning]
tags: [ml, ai, dnn, regression, supervised, brain, brain.js]
date: 2018-03-26
---

I'm not (yet) an expert in machine learning, but like so many I recognize that it's an incredibly integral part of our future.

Right now, most data insights are the result of some significant effort - a lot of data, a lot of training, and perhaps a significant amount of time spent by data scientists. 

I anticipate that insights are going to come not only out of these large projects, but out of the small workflows as well. For example, your average web developer may tend to create some marketing information and some web forms online, but in the future, they'll also apply some machine learning.

I have been dabbling with [Brain.js](https://github.com/brainjs/brain.js) lately, and I wonder if something like this might be a good compliment to some of the massive capability available in very high scale machine learning solutions. Brain.js is just JavaScript, and sometimes that's all you need - something that will run in small quantity in the browser!

So I copied some code from the Brain.js website and regurgitated it here for your benefit. I also put it into my repo [simple-brain](https://github.com/codefoster/simple-brain).

Here's the code...

```js
const brain = require('brain.js');

var net = new brain.NeuralNetwork();

console.log("The following neural network implements an XOR (exclusive OR) logical operation, where the output will be true when the inputs are neither all false or all true.");
console.log("Training the model...");
net.train([
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
]);


console.log("Evaluating [1, 1] against the model (should approach 0)...");
console.log(net.run([1, 1]));

console.log("Evaluating [1, 0] against the model (should approach 1)...");
console.log(net.run([1, 0]));
```

I'm learning a lot about ML right now and it's fun to have a new space to learn and explore. It's fun too that ML has a bit of a presence in the JavaScript world even though the Python leaning is strong. I found [this excellent](https://blog.bitsrc.io/11-javascript-machine-learning-libraries-to-use-in-your-app-c49772cca46c) article by Jonathan who's as crazy as I am to consider JS for ML at this time.