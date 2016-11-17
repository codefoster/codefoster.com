---
title: A Metro Netflix Browser in HTML/JS - The Hub Page
categories: []
tags: []
date: 2001-01-01
permalink: netflixstage1
---

A previous post [link removed] illustrated how to call into the Netflix API to create a quick and dirty grid of movies with data from Netflix.

Well, that version landed during the CP version of Windows 8 and before a lot of other little things I&#39;ve learned about the platform, so I&#39;ve been meaning to improve it for some time, and now is that time. Let&#39;s do this...

## Discovery

Any time you&#39;re planning to utilize a public API like this, you might want to spend some time in discovery. Check the documentation, hit the API, look at the results, and overall just get a really good idea of what you&#39;re looking at so you don&#39;t waste time doing it while you&#39;re writing your code.

Let&#39;s do some discovery, then of Netflix&#39;s API.

Some companies have a link for developers available on their public portal. There&#39;s nothing like that on Netflix&#39;s site though. The next obvious thing to do is Bing it. A search for [netflix developer api](http://www.bing.com/search?q=netflix+developer+api&amp;src=IE-TopResult&amp;FORM=IE10TR) brings up some good results. The first takes us to [developer.netflix.com](http://developer.netflix.com/). This is a well made portal for developers and does a good job of informing us what we have to work with. On the documentation page, you can see that there is a JavaScript API and a REST API. Either of those would likely work, but I&#39;m in love with OData, and if you look a bit further down that page you&#39;ll see that they have an [OData Catalog](http://developer.netflix.com/docs/OData_Catalog) in beta. That&#39;s what I want to use. OData rocks because you get typed and interrelated entities with a common query URL language that various clients have been created for. But you can also just hit it sans client with HTTP calls and you can request a JSON response instead of the default XML if that&#39;s what you&#39;re into... and that&#39;s exactly what I&#39;m into!

The catalog is at odata.netflix.com/catalog. Let&#39;s make like dudes and skip the manual and just jump right in. I&#39;ll open [Fiddler](http://www.fiddler2.com/) up. If you&#39;re using Google Chrome, you can use the Dev Http Client app to do something similar. In Fiddler, I&#39;ll go to the Composer tab and add [http://odata.netflix.com/catalog](http://odata.netflix.com/catalog) for the GET request and hit Execute. The body of the response that I get back is like this...

``` xml
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<service xml:base="http://odata.netflix.com/v2/Catalog/"
    xmlns:atom="http://www.w3.org/2005/Atom"
    xmlns:app="http://www.w3.org/2007/app"
    xmlns="http://www.w3.org/2007/app">
  <workspace>
    <atom:title>Default</atom:title>
    <collection href="Genres">
      <atom:title>Genres</atom:title>
    </collection>
    <collection href="Titles">
      <atom:title>Titles</atom:title>
    </collection>
    <collection href="TitleAudioFormats">
      <atom:title>TitleAudioFormats</atom:title>
    </collection>
    <collection href="TitleAwards">
      <atom:title>TitleAwards</atom:title>
    </collection>
    <collection href="People">
      <atom:title>People</atom:title>
    </collection>
    <collection href="TitleScreenFormats">
      <atom:title>TitleScreenFormats</atom:title>
    </collection>
    <collection href="Languages">
      <atom:title>Languages</atom:title>
    </collection>
  </workspace>
</service>
```

That&#39;s what the primary endpoint of an OData feed always looks like. It tells us what entities we are dealing with. You might expect to see a _Movies_ entity here, but in fact it&#39;s called _Titles_. Now all we have to do to access the Titles is change our request from [http://odata.netflix.com/catalog](http://odata.netflix.com/catalog) to [http://odata.netflix.com/catalog/Titles](http://odata.netflix.com/catalog/Titles).

Doing so and hitting Execute comes back with a 3,383,106-byte reponse! That&#39;s because we&#39;ve just request ALL of Netflix movies.

Let&#39;s do a couple of things here. First, let&#39;s request it in JSON and see what the size is. There are two ways (that I know of) to request a JSON response. We can either add $format=json as a URL parameter, or we can add Accept: application/json to the request headers. I&#39;ll do the latter so as not to clog up my URL. So here&#39;s what my request in Fiddler is looking like...

[![image](http://codefoster.blob.core.windows.net/site/image/339703299dc84bdb935f1819326d1b5d/netflixstage1_01_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/Netflix-Browser/0BCE0024/image.png)

Execute that and you&#39;ll see that our response size is down from 3,383,106 to 1,852,565! Awesome. That&#39;s why I&#39;m into JSON. And it will be smaller still once it implements JSON Light (more on that later). Not only are there a lot of Titles in this response, but there are a lot of properties per Title. Double click on the response (in the left pane of Fiddler) and look at the raw results (in the right pane) and see how many properties each title has. It&#39;s a lot, and most of those are _deferred_ properties which means that they are themselves typed entities containing a rich set of properties and we haven&#39;t even pulled that data down yet!

Well, let&#39;s make our payload reasonable first of all by just grabbing the first 10 titles. You would do that by using [http://odata.netflix.com/catalog/Titles?$top=10](http://odata.netflix.com/catalog/Titles?$top=10). Now we&#39;re pretty small, so we can afford to get some of this deferred data. Let&#39;s issue this [http://odata.netflix.com/catalog/Titles?$top=10&amp;$expand=Cast](http://odata.netflix.com/catalog/Titles?$top=10&amp;$expand=Cast), and see what you get. Notice the Cast is not longer deferred, but it has fetched all of the cast members of the title (don&#39;t look at the first one... it doesn&#39;t have any cast).

There&#39;s just a ton more that I could show you about interacting with this OData feed, but you should just check out [http://www.odata.org](http://www.odata.org) to get your information from the source. It&#39;s a ton of fun and really powerful, but we have an app to write.

##  

## Writing our Metro app...

Now that we&#39;re pros at fetching Netflix data, let&#39;s do something with it. In my last Netflix post I started with the Grid Application, but this time I&#39;m going to start with blank... actually, I&#39;ll want the navigation functionality too, so fire up Visual Studio 2012 and start the Navigation App template...

[![image](http://codefoster.blob.core.windows.net/site/image/6d090f2e369e4cbdb35f8dfa98f04b6a/netflixstage1_02_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/Netflix-Browser/0B645DE0/image.png)

In case you haven&#39;t seen this template before, this is just the blank template but with the recommended navigation pattern for apps already implemented. So you get the navigator.js file (under the js folder) and you get the pages folder with the home page already in there for you. That&#39;s where we&#39;ll start.

Before we begin though, I want to add a helper function that tends to make my life easier. Paste the following into the default.js file _after_ the modular function so that it&#39;s in the global namespace...

``` js
function q(query, context) {
    context = context || document;
    var result = context.querySelectorAll(query);
    if (result.length > 1) return Array.prototype.slice.call(result);
    else if (result.length == 1) return result[0];
    else return null;
}
```

Now for query selections, we can just do something like q("#myelementid").

Now open home.html, home.js, and home.css. We&#39;re going to be in those three file for a while.

In home.js, add the following to the ready function...

``` js
var titlesListGrouped = new WinJS.Binding.List().createGrouped(
    function (i) { return i.title.charAt(0).toUpperCase(); },
    function (i) { return { firstLetter: i.title.charAt(0).toUpperCase() }; }
);
```

That sets up the observable list that we're going to be putting our movies in after they're fetched. We want to create it right away because we're going to bind to it even before there are any movies in it. Actually, we won't use the titlesList, but only the titlesListGrouped since we will want our movies to be grouped. This can be set up before we even have any data in it because it's just a definition of the functions that are necessary for fetching groups.

Then we're ready to do our call to the API, so add this...

``` js
WinJS.xhr({
    url: "http://odata.netflix.com/Catalog/Titles?$format=json&amp;$top=200"
    }).then(function (xhr) {
        //code goes here
    });
```

This is going to get the first 200 movies. The .then method gives us a chance to capture the response (that's the _xhr_ parameter) and declare a function to execute when the call has come back. The code that we add inside that function may run 50 milliseconds after the call or it may run 10 seconds later, but either way, we've called it asynchronously so we're not going to block the UI thread.

Now add this inside that .then function...

``` js
var titles = JSON.parse(xhr.response).d;
titles.forEach(function (i) {
    titlesList.push({
        title: i.ShortName,
        imageUrl: i.BoxArt.LargeUrl
    });
});
```

This is going to take some dissection because a lot is happening in a few short lines. First, JSON.parse turns the xhr.response from a string into a JavaScript object. Next, JSON Verbose format wraps results in a _d_ property, so we need to access d and should expect it to contain the array of titles. Next, we are iterating that list of titles and for each one, we are pushing an anonymous object containing _title_ and _imageUrl_ into our list. We're doing this because we don't want the whole gigantic object that Netflix sends us, so we _project_ it to a smaller, simpler object that contains all we need for now.

Next, we need to tie our binding list to the list view on the HTML page and tell it where to find its template and all that. So just add this code (just below the last code you entered)...

``` js
var list = q("#list").winControl;
list.itemDataSource = titlesListGrouped.dataSource;
list.itemTemplate = q("#template");
list.groupDataSource = titlesListGrouped.groups.dataSource;
list.groupHeaderTemplate = q("#headertemplate");
```

Well, that's the guts of it. Here's what you should have for your home.js...

``` js
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page.
        // It populates the page elements with the app's data.
        ready: function (element, options) {

            var titlesListGrouped = new WinJS.Binding.List().createGrouped(
                function (i) { return i.title.charAt(0).toUpperCase(); },
                function (i) {
                    return { firstLetter: i.title.charAt(0).toUpperCase() };
                }
            );

            var list = q("#list").winControl;
            list.itemDataSource = titlesListGrouped.dataSource;
            list.itemTemplate = q("#template");
            list.groupDataSource = titlesListGrouped.groups.dataSource;
            list.groupHeaderTemplate = q("#headertemplate");

            WinJS.xhr({
                url: "http://odata.netflix.com/Catalog/Titles" +
                    "?$format=json&amp;$top=200"
            }).then(function (xhr) {
                    var titles = JSON.parse(xhr.response).d;
                    titles.forEach(function (i) {
                        titlesListGrouped.push({
                            title: i.ShortName,
                            imageUrl: i.BoxArt.LargeUrl
                        });
                    });
                });

        }
    });
})();
```

Now, in our home.html, we'll need to declare the template for the headers, the template for the items, and we'll also need to declare the list itself. Here's what all of that looks like. Add this inside the section labelled _Main content_...

``` xml
<div id="headertemplate" data-win-control="WinJS.Binding.Template">
    <div>
        <p data-win-bind="innerText:firstLetter"></p>
    </div>
</div>
<div id="template" data-win-control="WinJS.Binding.Template">
    <div>
        <img class="img" data-win-bind="src:imageUrl" />
        <p class="name" data-win-bind="innerText:title"></p>
    </div>
</div>
<div id="list" data-win-control="WinJS.UI.ListView"></div>
```

The header template and template or of type WinJS.Binding.Template and the list is of type WinJS.UI.ListView. Notice also, that inside our templates, we can use data-win-bind to bind element attributes to data properties.

You should be able to run your app at this point and get something that works. If you run into any trouble, you can either look through the steps again to see if you missed anything, or you could use a file compare tool to compare what you have to the attached project. It would be good practice for you to fix it manually. I always learn a lot that way.

The last thing we'll do for this is add just one style to make everything look a bit better. If you add the following to your home.css file, then the list will automatically show two rows of data which will look much better.

``` css
.homepage #list {
    height:100%;
}
```

Notice that I've prefixed my #list with the .homepage class. This is because CSS style rules aren't scoped like the JavaScript functions are, so you always have to specify the fully qualified names. If you don't, then an element with the id _list_ on another page could get this style rule applied as well.

There you have it. I'll call this "Stage 1" and attempt to blog about adding the section and detail pages later. Here's what your app should look like at this point though...

[![Screenshot (9)](http://codefoster.blob.core.windows.net/site/image/250dffcc9c544faf9792981f96bc46a1/netflixstage1_03_1.png "Screenshot (9)")](http://{fix}/image.axd?picture=Windows-Live-Writer/Netflix-Browser/49D143D5/Screenshot-9.png)

You can download source code for the entire project here: [NetflixBrowser.zip (12.48 kb)](/bcms-media/Files/Download?id=98fee31b-a732-422c-a81e-a3530070b963).