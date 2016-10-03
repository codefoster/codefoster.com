---
title: How to do Semantic Zoom in an HTML/JS App
tags: []
date: 2016-10-02 16:03:46
---

Semantic Zoom is super easy, but even the easy things can use some conceptual explanation and examples to clarify them. Rest assured that once you see it, you&rsquo;ll go &ldquo;Ah! That won&rsquo;t be a problem then.&rdquo;

If you use XAML/C# to make your Metro apps, then you should check out [Jerry Nixon&#39;s post on semantic zoom](http://blog.jerrynixon.com/2012/03/windows-8-semantic-zoom-versus-optical.html#more).

So, I&rsquo;m going to be talking about Semantic Zoom. You know what that is right? It&rsquo;s different from optical zoom. It&rsquo;s a Windows 8 differentiator and it&rsquo;s really helpful. It&rsquo;s a way of zooming out of some information and making it easier to orient and easier to consume. Optical zoom just scales everything. Semantic zoom shows a different logical version of the _same_ list.

Any given list in a Windows 8 screen may be 3 or 4 or 5 screens worth of horizontal information, right? Well, it&rsquo;s not hard to pan that far, but it&rsquo;s not always easy to really see what your scope is when it&rsquo;s on 4 screens. When a user semantically zooms out, he is hoping to get oriented with your data. He is hoping to rise up so he can understand and/or so he can dive back in at just the right place.

I&rsquo;m going to provide an example here. My example is a list of attractions in Kauai. Each has a _category_ property - things like Flora, Scenery, Waterfall, etc. I will use these categories to group my list, but with the grouping and all of the content I want to show, the list is about 4 screens wide&hellip;

[![](http://codefoster.blob.core.windows.net/site/image/48f97207597b432fb6cae8c35aea0c53/semanticzoom_01_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/How-to-do-Semantic-Zoom-in-an-HTMLJS-App/203F9B40/image.png)

This might be a good scope of data for this view in my app, but at the same time it might be too much to expect a user to be able to consume in a glance. So, we implement semantic zoom. When the user pinch zooms, we want to show them something like this&hellip;

[![](http://codefoster.blob.core.windows.net/site/image/2f6b5a15a9834eb9afbc443b18de98ec/semanticzoom_02_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/How-to-do-Semantic-Zoom-in-an-HTMLJS-App/6194E09D/image.png)

This is not very stylish, I know, but it serves to make the point. We want to indicate in much less horizontal space (and hopefully on a single screen) what our data contains. In this case, we&rsquo;re showing the categories. We could get quite creative with what we show here. The concept is to logically expand our scope to orient the user.

Now when the user chooses the Waterfall tile, he&rsquo;ll be semantically zoomed back in and will be taken directly to the waterfall section. The user can also zoom back in using a stretch zoom gesture (two fingers on the screen and then moved further apart).

Let&rsquo;s move on to how to implement this. It&rsquo;s by no means rocket science. Unless of course you&rsquo;re building an app for&hellip; er&hellip; rocket science.

Start off with a blank Metro application. First thing you&rsquo;re going to need is the data.

In your default.js file, add an onready function like this&hellip;

<pre class="brush: css;">
app.onready = function (args) {

};</pre>

And then inside of it add your data like this&hellip;

<pre class="brush: js;">
var attractions = [
    { name: &quot;Fern Grotto&quot;, category: &quot;Flora&quot;, location: &quot;East&quot;, imageUrl: &quot;http://www.kauai.com/photos/kauai/point/98/super/fern_grotto-kauai-attraction.JPG&quot;, description: &quot;Only accessible by boat or Kayak, the fern Grotto is located about two miles up Kauai&rsquo;s Wailua River, the only navigable river in the State of Hawaii.&quot; },
    { name: &quot;Hanalei Valley Lookout&quot;, category: &quot;Scenery&quot;, location: &quot;North&quot;, imageUrl: &quot;http://www.kauai.com/photos/kauai/point/51/super/hanalei-valley-lookout-kauai-attractions-3.jpg&quot;, description: &quot;The Hanalei Valley is an enchanted site charmed with the likes of countless waterfalls, rainbows, fields of taro and hidden treasures waiting to be explored.&quot; },
    { name: &quot;Hanapepe Swinging Bridge&quot;, category: &quot;Other&quot;, location: &quot;West&quot;, imageUrl: &quot;http://www.kauai.com/photos/kauai/point/93/super/843726541306971801.jpg&quot;, description: &quot;Located in old town Hananpepe a Historical sight made up of an eclectic group of galleries and shops. Home to Friday night Art walk.&quot; },
    { name: &quot;Kalalau Lookout&quot;, category: &quot;Scenery&quot;, location: &quot;West&quot;, imageUrl: &quot;http://www.kauai.com/photos/kauai/point/94/super/3075381091306977440.jpg&quot;, description: &quot;The Kalalau lookout stands at 4,00 feet above sea level and gives you a peek at a valley that as late as the 1920&#39;s still was the home to residents who farmed crops there. The only way into the valley is by foot along the Kalalau Trail or by boat.&quot; },
    { name: &quot;Kauai Coastal Path&quot;, category: &quot;Coastline&quot;, location: &quot;East&quot;, imageUrl: &quot;http://www.kauai.com/photos/kauai/point/100/super/kauai-coastal-path-kauai-attractions.JPG&quot;, description: &quot;Kauai Coastal Path is a scenic and and safe place to walk, run or bike while taking in the beautiful scenery of Kauai&#39;s East Side.&quot; },
    { name: &quot;Keahua Arboretum&quot;, category: &quot;Flora&quot;, location: &quot;East&quot;, imageUrl: &quot;http://www.kauai.com/photos/kauai/point/95/super/keahua-arboretum-kauai-attractions-5.JPG&quot;, description: &quot;The Keahua Arboretum is planted with native and introduced plants by the University of Hawaii and is used as an outdoor classroom to students and visitors. Cool off in the cold mountain spring water and enjoy lunch at one of the picnic sites.&quot; },
    { name: &quot;Kilauea Lighthouse National Wildlife Preserve&quot;, category: &quot;Coastline&quot;, location: &quot;North&quot;, imageUrl: &quot;http://www.kauai.com/photos/kauai/point/49/super/kilauea_lighthouse_national_wildlife_preserve-kauai-attraction.JPG&quot;, description: &quot;Kilauea Point National Wildlife Refuge started in 1985 by the U.S. Fish and Wildlife Service is marked by its towering lighthouse. The ocean cliffs and tall grassy slopes of a dormant volcano provide a protective breeding ground for many Hawaiian seabirds&quot; },
    { name: &quot;Koloa Landing&quot;, category: &quot;Coastline&quot;, location: &quot;South&quot;, imageUrl: &quot;http://www.kauai.com/photos/kauai/point/99/super/koloa-landing-kauai-attractions-2.jpg&quot;, description: &quot;Once one of the largest deep water whaling ports in Hawaii, Koloa Landing is now a popular location for shore dives.&quot; },
    { name: &quot;Lawai International Center&quot;, category: &quot;Other&quot;, location: &quot;South&quot;, imageUrl: &quot;http://www.kauai.com/photos/kauai/point/110/super/lawai-international-center-kauai-attractions.JPG&quot;, description: &quot;Lawai International Center and the 88 Shrines are located on the ancient site of Heiau where Hawaiians once came for healing.&quot; },
    { name: &quot;Menehune Fishpond&quot;, category: &quot;Other&quot;, location: &quot;East&quot;, imageUrl: &quot;http://www.kauai.com/photos/kauai/point/48/super/menehune-fishpond-kauai-attractions.JPG&quot;, description: &quot;Menehune Fish Pond is located just above the Nawiliwili Harbor. The Menuhune Fish Pond, Alekoko got it&#39;s name from the legend that a small race of people known as menehune built these ponds 1,000 years ago overnight.&quot; },
    { name: &quot;Napali Coast&quot;, category: &quot;Coastline&quot;, location: &quot;North&quot;, imageUrl: &quot;http://www.kauai.com/photos/kauai/point/82/super/napali-coast-kauai-attractions.jpg&quot;, description: &quot;The Napali is a fifteen mile stretch of coastline starting on the north shore at Kee beach and ending on the west side at Polihale beach. This rugged coast will leave you breathless as you gaze upon the he razor sharp cliffs that rise sharply from sea to &quot; },
    { name: &quot;Opaekaa Falls&quot;, category: &quot;Waterfall&quot;, location: &quot;East&quot;, imageUrl: &quot;http://www.kauai.com/photos/kauai/point/88/super/opaekaa_falls-kauai-attraction.JPG&quot;, description: &quot;Opaekaa Falls can be seen from the scenic lookout along Kuamoo Road in the Wailua Homesteads. &quot; },
    { name: &quot;Spouting Horn&quot;, category: &quot;Coastline&quot;, location: &quot;South&quot;, imageUrl: &quot;http://www.kauai.com/photos/kauai/point/86/super/spouting-horn-kauai-attractions-1.JPG&quot;, description: &quot;Spouting Horn Beach Park is a delightful lookout where you can watch a blowhole spout a plume of sea water into the air.&quot; },
    { name: &quot;Tree Tunnel&quot;, category: &quot;Flora&quot;, location: &quot;South&quot;, imageUrl: &quot;http://www.kauai.com/photos/kauai/point/91/super/tree-tunnel-kauai-attractions.JPG&quot;, description: &quot;The beautiful canopy of eucalyptus trees line Maliuhi Road, the gateway to Kauai&#39;s sunny side and the towns of Koloa, and Poipu.&quot; },
    { name: &quot;Wailua Falls&quot;, category: &quot;Waterfall&quot;, location: &quot;East&quot;, imageUrl: &quot;http://www.kauai.com/photos/kauai/point/50/super/wailua_falls-kauai-attraction.JPG&quot;, description: &quot;This 140 foot waterfall appears on many postcards, print and media collections and was used as the opening scene for the 1970&rsquo;s Television series Fantasy Island.&quot; },
    { name: &quot;Waimea Canyon&quot;, category: &quot;Other&quot;, location: &quot;West&quot;, imageUrl: &quot;http://www.kauai.com/photos/kauai/point/83/super/waimea-canyon-kauai-attractions-2.JPG&quot;, description: &quot;Waimea Canyon State Park is the largest canyon in the Pacific and will undoubtedly capture your gaze, with its 10 mile long stretch at a mile wide and measuring more than 3,500 feet deep.&quot; },
    { name: &quot;Wet and Dry Caves&quot;, category: &quot;Other&quot;, location: &quot;North&quot;, imageUrl: &quot;http://www.kauai.com/photos/kauai/point/111/super/wet-and-dry-caves-kauai-attractions.jpg&quot;, description: &quot;Waikanaloa &amp; Waikapalae Wet Caves are located off the the main road in the Haena State Park and are easy to get to. The Waikanaloa Cave is not for swimming. The Waikapale cave is located a a little further up the road and involves a quick hike to the swim&quot; },
];</pre>

And then you need to turn that simple JavaScript array into a Binding List so you can bind to it. Like this&hellip;

<pre class="brush: js;">
var attractionsList = new WinJS.Binding.List(attractions);</pre>

And then you group that list like this&hellip;

<pre class="brush: js;">
var attractionsListGrouped = attractionsList.createGrouped(
    function (i) { return i.category; }, //group key
    function (i) { return { category: i.category }; }  //group
);</pre>

And there&rsquo;s that.

Now, let&rsquo;s visit your HTML file (default.html).

You&rsquo;ll need your actual ListView&hellip;

<pre class="brush: xml;">
&lt;div id=&quot;zoomedinlist&quot; data-win-control=&quot;WinJS.UI.ListView&quot;&gt;&lt;/div&gt;</pre>

And you&rsquo;ll also need a template and a header template&hellip;

<pre class="brush: xml;">
&lt;div id=&quot;headertemplate&quot; data-win-control=&quot;WinJS.Binding.Template&quot;&gt;
    &lt;div data-win-bind=&quot;innerText:category&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div id=&quot;zoomedintemplate&quot; data-win-control=&quot;WinJS.Binding.Template&quot;&gt;
    &lt;div&gt;
        &lt;img class=&quot;item-image&quot; data-win-bind=&quot;src:imageUrl&quot; /&gt;
        &lt;div data-win-bind=&quot;innerText:name&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</pre>

And then you need to bind the ListView to your data, so go back to your default.js file and after the var attractionsListGrouped statement, add this&hellip;

<pre class="brush: js;">
var zin = q(&quot;#zoomedinlist&quot;).winControl;
zin.itemDataSource = attractionsListGrouped.dataSource;
zin.groupDataSource = attractionsListGrouped.groups.dataSource;
zin.itemTemplate = q(&quot;#zoomedintemplate&quot;);
zin.groupHeaderTemplate = q(&quot;#headertemplate&quot;);</pre>

Now you should have a working list, and all we have to do is add the semantically zoomed out version and the semantic zoom control itself.

So, on the default.html page, add the semantic zoom control and the zoomedoutlist to the list you already have like this&hellip;

<pre class="brush: xml;">
&lt;div data-win-control=&quot;WinJS.UI.SemanticZoom&quot;&gt;
    &lt;div id=&quot;zoomedinlist&quot; data-win-control=&quot;WinJS.UI.ListView&quot;&gt;&lt;/div&gt;
    &lt;div id=&quot;zoomedoutlist&quot; data-win-control=&quot;WinJS.UI.ListView&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</pre>

(note that last code should be pasted _over_ the existing zoomedinlist since we already had that there)

Then, that zoomedoutlist needs some data binding, so we go back to the default.js and add this&hellip;

<pre class="brush: js;">
var zout = q(&quot;#zoomedoutlist&quot;).winControl;
zout.itemDataSource = attractionsListGrouped.groups.dataSource;
zout.itemTemplate = q(&quot;#zoomedouttemplate&quot;);</pre>

OKAY STOP. Let me explain what&rsquo;s going on here. Quite simply, we&rsquo;re just adding two different ListView controls with their own data bindings (that happen to be based on the same data, and then we are wrapping both of those up with the WinJS.UI.SemanticZoom control.

Keep in mind, that there are no constraints necessarily on what can comprise those two lists. You, the developer, are responsible for making sure that your semantic zoom control makes good sense for the user.

Now, please notice that the data source for the zoomed in list is a _grouped list of attractions_, while the data source for the zoomed out list is _a list of groups_. Thanks why we get the categories for our zoomed out tiles.

I added a couple of classes in the templates that I had you paste into your HTML, so if you add the following style rules to your default.css file, then that should make everything look sensible&hellip;

<pre class="brush: css;">
.item-image {
    width: 280px;
    height: 210px;
}

.sz-category {
    width: 200px;
    height: 200px;
    background-color: green;
    color: white;
    font-weight:bold;
    font-size: large;
    padding: 10px;
}</pre>

And that should do it. Leave a comment if this was helpful. Actually, leave a comment if it wasn&rsquo;t helpful too. :)

Happy zooming.