---
title: The Intel Edison
categories: [Maker]
tags: [device,devices,soc,iot]
date: 2014-12-01
---

I am playing with the Intel Edison a lot these days. I'm a big promoponent of it, because I'm a big proponent of both power and simplicity. This device has enough power for whatever maker, robotic, gadgeteer project I can conceive of, and it's all set up to easily run JavaScript via Node via Linux. This means I can use higher level libraries like Cylon.js. This means if I want to turn a motor, it's easy. If I want to read accelerometer data from an ADXL377, it's easy. If I want to include a Node module for storing temperature and humidity data in Azure, it's super duper easy. I like easy - just not at the cost of power.

I'll stop being wordy, though and just index the posts that I've creating (and am still creating) for the Intel Edison. Here they are.

_[Getting Started with the Intel Edison](/edison-setup)_ should help you pull it out of the box, mount the device to the dev board, flash the latest OS to the device, and get your toes wet writing code.

_[Writing JavaScript for the Intel Edison](/edison-coding)_ intends to pick up where the former left off and should help you get started writing Node.js apps using Cylon.js for the device.

_[Using Visual Studio to Write Node for Devices](/edison-vs)_ will bring a bit of awesome to coding for devices. You'll have a rich development environment including remote debugging so you can actually step through breakpoints and watch your gadget react!

<s>_Flashing an LED when you get a Tweet_ (up next) will use what we've learned so far along with a Node.js module to hook into Twitter's streaming API to turn your LED on for a couple seconds when you get a tweet.</s>

[_Tweet Monkey_](/tweetmonkey) is actually similar to the flashing LED sample I was going to do, but more fun. Would you rather see an LED flash or a monkey clanging symbols?! The real value in this tutorial is the JavaScript that combines calling in to the Twitter Streaming API with the using of the cylon library to talk to the monkey.

[_Command Monkey_](/commandmonkey) is Tweet Monkey's older brother. Command Monkey is a fun and full-featured scenario where Cortana on the Windows Phone is used to tell the monkey to dance. This tutorial will teach you a pretty wide scope. You'll learn to integrate Cortana, write a Windows Phone app using JavaScript, write a Node.js service on Azure, and how to communicate down to the device (the monkey in our case) using web sockets. It's surprisingly little code overall.

_Network IoT Devices_ (queued) is all about getting devices to form local or extremely broad networks that form huge logical apps and scenarios.

So you can actually check out posts in progress before I've polished them and called them done. Do please feel free to engage in the comments and offer feedback, advice, or questions.