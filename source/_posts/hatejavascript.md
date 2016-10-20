---
title: 'Top 5 Things C# Developers Hate About JavaScript'
categories: []
tags: []
date: 2001-01-01
permalink: hatejavascript
---

We're called coders. We're called software developers. But despite what we're called and despite our primary function of turning human logic and scenarios into ones and zeros, not everything we do in these roles comes down to a programming language. The soft skills, in fact, end up being massively importance. I could elaborate in a separate blog post (and just may) about the centrality of grammar skills, technical writing skills, communication skills, diplomacy skills, and so on. I'm tempted to call on Napolean Dynamite to elaborate on [the importance of various skills](http://www.youtube.com/watch?v=XsiiIa6bs9I), but none of his examples actually work toward my point, so I'll refrain.
<!-- more -->

Nevertheless, a good portion of our roles _does_ end up as code, and our choice of language ends up being a significant and quite personal matter.

My experience has been dominated by C# and JavaScript. I don't really want to revisit the other languages. That's what counselling is for. And I love both of these languages. My experience spanning the two has given me some perspective on those that tend toward either one camp or the other. Perhaps my observations on why C# developers might get a bit worked up about the prospect of having to spend some time on a JavaScript project will entertain or even inform. I wouldn't count on it, but that's always the goal.

## LINQless

First and possibly foremost among the reasons is the fact that a move from C# to JavaScript finds a developer sharply aware of his lack of LINQ.

If you don't know, LINQ (Language Integrated Queries) is this amazing set of extension methods that affect lists in C# and extend even to external collections of things or persistent data. After a relatively short onramp, LINQ developers find themselves expressing just what they want in terse and very readable code.

LINQ is a beautiful thing and the first time you type .First() on a JavaScript collection and language services tells you you're crazy for expecting to just be able to just do that, you do feel a sudden urge to put resumes out.

### Resolution

I'd be mean if I didn't offer what I know as far as resolution to this pain, so I'll try.

While I can't say that JavaScript does in fact have LINQ and you only have to type a using statement at the top of your code file, I can say that there are a number of roundabouts that heal most of the pain.

First, many still don't know that ECMAScript5 defines and JavaScript in pretty much every browser worth it's salt and your time implements a set of array functions that map pretty well to the common array functions. The lambda syntax isn't quite as elegant, but there's ECMAScript6 and TypeScript to remedy that. Instead of .Select() you get .map(), Instead of .Where() you get .filter(), and you always get .forEach() even without casting to a List first.

Second, JavaScript's amazing set of open source libraries comes to the rescue with a number of suggested solutions such as [LINQ for JavaScript on Codeplex](http://linqjs.codeplex.com/), [Underscore.js](http://underscorejs.org/), and likely about a thousand more.

Finally, there's the fact that most of the LINQ functionality is actually drop dead simple and I for one end up implementing functions on my own just for that code warrior feeling it gives me.

## The Inequality of Equality

C# folks come out of their skin when they see the === sign. They assume it's a typo and pull over long before the end of the explanation for its existence.

This one actually bothers me quite a bit, because as I see it, it offers a small convenience but costs a lot of clarity. Seldom does the convenience of [type coercion](http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/) benefit me more than the hassle of spending the 3 or so brain cycles it takes to choose. I've been told to save the cycles and just use === every time, but I'm not sure I'm convinced.

### Resolution

None. Just live with it.

## Weaknesses of Weak Typing

When you write an app in C#, you have to explicitly include definitions for every little thing. If you need a `Customer` with facial hair, you also need a `CustomerFacialHairTypeEnum `and a `CustomerFacialHairTypeEnum.Goatee `value. Then a little way in, you end up having to write another class for a `CustomerMapAttributeDifferentiatorFactoryGenerator` or something like that. That's what it feels like anyway when you write JavaScript for a week and then come back to a C# project.

But the result is veritable utopia of design-time tooling and near-iron-clad certainty that when your app builds, your app runs.

We don't have this in JavaScript. In fact, JavaScript is practically defined by its lack of certainty, but if you give me a Customer I'll give him a goatee in one short line. Then you ask me if my new object implements `IFacialHairCustomer` and I'll just look blankly at you as if the answer is as unnecessary as the question.

### Resolution

None necessary. No problem, no resolution.

## Short Variables Names

JavaScript developers get used to such terse syntax and they just go crazy with it. You end up with...

`var a = args.d.detail;`

...and you end up with sleepless nights.

My personal rule on variable names in JavaScript is similar to my rule for variable names in C# actually. Use full, meaningful names, _unless_ you're inside a statement block brief enough to convey meaning better by way of its brevity.

In my opinion, the function...

`customers.filter(function(c) { c.age > 21; })`

_loses_ more meaning than it _gains_ when it's expanded to...

`customers.filter(function(customer) { customer.age > 21; })`

### Resolution

Stick to the same core philosophy with your JavaScript that surely you do with your C# - that is, think about the next guy that's going to look at your code.

## The Word Java

Finally, C# developers enjoy a few benefits of the language over Oracle's Java, and the mere inclusion of the word _Java_ in JavaScript is perhaps a deterrent.

As they say, however, Java is to JavaScript as Ham is to Hamburger, and the two have exactly 4 bytes in common and no more.

### Resolution

Let go of nomenclature and get on with JavaScript

That's all I'll say on the matter. Thanks for listening.