---
title: Easy and Offline Connection to your Raspberry Pi
categories: [Maker]
tags: [raspberry-pi, device, raspberry, board, iot, hardware, internet-of-things, electronics, pi, maker]
date: 2016-06-25
permalink: pi-easyoffline
---

Getting a Raspberry Pi online is really easy if you have an HDMI monitor, keyboard, and mouse.


Subsequently getting an SSH connection to your pi is easy if you have a home router with internet access that you&#39;re both (your PC and your pi) connected to.

But let&#39;s say you&#39;re on an airplane and you pull your Raspberry Pi out of its box and you want to get set up. We call that provisioning. How would you do that?

I&#39;ll propose my method.

First, you need to plug your pi into your PC using an ethernet cable. If you&#39;re a technologist of old like I am, you may be rummaging through your stash for a crossover cable at this point. It turns out that&#39;s not necessary though. I was pretty interested to discover that modern networking hardware has auto-detection that is able to determine that you have a network adapter plugged directly into another network adapter and crosses it over for you. This means I only have to carry one ethernet cable in my go bag. Nice.

If you put a new OS image on your pi and boot it up, it already detects and supports the ethernet NIC, so it should get connected and get an IP automatically.

Here comes the seemingly difficult part. How do you determine what the IP address of your pi is if you don&#39;t have a screen?

The great thing is that the pi will tell you if you know how to listen.

The means by which you listen is called mDNS. mDNS (Multicast DNS) resolves host names to IP addresses within small networks that do not have a local name server. You may also hear mDNS called _zero configuration_ and Apple implemented it and felt compelled (as they tend to) to rename it - they call it _Bonjour_.

This service is included by default on the Raspberry Pi&#39;s base build of Raspbian, and what it means is that out of the box, the pi is broadcasting its IP address.

To access it, however, you also need mDNS installed on your system. The easiest way I am aware of to do this is to download and install [Apple&#39;s Bonjour Print Services for Windows](https://support.apple.com/kb/DL999?viewlocale=en_US&amp;locale=en_US). I&#39;m not certain, but I believe if you have a Mac this service is already there.

Once you have mDNS capability, you simply...

```
ping raspberrypi.local -4
```

The name raspberrypi is there because that&#39;s the default hostname of a Raspberry Pi. I like to change the hostname of my devices so I can distinguish one from another, but out of the box, your pi will be called _raspberrypi_. The `.local` is there because that&#39;s the way mDNS works. And finally, the -4 is an argument that specifically requests the IPv4 address.

If everything works as expected you&#39;ll see something like...

![](/files/pi-easyoffline_01.png)

Again, my pi has been renamed to `cfpi1`, but yours should be called `raspberrypi` if it&#39;s new.

My system uses 192.168.1.X addresses for my wireless adapter and 169.254.X.X for my ethernet adapter.

So that&#39;s the information I needed. I can now SSH to the device using...

```
ssh pi@169.254.187.84
```

I could just use `ssh pi@raspberrypi.local` to remote to it, but I&#39;ve found that continuing to force this local name resolution comes with a little time cost, so it&#39;s sometimes significantly faster to hit the IP address directly. I only use the mDNS to discover the IP and then I use the IP after that. 

Provisioning a Raspberry Pi usually includes a number of system configuration steps too. You need to connect it to wireless, set the locale and keyboard language, and maybe turn on services like the camera. If you&#39;re used to doing this through the Raspbian Configuration in XWindows, fear not. You can also do this from the command line using...

```
sudo raspi-configuration
```

Most everything you need is in there.

You may also be wanting to tell your pi about your wifi router so it&#39;s able to connect to via wireless the next time you boot up. For that, check out my post at [codefoster.com/pi-wifi](/pi-wifi). Actually, if you&#39;re playing a lot with the Raspberry Pi, you might want to visit [codefoster.com/pi](/pi) and see all of the posts I&#39;ve written on the device.

Happy hacking!

 