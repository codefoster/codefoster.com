---
title: All About Scope
tags: []
date: 2016-10-02 16:03:46
---

## Abstract

It may not be clear immediately how variable scopes work when you&rsquo;re creating a Windows 8 app using HTML and JavaScript. Even if you&rsquo;re very proficient at writing JavaScript code, you might not know where you&rsquo;re supposed to write it! Let me take a stab at clarifying...

When you first look at a JavaScript page in a Windows 8 project you see&nbsp; something like this&hellip;

<pre class="code">
<span style="background: white; color: black;">(</span><span style="background: white; color: blue;">function </span><span style="background: white; color: black;">(){
</span><span style="background: white; color: maroon;"> &quot;use strict&quot;</span><span style="background: white; color: black;">;

 </span><span style="background: white; color: blue;">function </span><span style="background: white; color: black;">ready(element, options){ }

 </span><span style="background: white; color: blue;">function </span><span style="background: white; color: black;">updateLayout(element, viewState){ }

 </span><span style="background: white; color: blue;">var </span><span style="background: white; color: black;">myLocalFunction = </span><span style="background: white; color: blue;">function</span><span style="background: white; color: black;">(){
 log(</span><span style="background: white; color: maroon;">&#39;myLocalFunction called&#39;</span><span style="background: white; color: black;">);
 }

 WinJS.UI.Pages.define(</span><span style="background: white; color: maroon;">&quot;/html/page1.html&quot;</span><span style="background: white; color: black;">, {
 ready: ready,
 </span><span style="background: white; color: black;">updateLayout: updateLayout
 });
})();</span></pre>

&hellip;and what you&rsquo;re seeing is kind of a cool little trick that&rsquo;s not new to a seasoned JS scripter. Notice that what you have is a function wrapped in parenthesis and followed by what I like to affectionately call a _football &ndash; _that&rsquo;s the empty parenthesis [()] that we developers hardly notice anymore. To make it a little bit more clear&hellip;

<pre class="code">
<span style="background: white; color: black;">(</span><span style="background: white; color: blue;">function </span><span style="background: white; color: black;">() { ... })();</span></pre>

So it&rsquo;s a function that is defined AND called. But why? I&rsquo;ll tell you.

It&rsquo;s because when you declare things in a function, they are scoped to the function. They are visible and available within the function but not beyond. The code you write in this function is not available globally, and that&rsquo;s a good thing. Windows 8 apps may get pretty big and namespace conflicts would be likely. If you declare the variable _foo _in more than one place but each globally, then they will start conflicting and causing some runtime errors that would be very difficult to debug.

So where should we declare our variables so that we have access to data but only in the scope we need? I&rsquo;m glad you asked. Let&rsquo;s look at the scopes available to us and what they might be used for.

## Global Scope

Variables are said to be in global scope when they are defined outside of any function definition. Unlike C++, JavaScript does not support simple block quoting (blocks of code are surrounded by mustaches { }). This code snippet should make this clear&hellip;

<pre class="code">
<span style="background: white; color: black;">(</span><span style="background: white; color: blue;">function </span><span style="background: white; color: black;">() {
 </span><span style="background: white; color: maroon;">&quot;use strict&quot;</span><span style="background: white; color: black;">;

 </span><span style="background: white; color: blue;">function </span><span style="background: white; color: black;">ready(element, options){ }

 </span><span style="background: white; color: blue;">function </span><span style="background: white; color: black;">updateLayout(element, viewState){ }

 WinJS.UI.Pages.define(</span><span style="background: white; color: maroon;">&quot;/html/junk.html&quot;</span><span style="background: white; color: black;">, {
 ready: ready,
 updateLayout: updateLayout
 });

 </span><span style="background: white; color: green;">//this is local scope
 </span><span style="background: white; color: blue;">var </span><span style="background: white; color: black;">myLocalVariable = </span><span style="background: white; color: maroon;">&quot;value&quot;</span><span style="background: white; color: black;">;
})();

</span><span style="background: white; color: green;">//this is global scope
</span><span style="background: white; color: blue;">var </span><span style="background: white; color: black;">myGlobalVariable = </span><span style="background: white; color: maroon;">&quot;value&quot;</span><span style="background: white; color: black;">; </span></pre>

Some developers would argue that global scope should never be used, but I think there&rsquo;s a time and place for almost anything and that goes for global scope. At the end of the day, you as the developer are responsible for making sure that your app works and that defects are not introduced because of globally scoped variables.

## Page Scope

<span style="color: rgb(0, 0, 0);">I&rsquo;m using the term _page scope_ to refer to the variables that are defined in the wrapper function that you&rsquo;ll find on the Windows 8 code behind JavaScript file &ndash; the myPage.js file behind your myPage.html.</span>

<span style="color: rgb(0, 0, 0);">The interesting thing to note is that these page scope variables are not even available on the HTML page itself. If you define a variable in your JS file and then attempt to access it from a script block on your HTML file, it will be &ldquo;undefined&rdquo;. Remember, that what happens in a function&hellip; stays in a function.</span>

<span style="color: rgb(0, 0, 0);">So, the page scope function is essentially all of the code that you want to run when your page is loaded, and it includes some cool tricks to allow you to specify functions that will run when your page is &ldquo;ready&rdquo; or when the layout is changed (when Joe User turns his tablet sideways).</span>

<span style="color: rgb(0, 0, 0);">So what if you want to write a function and then you want to call that function from your page (say when a button is clicked)? That&rsquo;s where you use _namespace scope &ndash; _another term I&rsquo;ll take ownership of &ndash; patent pending.</span>

## Namespace Scope

<span style="color: rgb(0, 0, 0);">If you&rsquo;ve determined that you want to be a good citizen and avoid global scope, but you want to actually use some of the brilliant code you&rsquo;ve written in your page&rsquo;s JS file, then defining your code in a WinJS namespace is a great way to do it.</span>

<span style="color: rgb(0, 0, 0);">Check out the following definition&hellip;</span>

<pre class="code">
<span style="background: white; color: black;">WinJS.Namespace.define(</span><span style="background: white; color: maroon;">&quot;ordersPage&quot;</span><span style="background: white; color: black;">, {
 calculateTotal: </span><span style="background: white; color: blue;">function </span><span style="background: white; color: black;">() {
 </span><span style="background: white; color: green;">//implementation
 </span><span style="background: white; color: black;">}
});</span></pre>

<span style="color: rgb(0, 0, 0);">Let me unpack that for you. Namespaces don&rsquo;t exist in JavaScript proper, but we&rsquo;re using WinJS here. Remember, WinJS is just a JavaScript library that Microsoft wrote that plays very well with Windows 8\. After you use the above code to define a namespace, your namespace is available for you globally. So whether it be from your HTML page, from your JS file, from another HTML page, or from anywhere in your app really, you&rsquo;ll be able to call your function like this&hellip;</span>

<pre class="code">
<span style="background: white; color: black;">ordersPage.calculateTotal()</span></pre>

<span style="color: rgb(0, 0, 0);">Now we&rsquo;re cooking with Crisco! Now we are good citizens and we have the ability to architect our application in a way that is consistent and sensible and logical.</span>

## Conclusion

Now you know where your code should go when you&rsquo;re writing a Windows 8 app to make sure it&rsquo;s available where you need it and no further.

Make sure you follow me on Twitter ([@codefoster](http://www.twitter.com/codefoster)) if you want more tips and tricks with Windows 8 as well as other musings that at least I would consider pertinent and helpful. Happy coding.