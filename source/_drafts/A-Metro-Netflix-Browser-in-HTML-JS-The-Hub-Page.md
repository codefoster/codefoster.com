---
title: A Metro Netflix Browser in HTML/JS - The Hub Page
tags: []
date: 2016-10-02 16:03:46
---

A previous post [link removed]&nbsp;illustrated how to call into the Netflix API to create a quick and dirty grid of movies with data from Netflix.

Well, that version landed during the CP version of Windows 8 and before a lot of other little things I&rsquo;ve learned about the platform, so I&rsquo;ve been meaning to improve it for some time, and now is that time. Let&rsquo;s do this&hellip;

## Discovery

Any time you&rsquo;re planning to utilize a public API like this, you might want to spend some time in discovery. Check the documentation, hit the API, look at the results, and overall just get a really good idea of what you&rsquo;re looking at so you don&rsquo;t waste time doing it while you&rsquo;re writing your code.

Let&rsquo;s do some discovery, then of Netflix&rsquo;s API.

Some companies have a link for developers available on their public portal. There&rsquo;s nothing like that on Netflix&rsquo;s site though. The next obvious thing to do is Bing it. A search for [netflix developer api](http://www.bing.com/search?q=netflix+developer+api&amp;src=IE-TopResult&amp;FORM=IE10TR) brings up some good results. The first takes us to [developer.netflix.com](http://developer.netflix.com/). This is a well made portal for developers and does a good job of informing us what we have to work with. On the documentation page, you can see that there is a JavaScript API and a REST API. Either of those would likely work, but I&rsquo;m in love with OData, and if you look a bit further down that page you&rsquo;ll see that they have an [OData Catalog](http://developer.netflix.com/docs/OData_Catalog) in beta. That&rsquo;s what I want to use. OData rocks because you get typed and interrelated entities with a common query URL language that various clients have been created for. But you can also just hit it sans client with HTTP calls and you can request a JSON response instead of the default XML if that&rsquo;s what you&rsquo;re into&hellip; and that&rsquo;s exactly what I&rsquo;m into!

The catalog is at odata.netflix.com/catalog. Let&rsquo;s make like dudes and skip the manual and just jump right in. I&rsquo;ll open [Fiddler](http://www.fiddler2.com/) up. If you&rsquo;re using Google Chrome, you can use the Dev Http Client app to do something similar. In Fiddler, I&rsquo;ll go to the Composer tab and add [http://odata.netflix.com/catalog](http://odata.netflix.com/catalog) for the GET request and hit Execute. The body of the response that I get back is like this&hellip;

<pre class="brush: xml;">
&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot; standalone=&quot;yes&quot;?&gt;
&lt;service xml:base=&quot;http://odata.netflix.com/v2/Catalog/&quot;
    xmlns:atom=&quot;http://www.w3.org/2005/Atom&quot;
    xmlns:app=&quot;http://www.w3.org/2007/app&quot;
    xmlns=&quot;http://www.w3.org/2007/app&quot;&gt;
  &lt;workspace&gt;
    &lt;atom:title&gt;Default&lt;/atom:title&gt;
    &lt;collection href=&quot;Genres&quot;&gt;
      &lt;atom:title&gt;Genres&lt;/atom:title&gt;
    &lt;/collection&gt;
    &lt;collection href=&quot;Titles&quot;&gt;
      &lt;atom:title&gt;Titles&lt;/atom:title&gt;
    &lt;/collection&gt;
    &lt;collection href=&quot;TitleAudioFormats&quot;&gt;
      &lt;atom:title&gt;TitleAudioFormats&lt;/atom:title&gt;
    &lt;/collection&gt;
    &lt;collection href=&quot;TitleAwards&quot;&gt;
      &lt;atom:title&gt;TitleAwards&lt;/atom:title&gt;
    &lt;/collection&gt;
    &lt;collection href=&quot;People&quot;&gt;
      &lt;atom:title&gt;People&lt;/atom:title&gt;
    &lt;/collection&gt;
    &lt;collection href=&quot;TitleScreenFormats&quot;&gt;
      &lt;atom:title&gt;TitleScreenFormats&lt;/atom:title&gt;
    &lt;/collection&gt;
    &lt;collection href=&quot;Languages&quot;&gt;
      &lt;atom:title&gt;Languages&lt;/atom:title&gt;
    &lt;/collection&gt;
  &lt;/workspace&gt;
&lt;/service&gt;</pre>

That&rsquo;s what the primary endpoint of an OData feed always looks like. It tells us what entities we are dealing with. You might expect to see a _Movies_ entity here, but in fact it&rsquo;s called _Titles_. Now all we have to do to access the Titles is change our request from [http://odata.netflix.com/catalog](http://odata.netflix.com/catalog) to [http://odata.netflix.com/catalog/Titles](http://odata.netflix.com/catalog/Titles).

Doing so and hitting Execute comes back with a 3,383,106-byte reponse! That&rsquo;s because we&rsquo;ve just request ALL of Netflix movies.

Let&rsquo;s do a couple of things here. First, let&rsquo;s request it in JSON and see what the size is. There are two ways (that I know of) to request a JSON response. We can either add $format=json as a URL parameter, or we can add Accept: application/json to the request headers. I&rsquo;ll do the latter so as not to clog up my URL. So here&rsquo;s what my request in Fiddler is looking like&hellip;

[![image](http://codefoster.blob.core.windows.net/site/image/339703299dc84bdb935f1819326d1b5d/netflixstage1_01_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/Netflix-Browser/0BCE0024/image.png)

Execute that and you&rsquo;ll see that our response size is down from 3,383,106 to 1,852,565! Awesome. That&rsquo;s why I&rsquo;m into JSON. And it will be smaller still once it implements JSON Light (more on that later). Not only are there a lot of Titles in this response, but there are a lot of properties per Title. Double click on the response (in the left pane of Fiddler) and look at the raw results (in the right pane) and see how many properties each title has. It&rsquo;s a lot, and most of those are _deferred_ properties which means that they are themselves typed entities containing a rich set of properties and we haven&rsquo;t even pulled that data down yet!

Well, let&rsquo;s make our payload reasonable first of all by just grabbing the first 10 titles. You would do that by using [http://odata.netflix.com/catalog/Titles?$top=10](http://odata.netflix.com/catalog/Titles?$top=10). Now we&rsquo;re pretty small, so we can afford to get some of this deferred data. Let&rsquo;s issue this [http://odata.netflix.com/catalog/Titles?$top=10&amp;$expand=Cast](http://odata.netflix.com/catalog/Titles?$top=10&amp;$expand=Cast), and see what you get. Notice the Cast is not longer deferred, but it has fetched all of the cast members of the title (don&rsquo;t look at the first one&hellip; it doesn&rsquo;t have any cast).

There&rsquo;s just a ton more that I could show you about interacting with this OData feed, but you should just check out [http://www.odata.org](http://www.odata.org) to get your information from the source. It&rsquo;s a ton of fun and really powerful, but we have an app to write.

## &nbsp;

## Writing our Metro app&hellip;

Now that we&rsquo;re pros at fetching Netflix data, let&rsquo;s do something with it. In my last Netflix post I started with the Grid Application, but this time I&rsquo;m going to start with blank&hellip; actually, I&rsquo;ll want the navigation functionality too, so fire up Visual Studio 2012 and start the Navigation App template&hellip;

[![image](http://codefoster.blob.core.windows.net/site/image/6d090f2e369e4cbdb35f8dfa98f04b6a/netflixstage1_02_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/Netflix-Browser/0B645DE0/image.png)

In case you haven&rsquo;t seen this template before, this is just the blank template but with the recommended navigation pattern for apps already implemented. So you get the navigator.js file (under the js folder) and you get the pages folder with the home page already in there for you. That&rsquo;s where we&rsquo;ll start.

Before we begin though, I want to add a helper function that tends to make my life easier. Paste the following into the default.js file _after_ the modular function so that it&rsquo;s in the global namespace&hellip;

<pre class="brush: js;">
function q(query, context) {
    context = context || document;
    var result = context.querySelectorAll(query);
    if (result.length &gt; 1) return Array.prototype.slice.call(result);
    else if (result.length == 1) return result[0];
    else return null;
}</pre>

Now for query selections, we can just do something like q(&ldquo;#myelementid&rdquo;).

Now open home.html, home.js, and home.css. We&rsquo;re going to be in those three file for a while.

In home.js, add the following to the ready function&hellip;

<pre class="brush: js;">
var titlesListGrouped = new WinJS.Binding.List().createGrouped(
    function (i) { return i.title.charAt(0).toUpperCase(); },
    function (i) { return { firstLetter: i.title.charAt(0).toUpperCase() }; }
);</pre>

That sets up the observable list that we&rsquo;re going to be putting our movies in after they&rsquo;re fetched. We want to create it right away because we&rsquo;re going to bind to it even before there are any movies in it. Actually, we won&rsquo;t use the titlesList, but only the titlesListGrouped since we will want our movies to be grouped. This can be set up before we even have any data in it because it&rsquo;s just a definition of the functions that are necessary for fetching groups.

Then we&rsquo;re ready to do our call to the API, so add this&hellip;

<pre class="brush: js;">
WinJS.xhr({
    url: &quot;http://odata.netflix.com/Catalog/Titles?$format=json&amp;$top=200&quot;
    }).then(function (xhr) {
        //code goes here
    });</pre>

This is going to get the first 200 movies. The .then method gives us a chance to capture the response (that&rsquo;s the _xhr_ parameter) and declare a function to execute when the call has come back. The code that we add inside that function may run 50 milliseconds after the call or it may run 10 seconds later, but either way, we&rsquo;ve called it asynchronously so we&rsquo;re not going to block the UI thread.

Now add this inside that .then function&hellip;

<pre class="brush: js;">
var titles = JSON.parse(xhr.response).d;
titles.forEach(function (i) {
    titlesList.push({
        title: i.ShortName,
        imageUrl: i.BoxArt.LargeUrl
    });
});</pre>

This is going to take some dissection because a lot is happening in a few short lines. First, JSON.parse turns the xhr.response from a string into a JavaScript object. Next, JSON Verbose format wraps results in a _d_ property, so we need to access d and should expect it to contain the array of titles. Next, we are iterating that list of titles and for each one, we are pushing an anonymous object containing _title_ and _imageUrl_ into our list. We&rsquo;re doing this because we don&rsquo;t want the whole gigantic object that Netflix sends us, so we _project_ it to a smaller, simpler object that contains all we need for now.

Next, we need to tie our binding list to the list view on the HTML page and tell it where to find its template and all that. So just add this code (just below the last code you entered)&hellip;

<pre class="brush: js;">
var list = q(&quot;#list&quot;).winControl;
list.itemDataSource = titlesListGrouped.dataSource;
list.itemTemplate = q(&quot;#template&quot;);
list.groupDataSource = titlesListGrouped.groups.dataSource;
list.groupHeaderTemplate = q(&quot;#headertemplate&quot;);</pre>

Well, that&rsquo;s the guts of it. Here&rsquo;s what you should have for your home.js&hellip;

<pre class="brush: js;">
(function () {
    &quot;use strict&quot;;

    WinJS.UI.Pages.define(&quot;/pages/home/home.html&quot;, {
        // This function is called whenever a user navigates to this page.
        // It populates the page elements with the app&#39;s data.
        ready: function (element, options) {

            var titlesListGrouped = new WinJS.Binding.List().createGrouped(
                function (i) { return i.title.charAt(0).toUpperCase(); },
                function (i) {
                    return { firstLetter: i.title.charAt(0).toUpperCase() };
                }
            );

            var list = q(&quot;#list&quot;).winControl;
            list.itemDataSource = titlesListGrouped.dataSource;
            list.itemTemplate = q(&quot;#template&quot;);
            list.groupDataSource = titlesListGrouped.groups.dataSource;
            list.groupHeaderTemplate = q(&quot;#headertemplate&quot;);

            WinJS.xhr({
                url: &quot;http://odata.netflix.com/Catalog/Titles&quot; +
                    &quot;?$format=json&amp;$top=200&quot;
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
})();</pre>

Now, in our home.html, we&rsquo;ll need to declare the template for the headers, the template for the items, and we&rsquo;ll also need to declare the list itself. Here&rsquo;s what all of that looks like. Add this inside the section labelled _Main content_&hellip;

<pre class="brush: xml;">
&lt;div id=&quot;headertemplate&quot; data-win-control=&quot;WinJS.Binding.Template&quot;&gt;
    &lt;div&gt;
        &lt;p data-win-bind=&quot;innerText:firstLetter&quot;&gt;&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div id=&quot;template&quot; data-win-control=&quot;WinJS.Binding.Template&quot;&gt;
    &lt;div&gt;
        &lt;img class=&quot;img&quot; data-win-bind=&quot;src:imageUrl&quot; /&gt;
        &lt;p class=&quot;name&quot; data-win-bind=&quot;innerText:title&quot;&gt;&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div id=&quot;list&quot; data-win-control=&quot;WinJS.UI.ListView&quot;&gt;&lt;/div&gt;</pre>

The header template and template or of type WinJS.Binding.Template and the list is of type WinJS.UI.ListView. Notice also, that inside our templates, we can use data-win-bind to bind element attributes to data properties.

You should be able to run your app at this point and get something that works. If you run into any trouble, you can either look through the steps again to see if you missed anything, or you could use a file compare tool to compare what you have to the attached project. It would be good practice for you to fix it manually. I always learn a lot that way.

The last thing we&rsquo;ll do for this is add just one style to make everything look a bit better. If you add the following to your home.css file, then the list will automatically show two rows of data which will look much better.

<pre class="brush: css;">
.homepage #list {
    height:100%;
}</pre>

Notice that I&rsquo;ve prefixed my #list with the .homepage class. This is because CSS style rules aren&rsquo;t scoped like the JavaScript functions are, so you always have to specify the fully qualified names. If you don&rsquo;t, then an element with the id _list_ on another page could get this style rule applied as well.

There you have it. I&rsquo;ll call this &ldquo;Stage 1&rdquo; and attempt to blog about adding the section and detail pages later. Here&rsquo;s what your app should look like at this point though&hellip;

[![Screenshot (9)](http://codefoster.blob.core.windows.net/site/image/250dffcc9c544faf9792981f96bc46a1/netflixstage1_03_1.png "Screenshot (9)")](http://{fix}/image.axd?picture=Windows-Live-Writer/Netflix-Browser/49D143D5/Screenshot-9.png)

You can download source code for the entire project here: [NetflixBrowser.zip (12.48 kb)](/bcms-media/Files/Download?id=98fee31b-a732-422c-a81e-a3530070b963).

&nbsp;