---
title: Random Tile Colors
tags: []
date: 2016-10-02 16:03:46
---

This tip is quite short and simple, but worth a post I think. If you want to colorize some tiles like the start screen does, here&rsquo;s one simple way to do it.

<pre class="brush: js;">
var demos = [
    { key: &quot;local&quot;, name: &quot;Loading local data&quot;, group: &quot;Data&quot; },
    { key: &quot;netflix&quot;, name: &quot;Loading Netflix data&quot;, group: &quot;Promises&quot; },
    { key: &quot;netflix10&quot;, name: &quot;Loading Netflix data by 10&quot;, group: &quot;Promises&quot; },
    { key: &quot;custom_promise&quot;, name: &quot;Using custom promises&quot;, group: &quot;Promises&quot; },
    { key: &quot;simple&quot;, name: &quot;Simple data binding&quot;, group: &quot;Data Binding&quot; },
    { key: &quot;properties&quot;, name: &quot;Binding more properties&quot;, group: &quot;Data Binding&quot; },
    { key: &quot;template&quot;, name: &quot;Templates&quot;, group: &quot;Data Binding&quot; },
    { key: &quot;share_simple&quot;, name: &quot;Sharing text data&quot;, group: &quot;Sharing&quot;},
    { key: &quot;datejs&quot;, name: &quot;date.js&quot;, group: &quot;Libraries&quot;}
];
var colors = [&quot;#0098ab&quot;, &quot;#0070a9&quot;, &quot;#d9532c&quot;, &quot;#a400ac&quot;, &quot;#009086&quot;, &quot;#5838b4&quot;, &quot;#ae193e&quot;, &quot;#2c86ee&quot;, &quot;#009c00&quot;];
demos.forEach(function (i) {
    i.tileColor = colors[Math.floor(Math.random() * colors.length)];
});</pre>

This is some code from a project I have that showcases some simple code demos, so I have an array of each of these objects. Then I create a quick array of some of the color codes used on the start screen. Finally, I simply do a forEach on the _demos _array adding a new _tileColor_ property to each which is a randomly selected color from the color array.

This ability to just throw another property onto an object without mucking with the class and affecting all of the other instances, is in my opinion one of the nicest things about a dynamic language like JavaScript, and I take advantage of it quite a lot.

Now to actually use this color for the tiles, it&rsquo;s a simple matter of adding it to the databinding statement like this&hellip;

<pre class="brush: xml;">
&lt;div id=&quot;itemTemplate&quot; data-win-control=&quot;WinJS.Binding.Template&quot;&gt;
    &lt;div class=&quot;tile&quot; data-win-bind=&quot;onclick:click;style.backgroundColor:tileColor;&quot;&gt;
        &lt;h3 data-win-bind=&quot;innerText:name;&quot;&gt;&lt;/h3&gt;
    &lt;/div&gt;
&lt;/div&gt;</pre>

Notice the style.backgroundColor:tileColor term. That&rsquo;s all it takes.