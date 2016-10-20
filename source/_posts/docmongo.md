---
title: On the New Mongo Capabilities in DocumentDB
categories: [Azure]
tags: [mongo, docdb, documentdb, data, azure, cloud, database, cloud-data, document-db]
date: 2016-04-20
permalink: docmongo
---

On March 31, 2016 it was announced at //build and also by Stephen Baron [via the DocumentDB blog](https://azure.microsoft.com/en-us/updates/public-preview-documentdb-protocol-support-for-mongodb/) that DocumentDB could now be used as the cloud data store for apps that already target MongoDB.
<!--more-->

There's [a good video](http://channel9.msdn.com/Events/Build/2016/B840) all about DocumentDB that came out of the recent [//build](http://build.microsoft.com) event, and if you [jump to 16:20](https://channel9.msdn.com/Events/Build/2016/B840#time=16m20s) you'll hear John Macintyre describe this new offering in good detail.

<span style="line-height: 1.6em;">In this post, I'd like to break down what this means and why I think this is cool beans.</span>

First of all, if you're itching to get started, just check out how to join the preview program in the [aforementioned blog post](https://azure.microsoft.com/en-us/documentation/articles/documentdb-protocol-mongodb/).

<span style="line-height: 15.6px;">What does this mean in my own words? Keep in mind that my words tend not to contain a lot of technical speak. I have to keep things well organized in my mind if I'm to avoid insanity - an aspect of my personality that I'm hoping works to your when I record my thoughts in video or in this case in HTML.</span>

I'll start with what this is _not_. This is not a driver or an adapter. It's not a package that you install that translates everything you do against Mongo into underlying calls to DocumentDB's API.

That would be pretty cool, and I'm not certain that it didn't already exist, but this is not that. The team decided on an approach that was lower level, more performant, and more compatible. They decided to essentially build MongoDB wire-level protocol compatibility into DocumentDB.

This is more performant because it doesn't rely on any sort of adapter. It's more compatible because it doesn't care what tools, libraries, or techniques you use to talk to MongoDB today. Whatever strategy you use will inevitably result in MongoDB protocol compatible messages on the wire, and that's going to work with DocumentDB.

I'd also like to attempt to position this against the open-source MongoDB code base that currently exists.

Is this Microsoft's attempt to compete with Mongo? No way.

If anything, this is a recognition of the power and popularity of MongoDB.

DocumentDB's support of this protocol doesn't, in fact, do away with the need for MongoDB. DocumentDB is only a cloud service. You can't install DocumentDB in a mobile app and run it offline. You can do that with MongoDB.

On the contrary, you use DocumentDB and this protocol when you _already know_ MongoDB, but you want the many benefits of hosting your database in the cloud as a managed service - the primary advantages being scale and elasticity.

Take a look at [this great article](http://db-engines.com/en/system/Microsoft+Azure+DocumentDB%3BMongoDB) about the similarities and differences between MongoDB and DocumentDB.

This announcement appears to me to capture the strengths of these platforms without being forced to accept the shortcomings of either.