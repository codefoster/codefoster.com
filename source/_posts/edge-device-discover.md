---
title: Edge Device Discovery - an Unfinished Project
categories: [IoT]
tags: [iot,iot-edge,devices,hardware,electronics,things,ble,bluetooth]
date: 2017-10-13 16:00:14
---


## The Team
| Team Member      | Project          |
| ---------------- | ---------------- |
| Masha Reutovski  | Project Manager  |
| Bret Stateham    | BLE Communicator |
| Gandhali Samant  | BLE Scanner      |
| Kristin Ottofy   | Sync Engine      |
| Joe Raio         | API              |
| Jeremy Foster    | UI               |

A diverse group of technical engineers and one project manager from Microsoft's Commercial Software Engineers (CSE) group. This project was an initiative that [Bret Stateham](http://twitter.com/bretstateham) submitted for Sync Week hacks.

## Project Overview
This IoT Edge Device Discovery project is built on the Azure IoT Edge service. First, we'll discuss Edge and then this project's added value.

## Azure IoT Edge
IoT Edge is a service that comes as part of Azure's IoT offering. It is intended to run on field gateway devices ("edge" devices) and facilitate the aggregation of data from other devices in an on-site IoT solution - devices that may not have the ability to communicate directly with the cloud or for whatever other reason should send their data through a gateway.

Azure's IoT Edge service is undergoing a big transformation from version 1 to version 2. Version 1 is already in the wild. Version 2 offers some dramatic benefits such as containerized modules that can be run on the edge or in the cloud, but this version is still in private preview and undergoing breaking changes.

In this project, we opted to focus on IoT Edge v1. We are fairly confident that any value added would not be difficult to port to version 2 in case the opportunity arises. We also recognize that IoT Edge v2 may include some functionality that partially or perhaps even entirely overlaps with this project.

IoT Edge v1 offers multiple development paths, including native development in C++, NuGet packages to boot strap .NET development, Maven packages to get started with Java, or npm packages for Node.js developers.  We chose to go with the Node.js development path in based on initial research around the noble npm package for access Bluetooth Low Energy (BLE) devices in Node.js.

IoT Edge v1 can be run on a variety of devices and operating systems.  For this project, we opted to use the Raspbery Pi 3 running Raspbian Jessie as the gateway device because it was known to be compatible with IoT Edge v1 and had an integrated Bluetooth hardware stack that was known to be compatible with the noble npm package. 

Finally, BLE is a popular standard and there are countless devices that could be discovered and communicated with. For this project, we focused on the TI Sensor Tag [CC2541](http://www.ti.com/tool/CC2541DK-SENSOR) and [CC2650](http://www.ti.com/tool/cc2650stk) as our reference devices. These sensors have a number of sensors we could leverage and provided a good model for other BLE devices.

## IoT Edge Device Discovery
In IoT Edge as it exists today, if a solution administrator needs to pull a new device in to the network to start recording and sending data to the cloud, the process is a bit difficult. The devices that might be added could be speaking various protocols, but for this project we focused on BLE devices.

The current process for bringing new BLE devices into a solution to start getting new data looks something like this…
 * new BLE device is brought into the proximity of the solution
 * admin manually retrieves the device's MAC address and characteristics array
 * admin adds the MAC address and characteristics to the IoT Edge configuration file
 * admin restarts the edge service

This solution would provide a means for these devices to be discovered automatically and simply approved by solution administrators. The process would look more like this…
 * new BLE device enters the premises
 * Edge service sees the device (including its MAC address and entire characteristics array) and submits it to a cloud service for storage and approval (Edge does not yet begin receiving communication from the device or acting on its reported data)
 * admin is notified and directed to a web portal to approve the device and configure the system's behavior for using the device's data
 * admin either clicks approve or deny for the device
 * upon approval, the Edge service begins acting upon data reported from the new device

This system would obviously be extended to support other network protocols besides BLE.

## Architecture
In its current state, the solution consists of the following components…

  * **BLE Scanner**: the BLE Scanner module is specific to the BLE protocol and would be duplicated for other network protocols. The scanner is just another Edge module and constantly scans for BLE devices in the proximity of the gateway's BLE radio. Upon seeing a device, the scanner reports the device and its characteristics array (the data points the device is capable of communicating) to the Sync Engine (also an Edge module) using the IoT Edge Message Broker. The Sync Engine is not concerned with whether devices have been discovered and reported in the past or whether they've already been approved or denied. It simply reports what it discovers.

  * **Sync Engine**: the Sync Engine is also an Edge module and contains the majority of the business logic for this project. It receives information from the BLE Scanner module about what devices have been discovered nearby, their MAC address, and their characteristics array, and it keeps information about these devices synchronized with the data service in the cloud (via the API). It likely receives duplicate devices from the device scanners, but maintains last known state both locally and in the cloud. 

  * **BLE Communicator**: The BLE Communicator is specific to the BLE protocol and would be duplicated for other network protocols. The communicator is also an Edge module and is responsible for communicating with the entire array of approved BLE devices. This is in contrast to IoT Edge's default, native BLE module that is delivered with the product, which is only capable of speaking with a single BLE device. The BLE Communicator module maintains configuration on disk as well as in memory and relies on the Sync Engine module to update its configuration and let it know which devices (and which characteristics) it should be communicating with.

  * **API**: the Sync Engine runs serverlessly as an Azure Function. It provides endpoints for the Sync Engine and UI. The API allows the Sync Engine module to submit newly discovered devices (and their characteristic arrays) or update existing ones. The API then provides this information to the UI. The API is designed as a REST-compliant interface and thus relies on HTTP GET, POST, PUT, and DELETE operations against entity endpoints - the primary endpoint being the list of devices which may be more clearly understood as device approvals.

  * **UI**: the UI is the only interaction point for solution administrators and allows the admin to determine which discovered devices should be considered by the Edge service, which of those devices' characteristics should be read, which should be written, and on what schedule (i.e. once, periodically, etc.). The UI obviously relies on the API to ultimately take effect in the Edge service.

## Components
### The Scanner
**Principal Developer**: Gandhali Samant

#### Overview
The role BLE Scanner module, as mentioned above, is to discover BLE devices in range of the IoT Edge v1 gateway device.  The module was written using Node.js and leverages the noble (https://github.com/sandeepmistry/noble) npm package.  Noble supports both Windows and Linux and is the most popular node.js package for BLE communication.  This module is intended to constantly scan for new BLE devices and their characteristics.  When a new device is discovered the module generates a new message containing the devices MAC address and GATT characteristics and publishes the message to the IoT Edge v1 Message Broker for consumption by other modules.  

#### Challenges

1. IoT Edge v1 implementation doesn't support the use of native Node.js modules. The noble npm package is a native npm package (meaning it has to be compiled for the platform) and we were unable to create an IoT Edge module that tried to load the noble package.  The solution was to use the proxy, or remote, module patter as discussed here: https://github.com/Azure/iot-edge/blob/master/samples/proxy_sample/README.md .  However, that presented it's own challenge as discovered in #2.

1. The Node.js implementation of the out of process proxy module is buried in a subfolder of the IoT Edge v1 GitHub repository and can't be referenced directly from Node.js  We attempted to extract that folder only and create a locally linked npm package to depend on, but ultimately ended up having to move that code into our own repo (https://github.com/bretstateham/azipg) so we could create a dependency on it from our IoT Edge v1 module.

1. The noble BLE implementation was great in that it was able to discover BLE devices, but it turns out there were hundreds of BLE devices available.  We added a MAC address filter to discover and report only on BLE devices with MAC Addresses that started with "54:6c:0e", the prefix used by Texas Instruments CC2650 Sensor Tags to limit the number of devices we published.
	
#### Successes

Once the challenges above were overcome, the module was able to successfully scan and discover the two TI CC2650 Sensor tag devices we had on hand.  Once discovered, the details of a BLE device were collected, placed in a JSON payload, and published via the IoT Edge v1 Message Broker. 

#### Future Development

The module will currently continue to publish the MAC address of a BLE device even if it has been previously discovered and approved or rejected.  It would ideal for it to be able to use a local data store to identify only new BLE devices that need to be reported. 

### The Sync Engine
**Principal Developer**: Kristin Ottofy

#### Overview

The Sync Engine IoT Edge module awaits to receive a message from the Scanner module that a new BLE device has been discovered. It then checks a local file to determine if the device has been approved or not. If the device is not listed in the file, then the Sync Engine calls the get-approval API to alert the user of a new approval request on the UI and adds the device information to the local file. The Sync Engine asynchronously and routinely calls the get-devices API to check if the UI has updated the database. If it has, then the Sync Engine will reflect those changes in the local file to retain state on the gateway device and publish a message on the IoT Edge broker for the BLE Communicator Module to begin communication with the newly approved device. This module was written in Node.js and developed using Raspian Jesse on a Raspberry Pi 2.

#### Challenges

Many of the challenges with this module were presented during the architecture phase. Retaining state across device power cycles or updates proved to be one challenge. The decision to use a local JSON file to store important information allowed us to get up and running quickly during the hackathon. 

#### Successes

As this portion of the project is continuing development, successes have been made so far with communicating across the gateway message broker, storing information into the local file, making necessary API calls, and posting messages to the broker through various npm packages.

#### Future Development

There are opportunities available within the gateway device that could support the Sync Engine module through IoT Edge v2. Having a localized database would eliminate the need for the local file and allow for quicker checking of approved devices. 

### The BLE Communicator Module
**Principal Developer**: Bret Stateham

#### Overview

The BLE Communicators role is to implement the actual communication with the approved BLE devices.  A single instance of the module is used to communicate with ALL of the configured BLE devices as opposed to a single module instance per device.  In addition to multiple devices, the module needed to support multiple communication patterns with the GATT characteristics on any given BLE device. The actual GATT characteristics and their usage pattern is be supplied to the BLE module via the IoT Edge v1. configuration mechanism:

  1. Read Once at Init: A characteristic that is read once at the beginning of communication with the device.  The GATT Characteristic value would be read, and included in a message sent to the IoT Edge v1 Message Broker.   Read Once values typically include device metadata like Manufacturer, Firmware version, Serial Number, etc. 

  1. Write Once at Init: A characteristic that would be written to once at the beginning of communication with the device.  The value to be written would come from the module configuration.  This is often used to initialize the BLE device itself by enabling sensors, notifications, etc. 
  
  1. Write Once at Exit: A characteristic that would be written to once at the end of communication with the device.  The value to be written would come from the module configuration.  This is often used to turn off sensors, or features on the device to help reduce it's power consumption when not in use.

  1. Read Periodic: A characteristic that is read at a regular interval (the interval specified in the config).  All periodic read sensor values would be collected and published to the Message Broker in a single payload. 

  1. Read Notification: A characteristic on the BLE device that supports notifications.  The characteristic's value will be published individually to the IoT Edge v1 Message Broker.

#### Challenges

This module shares the same core development foundation as the BLE Scanner above, and as such the same challenges around IoT Edge v1's limitation around native npm packages.  See the  BLE Scanner challenges above for more details.  

In addition to those challenges, we had some concurrency issues in the Node.js code that we were unable to resolve during the timeframe of the hackfest.  The noble implementation is naturally asynchronous, but we were having issues maintaining the context of a characteristic read once the value was returned.  We attempted numerous patterns include the use of promises, and the "async" module, but were unsuccessful.

#### Successes

We were able to get the module to read it's configuration via the IoT Edge v1 configuration mechanism and initiate communication with the specified BLE devices.  

#### Future Development

The code for this module needs to be refactored to properly leverage the asynchronous behavior of the noble module.  In addition, the implementation of the various usage patterns above need to completed.

### The API
**Principal Developer**: Joe Raio

#### Overview
We exposed four Azure Functions as our API for device management. This would be accessed by the front end to list all devices, get details on a specific device, create a new device, and update the properties of a device. All functions were written in node.js and setup and triggered via HTTP. 

#### API Development, Debugging & Testing
We developed the functions locally using both the Azure Functions Core Tools and VS Code. This allowed us to rapidly iterate through changes as well as debug our code. This saved us a tremendous amount of time vs having to deploy to Azure each time we needed to verify our code updates.  
Postman was used to both test API calls locally and against the live site. This allowed us to modify our request body on the fly and send GET, POST, and PUT requests to the API. 
Challenges

  1. Proxy Routes using /api – We set out with a goal of being able to call /api/device using different methods (i.e. POST, PUT, GET) which would in turn route to different Azure Functions. To do this we had to enable the use of Function Proxies. When doing this though it would not allow us to use /api in the route prefix because /api is the default route when creating a new function. To overcome this we modified the host.json and changed the default route for functions to /func. This allowed us to then use /api/device with our proxies. 

  1. MongoDB API – It was decided that that MongoDB API would be used to interact with CosmosDB. Because of this we were unable to use the built in CosmosDB bindings for Azure Functions. We had to use the Mongo npm packages and write custom code to read / write / update records in the database. While this was not a huge hurdle it would have been cleaner (and faster) for us to use the default DocumentDB api. Future version of the API will use this. 

  1. CORS – Early on we ran into CORS issues when trying to access the API from our front-end application. We found that when using proxies our default CORS rules were overwritten. We got past this by adding custom headers to each function directly in the code. Further testing needs to be done to determine the exact cause of this issue. 

### The UI
**Principal Developer**: Jeremy Foster

#### Overview
One part of the overall project workflow required a user interface – the authentication of found devices. For this, we turned to Angular and got a bit creative and modern in how we hosted this application – serverlessly!

#### Angular
Angular's CLI makes getting started with a new website pretty quick and easy. Angular is a good, modern choice for a UI and offers plenty of features for this application.

Using the CLI, we had a basic site in just a couple of minutes. Then we added a simple DeviceList component and displayed this component on the main page... nothing fancy... one component.

The most interesting part of the UI was the DataService, which is responsible for fetching devices from the API, displaying them in the UI through the device list component, and keeping the list up to date as new devices are discovered and administrators approve or deny devices.

The next step in this part of the project would be to create another Angular component – perhaps called Device – that the DeviceList component would repeat. That Device component would then contain all of the UI and logic for user interactions for managing the devices – for instance, an Approve button and an Always Ignore button.

Next, because we started with BLE devices for this project, the individual found devices would need to have their characteristics (the properties on each device we're able to read/write data values from/to) enumerated and give the administrator the ability to determine which characteristics are interesting and how those characteristics should be read (i.e. once, periodically, etc.).

#### REST Architecture
The API was designed to follow a pure REST architecture, so the higher level operations were absorbed by the UI's DataService. In the future, a data access layer of sorts could be implemented in a separate or the same API project to make calling from our UI or other UI formats simpler and more consistent.

As an example, in order to keep the API pure REST, a call to approve a device would be something like...

```
PUT /api/device { "id":14, "approved":false }
```

In the UI's DataService, however, that would simply be a call to a higher level function like this...

```
approveDevice(14);
```

#### Serverless Hosting
Being the UI is composed of all static files, we could serve it as a Serverless website by using an Azure Function with a custom proxy.

To do this we first created an empty blob container. In this container, we placed the production output of the Angular App (i.e. the /dist folder). Then, using a custom proxy route we routed all requests for /{restofpath} to the public url for the container. 

The route definition is as follows:

```
        "root": {
            "matchCondition": {
                "route": "/{restOfPath}"
            },
            "backendUri": "https://%mycontainer_uri%/client/{restOfPath}"
        } 
```

With `%mycontainer_uri%` being an app setting for the URI for the blob storage account. 

By doing this we avoid having a web app using 24/7 just to serve up static files. When a request is made, the Azure function simply pulls the file from blob storage and serves it to the browser. 

You can view the live site here: https://edgediscover-functionapp.azurewebsites.net/index.html

To deploy the UI we used VSTS to create a custom build process with the following steps:
  1. Get Sources – This gets the latest files that were committed to the repo

  1. npm Install – installs all the required npm packages

  1. npm run build-prod – this produces the output of the UI in the /dist folder

  1. AzCopy – this then takes the output and copies it to the specified blob container. 
	
## Conclusion

Like many good projects, this one is _unfinished_, but I hope you have learned like I have to embrace unfinished projects. If you have to bring everything to completion, you may not start some things even though there may be a lot to learn. I certainly learned a lot on this one.