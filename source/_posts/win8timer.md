---
title: Creating a Timer in Windows 8 (C#)
categories: [C#]
tags: [timer,software,tick,timing,time,wait,csharp]
date: 2012-03-30
alias: creating-a-timer-in-windows-8-c/
---

Ready for the shortest blog post in history?

Looking for a time in Windows 8? Look no further. Just drop this code into the App constructor on the App.xaml.cs page...

``` csharp
var d = new DispatcherTimer();
d.Start();
d.Tick += (sender, o) => { Debug.WriteLine('tick'); };
```

Now go take a look at Visual Studio&#39;s Output pane and watch it tick.