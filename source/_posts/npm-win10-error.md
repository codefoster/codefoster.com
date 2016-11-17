---
title: npm Erroring Out on Windows 10 Fast Ring Build 14367
categories: [Windows]
tags: [bash, error, nodejs, node, windows, npm, ubuntu]
date: 2016-07-27
permalink: npm-win10-error
---

Just in case someone else is running into the same thing, I'm running Windows 10 Insiders Build 14367 (on the fast ring), and I'm unable to use npm. When I do a simple `npm -v` I get this error...
<!-- xmore -->

```
C:\code>npm -v

events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: This socket is closed
    at WriteStream.Socket._writeGeneric (net.js:672:19)
    at WriteStream.Socket._write (net.js:724:8)
    at doWrite (_stream_writable.js:307:12)
    at writeOrBuffer (_stream_writable.js:293:5)
    at WriteStream.Writable.write (_stream_writable.js:220:11)
    at WriteStream.Socket.write (net.js:650:40)
    at WriteStream.stream.write (C:\Program Files\nodejs\node_modules\npm\node_modules\npmlog\node_modules\ansi\lib\newlines.js:36:21)
    at Cursor.write (C:\Program Files\nodejs\node_modules\npm\node_modules\npmlog\node_modules\ansi\lib\ansi.js:157:23)
    at Cursor.(anonymous function) [as show] (C:\Program Files\nodejs\node_modules\npm\node_modules\npmlog\node_modules\ansi\lib\ansi.js:226:26)
    at Object.ProgressBar.hide (C:\Program Files\nodejs\node_modules\npm\node_modules\npmlog\node_modules\gauge\progress-bar.js:101:15)

 3.9.5
```

My workaround is simply to type `bash` and get into Ubuntu where I have node and npm. There's not really any disadvantage to this either since it operates on the same directory structure. I'm loving this Bash on Ubuntu on Windows thing.