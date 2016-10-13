---
title: navigator.js
categories: []
tags: []
date: 2001-01-01
permalink: 
---

If you create a blank JavaScript application in Windows 8, you get just that &ndash; a blank application. You don't get page references to the WinJS library, you don't get a grid or a list or any other navigation structure, and you don't get the navigation code to implement the Microsoft recommended navigation method &ndash; single page navigation.

If you want to implement navigation, you can obviously just create a new application from the Navigation Appliction template (built-in), but if you're like me, it's nice to add in all of a given piece of functionality from scratch for understanding's sake.

Follow these steps to add navigation to a blank application. And I encourage you to actually type all of the code instead of just copying and pasting. If you type it, your brain will pick it up better.

1.  In Visual Studio 11, create a new Blank Application using JavaScript
2.  Add an html folder at the root of your project
3.  Right click on the html folder and Add | New Item...
4.  Choose Page Control and call your new item _page1.html_
	Note: You'll see that you got your new .html file as well as a .css and a .js
5.  Drag the .css file into the css folder and the .js file into the js folder
6.  Modify the css link reference and js script reference on your html file changing "page1.js" to "/js/page1.js" and "/css/page1.css"
7.  Grab a copy of navigator.js from any other sample app or template app. You can create a throw-away project from the Navigator Application to get a copy of this file if necessary.
8.  Modify the navigator.js file changing the name of the namespace to the project name of your application. For instance...
	```
	WinJS.Namespace.define("YourProjectName", { ...
	```
9.  Add a reference to the navigator.js file into the default.html file
10.  Add a PageControlNavigator to the body of the default.html file like the following...

	``` html
	<span style="background: white; color: black;">    </span><span style="background: white; color: blue;"><</span><span style="background: white; color: maroon;">div </span><span style="background: white; color: red;">id</span><span style="background: white; color: blue;">="contenthost"
			</span><span style="background: white; color: red;">data-win-control</span><span style="background: white; color: blue;">="Application2.PageControlNavigator"
			</span><span style="background: white; color: red;">data-win-options</span><span style="background: white; color: blue;">="{ home: '/html/page1.html' }"></</span><span style="background: white; color: maroon;">div</span><span style="background: white; color: blue;">></span>
	```
	Note: the `data-win-control` makes this an official WinJS control. The data-win-options "home" property tells this control which page to start with and which page to return to when the user elects through the navigator to go home.

Learning a new environment or framework or object model always takes some time and exposure, so take some time, exposure yourself to tasks like this, and have fun.