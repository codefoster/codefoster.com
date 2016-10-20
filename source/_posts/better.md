---
title: That Was Good... This is Better
categories: []
tags: []
date: 2001-01-01
permalink: better
---

You'll likely notice that codefoster.com looks a bit different. I put a shine on it, but I also put it up on blocks and did a complete engine swap.
<!-- more -->

![](/files/better_01.png)
![](/files/better_02.png)

I don't ask for much from my website besides elegance, ease, and expressibility. Whatever solution I implement, I want it to sort of fade into the background and let the real task of creating and consuming content stand out. Technology is cool, but not for its own sake. It is supposed to _enhance_ what we do.

I started out using [WordPress](http://wordpress.org) and was impressed with the fact that I could have a good looking blog up and running in approximately two and a half minutes. After a few posts, however, I started to feel like I was trapped in the platform and I didn't like that feeling. It's funny that even if it does the job just fine, I can still feel bound and begging to get out. Which I did.

I switched to [BlogEngine.net](http://dotnetblogengine.net/) and liked it just fine. It was a good step for me and it served my needs for some time, but it started to feel tired for my needs as well. I wondered if I was being the digital equivalent of a picky eater, but decided I didn't care if I was and swapped it out too.

My next engine was [Lemoon](http://lemoon.com) and I liked it just fine too. I changed hands and I didn't like some of the admin portal UX, and finally have come to loathe TinyMCE. It makes me very, very sad.

And one day I was browsing through the CMS systems available in the Azure website gallery and found BetterCMS. It's so easy to spin up a new Azure website that I decided to give it a shot.

And I love it. I have had to post a number of questions on [the forums](http://bettercms.com/support) to get accustomed, but I'm feeling much more comfortable now thanks to their very quick turnaround with very helpful answers. There are a lot of things I like about the new system such as...

*   a HTML editor based on codemirror (yay!)
*   MVC/razor model
*   crisp, clean, and simple (just what's needed) admin portal
*   ability to store files and images in Azure (or AWS had I chose) blog storage
*   ability to Nuget deploy into an existing app

And there's very little I don't like. It doesn't come with RSS/Atom syndication out of the box, but it didn't take me long to write that. It also doesn't support Windows Live Writer, but I stopped using that a long time ago in favor of OneNote. OneNote makes it simple to write my posts from any device and when it comes time to post it on my blog it's easy peasy.

The best thing about BetterCMS, though, in my opinion is the level of control it gives you.

It works with two entities: pages and content. You define the page and then the admin interface let's you add, edit, or rearrange content on it.

You get to create the pages by simply specifying a [razor](http://weblogs.asp.net/scottgu/introducing-razor) view in your project. That's awesome. You can define content regions anywhere you want in the view and then BetterCMS will make those editable regions when you enter admin mode. That's the holy grail of CMS systems as far as I'm concerned and this is the first time I've seen it in production.

I started writing a system that was actually quite similar (though not nearly as robust) as BetterCMS a long time ago. It was in the early days of ASP.NET. I called it Web Items and I made it because I was the webmaster at a decent sized company and was expected to handle the entire companies website - including content. I was quickly determined to get the task of creating content out of my inbox and into the hands of the content owners. If I'd only had BetterCMS then.

Now I have utter control over my site. That means that the little glitches that I'm sure you'll find are on my. Only me. When you view it on an old version of Opera on your Android Cr&egrave;me Brule (was that an old version of Android) and it goes janky... that's on me.

I'd like to own that for now though and I'd like to fix it. As long as you're using a browser from this decade.

Thanks for reading codefoster.com and please let me know if you have any comments about the new system. And by all means, if you're looking or a new CMS for yourself or your work, consider BetterCMS.

By the way, there are a couple of things that my old site was capable of that I'm still implementing for this one. One of those is search capability. For now, simply use your favorite search engine and precede your search with "codefoster" and you're likely to find what you're looking for.