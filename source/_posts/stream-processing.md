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

**Ingestion:** get the data into the system.

**Transformation:** modify the data to conform to the needs of the solution.

**Analysis:** study the data in various ways.

**Insights:** figure out what the data means to future business.

**Actions:** steer the business according to the insights to effect positive change.

(ingestion)
A natural fit for the ingestion step is Event Hubs. It's excellent at that. Depending on the nature of the datagrams, however, you could use a 

(transformation)
One of the first tools a pipeline might employ is Azure Stream Analytics (ASA). ASA is good at transforming data and performing limited analysis. Stream Analytics projects one stream into another that is filtered, averaged, grouped, windowed, or whatever and it outputs the resulting stream to various outputs.
(or you could use a custom process or function for a transformation)

(analysis, insights, and actions)
To perform custom analysis, derive insights, or react programmatically in other areas of your business's digital system, you need either some kind of managed integration (like Logic Apps or Flow) or you need a custom point of compute that gets triggered every time a datagram is picked up.

This custom point of compute could be your own process hosted either on a virtual machine or in a container or it could be an Azure Function.

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

### Scaling Strategy
The whole point of Functions is scale, so you'd better get a deep understanding of Functions' behavior when it comes to scaling. The [Azure Functions scale and hosting](https://docs.microsoft.com/en-us/azure/azure-functions/functions-scale) article on Microsoft docs is an excellent resource.

If you're using a trigger to integrate with one of the data streaming services we're talking about, you're using a _non-HTTP_ trigger, so pay attention to the note under [Understanding scaling behaviors](https://docs.microsoft.com/en-us/azure/azure-functions/functions-scale#understanding-scaling-behaviors). In that case, new instances are allocated at most every 30 seconds.

If you're expecting your application to start out with a huge ingress of messages and require a dozen instances right off the bat, keep in mind that it won't actually reach that scale level for 6 minutes (12 x 30s).

### Triggers
Most of the work of wiring your data stream up to Functions happens in the trigger. The trigger is the code that determines just how Functions gets new messages. It contains a few configuration options that attempt to fine tune that behavior, but at the end of the day if that behavior is not what you want, you'll have to rely on another trigger, since custom triggers are not supported.

You might trigger your Function with a clock so that it fires every 15 minutes, or you might trigger it whenever a database record is created, or as in the topic at hand, whenever a datagram is created in your messaging pipeline.

Let's focus in here on Functions that are reacting to our data streaming services: Storage Queues, Service Bus Queues, Service Bus Topics, and Event Hubs.

The [Storage Queue Trigger]() 
(metadata)
(poison messages and retry behavior)
(polling algorithm)
(concurrency)


The [Service Bus Trigger](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus) takes care of triggering a Function when a new message lands in your Service Bus Queue or Topic. There are plenty of nuances that we've uncovered in this trigger, though, so it's worth spending some time looking at the trigger's behavior in various configurations.

The [Event Hub Trigger](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-hubs)

latency
    link to the other blog post about measuring latency