---
title: Loading States of the WinJS.UI.ListView
categories: [App Development]
tags: []
date: 2013-01-08
alias:
- post/2013/01/08/loadingstates/
- post/2013/01/08/loadingstates.aspx
---

If you make Windows 8 apps using HTML and JavaScript, you are definitely going to be chums with the WinJS ListView control. It&#39;s the fundamental list control. You use it to create item grids as are so typical to Windows 8 apps, and you use it as well for lists - more vertically item lists like you might often find in the snap view of various apps.


The ListView is a rather rich control that does a lot of layout for you and offers you a lot of rich functionality as well. It can be bound to a list of data and then can load asynchronously for performance and responsiveness and also conditionally so you can selectively choose item templates or render methods.

It&#39;s often times important to find out what the ListView is doing so you can coordinate some of your own custom functions.

The ListView has a loading process that has various milestones or _loading states_ - each of which fires the <span style="font-size: 9pt;"><span style="font-family: Consolas;">onloadingstatechanged</span> </span>event and includes the exact loading state. You can wire in to this event, figure out which loading state the ListView is currently in, and do something of your own.

As an example, let me show you something from my codeSHOW app. In case you aren&#39;t familiar, codeSHOW is a Windows 8 app for learning how to make Windows 8 apps using HTML and JavaScript. You can download it from the Windows Store at [http://aka.ms/codeshowapp](http://aka.ms/codeshowapp) or download the full source code for the app from [http://codeshow.codeplex.com](http://codeshow.codeplex.com).

In codeSHOW, the user may choose from a large list of demos, spend a little time using the chosen demo, and then click back to return to the home page. When the user returns to the homepage, it would be convenient to recall their scroll position so they don&#39;t have to keep finding their place each time.

Here&#39;s how it was implemented in codeSHOW.

When the user chooses a demo, the WinJS navigation framework unloads the home page and loads the demo page. In the unload event of the home page, I added...

<span style="color: black; font-family: Consolas; font-size: 9pt;">app.sessionState.homeScrollPosition = demosListView.scrollPosition; </span>

This adds the scroll position of the ListView to the sessionState. This means that even if the app crashes or the user switches away and lets it get suspended, the scroll position is going to be saved for later recall.

Now, when the user returns to the home page by pressing the back button from the demo page, the following code fires from the ready event...

<span style="color: black; font-family: Consolas; font-size: 9pt;">demosListView.onloadingstatechanged = <span style="color: blue;">function<span style="color: black;"> () {</span></span></span>

<span style="color: black; font-family: Consolas; font-size: 9pt;">    <span style="color: blue;">if<span style="color: black;"> (app.sessionState.homeScrollPosition </span></span></span><span style="color: black; font-family: Consolas; font-size: 9pt;">&amp;&amp; demosListView.loadingState == <span style="color: rgb(163, 21, 21);">"viewPortLoaded"<span style="color: black;">) {</span></span></span>

<span style="color: black; font-family: Consolas; font-size: 9pt;">        demosListView.scrollPosition = app.sessionState.homeScrollPosition;</span>

<span style="color: black; font-family: Consolas; font-size: 9pt;">        app.sessionState.homeScrollPosition = <span style="color: blue;">null<span style="color: black;">;</span></span></span>

<span style="color: black; font-family: Consolas; font-size: 9pt;">    }</span>

<span style="color: black; font-family: Consolas; font-size: 9pt;">}; </span>

This hooks up an event handler for the <span style="font-family: Consolas; font-size: 9pt;">onloadingstatechanged </span>event, so that each time the loading state changes, we have an opportunity to intercept, check to see if the loading state is a certain one, and do something.

In this case, we&#39;re checking to see if the loading state of the ListView is "viewPortLoaded". Some experimentation told me that after the viewPortLoaded state is reached, the ListView has fleshed itself out enough that a setting of the scroll position will actually work. If you try to set the scroll position before the ListView gets to this loading state, the ListView will have no width and thus setting the scroll position will be a futile effort.

Here are all of the loading states of a ListView in order...

*   <span style="font-family: Consolas; font-size: 9pt;">viewPortLoaded </span>
*   <span style="font-family: Consolas; font-size: 9pt;">itemsLoading </span>
*   <span style="font-family: Consolas; font-size: 9pt;">itemsLoaded </span>
*   <span style="font-family: Consolas; font-size: 9pt;">complete </span>

So if you need to do something _only_ after the entire ListView is loaded, you would use code similar to my last listing, except check to see that the loading state is "complete".

I hope this helps. Keep having fun with your web development in Windows 8, and if you&#39;ve got a cool app you&#39;re working on, send me a tweet and I&#39;ll mention your project.