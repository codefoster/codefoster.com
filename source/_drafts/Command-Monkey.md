---
title: Command Monkey
tags: []
date: 2016-10-02 16:03:46
---

Alright, this is going to be fun. The process is going to be fun, and the end game is going to be even more so.

Let me paint a picture of the final product. I have a monkey toy on the table before me. I then hold my Microsoft Band up to my mouth and talk into it like Maxwell Smart. I say two simple words - &quot;Monkey, dance!&quot;

And in no time flat, the monkey toy obeys my command and is set into motion.

The whole thing reminds you of [Tweet Monkey](http://codefoster.com/tweetmonkey) and it should. This is Tweet Monkey&#39;s older and slightly more involved&nbsp;brother.

Where Tweet Monkey was a device to cloud scenario, Command Monkey is a Cortana to phone app to cloud to device scenario. Where Tweet Monkey relied on the Twitter Streaming API (which is very cool), Command Monkey involves our very own streaming API using web sockets.

I know it sounds like it&#39;s going to be a lot of code, but it&#39;s really not. You&#39;ll see. Let me just say too that if for some reason you don&#39;t have any interest in going through this step by step, then don&#39;t. Just go grab [the code on GitHub](http://github.com/codefoster/commandmonkey), because that&#39;s how we roll.

I&#39;m going to be using the free [community version of Visual Studio](http://visualstudio.com) and the [Node.js Tools for Visual Studio](http://nodejstools.codeplex.com). You could obviously use anything beyond an abacus to generate ASCII, so let&#39;s not get opinionated here. Use what you love. It should go without saying that you&#39;ll need Node.js installed to make this work. That can be found at [nodejs.org](http://nodejs.org).

I&#39;m going to host my Node.js project in Azure and in fact, I&#39;m going to get it there in a rather cool way. I&#39;m going to use the cross platform CLI for Azure to create the site and then I&#39;ll use git deployment to publish the app.

The architecture diagram is going to look something like this...

![](http://codefoster.blob.core.windows.net/site/image/bd6125c5de3641859c28c6b8f3eb2dcd/commandmonkey_archdiagram_1.png)

The part about speaking the command into a Microsoft Band just looks like special sauce, but you get that for free with a Band. The Band already knows how to talk to Cortana on your phone.

You will need to teach Cortana to talk to you app, so let&#39;s do that first. Let&#39;s build a Windows Phone app.

## Building the Phone App

In Visual Studio, hit File | New | Project&nbsp; and create a blank Windows Phone App using JavaScript called `CommandMonkey.phone`. Call the solution just `CommandMonkey`. Like this...

![](http://codefoster.blob.core.windows.net/site/image/844f27c5a9004670b19598635ac6dedf/commandmonkey_newproject_phone_1.png)

In order to customize Cortana, we need to define a voice command and that requires the _Microphone_ capability. To add that, double click on your package.appxmanifest, go to the Capabilities tab, and check Microphone...

![](http://codefoster.blob.core.windows.net/site/image/51d2ab60dec64eb0bdb22df0b80fa424/commandmonkey_capability_1.png)

Now we need to create a Voice Command Definition (VCD)&nbsp;file. This file defines to Cortana how to handle the launching of our app when the user talks to her. Here&#39;s what you should use...

<pre style="margin-left: 40px;">
`&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;

&lt;VoiceCommands xmlns=&quot;http://schemas.microsoft.com/voicecommands/1.1&quot;&gt;

  &lt;CommandSet xml:lang=&quot;en-us&quot; Name=&quot;examplevcd&quot;&gt;
    &lt;CommandPrefix&gt;Monkey&lt;/CommandPrefix&gt;
    &lt;Example&gt;Command the monkey!&lt;/Example&gt;

    &lt;Command Name=&quot;command&quot;&gt;
      &lt;Example&gt;dance&lt;/Example&gt;
      &lt;ListenFor&gt;{command}&lt;/ListenFor&gt;
      &lt;Feedback&gt;Commanding...&lt;/Feedback&gt;
      &lt;Navigate/&gt;
    &lt;/Command&gt;

    &lt;PhraseList Label=&quot;command&quot;&gt;
      &lt;Item&gt;dance&lt;/Item&gt;
      &lt;Item&gt;chatter&lt;/Item&gt;
    &lt;/PhraseList&gt;

  &lt;/CommandSet&gt;

&lt;/VoiceCommands&gt;`
</pre>

The interesting bits are lines 6 and 9-14\. The combination of the prefix with the command name means that we&#39;ll be able to say &quot;Monkey dance&quot; and Cortana will understand that she should invoke the Command Monkey app and use &quot;dance&quot; for the command.

You&#39;ll notice that I have a second command in the phrase list for the command - _chatter_. I don&#39;t currently have a mechanical monkey capable of both dancing and chattering, but you can imagine a device capable of doing more than one action and so the capability is already stubbed out.

Next we need to register this VCD file in our phone app. When we do this and then install the app on a phone, Cortana will then have awareness of the voice capabilities of this app. She&#39;ll even show it to the user when they ask Cortana &quot;What can I say?&quot; To do that, open the `js/default.js` file and add this to the beginning of the `onactivated `function...

`var sf = Windows.Storage.StorageFile;

var vcm = Windows.Media.SpeechRecognition.VoiceCommandManager;

sf.getFileFromApplicationUriAsync(new Windows.Foundation.Uri(&quot;ms-appx:///vcd.xml&quot;))

&nbsp; .then(function (file) {

&nbsp; &nbsp; &nbsp; vcm.installCommandSetsFromStorageFileAsync(file);

&nbsp; });`

<span style="line-height: 1.6em;">And there&#39;s one more step to completing the Cortana integration. We need to actually do something when our application is invoked using this voice command.</span>

Still in the `default.js`, add this after the the `if` statement that is looking for the `activation.ActivationKind.launch`

`else if (args.detail.kind === activation.ActivationKind.voiceCommand) {

&nbsp; var command = args.detail.result.semanticInterpretation.properties.command[0];

&nbsp; WinJS.xhr({ url: &#39;http://CommandMonkey.azurewebsites.net/api/command?cmd=&#39; + command });

}`

<span style="line-height: 1.6em;">Now let&#39;s talk about what that does.</span>

The `if` statement we hung that `else if` off of is checking to see just how the app was launched. If the user clicked the tile on the start screen, then the value will be `activation.ActivationKind.launch`. But if they activated it using Cortana then the value will be `activation.ActivationKind.voiceCommand`, so this is simply how we handle that case.

The way we handle it is to access the parsed semantic using the event argument and then to send whatever command the user spoke to the CommandMonkey.azurewebsites.net website.

How did that website get created you might ask? I&#39;m glad you did, because we&#39;ll look at that next. As for the phone project, that&#39;s it. We&#39;re done. It&#39;s not fancy, and in fact if you run it, you&#39;ll see the default &quot;Content goes here&quot; on a black screen, but remember, we&#39;re keeping this simple.

## Building the Node.js Web Service

Visual Studio is able to hold multiple projects in a single solution. So far we have a single solution (called CommandMonkey) with a Windows Phone project (called CommandMonkey.phone).

<span style="line-height: 1.6em;">Now we&#39;re adding the web service.</span>

Find the solution node in Visual Studio&#39;s Solution Explorer and right click on it and choose Add | New Project...

![](http://codefoster.blob.core.windows.net/site/image/caad55fdbd124078b9feb8c4ec63ec39/commandmonkey_newproject_service_1.png)

Now install the express and socket.io Node modules. You can either do it the graphical way or the command line way.

The graphical way is to right click on npm in the .service project and choose Install New npm Packages... Then search for and install express and socket.io. For each leave the Add to package.json checked so they&#39;ll be a part of your project&#39;s package.json.

![](http://codefoster.blob.core.windows.net/site/image/09e1bf9e339c4943a4e787ac32fb050b/commandmonkey_npminstall_graphical_1.png)

Now the command line way. Navigate to the root of this project at a command line or in PowerShell and enter `npm install express socket.io --save`

Now open up the app.js and paste this in...

`var http = require(&#39;http&#39;);

var app = require(&#39;express&#39;)();`

`var targetSocket;`

`app.set(&#39;port&#39;, process.env.PORT);

app.get(&#39;/api/command&#39;, function (req, res) {

&nbsp;&nbsp;&nbsp; if(targetSocket) targetSocket.emit(&#39;command&#39;, req.query.cmd);

});`

`module.exports = app;`

`var server = http.createServer(app).listen(app.get(&#39;port&#39;));`

`var io = require(&#39;socket.io&#39;)(server);`

`io.on(&#39;connection&#39;, function (socket) {

&nbsp;&nbsp;&nbsp; console.log(&#39;connection from client &#39; + socket.id);

&nbsp;&nbsp;&nbsp; socket.on(&#39;setTarget&#39;, function () {

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; console.log(&#39;Setting &#39; + socket.id + &#39; as target...&#39;);

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; targetSocket = socket

&nbsp;&nbsp;&nbsp; });

});`

This is not a lot of code for what it&#39;s doing. This is...

*   creating a web server
*   setting up web sockets using socket.io
*   setting up a handler for when clients call the &#39;setTarget&#39; event
*   defining a route to /api/command which calls the &quot;target&quot; client with the specified command

That&#39;s what I love about JavaScript and Node.js. The code is short enough to really be able to see the essence of what&#39;s going on.

Okay, the service is done, but it&#39;s still local. We need to get this published.

We&#39;re going to use Azure Websites feature called git deployment.

There&#39;s something interesting about our project though. The git repository would exist at the solution level and include all of our code, but the folder that contains the Node.js project that we actually want published to Azure is in a subdirectory called CommandMonkey.service. So we need to create a &quot;deployment file&quot;. To do that just create a file at the root of the project called .deployment and use this as the contents...

`[config]

project = CommandMonkey.service`

And in typical fashion, we&#39;re going to have a few files that we have no interest in checking in to source control, so make yourself a .gitignore file (again at the root of the CommandMonkey solution) and use this as the content...

`node_modules

azure.err

*.publishsettings

.ntvs_analysis.dat

bin/

bld/

#.suo

*.jsproj.user`

Now git commit the project using...

`git init

git add . -A`

`git commit -m &quot;Initial commit, publishing service&quot;`

Now you need to create an Azure website. Note, you need to already have your account configured via the Azure xplat-cli in order to do this. I&#39;ll consider that task outside the scope of this article and trust you can find out how to do that with a little internet searching.

`azure site create CommandMonkey --git`

And of course, you can&#39;t use _CommandMonkey_, because I&#39;ve already used that one, but you can come up with your own name.

The `--git` parameter, by the way, tells the create command to also set up git deployment on the remote website and will also create a git remote in the local repository so that you&#39;ll be able to execute the next line.

To publish the website to azure, just use...

`git push azure master`

...and that will push all of your code to a repository in Azure and will then fire off&nbsp;a process to deploy the site for you out of the CommandMonkey.service directory which you specified earlier.

There&#39;s one thing you need to do in the Azure portal to make this work. If anyone knows how to do this from the xplat-cli, be sure to drop me a comment below. I&#39;d love to know. You need to turn on web sockets. Just go to your website in the portal, go to the configuration tab, and find the option to turn on web sockets. Easy.

Whew, done with that. Not so hard. Now it&#39;s time to write the Node.js app that&#39;s going to represent the device.

## Building the Device Code

As is often the case, the device project is the simplest project in the solution. It does, after all, only have one job - listen for socket messages and then turn the relay pin high for a couple seconds. Let&#39;s go.

In Visual Studio, right click on the solution and Add | New Project... and add another blank Node.js app. This time call it CommandMonkey.device...

![](http://codefoster.blob.core.windows.net/site/image/0322f245b1c645699ef0cd2882df4f62/commandmonkey_newproject_device_1.png)

Using the technique above for installing npm packages, install the `socket.io-client` npm package.

`var cylon = require(&#39;cylon&#39;);

var socket = require(&#39;socket.io-client&#39;)

&nbsp;&nbsp;&nbsp; .connect(&#39;http://CommandMonkey.azurewebsites.net&#39;);`

`cylon.robot({

&nbsp;&nbsp;&nbsp; name: &#39;edison&#39;,

&nbsp;&nbsp;&nbsp; connections: { edison: { adaptor: &#39;intel-iot&#39; } },

&nbsp;&nbsp;&nbsp; devices: { monkey: { driver: &#39;direct-pin&#39;, pin: 2 } },

&nbsp;&nbsp;&nbsp; work: function (edison) {

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; socket.emit(&#39;setTarget&#39;);

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; socket.on(&#39;command&#39;, function (cmd) {

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; edison.monkey.digitalWrite(1);

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; setTimeout(function () { edison.monkey.digitalWrite(0); }, 2000);

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; })

&nbsp;&nbsp;&nbsp; }

}).start();`

You can see that this code is connecting to our web service in Azure - CommandMonkey.azurewebsites.net.

It also requires and initializes the Cylon library so it can talk to the hardware in an easy, expressive, and modern way.

The Cylon `work `method is like Cylon&#39;s &quot;ready&quot; method, and so that&#39;s where we&#39;ll invoke the &#39;setTarget&#39; event. This socket event request for the server to save this socket as the &quot;target&quot; socket. That just means that when anyone triggers messages on the server, _this _is the device that&#39;s going to pick them up. You may want to create this as an array and thus allow for multiple devices to be targets, but I&#39;m keeping it simple here.

Finally, it handles the &#39;command&#39; event that the server is going to pass it and simply raises the digital pin for 2 seconds.

To make this work, you need to deploy this project to your device. I use an Intel Edison, but this will work on any SoC (System on a Chip) that will run Linux. I am not going to repeat how to setup the Edison or deploy to it. You can find that in my series of Intel Edison posts indexed at [codefoster.com/edison](http://codefoster.com/edison).

Once you get the code deployed to the device, you then run the CommandMonkey.phone project on your phone emulator or on your device. I run mine directly on my device so I can talk to my Microsoft Band.

And that should pretty much do it. If I haven&#39;t made any gross errors in relaying this and you haven&#39;t made any errors typing or pasting it in, then you&#39;re scenario should work like mine. That is... you hold the action button on your Microsoft Band and say...

## &quot;Monkey, dance!&quot;

...and a&nbsp;very short time later you get a message with the command on the screen.

I hope you&#39;re mind is awhir like mine is with all the ideas for things you could do with this. We have real time device to device communication going on, and users really get excited when they utter a command and a half a second later something is happening in front of them.

Go. Make.

I recorded a [CodeChat](http://codefoster.com/codechat/023) episode with my colleague Jason Short ([@infinitecodex](http://twitter.com/infinitecodex)) about Command Monkey. Here you go...

<iframe src="//channel9.msdn.com/Shows/codechat/023/player" width="640" height="360" allowFullScreen frameBorder="0"></iframe>