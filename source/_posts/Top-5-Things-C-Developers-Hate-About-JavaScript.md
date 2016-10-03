---
title: 'Top 5 Things C# Developers Hate About JavaScript'
tags: []
date: 2016-10-02 16:03:46
---

We&#39;re called coders. We&#39;re called software developers. But despite what we&#39;re called and despite our primary function of turning human logic and scenarios into ones and zeros, not everything we do in these roles comes down to a programming language. The soft skills, in fact,&nbsp;end up being&nbsp;massively importance. I could elaborate in a separate blog post (and just may) about the centrality of grammar skills, technical writing skills, communication skills, diplomacy skills, and so on. I&#39;m tempted to call on Napolean Dynamite to elaborate on [the importance of various skills](http://www.youtube.com/watch?v=XsiiIa6bs9I), but none of his examples actually work toward my point, so I&#39;ll refrain.

Nevertheless, a good portion of our roles _does_ end up as code, and our choice of language ends up being a significant and quite personal matter.

My experience has been dominated by C# and JavaScript. I don&#39;t really want to revisit the other languages. That&#39;s what counselling is for. And I love both of these languages. My experience spanning the two has given me some perspective on those that tend toward either one camp or the other. Perhaps my observations on why C# developers might get a bit worked up about the prospect of having to spend&nbsp;some time on a JavaScript project will entertain or even inform. I wouldn&#39;t count on it, but that&#39;s always the goal.

## LINQless

First and possibly foremost among the reasons is the fact that a move from C# to JavaScript finds a developer sharply aware of his lack of LINQ.

If you don&#39;t know, LINQ (Language Integrated Queries) is this amazing set of extension methods that affect lists in C# and extend even to external collections of things or persistent data. After a relatively short onramp, LINQ developers find themselves expressing just what they want in terse and very readable code.

LINQ is a beautiful thing and the first time you type .First() on a JavaScript collection and language services tells you you&#39;re crazy for expecting to just be able to just do that, you do feel a sudden urge to put resumes out.

### Resolution

I&#39;d be mean if I didn&#39;t offer what I know as far as resolution to this pain, so I&#39;ll try.

While I can&#39;t say that JavaScript does in fact have LINQ and you only have to type a using statement at the top of your code file, I can say that there are a number of roundabouts that heal most of the pain.

First, many still don&#39;t know that ECMAScript5 defines and JavaScript in pretty much every browser worth it&#39;s salt and your time implements a set of array functions that map pretty well to the common array functions. The lambda syntax isn&#39;t quite as elegant, but there&#39;s ECMAScript6 and TypeScript to remedy that. Instead of .Select() you get .map(), Instead of .Where() you get .filter(), and you always get .forEach() even without casting to a List first.

Second, JavaScript&#39;s amazing set of open source libraries comes to the rescue with a number of suggested solutions such as&nbsp;[LINQ for JavaScript on Codeplex](http://linqjs.codeplex.com/), [Underscore.js](http://underscorejs.org/), and likely about a thousand more.

Finally, there&#39;s the fact that most of the LINQ functionality is actually drop dead simple and I for one end up implementing functions on my own just for that code warrior feeling it gives me.

## The Inequality of Equality

C# folks come out of their skin when they see the === sign. They assume it&#39;s a typo and pull over long before the end of the explanation for its existence.

This one actually bothers me quite a bit, because as I see it, it offers a small convenience but costs a lot of clarity. Seldom does the convenience of [type coercion](http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/) benefit me more than the hassle of spending the 3 or so brain cycles it takes to choose. I&#39;ve been told to save the cycles and just use === every time, but I&#39;m not sure I&#39;m convinced.

### Resolution

None. Just live with it.

## Weaknesses of Weak Typing

When you write an app in C#, you have to explicitly include definitions for every little thing. If you need a `Customer` with facial hair, you also need a `CustomerFacialHairTypeEnum `and a `CustomerFacialHairTypeEnum.Goatee `value. Then a little way in, you end up having to write another class for&nbsp;a `CustomerMapAttributeDifferentiatorFactoryGenerator` or something like that. That&#39;s what it feels like anyway when you write JavaScript for a week and then come back to a C# project.

But the result is veritable utopia of design-time tooling and near-iron-clad certainty that when your app builds, your app runs.

We don&#39;t have this in JavaScript. In fact, JavaScript is practically defined by its lack of certainty, but if you give me a Customer I&#39;ll give him a goatee in one short line. Then you ask me if my new object implements `IFacialHairCustomer` and I&#39;ll just look blankly at you as if the answer is as unnecessary as the question.

### Resolution

None necessary. No problem, no resolution.

## Short Variables Names

JavaScript developers get used to such terse syntax and they just go crazy with it. You end up with...

`var a = args.d.detail;`

...and you end up with sleepless nights.

My personal rule on variable names in JavaScript is similar to my rule for variable names in C# actually.&nbsp;Use full, meaningful names, _unless _you&#39;re inside a&nbsp;statement block brief enough to&nbsp;convey meaning better by way of its brevity.

In my opinion,&nbsp;the function...

`customers.filter(function(c) { c.age &gt; 21; })`

_loses_ more meaning than it _gains _when it&#39;s expanded to...

`customers.filter(function(customer) { customer.age &gt; 21; })`

### Resolution

Stick to the same core philosophy with your JavaScript that surely you do with your C# - that is, think about the next guy that&#39;s going to look at your code.

## The Word Java

Finally, C# developers enjoy a few benefits of the language over Oracle&#39;s Java, and the mere inclusion of the word _Java_ in JavaScript is perhaps a deterrent.

As they say, however, Java is to JavaScript as Ham is to Hamburger, and the two have exactly 4 bytes in common and no more.

### Resolution

Let go of nomenclature and get on with JavaScript

That&#39;s all I&#39;ll say on the matter. Thanks for listening.