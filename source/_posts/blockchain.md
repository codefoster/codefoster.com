---
title: Learning Blockchain
categories: [Other]
tags: [blockchain,peer-to-peer,bitcoin]
date: 2017-04-05 22:35:01
---

I've been reading and studying a bit about blockchain recently and am extremely intrigued.

And now, I'll attempt to explain what blockchain is in brief. Not because you might need to know, but because I usually try to explain something when I'm trying to understand it myself.

Blockchain is a structure and algorithm for storing and accessing data such that data records (transactions or blocks) are hashed and strung together link a [linked list](https://en.wikipedia.org/wiki/Linked_list) data structure. The linking achieved by each block in the chain including as a part of its definition (and thus as a part of its hash) the hash of the previous block in the chain.

So I guess it's like carrying a little piece (granted a uniquely identifying piece) of history - the hash - along in every transaction.

It's not unwieldy because each block on has to worry about one extra hash - a tiny piece of data actually.

The benefit, though, is that if a bad guy goes back and modifies one of the records in an attempt to give himself an advantage of some kind in the data, he invalidates every subsequent block.

Because this chain of data is entirely valid or entirely invalid, it is easy for a big group of people to share the entire thing (or even just the last record since it is known to be valid) and all agree on every single change to it.

I watched a [TED Talk](https://www.youtube.com/watch?v=Pl8OlkkwRpc) on the subject and hearing Don Tapscott provide some potential applications of a blockchain really helped to solidify my understanding.

One of his examples was these companies like Uber and Airbnb, which are supposedly highly decentralized and peer-to-peer. They're not really though, because you still end up with a single company in the middle acting not only as the app developer and facilitator, but more importantly acting as the central source not only all business logic, but also all data and all _trust_.

In my current understanding, were blockchain to be implemented today in peer-to-peer businesses like these, it would not spell the end of a company like Airbnb. Rather it would mean that their role would be reduced to that of a service provider and not a trust bank. Each stay would be a transaction between a traveler and a host as it is today, but the exchange of dollars and (arguably as important) the exchange of reputation would be direct transactions between two parties.

In addition to a basic blockchain where static values are the content of each block, you have [Etherium](https://www.ethereum.org/). This Canadian organization has devised a construct that apparently instead of building up a sort of database of blocks, it builds up a virtual computer. Their website describes it well calling it a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud, or third party interference. As I understand it currently, it's as if each block is not just static data, but rather logic. It can be used to creates rules such as "the 3rd day of each month I transfer $30 to party B". Check out [this reddit post](https://www.reddit.com/r/explainlikeimfive/comments/63nghl/eli5_ethereum/) for some well worded explanations on Etherium.

If you have an [Azure](http://azure.com) account, you can already play with Etherium and some other blockchain providers. That's exactly what I'm doing :)

Comment below if you're playing with this and want to help me and others come to understand it better.