---
title: Azure Options for Stream Processing
categories: [Data]
tags: [messaging, eventing, events, data streaming, streams]
date: 2019-08-28
---

## Overview
If you're not already familiar with the concept of data streaming and the resources available in Azure on the topic, then please visit my article [Data Streaming at Scale in Azure](/streaming) and review that first.

In short, data streaming is the movement of datagrams (events and messages) as a component of a software solution, and Azure offers Storage Queues, Service Bus Queues, Service Bus Topics, Event Hubs, and Event Grid as complementary components of a robust solution.

Data streaming is a pipeline, and very generally a pipeline looks like this...

![](/files/stream-processing_01.png "general data pipeline")

Data comes into our solution, we perform operations to it, and then it reaches some terminal state - storage, a BI dashboard, or whatever.

More specifically, however, in many enterprise scenarios that pipeline looks more like this...

![](/files/stream-processing_02.png "specific data pipeline")

## Ingestion
Ingestion is simply getting data into the system. This is, often times, moving bits from the edge (your location) to the cloud.

A natural fit for the ingestion step is Event Hubs. It's excellent at that. Depending on the nature of the datagrams, however, you could use Service Bus Queues or Topics. You could use Storage Queues. You could even just use a Function with an HTTP trigger or a traditional web service if HTTP works in your case. There are a lot of ways to get data into the cloud, but there are only so many protocols.

## Transformation
Transformation is merely changing the data shape to conform to the needs of the solution. It's extremely common since systems that originate data tend to be as verbose as possible to make sure all information is captured. 

One of the first tools a pipeline might employ is Azure Stream Analytics (ASA). ASA is good at transforming data and performing limited analysis. Stream Analytics projects one stream into another that is filtered, averaged, grouped, windowed, or more and it outputs the resulting stream one or more times.

ASA is very good at streams, but you still have to think about whether or not it's the right job for data transformation. Often times, pumping data streams through a Function does the job, meets your solution's performance requirements, and may make for a more friendly development environment and an easier management and operations story.

## Analysis, Insights, and Actions
Now I'm going to lump the remaining three into one category. They're often (I'm generalizing) solved with processing of some kind.

Analysis is simply Study the data in various ways, insights are figuring out what the data means to future business, and then actions are the concrete steps we take to steer the business (guided by the insights) to effect positive change.

These steps require either some kind of managed integration (like Logic Apps or Flow) or a custom point of compute that gets triggered every time a datagram is picked up.

This custom point of compute could be your own process hosted either on a virtual machine or in a container or it could be an Azure Function.

The bulk of data analysis in years past has been retrospective - data is recorded and some weeks, months, or even years later, data scientists get a chance to look at it in creative ways to see what they can learn. That's not good enough for modern business, which moves faster and demands more. We need to do analysis on the fly.

## Functions
An Azure Function is simply a function written in your language of choice, deployed to the cloud, possibly wired up to a variety of standard inputs and outputs, and triggered somehow so that the function runs when it's supposed to.

Any given Function might be a serial component of your data pipeline so that every datagram that comes through passes through it. Or it might be a parallel branch that fires without affecting your main pipeline.

### Statelessness
Functions are stateless.

Imagine meeting with a person that has no memory, and then meeting with them again the next day. You'd have to bring with you to that meeting absolutely all of the context of whatever you were working on - including introductions!

If you were in the habit of meeting with people like that, you would be wise to make a practice of agreeing with them of a storage location where you could record everything you worked on. Then you would have to actually bring all of the paperwork with you each time.

Functions are like that. Each time you call them it's a fresh call.

If you write a Function that doesn't _need_ any state - say to add a timestamp to any message it receives - then you're as good as done. If you do need state, however, you have a couple of options.

### State
(storage)
(durable functions)
(durable entities)

### Scaling Strategy
The whole point of Functions is scale, so you'd better get a deep understanding of Functions' behavior when it comes to scaling. The [Azure Functions scale and hosting](https://docs.microsoft.com/en-us/azure/azure-functions/functions-scale) article on Microsoft docs is an excellent resource.

If you're using a trigger to integrate with one of the data streaming services we're talking about, you're using a _non-HTTP_ trigger, so pay attention to the note under [Understanding scaling behaviors](https://docs.microsoft.com/en-us/azure/azure-functions/functions-scale#understanding-scaling-behaviors). In that case, new instances are allocated at most every 30 seconds.

If you're expecting your application to start out with a huge ingress of messages and require a dozen instances right off the bat, keep in mind that it won't actually reach that scale level for 6 minutes (12 x 30s).

### Triggers
Most of the work of wiring your data stream up to Functions happens in the trigger. The trigger is the code that determines just how Functions gets new messages. It contains a few configuration options that attempt to fine tune that behavior, but at the end of the day if that behavior is not what you want, you'll have to rely on another trigger, since custom triggers are not supported.

You might trigger your Function with a clock so that it fires every 15 minutes, or you might trigger it whenever a database record is created, or as in the topic at hand, whenever a datagram is created in your messaging pipeline.

Let's focus in here on Functions that are reacting to our data streaming services: Storage Queues, Service Bus Queues, Service Bus Topics, and Event Hubs.

#### Storage Queue Trigger
The [Storage Queue Trigger](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue) is as simple as they come. You just wire it up to your Storage Queue by giving it your Queue's name and connection string. The trigger gives you a few [metadata properties](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue#trigger---message-metadata), though, that you can use to inspect incoming messages. Here they are...
 * `QueueTrigger` gives you the payload of the message (if it's a string)
 * `DequeueCount` tells you how many times a message has been pulled out of the queue and 
 * `ExpirationTime` tells you when the message expires
 * `Id` that gives you a unique message ID.
 * `InsertionTime` tells you exactly when the message made it into the queue
 * `NextVisibleTime` is the next time the message will be visible
 * `PopReceipt` gives you the message's "pop receipt" (a pop receipt is like a handle on a message so you can pop it later)

There are certain behaviors baked into all Function triggers. You have to study your trigger before you use it, so you know how it's going to behave correctly and if you can configure it otherwise.

One of the behaviors of the Queue trigger is _retrying_. If your Function pulls a message off of the queue and fails for some reason, it keeps trying up to 5 tries total. After that, it adds a new message to the queue with with "poison" appended to the name, so you can log it or use some other logic. Messages are retried with what's called an _exponential back-off_. That means the first time it retries a failed message it might wait 10 seconds, the next time it waits 30, then 1 minute, then 10. I don't know what the actual values are, but that's the idea.

The Queue trigger also has some particular behavior with regard to batching and concurrency. If the trigger finds a few messages in the queue, it will grab them all in a batch and then use multiple Function instances to process them. It's very important to understand what the trigger is doing here, because there's a decent chance your solution will benefit from some optimization. You can configure things like the batch size and threshold in the trigger configuration (in the [`host.json`](https://docs.microsoft.com/en-us/azure/azure-functions/functions-host-json#queues)).

The same Queue trigger can also be configured as an output binding in Functions so you can _write_ queue messages as a result of your Function code.

I covered the Storage Queue trigger here in pretty good detail, but the remaining will have a lot in common conceptually.

#### Service Bus Trigger
The [Service Bus Trigger](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus) takes care of triggering a Function when a new message lands in your Service Bus Queue or Topic. There are plenty of nuances that we've uncovered in this trigger, though, so it's worth spending some time looking at the trigger's behavior in various configurations.

Take a look at the metadata properties that you get inside a Function that's been triggered by the Service Bus Trigger...
 * DeliveryCount
 * DeadLetterSource
 * ExpiresAtUtc
 * EnqueuedTimeUtc
 * MessageId
 * ContentType
 * ReplyTo
 * SequenceNumber
 * To
 * Label
 * CorrelationId

You can read about all of those properties [in the docs](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus#trigger---message-metadata), but I'll highlight a couple.
(highlight a couple)

(session enabled queues and subscriptions including the not-necessarily-intuitive scaling behavior around it)
(reference [this](https://github.com/Azure/azure-functions-servicebus-extension/issues/16#issuecomment-491113458))


#### Event Hub Trigger
The [Event Hub Trigger](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-hubs)

(properties)
(differentiate from service bus behavior)

## Custom Process
(containers)
(reactive-x)

## Measuring Latency
link to the other blog post about measuring latency