---
title: I See IoT
categories: [IoT]
tags: []
date: 2019-03-26 12:00:00
---

(Recognizing an IoT project that may not look exactly like an IoT project at first glance.)

It may seem obvious what makes a good IoT project candidate, but signs may not be exactly what you assume.

Software engineering is about coming up with software solutions to fulfill the requirements of a certain problem or opportunity.

Solutions, certainly,  are as unique as the businesses that generate them, but it does help to try to identify the elements they may have in common. Common problems can be solved quicker and easier with common, ready-made solutions.

To spot a common solution for a given technology, you can look for indicators. If you've been in software for a while already, you know that this skill comes pretty quick and starts to feel like second nature.

Projects in the **big data** category often have requirements that speak to huge amounts of information.

The requirements that lead to a **machine learning** solution might speak to looking for patterns or predicting outcomes.

And **blockchain** solutions are easy to spot... blockchain is the solution to every modern problem! :)

So, what are the indicators that lead us to select IoT as a solution?

There are some obvious ones for sure...

    * If you need to measure environment variables with sensors, you very likely have an IoT project on your hands.
    * You might think "IoT" when you the requirements talk about a fleet of anything such as drones, windmills, or cows.
    * Requirements that have a lot of geolocation such as the location of food trucks in a city.
    * Anything involving biometrics or wearables are a pretty strong giveaway for an IoT project.

These are all great candidates for IoT projects, but the typical indicators are not _always_ indicators, and there are some others that you may not be tuned in to.

## False Positives

It's very common to choose a popular solution (and IoT certainly qualifies as _popular_ right now) to solve problems that don't necessarily require them. I'll call these _false positives_, and here are some examples of where I've seen them...

    * I've seen enterprises jump to IoT simply because they're trying to ingest a lot of data into the cloud. While mass data ingestion certainly is common in IoT projects, ingestion alone is not always a sequitor. IoT Hub wraps Azure Event Hubs with a lot of functionality specific to IoT scenarios such as device registration, cloud to device (C2D) communication, device statement management (device twins), and a lot more. If these features aren't warranted, then you'll pay too much using the IoT hammer to hit that nail.

    * I've also seen false positives when there's a sensor involved. Using a motion sensor to activate a door is just an electronics problem. It's not IoT until there's a sizeable array of sensors or until business value can be gleaned by analyzing a stream of data from the sensor(s).  

    * Wearables (often coupled so tightly with humans that IoT solutions are not warranted)


## The Essence of IoT

It helps me to keep in mind all that is _essentially_ IoT...

    * In my mind, IoT is about **distributed compute**. That is, it's about a million little places where some code needs to run as opposed to one central place. This is why it so often involves little IoT devices like Raspberry Pi's with attached inputs (i.e. buttons) and outputs (i.e. status lights). The ever shrinking size of IoT devices allow us to do something interesting inside a smart mirror or in an evening gown or on a pet collar. Instead of doing a _lot_ on a server, they do a _little_ on "the edge".

    * IoT is also about manageability of these devices. I like to call IoT "devices without screens". In the computer world, we're used to writing software that ends up in a UI in front of the eyeballs of a real, live human. IoT devices aren't about humans though. Usually, nobody logs into an IoT device. The device has its _own_ identity. If you're working on a problem with a fleet of widgets, you need to be sure each widget is recognized and authenticated.

    * IoT is about streams of data - usually _big_ data. Roughly speaking, we used to generate data a human scale. Now devices are outnumbering humans by a larger factor each year, and the generated data is growing exponentially. Data that was generated on user devices (devices with screens) tended to be somewhat self-describing too. That is, we tended to know what the data meant. Less so with device-generated data. We have to be sure to describe data as it is generated so we can get value out of it.
    
    * Device-generated data tends to be amenable to [eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency). Time stamps permanently record when data is generated, and assure a means of comparison. Keep in mind, this tenant applies only to telemetry-style data.
    
    * Other systems generate data that lead to insights that can steer the system (or an operator) to make a change that can make improvements on the fly. For instance, manufacturing data can lead to insights that allow an operator to be informed when to change the settings on a factory machine. Likewise, analysis of flight data compared to environment variables can lead to a flight system that adapts to weather conditions.


Let's look at some scenarios that may not, at first glance, appear to scream IoT, but qualify in my opinion...

    * smart kiosks
    * voting and vote processing
    * 
