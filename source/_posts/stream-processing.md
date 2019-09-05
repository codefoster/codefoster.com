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

[01]

Data comes into our solution, we perform operations to it, and then it reaches some terminal state.

More specifically, however, in many enterprise scenarios that pipeline looks more like this...

[02]

**Ingestion:** get the data into the system.

**Transformation:** modify the data to conform to the needs of the solution.

**Analysis:** study the data in various ways.

**Insights:** figure out what the data means to future business.

**Actions:** steer the business according to the insights to effect positive change.

A natural fit for the ingestion step is Event Hubs. It's excellent at that. Depending on the nature of the datagrams, however, you could use a 
At most of these steps, we need a point of compute (a function, a service) that gets triggered every time a datagram is picked up.

This function has various considerations - its performance, where it's hosted, what kind of code it runs, its ability to recognize data as a stream, etc.


What I'm interested in right now is real points of compute where you can do business integrations, apply business logic, do deep analysis, etc.

To accomplish this, here are the options as I see them...
 * stand up a virtual machine with a custom process
 * run a container instance with a custom process
 * Functions
 * Durable Functions

## Simple Producers

## Simple Consumers
console
container
functions
    sessions


latency
    link to the other blog post about measuring latency