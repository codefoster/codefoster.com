---
title: Level Up Your JavaScript Game! - Regular Expressions
categories: [JavaScript]
tags: [Node.js,Node,node,js,javascript,ecmascript,promise,promises,async]
date: 2018-02-21 09:30:55
---

> See [Level Up Your JavaScript Game!](/levelup) for related content.

I’m sorry, but there’s no way around it. You have to master regular expressions. 

Regular expressions (_regex_ for short) have a reputation of being very difficult, but if you happen to be an entry-level developer, I really don't want you to be intimidated by them. They're actually not so difficult. They only _look_ difficult once you've created one. In a sense, they're an easy way to at least _look_ like a ninja.

JavaScript's implementation of regular expressions was tough for me at first because there are a few different ways to go about it. Spend some time writing and calling a couple of patterns though, and you'll quickly master it.

To level up in JavaScript regular expressions, I recommend you learn...

## ...to write your regular expression.

That's right, first you have to learn how to write a good regex pattern. I'm not going to go into detail, but if you want some help you're a quick web search away. I highly recommend [regexr.com](http://regexr.com). It's good not only for learning the patterns, but testing them too.

In learning patterns, you should learn about _capture groups_ too. Defining capture groups is simple - you just put parenthesis around certain parts of your pattern. Those parts of the pattern will then be available in your matchs as independent values.

Let's say you wanted to pull the area code out of a phone number pattern. You could use a pattern like `(\d{3})-\d{3}-\d{4}`. That's obviously a very simplistic pattern that would only match US-style, 10-digit phone numbers with dashes between the groups, but notice the parenthesis around the first group. That means that that part - the area code - is going to be made available as a value for you after you execute the regex.

## ...to quickly tell if a pattern is detected in some text.

If you don't need the actual matchs of the regex execution, but just want to see if there's a match, you use `<pattern>.test(<text>)`. For example...

```js
/\d{3}-\d{3}-\d{4}/.test('555-123-4567') //true
```

>In JavaScript, you put regular expressions between slashes (`/`) just like you put strings between quotes.

...would return `true`.

## ...to use `.exec()` for single pattern matches with capture groups.

If you need not only to know that the pattern matched, but also to get values from the match such as the match itself and all of the capture group values, then you use `.exec()`...

```js
let match = /(\d{3})-\d{3}-\d{4}/.exec('555-123-4567');
match[0] //555-123-4567
match[1] //555
```
...and because I added parenthesis around the first number group there, that value should be returned as part of the match. The match itself is always the first match (`[0]`), and each subsequent capture group in the order you defined them from left to right follow (`[1]`, `[2]`, ..., `[n]`).

## ...to use `.match()` to find multiple matches in a string.

The `.match()` function is on `String.prototype`, so it's available on any string. Besides flipping the calling pattern from `.exec()` (`.exec()` uses `<pattern>.exec(<text>)` while `.match()` uses `<text>.match(<pattern>)`), this function has a couple of other peculiarities.

First, it does not capture from your capture groups, so if that's what you're looking to do, then use `.exec()`.

Second, it is capable of capturing multiple matches returned as an array. So if you do something like...

```js
"14 - 8 = 6".match(/\d+/g) //[14,8,6]
```

The `g` stands for _global_ and is a regex option that tells it to look in the entire string. Look at all of the other options that are valid there too. They can be helpful.

If you need to capture multiple matches (like you get with `.match()`), but you also want the capture groups (like you get with `.exec()`), then you need to call `.exec()` in a loop like this...

```js
let text = "The quick brown fox jumps over the lazy dog.";
let match;
while (match = /(t)he/ig.exec(text)) {
  console.log(match[0]);
  console.log(match[1]);
}

/* Should log...
The
T
the
t
*/
```

Note that I included an `i` and a `g` option on the regex (`/the/`). The `i` makes the search case insensitive and the `g` directs it to find _every_ match in the text. Notice that `match[0]` equals the full match each iteration and `match[1]` is the contents of the capture group I defined (the first letter of the word "the" for whatever reason). 

That'll do it for regular expressions. Now head back to [Level Up Your JavaScript Game!](/levelup) or move on to the next topic on [ES6 module imports](/levelup-modules).