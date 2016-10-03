---
title: Data Presentation
tags: []
date: 2016-10-02 16:03:46
---

Sometimes it&#39;s hard to know what control to use when you&#39;re thinking about bringing your data feed into your Windows 8 app. You know you want to bring them in as tiles of some form or another. Maybe you want to do classic square tiles like eBay.

[![](http://codefoster.blob.core.windows.net/site/image/b38b74f11a0e4a2c8bc27797672fc6fb/datapresentation_01_1.png "Screenshot (29)")](http://{fix}/image.axd?picture=Windows-Live-Writer/2d63a4248098/489A76C9/Screenshot-29.png)

Hopefully, though, you want to add a little bit of flare and personality to yours. You could do something like the Cookbook app. Their primary data point is obviously a recipe and it looks to me like the designers of this app have put them in little Polaroids with shadows and everything.

[![](http://codefoster.blob.core.windows.net/site/image/e245ee734494425bae4efa25d6749a94/datapresentation_02_1.png "Screenshot (36)")](http://{fix}/image.axd?picture=Windows-Live-Writer/2d63a4248098/2330835B/Screenshot-36.png)

You could copy the music app that utilizes _hero images_ &ndash; larger than average images that communicate a sense of feature or significance. &lt;disclaimer&gt;Please ignore that Justin Bieber appears to be in my _now playing_ section. I can assure you that&rsquo;s not the case&lt;/disclaimer&gt;

[![](http://codefoster.blob.core.windows.net/site/image/75fd3ed222e44941a7d1294053c35dcf/datapresentation_03_1.png "Screenshot (27)")](http://{fix}/image.axd?picture=Windows-Live-Writer/2d63a4248098/08C06A77/Screenshot-27.png)

You could even get tr&eacute;s chic and model _Cocktail Flow _with their novel, beautiful tiles. They hardly look like tiles, but they still convey that essential Windows 8 design.

[![](http://codefoster.blob.core.windows.net/site/image/9f5326cca46a4cc885fdfa201255dba5/datapresentation_04_1.png "Screenshot (34)")](http://{fix}/image.axd?picture=Windows-Live-Writer/2d63a4248098/055ED2CF/Screenshot-34.png)

Inevitably, you&rsquo;re going to have to make a choice about what control underlies this presentation of data, and eventually you&rsquo;re going to have to implement it.

In this post, I&rsquo;d like to do a little bit of a study into what control to choose when and why. As usual, I&rsquo;ll be coming from an HTML/JS perspective, so if you&rsquo;re wondering what your options are in XAML, Bing is your friend.

The first thing I want to point out is that not all lists of data are created equal. If you&rsquo;re working on a section of your hub, you&rsquo;re working with a very finite set of data. On the other hand, if your user has chosen to see something like your list of all recipes, then the list could have 10&rsquo;s or 100&rsquo;s of items in it. The two scenarios are candidates for vastly different solutions.

For the former, the hub section, I would employ a grid like what you see in the Music app screenshot above. You know that you have exactly four cells for images (for albums in this case) and you can determine which four albums you want to show and of them which deserves the ginormous featured cell on the left. The advantage to using a grid is that you have ultimate control over its layout. You don&rsquo;t have to stick to symmetric lists of square. You can get funky with the layout and you can change it up too. You can create one layout for features a single item and another for featuring three. It&rsquo;s all up to you (with the permission of your designer friend of course). The downside to using a grid is that you don&rsquo;t get to bind it to an enumerable list of data. That&rsquo;s not much of a problem, however, because again you&rsquo;re only working with a handful or so of items. Also, grids don&rsquo;t have any of the UX yum built in. They don&rsquo;t automatically handle selection for instance, so if you want to allow the user to swipe select multiple entities in your grid, you&rsquo;re going to have to figure out how to do that.

For the latter, the recipe list like you see in the Cookbook app screenshot above, I would employ a ListView. A ListView does have the UX yum built in. It automatically handles invocation, selection, and a lot more. It flows, it pans, it groups, and it wraps. It&rsquo;s really great at what it&rsquo;s made for.

In other scenarios, if you&rsquo;re okay with giving up the yum that a ListView provides, you might want to opt for a FlexBox. Flexboxes give you better control than a ListView over how it&rsquo;s members are laid out, and nothing complicated gets rendered out for each member of the flexbox. If you just inject a bunch of divs into your flexbox then that&rsquo;s all it will contain.

To avoid a merely conceptual post on a developers&rsquo; blog, allow me to create a quick, custom grid and then populate it with some content.

First, the design. Let me whip out my digitizer pen and draw up a quick grid layout using CorelDRAW (woot!)&hellip;

[![](http://codefoster.blob.core.windows.net/site/image/e494eac3dc684369b11f815825161b88/datapresentation_05_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/2d63a4248098/75FB4AF2/image.png)

That&rsquo;s the concept. Now for the implementation. I&rsquo;m only going to layout the seven items in the first section.

First the HTML&hellip;

<pre class="brush: xml; highlight: [24-32];">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot; /&gt;
    &lt;title&gt;fancygrid&lt;/title&gt;

    &lt;!-- WinJS references --&gt;
    &lt;link href=&quot;//Microsoft.WinJS.1.0/css/ui-dark.css&quot; rel=&quot;stylesheet&quot; /&gt;
    &lt;script src=&quot;//Microsoft.WinJS.1.0/js/base.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;//Microsoft.WinJS.1.0/js/ui.js&quot;&gt;&lt;/script&gt;

    &lt;link href=&quot;fancygrid.css&quot; rel=&quot;stylesheet&quot; /&gt;
    &lt;script src=&quot;fancygrid.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class=&quot;fancygrid fragment&quot;&gt;
        &lt;header aria-label=&quot;Header content&quot; role=&quot;banner&quot;&gt;
            &lt;button class=&quot;win-backbutton&quot; aria-label=&quot;Back&quot; disabled type=&quot;button&quot;&gt;&lt;/button&gt;
            &lt;h1 class=&quot;titlearea win-type-ellipsis&quot;&gt;
                &lt;span class=&quot;pagetitle&quot;&gt;Fancy Grid&lt;/span&gt;
            &lt;/h1&gt;
        &lt;/header&gt;
        &lt;section aria-label=&quot;Main content&quot; role=&quot;main&quot;&gt;
            &lt;div id=&quot;grid&quot;&gt;
                &lt;div&gt;&lt;/div&gt;
                &lt;div&gt;&lt;/div&gt;
                &lt;div&gt;&lt;/div&gt;
                &lt;div&gt;&lt;/div&gt;
                &lt;div&gt;&lt;/div&gt;
                &lt;div&gt;&lt;/div&gt;
                &lt;div&gt;&lt;/div&gt;
            &lt;/div&gt;
        &lt;/section&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

The only thing in that HTML that isn&rsquo;t boilerplate is the div called _grid_ and the seven div&rsquo;s inside. There&rsquo;s one for each of the tiles in our layout. And now on to the CSS which is not a terribly lot longer&hellip;

<pre class="brush: css;">
.fancygrid section[role=main] &gt; * {
    margin-left: 120px;
}

.fancygrid #grid {
    height:540px;
    display: -ms-grid;
    -ms-grid-columns: 240px 300px 240px;
    -ms-grid-rows: 184px 184px 184px;
}

    .fancygrid #grid &gt; div {
        border: 1px solid white;
        margin: 5px;
    }

        .fancygrid #grid &gt; div:nth-of-type(1) {
            -ms-grid-row: 1;
            -ms-grid-column: 1;
        }
        .fancygrid #grid &gt; div:nth-of-type(2) {
            -ms-grid-row: 2;
            -ms-grid-column: 1;
        }
        .fancygrid #grid &gt; div:nth-of-type(3) {
            -ms-grid-row: 3;
            -ms-grid-column: 1;
        }
        .fancygrid #grid &gt; div:nth-of-type(4) {
            -ms-grid-row: 1;
            -ms-grid-column: 2;
            -ms-grid-row-span: 3;
        }
        .fancygrid #grid &gt; div:nth-of-type(5) {
            -ms-grid-row: 1;
            -ms-grid-column: 3;
        }
        .fancygrid #grid &gt; div:nth-of-type(6) {
            -ms-grid-row: 2;
            -ms-grid-column: 3;
        }
        .fancygrid #grid &gt; div:nth-of-type(7) {
            -ms-grid-row: 3;
            -ms-grid-column: 3;
        }</pre>

Great. No JavaScript. As it should be. This is just a matter of layout, so it&rsquo;s a collaborative effort between HTML (our structure) and CSS (our layout and style). The HTML in this case is dead simple. It&rsquo;s just a div with seven div&rsquo;s inside. Our CSS is like that kid in your chemistry lab in high school that did all the work for your whole lab group while you played Nintendo. Slacker.

So let me explain. The first style rule that refers to the main section is just something I do make sure everything in that main section takes on the 120px left margin that characterizes Windows 8 apps. The next rule applies to the grid. You may know by now, but the .fancygrid that preceeds #grid is just there to namespace this rule to this page. The next rule applies to all seven of the child div&rsquo;s of the #grid div. The child combinator (the &gt;) in this case is likely important. If you end up putting content inside of these cells and that content contains any div elements at all, this rule would apply to them if you used a space (the descendent combinator) instead of that greater than sign. So for all seven cells we want to draw a white border and give 5px of space. Why 5px? Because the Windows 8 design principles call for 10px between items and so that would be 5px around each item. Then I&rsquo;m using the :nth-of-type() pseudo-class to refer to each div according to its position and add the correct -ms-grid properties to put it where it belongs. Notice how the 4th div has a span of 3.

And here&rsquo;s the result&hellip;

[![](http://codefoster.blob.core.windows.net/site/image/d98c1b9c30fa4902b48faeea0adb24b3/datapresentation_06_1.png "Screenshot (38)")](http://{fix}/image.axd?picture=Windows-Live-Writer/2d63a4248098/31FF30DE/Screenshot-38.png)

Now, if you&rsquo;re like me, you see this done once and it looks fine and dandy, but your mind races to imagine the value of something like this in a library primed for reuse. It would be super easy to dynamically add div&rsquo;s and a couple of CSS properties each according to the template selection chosen by the developer. I believe I&rsquo;ll get started on that now. Or perhaps soon. By all means, please beat me to it.

Hope this has been helpful. Now get to work!