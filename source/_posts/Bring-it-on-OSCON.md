---
title: Bring it on OSCON!
tags: []
date: 2016-10-02 16:03:46
---

## Intro and OSCON

OSCON is happening in **Portland, Oregon on&nbsp;July 20-24 **this year. I&#39;m going to be stomping the halls and finding good sessions. I&#39;m as excited as the next guy about open source software (well, perhaps not _quite_ as excited, but I&#39;ll get to that in a second) and this conference is where it&#39;s at. In this post I&#39;ll discuss

*   some opinion on free and for-pay software
*   some of the open source sessions I&#39;m excited about
*   a GitHub project for an OSCON session browser for Windows 8 and Windows Phone 8 (your help requested!)

## Free&nbsp;or for-pay software... yes, please!

I love open source software as _part _of a software ecosystem. Besides free and innovative and community driven and hyper extensible and all of the other things that OSS is, I also like software that is backed by a company that is charging for it and consequently spending big money on developing it.

When, for instance, I need to start editing video and audio, I&#39;m fully expecting to go to Newegg.com with my credit card out. I know... I know...&nbsp;there are open source packages for editing media, but there aren&#39;t great ones. Not in my opinion anyway.&nbsp;They work, but they don&#39;t thrill me and they aren&#39;t adding new features too quickly. If I can pay a few bucks up front to give Sony the capital to create Sony Vegas and they can keep making it awesome, then I&#39;m very much down with that.

On the flip side, we all know that some software just feels wrong to pay for (that&#39;s the _free as in beer_ part) and feels wrong when it&#39;s owned by a single company (that&#39;s the _free as in free speech_ part). It feels like it belongs in the wild. It feels like something we should all be doing together. It feels like open source software. Enter OSCON.

One of the very impressive things about OSCON is the sheer size. There are 18+ simultaneous sessions going on. Open source software is like [JavaScript libraries](/jslibraries) - there&#39;s no end to them and discovering them ends up being a bigger job than implementing them.

## OSCON session topics people are already talking about

Here are a few of the topics that fellow hall walkers are going to be chatting about and my personal take on the matter...

**Git. **Git is awesome. Like JavaScript every loves and hates it. It&#39;s super hard to learn how to do simple things, but for some reason I not only use it, but I use it from the command line (PowerShell actually to ease the pain).

**Hadoop.** Big data = big potential. Anyone who&#39;s remotely digital knows that big data is a massive topic and Hadoop is the elephant in the room for sure. I recently heard that a simple airline flight from (I believe) Germany to Singapore generates 35 terabytes of flight data! And that&#39;s a set of components in a plane that&#39;s some years old. We&#39;re going to be pushing data to the cloud when we brush our teeth in not too long. Mark my words.

**Go.** I&#39;ve not played with Google&#39;s new language Go myself, but I&#39;ve heard some Buzz and like anything new, I think people are going to chat about it a bit and fill up the sessions. Is it going to change the world? I don&#39;t know. Is it going to change my world. Not a lot.

**IoT.** I&#39;m talking Internet of Things here. There are sessions on some micro hardware topics like Arduino and Raspberry Pi. And I think there are a number of ancillary topics that still have big IoT implications such as reactive and functional programming, all of the big data stuff, a little bit of Bluetooth LE, and even the graph theory and math sessions to some degree.

Finally, I think the soft skills will be well attended. I&#39;m referring to the sessions on ALM, management, presentation, and productivity. Developers love that stuff. I love that stuff, and there&#39;s no end to what you can learn about it.

So the long and short is that I&#39;m excited about the event. I decided I could contribute by at least stubbing out an app for easy browsing of speakers and sessions. And here it is.

## Now there&#39;s an app for that

OSCON has wisely done what every information provider on the planet has either&nbsp;done or should do. They made their data&nbsp;- in this case about the&nbsp;upcoming conference - available as a JSON feed. You can get it&nbsp;at [http://www.oscon.com/oscon2014/public/content/schedulefeed.](http://www.oscon.com/oscon2014/public/content/schedulefeed)&nbsp;What good is that? Well, if you&#39;re a developer, you&nbsp;know exactly what&#39;s good about that.&nbsp;Most information on the web is made for humans, but JSON is made for robots. So I create a quick and dirty&nbsp;[GitHub&nbsp;project&nbsp;](https://github.com/codefoster/oscon2014app)with Windows 8 and Windows Phone 8 Universal App&nbsp;projects that consumes this feed and displays the information. The app is written entirely in JavaScript, and I&#39;d love your help in working on it. Just fork the project and send me a pull request. It&#39;s pretty base right now, so whatever you add will surely be a positive contribution. I&#39;ll try to put some near future hours into it as well.

![](http://codefoster.blob.core.windows.net/site/image/9a50f78c0135467488f5fde36d09b534/oscon_01_1.png)