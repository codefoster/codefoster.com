---
title: Hail Bridge Mode
tags: []
date: 
---

My wife and I have acquired a coach RV, parked it on our property, remodeled the interior, and done most of the work of listing it on [Airbnb](http://www.airbnb.com).

I was looking to allow guests that stay in the space to use wireless internet for free, but I am not interested in giving them credentials to just jump onto my network.

The solution, I knew, was a bridge - essentially a device with two wireless NICs and the ability to communicate between them for you. I hadn't hooked up a bridge before, and I expected it was going to be hard. I expect most things to be hard and am seldom disappointed. Actually, that's not entirely true. I do expect most things to be hard, but I'm still quite often disappointed.

I talked with my colleague [@KennySpade](http://www.twitter.com/kennyspade) about it and I liked his answer - "I think this little device I have in my hand will do the trick. I'll send it to you. It was only $12."

The device Kenny was referring to is a [TP-LINK WR702N Nano Router](http://www.tp-link.com/en/products/details/cat-9_TL-WR702N.html).

![](http://codefoster.blob.core.windows.net/site/image/f0375f6e22fb4cf1a92650fa281b81fe/bridgemode_router_1.jpg)

I was wrong in believing that a device like this would contain a single wireless NIC and would thus be capable of speaking to a single wireless device. In fact, when configured for "bridge mode" the device is able to be configured such that it communicates with my home network, but then itself broadcasts a second network with a new SSID and credentials.

The three primary reasons I wanted to go this route (rim shot) are...

1.  It feels right for the RV to have its own wireless network. I can't explain it. It just _feels_ right.
2.  It provides the security of keeping guests on a separate physical network.
3.  It allows me at some point in the future to travel around with this rig all the time allowing all of its occupants to a) communicate with each other on a network and b) get internet access when we stop somewhere when I simply tell the TP-LINK what the SSID is. We stop at a coffee shop, I point the TP-LINK to the coffee shop's wifi, and voila all of the inhabitants of the RV instantly have internet access.

I'm quite tickled with this solution.