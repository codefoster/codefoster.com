---
title: A Tale of Two Gateways
categories: [IoT]
tags: [iot,internet-of-things,gateway,edge,hardware]
date: 2017-04-10 20:42:37
---


## Two Types of Gateways
There are two types of gateways in the IoT (Internet of Things) world.

The first is a _field gateway_. It's called such because it resides in the "field" - that is it's on location and not in the cloud. It's in the factory or on the robot for instance. Microsoft has an open source codebase for field gateways called the [Azure IoT Gateway SDK](https://github.com/Azure/azure-iot-gateway-sdk) you can start with. 

The second is a _cloud gateway_, and obviously that one is in the cloud. Microsoft has a codebase for one common cloud gateway function - protocol adaptation available at [Azure IoT Protocol Gateway](https://github.com/Azure/azure-iot-protocol-gateway).

Both of these entities exist as a point of communication through which you direct your IoT traffic messages for various reasons.

You'll also hear the term _edge_ to refer to devices and gateways in the field. The edge is the part of an IoT solution that's touching the actual things. In the internet of cows, it's the device hanging on the cow's collar. In an airliner, it's all the stuff on the plane itself (which I realize is a confusing scenario since technically those devices may also be in a cloud).

## Reasons to Use a Gateway
Some possible reasons gateways exist are...

* you need to **filter** the data. It may be that qualifying data deserves the trip to the cloud, but the rest just needs to be archived to local mass storage or even completely ignored.

* you need to **aggregate** the data. Your messages may be too granular, and what you really want to send to the cloud is a moving average, a batch of each 1000 messages, a batch of messages every hour, or something else.

* you need to **react** to your data quickly. It doesn't usually take that long to get to the cloud and back, but then again "long" is relative. If you're trying to apply the brakes in a vehicle every millisecond counts.

* you need to **control costs**. You can use filtering or aggregation to massage your messages before going to the cloud to reduce your costs, but there may be some other business logic you van apply to the same end.

* you have some **cross cutting concerns** such as message logging, authorization, or security that a gateway can facilitate or enforce.

* you need some **additional capabilities**. Devices that are not IP capable and able to encrypt messages are dependent on a field gateway to get any messages to the cloud. Devices that are able to speak securely to the cloud, but are not for some reason capable to using onen of the standard IoT protocols ([HTTP](https://en.wikipedia.org/wiki/HTTP), [AMQP](https://en.wikipedia.org/wiki/AMQP, or [MQTT](https://en.wikipedia.org/wiki/MQTT)) require either a field gateway or a cloud gateway (such as Azure IoT Protocol Gateway).

## Gateway Hardware

What kind of hardware might you end up using for a gateway? Well, the possibilities are very broad. It could be anything from a Raspberry Pi to a very expensive, dedicated gateway system.

Intel has a [helpful article](http://www.intel.com/content/www/us/en/internet-of-things/gateway-solutions.html) about field gateways and the hardware they offer. Dell has a product called the [Edge Gateway 5000](http://www.dell.com/us/business/p/dell-edge-gateway-5000/pd) that looks to me to be a pretty solid solution too.

Also, Azure maintains [a big catalog](https://catalog.azureiotsuite.com/?q=Gateway) of certified hardware including gateways that might be the most helpful resource.

## Closing

There's certainly a lot more about gateways to know, but I'll leave this here now in case it helps you out.