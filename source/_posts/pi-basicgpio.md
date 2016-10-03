---
title: The Most Basic Way to Access GPIO on a Raspberry Pi
categories: [Maker]
tags: [raspberry-pi, device, raspberry, board, iot, hardware, internet-of-things, electronics, pi, maker]
date: 2016-06-25
permalink: pi-basicgpio
---

​I've been hacking on the Raspberry Pi of late and wanted to share out some of the more interesting learnings.

I think people that love technology love understanding how things work. When I was a kid I took apart the family phone because I was compelled to see what was inside that made it tick. My brother didn't care. If it made phone calls, he was fine with it. I had to understand.

Likewise, I knew that I could use a Node library and change the GPIO pin levels on my Raspberry Pi, but I wanted to understand how that worked.

In case you're not familiar, GPIO stands for General Purpose Input/Output and is the feature of modern IoT boards that allows us to controls things like lights and read data from sensors. It's a bank of pins that you can raise high (usually to something like 3.3V) or low (0V) to cause some electronic behavior to occur.

On an Intel Edison (another awesome IoT board), the platform developers decided to provide a C library with mappings to Node and Python. On the default Edison image, they provided a global node module that a developer could include in his project to access pins. The module, by the way, is called libmraa.

On a Raspberry Pi, it works differently. Instead of a code library, a Pi running Raspbian uses the Linux file system.

When you're sitting at the terminal of your pi (either hooked up to a monitor and keyboard or ssh'ed in), try...

```
cd /sys/class/gpio
```

You'll be taken to the base of the file system that they chose to give us for accessing GPIO.

The first thing to note is that this area is restricted to the root user. Bummer? Not quite. There's a way around it.

The system has a function called _exporting_ and _unexporting_. Yes, I know that unexport is not a real word, but alas I'm not the one that made this stuff up, and besides, who said Linux commands had to make sense?

To access a pin, you have to first _export_ that pin. To later disallow access to that pin, you _unexport_ it.

I had a hard time finding good documentation on this, but then I stumbled upon [this znix.com page](http://raspberrypi.znix.com/hipidocs/topic_gpiodev.htm) that describes it quite well. By the way, this page references "the kernel documentation," but when I hit that link here's what I get...

![](http://codefoster.blob.core.windows.net/site/image/34f78c573b0e46c4b8a5b54c635867b3/pi-basicgpio_404_1.png)

Oh well.

Now keep in mind that to follow these instructions you have to _be_ root. You cannot simply sudo these commands. There is an alternative called _gpio-admin_ that I'll talk about in a second. If you want to just become root to do it this way, you do...

```
su root
```

If you get an error when you do that, you may need to first set a password for root using `sudo passwd`.

To export then, you do this...

```
echo <pin number> > /sys/class/gpio/export
```

And the pin number is the pin _name_ - not the header number. So pin _GPIO4_ is on pin 7 on an RP2, and to export this you use the number 4.

When you do that, a virtual directory is created inside of `/sys/class/gpio` called `gpio4`, and that  directory contains virtual files such as `direction`, `value`, `edge`, and `active_low`. These files don't act like normal files, by the way. When you change the text inside one of these files, it actually does something - like perhaps the voltage level on a GPIO pin changes. Likewise, if a hardware sensor causes the voltage level on a pin to change, the content of one of these virtual files is going to change. So this becomes the means by which we communicate in both directions with our GPIO pins.

The easiest way, then, to read the value of the `/sys/class/gpio/gpio4/value` file is...

```
cat /sys/class/gpio/gpio4/value
```

Easy.

To write to the same file, you have to first make sure that it's an `out` pin. That is, you have to make sure the pin is configured as an output pin. To do that, you change the virtual `direction `file. Like this...

```
echo out > /sys/class/gpio/gpio17/direction
```

That's a fancy (and quick) way to edit the contents of the file to have a new value of "out". You could just use `vi `or `nano `to edit the file, but using `echo` and the direction operator (`>`) is quicker.

Once you have configured your pin as an output, you can change the value using...

```
echo 0 > /sys/class/gpio/gpio4/value //set the pin low (0V)
echo 1 > /sys/class/gpio/gpio4/value //set the pin high (3.3V)
```

Now that I've described the setting of the direction and the value, you should know that there's a shortcut for doing both of those in one motion...

```
echo high > /sys/class/gpio/gpio4/direction
```

There's more you can do including edge control and logic inversion, but I'm going to keep this post simple and let you read about that on [the znix.com page](http://raspberrypi.znix.com/hipidocs/topic_gpiodev.htm).

Now, although it's fun and satisfying to understand how this is implemented, and it might be fun to manipulate the pins using this method, you'll most likely want to use a language library to control your pins in your app. Just know that the Python and Node libraries that change value are actually just wrappers around these file system calls.

For instance, let's take a look at the [pi-gpio.js file](https://raw.githubusercontent.com/rakeshpai/pi-gpio/master/pi-gpio.js) in the [pi-gpio](https://github.com/rakeshpai/pi-gpio) module...

```
write: function(pinNumber, value, callback) {
	pinNumber = sanitizePinNumber(pinNumber);
	value = !!value ? "1" : "0";
	fs.writeFile(sysFsPath + "/gpio" + pinMapping[pinNumber] + "/value", value, "utf8", callback);
}
```

When you call the `write()` method in this library, it's just calling the file system.

So there you have it. I hope you feel a little smarter.