---
title: Push Notifications for Specific Users
categories: []
tags: []
date: 2001-01-01
permalink: pushusers
---

I received a question that I'd like to turn into a blog post for the benefit of the masses. I've gotten this question a number of times in the past.
<!-- xmore -->

_Is it possible to do push notifications to all users/only a specific user/only a specific set of users? _

The answer to all three questions is _yes_.

Push notifications are performed by Microsoft's Windows Notification Service (WNS). It's a server in the cloud somewhere, so obviously if it's going to send a push notification to a user's device, it's going to have to have some identifying information. Specifically, it needs to know **the unique device** and **the unique user**. A device can be used by multiple users and users can use multiple devices, so the combination of the two is essential. This identification is handled by something called a _channel URI. _

Your app gets a channel URI from the Windows API. Your app says (usually right when your app starts) "Hey, Windows, can I have a new channel URI?" Windows comes back to the app with a channel URI that is good for 30 days. From that point on, you (the app developer) is responsible for storing that channel URI value and later retrieving it to communicate with _that specific_ user/device.

So, to answer this question, we need to talk about the recommended strategy for managing these channel URIs. Fundamentally, you need to store the channel URI along with an optional association with the user (assuming you've authenticated the user and have an ID) and an optional association with the current device (assuming you've generated a device identifier). As long as you have stored this association, you'll be able to target your user, your user's device, or the combination thereof.

Here's how I recommend you do it (roughly).

The _first time_ your app starts, you generate a device ID (a GUID) and store it in local storage (not roaming!). Look for this ID on each app start and don't regenerate it if one already exists.

_Each time_ your app starts, request a new channel URI. They're good for 30 days, but you don't want to implement reuse logic when there's no reason. Fetching a new channel URI is an easy and cheap operation.

_Each time_ your app starts, authenticate your user.

Store the channel, user, and device IDs in Azure Mobile Services (or another service if you're okay with not using the coolest backend service on the planet) in tables. For ultimate flexibility, create three independent tables and use foreign keys to keep the relationships. For ultimate ease where you can assume one user has one device and one channel (at a time), store them all in the users table.

You may, obviously, have other information in the users table about when they last logged in, where they live, what type of user they are, or whatever. You can filter the users table any which way you want and you then have a great list of channel URIs to do push notifications to. You can actually use Azure Mobile Services to do filter the table, loop the results, and perform the push very easily.

For a complete example on how to do this, download codeSHOW ([codeshow.codeplex.com](http://codeshow.codeplex.com)) and check out the WAMS push demo. You can see the code and run the app and see the results as well.

Happy notifying!