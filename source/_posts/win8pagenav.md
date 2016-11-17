---
title: Page Navigation in Windows 8 JavaScript Apps
categories: []
tags: []
date: 2001-01-01
permalink: win8pagenav
---

I&#39;d like to talk a bit about navigating in Metro apps using HTML/JavaScript. There are a few options for doing so, and as you probably know whenever there&#39;s more than one way to do things, then you the developer have power but not necessarily clarity.  The latter is what I hope to offer here.
<!-- xmore -->

First of all, the HTML/JavaScript that Metro apps are based on are identical to the HTML/JavaScript that websites are based on. It is entirely based on the standards. This is good because proprietary things are bad - generally speaking. This means that you can navigate exactly like you do in websites, but don&#39;t. I&#39;ll explain why not.

So you could navigate from default.html to page2.html like this...

``` html
<a href="page2.html">link to page 2</a>
```

But again... you should _usually_ do this. Doing so changes the "top level document location". This navigation looks something like this...

![](/files/win8pagenav_01.png)

Where the user is no longer on the default.html page. For websites, it&#39;s just fine to jump around by navigating the top level like this because you&#39;re usually not too concerned about state, but in a full-fledged application, you usually _are_ concerned with state and you can make your life easier by using the built-in navigation features that are provided by the VS2012 templates.

When you use the navigation functionality, a navigation looks more like this...

![](/files/win8pagenav_02.png)

Notice that the user is still on default.html, but the contents of the second page have simply been loaded into what is called the _contenthost_. Now, if you loaded a bunch of script and styles on default.html and even declared some variables and set some state, you still have all of that, even though to the user it appears that you&#39;ve navigated to a second page.

Implementing this is pretty straight-forward. Follow these steps...

1.  Get the navigate.js script file that comes with the Navigation Application project template in VS2012\. You can either start with the Navigation Application project template and notice that navigate.js is already in your js folder, or you can create a throw-away Nav project and steal that file.

    ![](/files/win8pagenav_03.png)
2.  Reference the navigate.js from your default.html file...

    ![](/files/win8pagenav_04.png)
3.  Add a contenthost to your default.html file

    ![](/files/win8pagenav_05.png)

And that&#39;s it. After this has been implemented, then you are free to do things in your JavaScript like this...

``` js
WinJS.Navigation.navigate("/pages/page2/page2.html");
```

And you have the chance to pass some parameters without having to resort to query string parameters which can be cumbersome and restricting. To do this, you can pass a second parameter to the navigate function like this...

``` js
WinJS.Navigation.navigate("/pages/page2/page2.html", myDoohicky);
```

...where _myDoohicky_ can be any JavaScript object you want.

Now, when might we actually perform this navigation? Well, in many cases it will be on some user action. For instance, let&#39;s say the user is going to click a button and we want to navigate them to page2.html. Let&#39;s see what that would look like...

### **HTML**

``` html
<button id="myButton">go to page2</button>
```

### **JavaScript**

``` js
ready: function (element, options) {
    document.querySelector("#myButton").onclick = function (args) {
        WinJS.Navigation.navigate("/pages/page2/page2.html", "test value");
    };
}
```

Now let&#39;s look at a bit more pragmatic example. Let&#39;s say we are working in a grid (WinJS.UI.ListView technically) and when the user touches one of the tiles, we want to navigate to a second page with more details about that element.

This can be wired up much like the simple button example above, but likely the elements in our grid are data bound from some list that we have. In that case, perhaps the easiest way to implement this is by adding a function to the list and then bind the click function just like any of the data elements are bound. Here&#39;s an example of that...

### **HTML**

``` html
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
<div id="list" data-win-control="WinJS.UI.ListView"></div>
```

### **JavaScript**

``` js
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

}
```

Now, there&#39;s a lot going on in the JavaScript file there, so let me break it down for you. First of all, I pulled this example from [another post I did](/netflixstage1) on creating a Netflix browser app utilizing their OData feed. If you want to know what&#39;s going on with the call and the data binding, go check that out.

I added to it though. I changed what happens in the forEach loop. The reason I did is to illustrate how to bind a function to like you bind any other data property. Look in the HTML at the div just below the one with the id of "template". I&#39;m binding the onclick attribute to the clickFunction. That clickFunction is what I created in the forEach loop of the JavaScript. Notice, though, that there&#39;s one funny thing we need to do to it. Since we are using this in the HTML it could be exploited and so we turn on strictProcessing for our app and that requires us to set _supportedForProcessing_ on any functions that we are going to call from the HTML. So, we set that to true for our function and we&#39;re good to go.

I hope this brings the concept home for you. If you have questions, leave a comment below and I&#39;ll be glad to try to help.