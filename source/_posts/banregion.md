---
title: Ban the &#35;Region
categories: [Code]
tags: [region,collapse,expand,fold,folding,code folding,visual studio,ide]
date: 2012-04-24
permalink: banregion
alias: Ban-the-Region/
---

Just in case you didn&#39;t know, you don&#39;t need to use the #region designator any more to collapse code. When you use the #region indicator, you create a region for everyone you share your code with, and some people hate having regions in their files. I&#39;m one of them.

If I&#39;m looking at a code file that&#39;s long enough to require regions, I&#39;d rather not look at it at all. Even &quot;in the real world&quot; files should contain a single class, classes should follow the single responsibility principle, and methods should be short. If your code doesn&#39;t look like that and you use regions to attempt to make your code remotely readable, that&#39;s sinful enough, but to force those regions onto your fellow developers is just downright morbid.

How do you get away from them you ask? Simple. You just highlight code that you want to group and hit CTRL + M, CTRL + H (or the alternative mouse longcut of going to Edit | Outlining | Hide Selection). The code collapses just like a regions, but here&#39;s the kicker &ndash; it&#39;s only hidden for you! The change is saved in your .suo solution file which is for you only (never check this into source control), and now you can go ahead and collapse what you will and leave your fellows free to work how they will.

There you have it.