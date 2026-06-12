---
title: Random Tile Colors
categories: [JavaScript]
tags: []
date: 2012-07-12
alias:
- Random-Tile-Colors/
- post/2012/07/12/Random-Tile-Colors.aspx
---

This tip is quite short and simple, but worth a post I think. If you want to colorize some tiles like the start screen does, here's one simple way to do it.

``` js
var demos = [
    { key: "local", name: "Loading local data", group: "Data" },
    { key: "netflix", name: "Loading Netflix data", group: "Promises" },
    { key: "netflix10", name: "Loading Netflix data by 10", group: "Promises" },
    { key: "custom_promise", name: "Using custom promises", group: "Promises" },
    { key: "simple", name: "Simple data binding", group: "Data Binding" },
    { key: "properties", name: "Binding more properties", group: "Data Binding" },
    { key: "template", name: "Templates", group: "Data Binding" },
    { key: "share_simple", name: "Sharing text data", group: "Sharing"},
    { key: "datejs", name: "date.js", group: "Libraries"}
];
var colors = ["#0098ab", "#0070a9", "#d9532c", "#a400ac", "#009086", "#5838b4", "#ae193e", "#2c86ee", "#009c00"];
demos.forEach(function (i) {
    i.tileColor = colors[Math.floor(Math.random() * colors.length)];
});
```

This is some code from a project I have that showcases some simple code demos, so I have an array of each of these objects. Then I create a quick array of some of the color codes used on the start screen. Finally, I simply do a forEach on the _demos_ array adding a new _tileColor_ property to each which is a randomly selected color from the color array.

This ability to just throw another property onto an object without mucking with the class and affecting all of the other instances, is in my opinion one of the nicest things about a dynamic language like JavaScript, and I take advantage of it quite a lot.

Now to actually use this color for the tiles, it's a simple matter of adding it to the databinding statement like this...

``` html
<div id="itemTemplate" data-win-control="WinJS.Binding.Template">
    <div class="tile" data-win-bind="onclick:click;style.backgroundColor:tileColor;">
        <h3 data-win-bind="innerText:name;"></h3>
    </div>
</div>
```

Notice the style.backgroundColor:tileColor term. That's all it takes.