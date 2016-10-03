---
title: 'Creating a Timer in Windows 8 (C#)'
tags: []
date: 
---

Ready for the shortest blog post in history?

Looking for a time in Windows 8? Look no further. Just drop this code into the App constructor on the App.xaml.cs page...;

<pre class="code">
<span style="background: white; color: black;">    </span><span style="background: white; color: blue;">var </span><span style="background: white; color: black;">d = </span><span style="background: white; color: blue;">new </span><span style="background: white; color: rgb(43, 145, 175);">DispatcherTimer</span><span style="background: white; color: black;">();
    d.Start();
    d.Tick += (sender, o) => { </span><span style="background: white; color: rgb(43, 145, 175);">Debug</span><span style="background: white; color: black;">.WriteLine(</span><span style="background: white; color: maroon;">"tick"</span><span style="background: white; color: black;">); };
</span></pre>

Now go take a look at Visual Studio&rsquo;s Output pane and watch it tick.