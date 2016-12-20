---
title: Accidental Old Version of Node on the Raspberry Pi
categories: [Maker]
tags: [raspberry-pi, device, raspberry, board, iot, hardware, internet-of-things, electronics, pi, maker]
date: 2016-06-25
---

I beat my head against a wall for a long time wondering why I wasn't able to do basic GPIO on a Raspberry Pi using Node. Even after a fresh image and install, I was getting cryptic node error messages when I ran my basic blinky app.


Lucky for me (and perhaps you) I got to the bottom of it and am going to document it here for posterity. Let's go.

The head beating happened at a hackathon I recently attended with some colleagues.

The task was simple - turn on an LED. It's so simple that it's become the "hello world" app of the IoT world. There's zero reason in the world why this task should take more than 10 minutes. And yet I was stumped.

After a fresh image of Raspbian, an install of NVM, and then a subsequent installation of Node.js 6.2.2, I wrote a blink app using a variety of modules. I used `pi-gpio`, `rpi-gpio`, `onoff`, and finally `johnny-five` and the `raspi-io` driver.

None of these strategies were successful. Ugh. Node worked fine, but any of the libraries that accessed the GPIO were failing.

I was getting an obscure error about an `undefined symbol: node_module_register`. No amount of searching was bringing me any help until I found [this GitHub issue](https://github.com/Unitech/PM2/issues/1477) where [nodesocket](https://github.com/nodesocket) (thanks, nodesocket!) mentioned that he had the same issue and it was caused by an NVM install of Node and an accidental, residual version of node still living in /usr/local/bin. In fact, that was exactly what was happening for me. It was a subtle issue. Running node -v returned my v6.2.2\. Running which node returned my NVM version. But somewhere in the build process of the GPIO modules, the old version (v0.10) of node from the /usr/local/bin folder was being used. 

There are two resolutions to this problem. You can kill the old version of node by deleting the linked file using `sudo rm /usr/local/bin/node` and then create a new one pointing to your NVM node. I decided, however, to deactive NVM...

```
nvm deactivate
```

...and then follow these instructions (from [here](https://github.com/nebrius/raspi-io/wiki/Getting-a-Raspberry-Pi-ready-for-NodeBots)) to install a single version node...

``` bash
wget http://nodejs.org/dist/v6.2.2/node-v6.2.2-linux-armv7l.tar.xz`` # Copied link
tar -xf node-v6.2.2-linux-armv7l.tar.xz # Name of the file that was downloaded
sudo mv node-v6.2.2-linux-armv7l /usr/local/node
cd /usr/local/bin
sudo ln -s /usr/local/node/bin/node node
sudo ln -s /usr/local/node/bin/npm npm
```

I like using NVM on my dev machine, but it's logical and simpler to use a single, static version of Node on the pi itself.

>EDIT (2016-12-14): Since writing this, I discovered the awesomeness of [nvs](https://github.com/jasongin/nvs). Check it out for yourself.

And that did it. I had blinky working in under 3 minutes and considering I get quite obsessive about unresolved issues like this, I had a massive weight lifted.

BTW, through this process I also learned about how the GPIO works at the lowest level on the pi, and I blogged about that at [codefoster.com/pi-basicgpio](/pi-basicgpio). 