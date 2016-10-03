---
title: Tapping Into Your Localized Resources Using JavaScript
tags: []
date: 2016-10-02 16:03:46
---

Many developers (present parties included) are neglecting to take advantage of other cultures and are missing relatively easily earned revenue as a consequence.

Localizing your app by referencing resource strings is the first step and sets you up for easy translation to other languages. It&#39;s simple enough to add your data-win-res in your HTML, but what about when you need to do the same thing from JavaScript?

There&#39;s a [quickstart on MSDN](http://msdn.microsoft.com/en-us/library/windows/apps/hh465254.aspx) that will walk you all the way through the former, but if you run into a situation where you need to do the latter, you might find yourself in a pinch as there&#39;s not nearly as much information online about it. It makes sense since it&#39;s not an altogether common scenario.

The trick is to check out the [Application Resources and Localization sample](http://code.msdn.microsoft.com/windowsapps/Application-resources-and-cd0c6eaa) (also on MSDN) and look at scenario 11.

In it you&#39;ll see that you can simply ask the ResourceManager for help. Let&#39;s have a look in detail.

Create for yourself an empty Windows 8 blank app using JavaScript.

![](http://codefoster.blob.core.windows.net/site/image/c16a6b3bbe6c4960a3e5e01ad99ef423/resjs_01_1.png)

Now create a new folder called _strings _and in it a new folder with your culture name. Mine is _en-US_. If you don&#39;t know the code for your culture name then you can look [here](http://msdn.microsoft.com/en-us/library/ee825488(v=CS.20).aspx). The table is very helpful if you speak English, but I wondered if MSDN has gone the extra mile and provided content in other languages.

A brief search turned up the ![](http://codefoster.blob.core.windows.net/site/image/4765882480c445d9b82e02a5703ef562/resjs_02_1.png)&nbsp;button at the bottom of the page, but switching it to ![](http://codefoster.blob.core.windows.net/site/image/90b81b3d7c444352b6b804de866f4fba/resjs_03_1.png)&nbsp;only provides me with...

![](http://codefoster.blob.core.windows.net/site/image/cc2a08be176e49d0b66cf2aad59319ea/resjs_04_1.png)

Meaning, unfortunately, that&nbsp;_this content is not available in your language, so here&#39;s English_. Bummer.

...and later on...

![](http://codefoster.blob.core.windows.net/site/image/a1887b63c1734756840ee025568d30fd/resjs_05_1.png)

Meaning, _was this page helpful? _Well, not actually if you only speak French, but _c&#39;est la vie._

And that right there is the nature of technical content on the web. Information changes at lightning speed and it&#39;s a wonder any of us can keep up with our apps or our documentation in anything but our own language.

But I got us sidetracked and you likely know your culture code anyway.

You should now have a string folder and a culture folder and inside the culture folder you create a resource file using a right click&nbsp;| Add&nbsp;| New Item... &gt; Resources File (.resjson). So you should have this...

![](http://codefoster.blob.core.windows.net/site/image/ec431692c0894a8cac634224ff203561/resjs_06_1.png)

Open the resources.resjson file and you should see that it was prepopulated with...

`<font face="Consolas" size="2"><font face="Consolas" size="2">{

&nbsp; </font></font>``<font color="#a31515" face="Consolas" size="2"><font color="#a31515" face="Consolas" size="2"><font color="#a31515" face="Consolas" size="2">&quot;greeting&quot;</font></font></font><font face="Consolas" size="2"><font face="Consolas" size="2"> : </font></font><font color="#a31515" face="Consolas" size="2"><font color="#a31515" face="Consolas" size="2"><font color="#a31515" face="Consolas" size="2">&quot;Hello World!&quot;</font></font></font><font face="Consolas" size="2"><font face="Consolas" size="2">,

&nbsp; </font></font>``<font color="#a31515" face="Consolas" size="2"><font color="#a31515" face="Consolas" size="2"><font color="#a31515" face="Consolas" size="2">&quot;_greeting.comment&quot;</font></font></font><font face="Consolas" size="2"><font face="Consolas" size="2"> : </font></font><font color="#a31515" face="Consolas" size="2"><font color="#a31515" face="Consolas" size="2"><font color="#a31515" face="Consolas" size="2">&quot;This is a comment to the localizer&quot;</font></font></font>`

`<font face="Consolas" size="2"><font face="Consolas" size="2">}</font></font>`

Great. Now you have the resource string. The word _greeting_ there is what you use as your resource string identifier, but it doesn&#39;t get shown to the user. The user sees _Hello World!_ because that&#39;s the value of that string.

Now, as I mentioned, utilizing this from your HTML is quite straightforward. you just add an attribute to whatever element you want to suck it into. If you want it to populate a div, you would use...

<font color="#0000ff" face="Consolas" size="2"><font color="#0000ff" face="Consolas" size="2"><font color="#0000ff" face="Consolas" size="2">&lt;</font></font></font><font color="#800000" face="Consolas" size="2"><font color="#800000" face="Consolas" size="2"><font color="#800000" face="Consolas" size="2">div</font></font></font><font face="Consolas" size="2"><font face="Consolas" size="2"> </font></font><font color="#ff0000" face="Consolas" size="2"><font color="#ff0000" face="Consolas" size="2"><font color="#ff0000" face="Consolas" size="2">data-win-res</font></font></font><font color="#0000ff" face="Consolas" size="2"><font color="#0000ff" face="Consolas" size="2"><font color="#0000ff" face="Consolas" size="2">=&quot;{textContent: &#39;greeting&#39;}&quot;&gt;</font></font>&lt;</font><font color="#800000" face="Consolas" size="2"><font color="#800000" face="Consolas" size="2"><font color="#800000" face="Consolas" size="2">/div</font></font></font><font color="#0000ff" face="Consolas" size="2">&gt;</font>

In case you&#39;re new to this, the `data-win-res` tag is so named for a few good reasons. The `data- `means it&#39;s a valid HTML5 and will not trigger any syntax validators. The `win- `means it&#39;s something provided by the WinJS library and makes it easier to distinguish from other libraries or from your own code. And the `res `obviously stands for `resource`, but you didn&#39;t need me to tell you that.

Now comes the interesting part.

It may be that you are not laying this out so declaratively.

<div style="margin-left: 40px;">BTW, I can remember not knowing the difference between declarative code and a hole in a bucket, so I&#39;m going to explain it here in case it helps.</div>

<div style="margin-left: 40px;">There are two types of code (at least) as it pertains to UI. There&#39;s declarative and imperative. Declarative code is the parts of your UI that exist because you explicitly wrote them into a UI description language like HTML, XAML, AXML, or whatever. Imperative code is the parts of your UI that come into being because you wrote code that told them to - usually based on some logic or action by the user.</div>

<div style="margin-left: 40px;">If, for instance, you want to define a UI element that looks like a text box and prompts the user to enter their full name, you would likely be able to do that using declarative code. That likely means you&#39;ll be writing HTML for it.</div>

<div style="margin-left: 40px;">If, on the other hand, you need to get fancy with your UI and build it logically or if you need to ask the user something that you need to know before you can determine what kind of UI element to use, then you would likely be forced to use imperative code. It&#39;s usually preferable to use declarative code when possible.</div>

If, for instance, you need to figure out some information at runtime and use that to determine which string to use, then you need to load your resources imperatively. And I&#39;m going to show you how.

Instead of tacking a `data-win-res `attribute on your div, simply give it an `id `attribute so you will be able to reference it from your JavaScript. Go ahead and do that in your `default.html `file replacing the existing <font color="#0000ff" face="Consolas" size="2">&lt;</font><font color="#800000" face="Consolas" size="2"><font color="#800000" face="Consolas" size="2"><font color="#800000" face="Consolas" size="2">p</font></font></font><font color="#0000ff" face="Consolas" size="2">&gt;</font><font face="Consolas" size="2">Content goes here</font><font color="#0000ff" face="Consolas" size="2">&lt;</font><font color="#800000" face="Consolas" size="2"><font color="#800000" face="Consolas" size="2"><font color="#800000" face="Consolas" size="2">/p</font></font></font><font color="#0000ff" face="Consolas" size="2">&gt;</font>. Like this...

<font color="#0000ff" face="Consolas" size="2"><font color="#0000ff" face="Consolas" size="2"><font color="#0000ff" face="Consolas" size="2">&lt;</font></font></font><font color="#800000" face="Consolas" size="2"><font color="#800000" face="Consolas" size="2"><font color="#800000" face="Consolas" size="2">div</font></font></font><font face="Consolas" size="2"><font face="Consolas" size="2"> </font></font><font color="#ff0000" face="Consolas" size="2"><font color="#ff0000" face="Consolas" size="2"><font color="#ff0000" face="Consolas" size="2">id</font></font></font><font color="#0000ff" face="Consolas" size="2"><font color="#0000ff" face="Consolas" size="2"><font color="#0000ff" face="Consolas" size="2">=&quot;mydiv&quot;&gt;</font></font>&lt;</font><font color="#800000" face="Consolas" size="2"><font color="#800000" face="Consolas" size="2"><font color="#800000" face="Consolas" size="2">/div</font></font></font><font color="#0000ff" face="Consolas" size="2">&gt;</font>

Now, if you created this project from the blank template, then you&#39;ll find a _js _folder with a _default.js_ file in it. Open that and add the following method...

![](http://codefoster.blob.core.windows.net/site/image/a3f181aef32e45b89439acb88e2f9349/resjs_07_6.png)

And that should work. Running the app (CTRL+F5) should result in a comforting _Hello World _in white text rendered on a black background.

Let me break down each of the five lines of that function, so you can see not only _that _it works but _why_.

**Line 1:** <font color="#0000ff" face="Consolas" size="2"><font color="#0000ff" face="Consolas" size="2"><font color="#0000ff" face="Consolas" size="2">var</font></font></font><font face="Consolas" size="2"><font face="Consolas" size="2"> resourceNS = Windows.ApplicationModel.Resources.Core;</font></font>

This simply gives a shorter handle to the resources core which is built into the Windows application model. It&#39;s a common practice to use this feature of JavaScript to shorten deeply embedded classes or even functions, and it does nothing more than keep your code shorter.

**Line 2:** <font color="#0000ff" face="Consolas" size="2"><font color="#0000ff" face="Consolas" size="2"><font color="#0000ff" face="Consolas" size="2">var</font></font></font><font face="Consolas" size="2"><font face="Consolas" size="2"> resourceMap = resourceNS.ResourceManager.current.mainResourceMap.getSubtree(</font></font><font color="#a31515" face="Consolas" size="2"><font color="#a31515" face="Consolas" size="2"><font color="#a31515" face="Consolas" size="2">&#39;Resources&#39;</font></font></font><font face="Consolas" size="2"><font face="Consolas" size="2">);</font></font>

This is the first call to ResourceManager which handles the available resources in the current application. The getSubtree method is rather robust, but in this case it&#39;s essentially allowing us to identify&nbsp;the file that our resources are in. In a large app, we may choose to separate our resources out topically for a better architecture.

**Line 3:** <font color="#0000ff" face="Consolas" size="2"><font color="#0000ff" face="Consolas" size="2"><font color="#0000ff" face="Consolas" size="2">var</font></font></font><font face="Consolas" size="2"><font face="Consolas" size="2"> context = resourceNS.ResourceContext.getForCurrentView();</font></font>

The getForCurrentView method of the ResourceContext fetches the correct resource context for you. This is necessary because in Windows 8.1 resources can be customized for various scaling levels (which are determined by the screen resolution of the device your app is running on).

**Line 4 (optional):** <font face="Consolas" size="2"><font face="Consolas" size="2">context.languages = [</font></font><font color="#a31515" face="Consolas" size="2"><font color="#a31515" face="Consolas" size="2"><font color="#a31515" face="Consolas" size="2">&#39;en-US&#39;</font></font></font><font face="Consolas" size="2"><font face="Consolas" size="2">];</font></font>

The fourth line is optional actually. If you don&#39;t specify a language for the current context then your system&#39;s current culture will be used. If you choose a language that you don&#39;t have installed on the system then it will revert to whatever your system&#39;s current culture is as well.

**Line 5:** <font face="Consolas" size="2"><font face="Consolas" size="2">mydiv.innerText = resourceMap.getValue(</font></font><font color="#a31515" face="Consolas" size="2"><font color="#a31515" face="Consolas" size="2"><font color="#a31515" face="Consolas" size="2">&#39;greeting&#39;</font></font></font><font face="Consolas" size="2"><font face="Consolas" size="2">, context).valueAsString;</font></font>

Finally, you simply set the value of your UI element to the results of a call to the getValue method of your resource map.

That does it. Now, if you&#39;re like me then you immediately start thinking about how you can wrap these 5 somewhat painful lines of code in a very elegant and semantic helper method to use anywhere within your app, and I&#39;d say that&#39;s a great idea.