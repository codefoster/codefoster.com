---
title: Top 10 Reasons Why I Choose HTML5 Over XAML
categories: [HTML/CSS]
tags: [html,xaml,ui,declarative]
date: 2012-05-23
---

My colleague and friend Jerry Nixon recently wrote an article on the top 10 reasons why he chooses XAML over HTML5 and it begged me for a reply. Alas, here it is...
Following are the top 10 reasons why I&#39;m in the HTML/CSS/JS space right now.

I should qualify. I completely adore C# and XAML. I geek out on the nuances of the C# language, lambda expressions give me joy, and LINQ is like dreams and starlight. But that&#39;s not where I am right now. I&#39;m moving on but not moving away. I want both bullets in my belt... the sheer power of C# and the wit and fancy of JavaScript.

More qualification. I love JavaScript and at the same time I hate JavaScript. Sometimes it makes me feel like a coding cowboy and other times like I&#39;m in its gallows.

So here we go...

## 1. Skill Ready
I and about a kazillion other people in the world have gathered a ton of experience on the HCJ stack. Websites became applications as some point, and they became essential in the enterprise. I would guess that the web stack has drastically more developers than any other stack... but that&#39;s a guess.

## 2. Triptych
HTML, CSS, and JavaScript form what I like to call the happy triptych. Instead of separating code into two roles, HCJ has three. HTML defines the structure, CSS defines the layout and style, and JavaScript defines the logic. This makes things like modifying the layout and style for different view states or devices as simple as swapping out the style sheet.

## 3. Dynamic
I know that C# has the DLR and I&#39;ve used it in numerous real scenarios, and it&#39;s some awesome functionality added to the language. JavaScript, however, is truly dynamic. If I want to add a property to my app like lastLaunched, I just type `app.lastLaunched = "5/1/2012"` and voila I have a new property. If I want to add a function called `detectLastLaunched`, I just type `app.detectLastLaunched = function() { ... }`. That&#39;s way cool.

## 4. JSON
JavaScript has JSON. I know that C# can speak JSON too, but not like JavaScript. JavaScript and JSON go together like peas and carrots.

## 5. Light
JavaScript is light. Super light. The absence of some of C#&#39;s heavy artillery (I&#39;m thinking polymorphism, inheritance, type safety, etc.) leaves it light and agile. The fancier things like inheritance and even asynchronicity are implemented as patterns instead of as language features. This means they&#39;re not baked in so they can be adapted to suit.

I was newing up some sample data in both languages the other day. I had to declare all of my types in C# and then even with object and collection initializers, the code to create the sample data was quite large and repetitive. In JavaScript on the other hand, it&#39;s a matter of declaring a variable and setting it with very terse object initializer syntax... thing of beauty.
Just compare the default Metro style Grid Application in XAML/C# and then in HTML/JS and you&#39;ll see how light JavaScript is.
 
## 6. Libraries
Again, there are a ton of web stack developers out there and consequently there are a ton of web stack libraries and helpers. Search for something like "javascript face detection" and you&#39;ll find an open source library that&#39;s ready to go. Glance at [microjs.com](http://microjs.com) to see what I mean about JavaScript library support.

## 7. Query Selection
In XAML, it&#39;s easy enough to give a control an ID and then select it in the code. But how do you select all of every third paragraph, the third element in the grid, or something like that. The answer is imperative code. There&#39;s no part of the object model that you can&#39;t access, but with query selectors in CSS and JS, you can use simple strings like `div#myDiv p:nth-child(3n)` to select every third paragraph in the div with the ID of myDiv.

## 8. CSS
CSS is amazing. With a collection of style rules, I can style, animate, layout, add images, position things, and a ton more. With declarative CSS code I can make the same HTML view look entirely different. Style rules cascade down to the eventual screen element and allow a developer to set a style globally and then override that style locally given the need.

There&#39;s a JS library called LESS that extends CSS&#39;s capabilities and allows me to set style variable and even do variable math. So I can set the base color of my app to red and then create a number of derived colors (darker or lighter for instance). That way, the change of a single color variable will result in a complete change to my app&#39;s color palette.

## 9. Blend
The nature of HTML/JS apps means that Blend for Visual Studio can dynamically execute the application while you&#39;re designing it. Expression Blend (the XAML designer for classic Windows apps, Silverlight, Windows Phone, etc.) has some robust support for sample data and designer data because it&#39;s not able to drag in the application data at runtime. With Blend, however, when working on a Metro style app using JavaScript, the entire need for sample data goes away. Instead, you look at your real app data... even if you&#39;re pulling it down from the sky (I&#39;m a little tired of the word cloud, so I choose to use the word sky).

## 10. Name
I live in Seattle. I drink coffee. Fancy coffee. The people that make coffee in this town are insane about their technique, the quality of their bean, and the nanosecond precision of their brew pull. So I&#39;m enjoying JavaScript because it goes so well with the french press of Ecuadorean joe I hold before me.

Sorry, C#. Your name is sharp, but it&#39;s so technical and boring compared to JavaScript.

Nail. Coffin. JavaScript wins hands down! Oh, whatever. It&#39;s all in fun.