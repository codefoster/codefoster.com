---
title: Page Navigation in Windows 8 JavaScript Apps
tags: []
date: 
---

I&rsquo;d like to talk a bit about navigating in Metro apps using HTML/JavaScript. There are a few options for doing so, and as you probably know whenever there&rsquo;s more than one way to do things, then you the developer have power but not necessarily clarity.  The latter is what I hope to offer here.

First of all, the HTML/JavaScript that Metro apps are based on are identical to the HTML/JavaScript that websites are based on. It is entirely based on the standards. This is good because proprietary things are bad - generally speaking. This means that you can navigate exactly like you do in websites, but don&rsquo;t. I&rsquo;ll explain why not.

So you could navigate from default.html to page2.html like this...;

<pre class="brush: xml;">
<a href="page2.html">link to page 2</a></pre>

But again...; you should _usually_ do this. Doing so changes the &ldquo;top level document location&rdquo;. This navigation looks something like this...;

![Performing a top-level navigation](http://codefoster.blob.core.windows.net/site/image/dd88c575a65b494bb66f7fdafc69bb0b/win8pagenav_01_1.png "Performing a top-level navigation.")

Where the user is no longer on the default.html page. For websites, it&rsquo;s just fine to jump around by navigating the top level like this because you&rsquo;re usually not too concerned about state, but in a full-fledged application, you usually _are_ concerned with state and you can make your life easier by using the built-in navigation features that are provided by the VS2012 templates.

When you use the navigation functionality, a navigation looks more like this...;

![Navigating to page2.html the recommended way](http://codefoster.blob.core.windows.net/site/image/785fed727068463aa6c7f6cc846ad69e/win8pagenav_02_1.png "Navigating to page2.html the recommended way.")

Notice that the user is still on default.html, but the contents of the second page have simply been loaded into what is called the _contenthost_. Now, if you loaded a bunch of script and styles on default.html and even declared some variables and set some state, you still have all of that, even though to the user it appears that you&rsquo;ve navigated to a second page.

Implementing this is pretty straight-forward. Follow these steps...;

1.  Get the navigate.js script file that comes with the Navigation Application project template in VS2012\. You can either start with the Navigation Application project template and notice that navigate.js is already in your js folder, or you can create a throw-away Nav project and steal that file.

	[![](http://codefoster.blob.core.windows.net/site/image/f7c50c8e2beb45cba09992ab12701c66/win8pagenav_03_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/Windows-8-HTMLJS/47E0B8FB/image.png)
2.  Reference the navigate.js from your default.html file...;

	[![](http://codefoster.blob.core.windows.net/site/image/4c5c779b13324e439c25c9607d87b96e/win8pagenav_04_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/Windows-8-HTMLJS/011C4153/image.png)
3.  Add a contenthost to your default.html file

	[![](http://codefoster.blob.core.windows.net/site/image/17c6c9800bf44e65a1e194640f768f5e/win8pagenav_05_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/Windows-8-HTMLJS/5A50BBC3/image.png)

And that&rsquo;s it. After this has been implemented, then you are free to do things in your JavaScript like this...;

<pre class="brush: js;">
WinJS.Navigation.navigate("/pages/page2/page2.html");</pre>

And you have the chance to pass some parameters without having to resort to query string parameters which can be cumbersome and restricting. To do this, you can pass a second parameter to the navigate function like this...;

<pre class="brush: js;">
WinJS.Navigation.navigate("/pages/page2/page2.html", myDoohicky);</pre>

...;where _myDoohicky_ can be any JavaScript object you want.

Now, when might we actually perform this navigation? Well, in many cases it will be on some user action. For instance, let&rsquo;s say the user is going to click a button and we want to navigate them to page2.html. Let&rsquo;s see what that would look like...;

### **HTML**

<pre class="brush: xml;">
<button id="myButton">go to page2</button></pre>

### **JavaScript**

<pre class="brush: js;">
ready: function (element, options) {
    document.querySelector("#myButton").onclick = function (args) {
        WinJS.Navigation.navigate("/pages/page2/page2.html", "test value");
    };
}</pre>

Now let&rsquo;s look at a bit more pragmatic example. Let&rsquo;s say we are working in a grid (WinJS.UI.ListView technically) and when the user touches one of the tiles, we want to navigate to a second page with more details about that element.

This can be wired up much like the simple button example above, but likely the elements in our grid are data bound from some list that we have. In that case, perhaps the easiest way to implement this is by adding a function to the list and then bind the click function just like any of the data elements are bound. Here&rsquo;s an example of that...;

### **HTML**

<pre class="brush: xml;">
<div id="headertemplate" data-win-control="WinJS.Binding.Template">
    <div>
        <p data-win-bind="innerText:firstLetter"></p>
    </div>
</div>
<div id="template" data-win-control="WinJS.Binding.Template">
    <div data-win-bind="onclick:clickFunction">
        <img class="img" data-win-bind="src:imageUrl" />
        <p class="name" data-win-bind="innerText:title"></p>
    </div>
</div>
<div id="list" data-win-control="WinJS.UI.ListView"></div></pre>

### **JavaScript**

<pre class="brush: js;">
ready: function (element, options) {

    var titlesListGrouped = new WinJS.Binding.List().createGrouped(
        function (i) { return i.title.charAt(0).toUpperCase(); },
        function (i) { return { firstLetter: i.title.charAt(0).toUpperCase() }; }
    );

    var list = q("#list").winControl;
    list.itemDataSource = titlesListGrouped.dataSource;
    list.itemTemplate = q("#template");
    list.groupDataSource = titlesListGrouped.groups.dataSource;
    list.groupHeaderTemplate = q("#headertemplate");

    WinJS.xhr({ url: "http://odata.netflix.com/Catalog/Titles?$format=json&amp;$top=200" })
        .then(function (xhr) {
            var titles = JSON.parse(xhr.response).d;
            titles.forEach(function (i) {
                var item = {
                    title: i.ShortName,
                    imageUrl: i.BoxArt.LargeUrl,
                    clickFunction: function(args) { WinJS.Navigation.navigate("/pages/page2/page2.html", item); }
                };
                item.clickFunction.supportedForProcessing = true;
                titlesListGrouped.push(item);
            });
        });

}</pre>

Now, there&rsquo;s a lot going on in the JavaScript file there, so let me break it down for you. First of all, I pulled this example from [another post I did](/netflixstage1) on creating a Netflix browser app utilizing their OData feed. If you want to know what&rsquo;s going on with the call and the data binding, go check that out.

I added to it though. I changed what happens in the forEach loop. The reason I did is to illustrate how to bind a function to like you bind any other data property. Look in the HTML at the div just below the one with the id of &ldquo;template&rdquo;. I&rsquo;m binding the onclick attribute to the clickFunction. That clickFunction is what I created in the forEach loop of the JavaScript. Notice, though, that there&rsquo;s one funny thing we need to do to it. Since we are using this in the HTML it could be exploited and so we turn on strictProcessing for our app and that requires us to set _supportedForProcessing_ on any functions that we are going to call from the HTML. So, we set that to true for our function and we&rsquo;re good to go.

I hope this brings the concept home for you. If you have questions, leave a comment below and I&rsquo;ll be glad to try to help.