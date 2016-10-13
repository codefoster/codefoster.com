---
title: Adding a New Page in Windows 8
categories: []
tags: []
date: 2001-01-01
permalink: 
---

If you're a veteran of web development, answer this question: how do you add a new HTML page to your web project? You do a right click | Add | New Item... and then you choose HTML Page, right? Easy enough. Turns out with Windows 8 if you do this you get exactly what you asked for but perhaps not exactly what you expected. Certainly a new HTML file lands in your project and here are the contents:

``` html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body>
  </body>
</html>
```

That's HTML by anyone's definition, but it's not going to get you very far in Windows 8 if you're using the standard navigation model.

What you really wanted to do is to add a Page Control. Try Right click | Add | New Item... and then choose Page Control and you should get more than just an HTML file. You should also get a JavaScript file (.js) and a stylesheet (.css). Furthermore, the HTML file is a bit more robust:

``` html
<!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8">
    <title>pagecontrol</title>
    <!-- WinJS references -->
    <link href="//Microsoft.WinJS.0.6/css/ui-dark.css" rel="stylesheet">
    <script src="//Microsoft.WinJS.0.6/js/base.js"></script>
    <script src="//Microsoft.WinJS.0.6/js/ui.js"></script>
   
    <link href="pagecontrol.css" rel="stylesheet">
    <script src="pagecontrol.js"></script>
</head>
<body>
    <div class="pagecontrol fragment">
        <header aria-label="Header content" role="banner">
            <button class="win-backbutton" aria-label="Back" disabled></button>
            <h1 class="titlearea win-type-ellipsis">
                <span class="pagetitle">Welcome to pagecontrol</span>
            </h1>
        </header>
        <section aria-label="Main content" role="main">
            <p>Content goes here.</p>
        </section>
    </div>
</body>
</html>
```

Now you're talkin'! There are a number of things in this file that are all but essential to a standard Windows 8 page. Here are a few I'd like to point out:

*   References to the .js and .css files that just got created for you too. This promotes an excellent separation of concerns: Structure, Style, and Script. Structure (markup) goes in your .html (and will likely be quite brief), style goes in your .css, and script goes in your .js.
*   A header with a back button and a title which is going to be very important on most Windows 8 pages.
*   Finally, you get a div with a class of "pagecontrol fragment" and inside that a section with a role of "main". These are essential in getting your page to render and behave as you would expect. Experiment with removing either of them and see what you get.

As soon as you've added this Page Control, make a habit of dragging the .css file to your css folder and the .js file to the js folder.

Remember that although this is all web page based, in most scenarios, you should not be hyper-linking from one page to the next. Not only will that kill Windows' ability to keep your structure and help you with everything, but it also jumps you into the web context and you lose your native-ness. Instead use something like the following to get to your new page:

``` js
WinJS.Navigation
  .navigate("/html/myCoolNewPage.html", { someCoolKey: someCoolValue });
```

If you create a simple project starting with the Grid Application template, you'll get a good example of this in action.