---
title: Remote Debugging Node on an IoT using VS Code 
categories: []
tags: []
date: 2017-11-17 07:42:27
---

If you're deploying a Node.js project to a Raspberry Pi (or other IoT Device), you might be interested in remote debugging.

Remote debugging is the means by which you connect your IDE - in this case VS Code - to the running node process on another networked computer. As the code in the process executes, breakpoints can be hit, variables can be inspected for their current value, and general merriment can ensue.

For a concrete example, imagine developing a robot where the brain is a Raspberry Pi. You write a bunch of Node code that controls a few motors... perhaps an LCD screen... some buttons and LEDs maybe. Then you fire up your robot and things don't work exactly right. Maybe the drive motors are going throught he sequence that you expect to move your robot like you want.

Enter... remote debugging.

But before I get into the scenario, I'm going to add one more twist. The code is on your laptop at home on wifi, but your robot is work.

Yikes.

No problem, actually. You see, remote debugging from VS Code to a node process uses basic TCP/IP communication that can either use a direct networking connecton (same subnet) or can be tunneled over something like VPN, or in the case of this example over an ad hoc tunneling connection.

So first, write your code and deploy it to your device. Let's use something easy for an example...

```js
let five = require('johnny-five');
let raspi = require('raspi-io');

let board = new five.Board({ io: new raspi() });
board.on('ready', () => {

    let led = new five.Led('GPIO26');

    setInterval(() => {
        led.toggle();
    }, 500);

});
```

In case you're not familiar, this code uses Johnny Five and a Raspberry Pi adapter, and when the board is ready, it configures an LED and toggles its state every 500 milliseconds. You could also call `led.blink(500)` to accomplish this, but I want an imperative call for this example so we have something to break on.

Now, it's important that the code in VS Code and the code on the device is in sync. If you make some changes locally and try to connect to debug, you'll get some strange behavior.

Recent versions of Node.js don't use `debug`, they use `inspect`, but it's the same thing.

So, start by running the Node process on the device by running the following in your project folder (wherever you have the `.js` file with the code above)...

```
node --inspect-brk .
```

That should run and tell you your inspector is listening on port 9229 (by default).

That's fine and dandy, but remember, the device is at work and you're debugging from home, so how do you hit port 9229? You tunnel it.

I like to use a node package called `localtunnel`. On the Pi, do this...

```
npm i localtunnel -g
```

And now run...

```
lt -p 9229 -s mydevice
```

...where `mydevice` must be a globally unique name.

When you've done that, then communications with your running process's inspector protocol is available at http://mydevice.localtunnel.me. 

You can test it by (from any machine in the world) hitting http://mydevice.localtunnel.me/{???} in a browser. That should give you a little JSON response.

Now you're ready to attach.

In VS Code, edit your `.vscode/launch.json` file, and add a new config that looks something like this...

```json
{
    "type": "node",
    "request": "attach",
    "name": "Attach to Remote",
    "address": "mydevice.localtunnel.me",
    "port": 80,
    "localRoot": "${workspaceFolder}",
    "remoteRoot": "~/projects/mynodeapp"
}
```

The `address` is the host, and in our case that's the localtunnel.me address prefixed with the subdomain you chose.

The `port` is 80. It's 9229 locally on your Raspberry Pi, but you're tunneling it to the internet using port 80, so that's what you use in VS Code.

The `localRoot` is the codebase on your machine, and `${workspaceFolder}` is an alias that works great for that.

Finally, the `remoteRoot` is the path to your code on the device. Don't forget, the local code and the remote code have to be identical for this to work.

Now just launch your project using this config by switching to the debug workbench, selecting "Attach to Remote" in the dropdown and hitting the green arrow.

Because you chose `--inspect-brk` to run your node process, you should see your code broken on the first line.