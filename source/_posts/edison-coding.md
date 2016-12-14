---
title: Writing JavaScript for an Intel Edison
categories: [Maker]
tags: [device,devices,iot,soc]
date: 2014-11-25
permalink: edison-coding
---

In my [last article](/edison-setup) about the Intel Edison, I showed you how to take yours out of the box, and get it set up. Consider this article a follow-on. I'm going to pick up pretty much where the last one ended.

We actually wrote a little bit of code in the setup article, so you got a taste. Now we&#39;re going to learn...
- how to use the power of Node.js to bring in libraries and command our device
- how to deploy code to the device wirelessly (zoing!)
- how to use the excellent Cylon library to make our code elegant and expressive

Let&#39;s start off in this article _without_ employing the help of Visual Studio, and then my next article will capture the many productivity benefits of VS. It&#39;s always nice to start at the base and climb up to awesome tooling. That way, we&#39;re thankful for the conveniences it brings. :)

## Using Node.js
### Installing Node.js
I&#39;m assuming your host PC is Windows. I&#39;m running the technical preview of Windows 10 and it&#39;s all working great. I like to live on the edge.

The easiest way to install Node.js is by simply clicking the big green button you&#39;ll find at [nodejs.org](http://nodejs.org)...

![](/files/edison-coding_01.png)

You&#39;ll see in the installation wizard, that you&#39;re actually getting the NPM utility installed along with the Node.js engine. The installation should take care of a lot of busy work for you such as adding node and npm to your path so you can actually call it from the CLI. My CLI of choice, BTW, is PowerShell. To be clear, I&#39;m talking here about installing Node.js on your host PC. Node and NPM should already be installed on the device if you flashed it according to the instructions in the [last post](/edison-setup).

After you have Node.js installed, we&#39;ll walk through a few steps to create a new node project on your host PC. When we&#39;re done with that, we&#39;ll turn our attention to getting that code over to the Edison and running it there.

### Creating the Folder and File Structure

Node.js projects have a pretty well defined, convention based folder and file structure. They&#39;re very simple too - all of the metadata is in one spot. I don&#39;t know where you keep your development projects, but I keep all of mine under c:\repos and I&#39;ll start there. Watch the following video as I create a new project folder, generate an app package description file (package.json), and then create my initial app.js file...

<video src="/files/edison-coding_02.mp4" controls></video>

As you can see, the npm init makes the creation of our package.json file very easy. The package.json file describes your node project and has a few purposes - the two most prominent that I can think of are a) it provides the metadata necessary in case we end up publishing this package to the node package store and b) it defines the project dependencies so that when the project is copied somewhere else, a simple command is all that&#39;s necessary to actually go out and copy in all binaries necessary for the app to work.

### Writing the Code
Now, in keeping with a simple workflow at first, let&#39;s open app.js in Notepad++, and fill out the following...

``` js
var mraa = require('mraa');
var pin13 = new mraa.Gpio(13);
pin13.dir(mraa.DIR_OUT);
pin13.write(1);
```

This code depends on the mraa module, but if you followed my setup guide and flashed the Intel with the latest image, then you already have it. The mraa module maps the C libraries for interacting with the Edison&#39;s hardware (the GPIO pins, the I2C bus, etc.) to Python and to JavaScript.

The code simply creates a new pin out of pin 13. Pin 13 is the one that conveniently has an LED on the dev board, so we don&#39;t even have to plug anything in to see it. It then sets the direction of that pin to out. And finally, it raises the logic level of the pin by writing a value of 1.

## Deploying Wirelessly
We saw in the last guide how to SSH directly to our device. If you gave your device the name "betty" like I did, then you&#39;ve been provided a DNS name of betty.local which represents the IP address that your device was assigned on the network. If you&#39;re not sure the device or the DNS name are working, just do `ping betty.local` from the CLI (replacing &#39;betty&#39; with the name of your device of course). I&#39;ve actually started pinging to discover the IP address and then using the IP address explicitly for SSH and SCP, because it takes a little time for the alias to resolve but hitting the IP address directly is snappy.

First, we&#39;ll get our code copied to the device, and then we&#39;ll SSH to the device in order to execute the code. It is also possible to simply execute the node app.js command remotely with SSH, but it&#39;s fun to see what&#39;s actually happening.

In this video, I&#39;m going to SSH to the device, make a directory for our hellonode app, then jump back to my host machine, copy the files to the device (and specifically to that project folder) using SCP, and then back to the device to execute the app. The workflow can be simplified a bit, but I&#39;m not arguing at this point. It&#39;s pretty wonderful actually.

Notice the syntax of the SCP command. It wants scp <files> <user>@<host>:<directory>. I do everything as the root user, so the <user> is root and the directory is /home/root/<myprojectfolder>.

<video src="/files/edison-coding_03.mp4" controls></video>

You didn't see anything happen there, but I did. My LED came on.

There are a few things that are cool about this. It's cool that the mraa library preexists and makes communicating with the device pins so easy from a high-level language like JavaScript. Also, it's great that we're remoting and remote deploying our project wirelessly. This means that we can build something like an intelligent camera device, install it in a bird nest, and then remotely upgrade our software without disturbing the birds. That's just the first example that came to mind.

Alright, now lets make our development really clean and easy by employing the CylonJS library.

## Using CylonJS
CylonJS can be found at [cylonjs.com](http://cylonjs.com). You won't even need to go there to get the code, because we're going to use NPM, but you may want to go check it out to get familiar with the project and eventually to research the documentation for whatever device and driver you're using.
Let's run through the steps to do something similar to our hellonode app above, but use the Cylon library.

In this video we will: create a project folder, create our app.js file with some sample code from cylonjs.com that will cause pin 13 to blink, generate a package.json file, install cylon.js via NPM using the `--save` parameter to add it as a dependency in our package.json file, then we'll deploy to the device, and finally SSH to the device and execute the node program. You'll actually see a video of the device with the LED blinking. Just a quick warning - we're not only going to be holding off on Visual Studio at this point, but I've decided to use a CLI text editor for the hilarious factor as well as the convenience of showing everything in one window. I actually really like using the command line, but GUI's are great too. As long as I don't have to remove my hands from my keyboard, I'm a happy programmer.

>EDIT: Thanks to Roberto Cervantes in the comments for pointing out a step that I should have called special attention to. In the following video, notice that after I `scp` the files to the device and then `ssh` to the device, I execute the command `npm install`. This looks into the `package.json` file that we just deployed to see what my project's dependencies are, it goes out to the internet (to the NPM repository) to fetch the packages, and then it installs them. If you skip this step your app will have no idea what `require('cylon')` means.

<video src="/files/edison-coding_04.mp4" controls></video>
 
A few things to note about this video...

- My `edit app.js` command won't work for you because that's a special command line text editor that I use. I'm going to go ahead and assume you have your own favorite way to edit a text file. :)

- Note that installing the `cylon-intel-iot` module added dependencies in the package.json for itself as well as for its dependencies. We actually never had to create the `cylon` module as a dependency. That happened implicitly because the cylon-intel-iot module knew that it needed it. That's a cool thing about node modules - they each know exactly what they depend on and a single `install` command recursively takes care of business.

- We copied over only the app.js and the package.json. We did not copy over the node_modules folder - you'll notice that I deleted it before deploying. This is the right way to deploy project. You don't check the `node_modules` in to source control and don't copy it over in a deployment. Instead, you rely on the dependencies defined in your package.json file. On the deployment server, you execute `npm install` and if anything doesn't get installed correctly, then you need to add it to your `package.json` file.

And now a bit about the CylonJS code. Here it is...

``` js
var Cylon = require('cylon');
Cylon.robot({
  connections: {
    edison: { adaptor: 'intel-iot' }
  },
  devices: {
    led: { driver: 'led', pin: 13 }
  },
  work: function(my) {
    every((1).second(), function() {
      my.led.toggle();
    });
  }
}).start();
```

Just like in our simpler hellonode app, we are doing a require right off the bat here. We are not, however, requiring the mraa library. Instead we're requiring the `cylon` module. The `cylon-intel-iot` module will be invoked from within cylon and it will make calls to the mraa library. We risen up one layer of abstraction. The big benefit here is that we're no longer writing device specific code. We could theoretically switch our Edison out for a Spark and it would just work.

The code block is, I admit, unnecessarily heavy if you're just blinking a light, but ponder for a minute the elegance of this compared to the inevitable mass of imperative code that would occur were we doing anything more complicated.

There are a couple of Cylon terms that I should explicitly call out...

A Cylon _robot_ is the device - the Edison or Beaglebone or Spheo or Tessel or any the other [32 or so devices](http://cylonjs.com/) that Cylon already has adaptors for. You define your robot with a connection and you use an adaptor (in the example it&#39;s `intel-iot`).

A _device_ in Cylon parlance is more like a component on the device. In our example above, the pin is a component and so it's registered as a device. The important part of the device declaration is the driver. A driver is the interface that Cylon will use to interact with it. When the led driver is used, then the thing we&#39;re calling led will have functions like `.turnOn()` and `.turnOff()`. This makes it so that our we only ever speak to our components with sensible language - you tell a servo motor `.clockwise()` and you capture a button press with `.on('push',function(){})`. Sensible is good in my book.

Besides declaring the connections and devices, we declare a function that is to run when the robot is finished with its setup. In this case, we&#39;re using the built-in every function provided by the Cylon library to toggle the led every second. Easy peasy.

Well, folks, there you have it. This is the point in my learning that I felt like the gate was open and I was running free and wild. Oh, the myriad of devices to communicate with. Oh, the plethora of components. Oh, the possibilities.

I have a few more posts to write on this, but I&#39;m keeping them all separate so I can get them out the door. All of these articles are indexed at [codefoster.com/edison](http://codefoster.com/edison).

Please feel free to comment below if you have any trouble here. There&#39;s a good chance I ran into the trouble you&#39;re finding, and if I didn&#39;t I&#39;m willing to bang my head against the wall a bit with you - just a bit.


