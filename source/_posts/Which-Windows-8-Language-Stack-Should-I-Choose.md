---
title: Which Windows 8 Language Stack Should I Choose?
categories: []
tags: []
date: 2001-01-01
permalink: 
---

I had a conversation with an attendee at the recent Windows 8 developers event at LA Live on Monday that I want to put into words and share in case it is of benefit. The question was this:

_I'm new to development and I'm jumping in to Windows 8 development. Which language stack should I choose &ndash; HTML/JavaScript or XAML/C#?_

It's a good question because there are a lot of contributing factors.

I'll leave the other languages (Visual Basic, C++) out of the discussion for the most part since they were not part of the question.

Here are the factors I'd like to compare on:

*   viability of employment
*   scale
*   interoperability
*   developer joy

Finally, a direct comparison is difficult because the nature of each of these language stacks tends to push developers into application architectures. XAML/C# applications tend to enable a developer to create a lot of custom business logic inside the application itself, whereas HTML/JS applications tend to encourage a developer to push the business logic up to a separate service to be consumed in a JSON feed for instance.

Let's go.

## **Viability of employment**

First of all, I have to say this. Don't jump into application development with high hopes of being employable but without any passion for the trade. It won't work. I would love to play guitar, but I can't. Why? Because I don't love it enough. If I loved it enough I'd practice it every day and then I'd become really good. I guess my analogy breaks down there, because I wouldn't necessarily be employable :) You really need to love software development and you need to do it every day. You need to read programming books in bed and you need to experience genuine, heart-felt aggravation when things aren't working.

But it's good to be employed, right?! Still, I don't think viability of employment (now and in the future) is too much of a concern. Given the current developer and consumer investments in HTML and JavaScript as well as  XAML and C#, none of these languages are going to leave their developers on the street any day soon.

If, however, you want to be a very portable employee, you should choose HTML and JavaScript. I'm not talking geographically portable but technically portable &ndash; as in, you want to work in a variety of roles at a variety of companies doing a variety of things. The HTML and JavaScript languages are everywhere. We don't just have browsers on our computers anymore. There are browsers in cars and kitchens and phones. So, every role in every company in every industry needs to know something of these technologies.

Still speaking technically, the employment options for a XAML/C# developer are going to be more narrowly defined.

## Scale and maintainability

When I say _scale_, I'm talking about the ability for an application's code base to go from small to huge. You might consider this dynamic if you suspect your application will be growing a lot - say going from 3 features to 30\. In this case, your codebase needs to grow and your architecture needs to evolve.

On the UI side, I can't see any advantages of either XAML or HTML in this area. Behind the scenes, however, C# has some huge advantages over JavaScript. I've seen C# codebases that are mind boggling and yet still quite easy for the developer to traverse and debug. Handling a huge JavaScript applications on the other hand is about like handling Jell-O - both are a little too dynamic. That's not to say it can't be done; I'd never make that claim.

## Interoperability

How good are these language stacks at cross communicating with other applications? Both are very good. You might want to jump in here and tell me how much better JavaScript is because of it's lightweight JSON objects, integration with the web applications, and the like. But C# can do all of that too. Any of the C# objects are one small serialization step away from becoming the same JSON object that a JavaScript app uses and likewise in the other direction. Just because your C# application is fat with business logic, doesn't mean it can't communicate lightly with the outside world.

## Developer Joy

This is an important category in my opinion. You don't technically  have to enjoy writing software to write a lot of good software, but it most certainly helps.

I find a lot of joy writing both C# and JavaScript. In C#, I enjoy the traversal of types, type hierarchy, and type conversion. I enjoy lambda statements a lot, and I really geek out on LINQ. In JavaScript, I enjoy JSON and dynamically creating, extending, and manipulating objects. I enjoy anonymous functions and passing them around willie nillie.

I think you have to run through some tutorials for each language and determine for yourself which one you might enjoy using more. The problem is that so much of my language enjoyment has come later when I've used a language for hundreds of hours and I'm starting to feel like I get it.

See if you can browse a bunch of JavaScript code and C# code and see if either feels more _right_ to you. See if one of them comes more quickly to your intuition.

## Conclusion

Overall, whatever language you choose for developing Windows 8 apps, you're going to end up with the ability to create some awesome apps, you're going to be employable, you're going have fun doing it, and with the amazing opportunity you have to reach hundreds of millions of potential users, you are even likely to make some money!

Happy app development!