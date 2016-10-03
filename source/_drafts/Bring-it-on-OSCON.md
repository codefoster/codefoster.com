---
title: Bring it on OSCON!
tags: []
date: 
---

## Intro and OSCON

OSCON is happening in **Portland, Oregon on July 20-24 **this year. I'm going to be stomping the halls and finding good sessions. I'm as excited as the next guy about open source software (well, perhaps not _quite_ as excited, but I'll get to that in a second) and this conference is where it's at. In this post I'll discuss

*   some opinion on free and for-pay software
*   some of the open source sessions I'm excited about
*   a GitHub project for an OSCON session browser for Windows 8 and Windows Phone 8 (your help requested!)

## Free or for-pay software... yes, please!

I love open source software as _part _of a software ecosystem. Besides free and innovative and community driven and hyper extensible and all of the other things that OSS is, I also like software that is backed by a company that is charging for it and consequently spending big money on developing it.

When, for instance, I need to start editing video and audio, I'm fully expecting to go to Newegg.com with my credit card out. I know... I know... there are open source packages for editing media, but there aren't great ones. Not in my opinion anyway. They work, but they don't thrill me and they aren't adding new features too quickly. If I can pay a few bucks up front to give Sony the capital to create Sony Vegas and they can keep making it awesome, then I'm very much down with that.

On the flip side, we all know that some software just feels wrong to pay for (that's the _free as in beer_ part) and feels wrong when it's owned by a single company (that's the _free as in free speech_ part). It feels like it belongs in the wild. It feels like something we should all be doing together. It feels like open source software. Enter OSCON.

One of the very impressive things about OSCON is the sheer size. There are 18+ simultaneous sessions going on. Open source software is like [JavaScript libraries](/jslibraries) - there's no end to them and discovering them ends up being a bigger job than implementing them.

## OSCON session topics people are already talking about

Here are a few of the topics that fellow hall walkers are going to be chatting about and my personal take on the matter...

**Git. **Git is awesome. Like JavaScript every loves and hates it. It's super hard to learn how to do simple things, but for some reason I not only use it, but I use it from the command line (PowerShell actually to ease the pain).

**Hadoop.** Big data = big potential. Anyone who's remotely digital knows that big data is a massive topic and Hadoop is the elephant in the room for sure. I recently heard that a simple airline flight from (I believe) Germany to Singapore generates 35 terabytes of flight data! And that's a set of components in a plane that's some years old. We're going to be pushing data to the cloud when we brush our teeth in not too long. Mark my words.

**Go.** I've not played with Google's new language Go myself, but I've heard some Buzz and like anything new, I think people are going to chat about it a bit and fill up the sessions. Is it going to change the world? I don't know. Is it going to change my world. Not a lot.

**IoT.** I'm talking Internet of Things here. There are sessions on some micro hardware topics like Arduino and Raspberry Pi. And I think there are a number of ancillary topics that still have big IoT implications such as reactive and functional programming, all of the big data stuff, a little bit of Bluetooth LE, and even the graph theory and math sessions to some degree.

Finally, I think the soft skills will be well attended. I'm referring to the sessions on ALM, management, presentation, and productivity. Developers love that stuff. I love that stuff, and there's no end to what you can learn about it.

So the long and short is that I'm excited about the event. I decided I could contribute by at least stubbing out an app for easy browsing of speakers and sessions. And here it is.

## Now there's an app for that

OSCON has wisely done what every information provider on the planet has either done or should do. They made their data - in this case about the upcoming conference - available as a JSON feed. You can get it at [http://www.oscon.com/oscon2014/public/content/schedulefeed.](http://www.oscon.com/oscon2014/public/content/schedulefeed) What good is that? Well, if you're a developer, you know exactly what's good about that. Most information on the web is made for humans, but JSON is made for robots. So I create a quick and dirty [GitHub project ](https://github.com/codefoster/oscon2014app)with Windows 8 and Windows Phone 8 Universal App projects that consumes this feed and displays the information. The app is written entirely in JavaScript, and I'd love your help in working on it. Just fork the project and send me a pull request. It's pretty base right now, so whatever you add will surely be a positive contribution. I'll try to put some near future hours into it as well.

![](http://codefoster.blob.core.windows.net/site/image/9a50f78c0135467488f5fde36d09b534/oscon_01_1.png)