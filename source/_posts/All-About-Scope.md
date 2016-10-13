---
title: All About Scope
categories: []
tags: []
date: 2001-01-01
permalink: 
---

## Abstract

It may not be clear immediately how variable scopes work when you're creating a Windows 8 app using HTML and JavaScript. Even if you're very proficient at writing JavaScript code, you might not know where you're supposed to write it! Let me take a stab at clarifying...

When you first look at a JavaScript page in a Windows 8 project you see  something like this...

``` js
(function (){
    "use strict";

    function ready(element, options){ }

    function updateLayout(element, viewState){ }

    var myLocalFunction = function(){
        log('myLocalFunction called');
    }

    WinJS.UI.Pages.define("/html/page1.html", {
        ready: ready,
        updateLayout: updateLayout
    });
})();
```

...and what you're seeing is kind of a cool little trick that's not new to a seasoned JS scripter. Notice that what you have is a function wrapped in parenthesis and followed by what I like to affectionately call a _football_ - that's the empty parenthesis [()] that we developers hardly notice anymore. To make it a little bit more clear...

``` js
(function () { ... })();
```

So it's a function that is defined AND called. But why? I'll tell you.

It's because when you declare things in a function, they are scoped to the function. They are visible and available within the function but not beyond. The code you write in this function is not available globally, and that's a good thing. Windows 8 apps may get pretty big and namespace conflicts would be likely. If you declare the variable _foo_ in more than one place but each globally, then they will start conflicting and causing some runtime errors that would be very difficult to debug.

So where should we declare our variables so that we have access to data but only in the scope we need? I'm glad you asked. Let's look at the scopes available to us and what they might be used for.

## Global Scope

Variables are said to be in global scope when they are defined outside of any function definition. Unlike C++, JavaScript does not support simple block quoting (blocks of code are surrounded by mustaches { }). This code snippet should make this clear...

``` js
(function () {
    "use strict";

    function ready(element, options){ }

    function updateLayout(element, viewState){ }

    WinJS.UI.Pages.define("/html/junk.html", {
        ready: ready,
        updateLayout: updateLayout
    });

    //this is local scope
    var myLocalVariable = "value";
})();

//this is global scope
var myGlobalVariable = "value"; 
```

Some developers would argue that global scope should never be used, but I think there's a time and place for almost anything and that goes for global scope. At the end of the day, you as the developer are responsible for making sure that your app works and that defects are not introduced because of globally scoped variables.

## Page Scope

I'm using the term _page scope_ to refer to the variables that are defined in the wrapper function that you'll find on the Windows 8 code behind JavaScript file &ndash; the myPage.js file behind your myPage.html.

The interesting thing to note is that these page scope variables are not even available on the HTML page itself. If you define a variable in your JS file and then attempt to access it from a script block on your HTML file, it will be "undefined". Remember, that what happens in a function... stays in a function.

So, the page scope function is essentially all of the code that you want to run when your page is loaded, and it includes some cool tricks to allow you to specify functions that will run when your page is "ready" or when the layout is changed (when Joe User turns his tablet sideways).

So what if you want to write a function and then you want to call that function from your page (say when a button is clicked)? That's where you use _namespace scope_ - another term I'll take ownership of &ndash; patent pending.

## Namespace Scope

If you've determined that you want to be a good citizen and avoid global scope, but you want to actually use some of the brilliant code you've written in your page's JS file, then defining your code in a WinJS namespace is a great way to do it.

Check out the following definition...

``` js
WinJS.Namespace.define("ordersPage", {
    calculateTotal: function () {
        //implementation
    }
});
```

Let me unpack that for you. Namespaces don't exist in JavaScript proper, but we're using WinJS here. Remember, WinJS is just a JavaScript library that Microsoft wrote that plays very well with Windows 8\. After you use the above code to define a namespace, your namespace is available for you globally. So whether it be from your HTML page, from your JS file, from another HTML page, or from anywhere in your app really, you'll be able to call your function like this...

``` js
ordersPage.calculateTotal()
```

Now we're cooking with Crisco! Now we are good citizens and we have the ability to architect our application in a way that is consistent and sensible and logical.

## Conclusion

Now you know where your code should go when you're writing a Windows 8 app to make sure it's available where you need it and no further.

Make sure you follow me on Twitter ([@codefoster](http://www.twitter.com/codefoster)) if you want more tips and tricks with Windows 8 as well as other musings that at least I would consider pertinent and helpful. Happy coding.