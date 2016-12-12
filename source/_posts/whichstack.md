---
title: Which Windows 8 Language Stack Should I Choose?
categories: [Code]
tags: []
date: 2012-04-25
permalink: whichstack
alias:
- post/2012/04/25/Which-Windows-8-Language-Stack-Should-I-Choose/
- Which-Windows-8-Language-Stack-Should-I-Choose/
---

I had a conversation with an attendee at the recent Windows 8 developers event at LA Live on Monday that I want to put into words and share in case it is of benefit. The question was this:

_I&#39;m new to development and I&#39;m jumping in to Windows 8 development. Which language stack should I choose &ndash; HTML/JavaScript or XAML/C#?_

It&#39;s a good question because there are a lot of contributing factors.

I&#39;ll leave the other languages (Visual Basic, C++) out of the discussion for the most part since they were not part of the question.

Here are the factors I&#39;d like to compare on:

*   viability of employment
*   scale
*   interoperability
*   developer joy

Finally, a direct comparison is difficult because the nature of each of these language stacks tends to push developers into application architectures. XAML/C# applications tend to enable a developer to create a lot of custom business logic inside the application itself, whereas HTML/JS applications tend to encourage a developer to push the business logic up to a separate service to be consumed in a JSON feed for instance.

Let&#39;s go.

## **Viability of employment**

First of all, I have to say this. Don&#39;t jump into application development with high hopes of being employable but without any passion for the trade. It won&#39;t work. I would love to play guitar, but I can&#39;t. Why? Because I don&#39;t love it enough. If I loved it enough I&#39;d practice it every day and then I&#39;d become really good. I guess my analogy breaks down there, because I wouldn&#39;t necessarily be employable :) You really need to love software development and you need to do it every day. You need to read programming books in bed and you need to experience genuine, heart-felt aggravation when things aren&#39;t working.

But it&#39;s good to be employed, right?! Still, I don&#39;t think viability of employment (now and in the future) is too much of a concern. Given the current developer and consumer investments in HTML and JavaScript as well as  XAML and C#, none of these languages are going to leave their developers on the street any day soon.

If, however, you want to be a very portable employee, you should choose HTML and JavaScript. I&#39;m not talking geographically portable but technically portable &ndash; as in, you want to work in a variety of roles at a variety of companies doing a variety of things. The HTML and JavaScript languages are everywhere. We don&#39;t just have browsers on our computers anymore. There are browsers in cars and kitchens and phones. So, every role in every company in every industry needs to know something of these technologies.

Still speaking technically, the employment options for a XAML/C# developer are going to be more narrowly defined.

## Scale and maintainability

When I say _scale_, I&#39;m talking about the ability for an application&#39;s code base to go from small to huge. You might consider this dynamic if you suspect your application will be growing a lot - say going from 3 features to 30\. In this case, your codebase needs to grow and your architecture needs to evolve.

On the UI side, I can&#39;t see any advantages of either XAML or HTML in this area. Behind the scenes, however, C# has some huge advantages over JavaScript. I&#39;ve seen C# codebases that are mind boggling and yet still quite easy for the developer to traverse and debug. Handling a huge JavaScript applications on the other hand is about like handling Jell-O - both are a little too dynamic. That&#39;s not to say it can&#39;t be done; I&#39;d never make that claim.

## Interoperability

How good are these language stacks at cross communicating with other applications? Both are very good. You might want to jump in here and tell me how much better JavaScript is because of it&#39;s lightweight JSON objects, integration with the web applications, and the like. But C# can do all of that too. Any of the C# objects are one small serialization step away from becoming the same JSON object that a JavaScript app uses and likewise in the other direction. Just because your C# application is fat with business logic, doesn&#39;t mean it can&#39;t communicate lightly with the outside world.

## Developer Joy

This is an important category in my opinion. You don&#39;t technically  have to enjoy writing software to write a lot of good software, but it most certainly helps.

I find a lot of joy writing both C# and JavaScript. In C#, I enjoy the traversal of types, type hierarchy, and type conversion. I enjoy lambda statements a lot, and I really geek out on LINQ. In JavaScript, I enjoy JSON and dynamically creating, extending, and manipulating objects. I enjoy anonymous functions and passing them around willie nillie.

I think you have to run through some tutorials for each language and determine for yourself which one you might enjoy using more. The problem is that so much of my language enjoyment has come later when I&#39;ve used a language for hundreds of hours and I&#39;m starting to feel like I get it.

See if you can browse a bunch of JavaScript code and C# code and see if either feels more _right_ to you. See if one of them comes more quickly to your intuition.

## Conclusion

Overall, whatever language you choose for developing Windows 8 apps, you&#39;re going to end up with the ability to create some awesome apps, you&#39;re going to be employable, you&#39;re going have fun doing it, and with the amazing opportunity you have to reach hundreds of millions of potential users, you are even likely to make some money!

Happy app development!