---
title: 'Creating a Timer in Windows 8 (C#)'
categories: []
tags: []
date: 2012-03-30
permalink: win8timer
---

Ready for the shortest blog post in history?
<!-- more -->

Looking for a time in Windows 8? Look no further. Just drop this code into the App constructor on the App.xaml.cs page...

``` js
    var d = new DispatcherTimer();
    d.Start();
    d.Tick += (sender, o) => { Debug.WriteLine("tick"); };
```

Now go take a look at Visual Studio's Output pane and watch it tick.