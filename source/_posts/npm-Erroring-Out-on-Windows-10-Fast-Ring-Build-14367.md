---
title: npm Erroring Out on Windows 10 Fast Ring Build 14367
tags: []
date: 2016-10-02 16:03:46
---

Just in case someone else is running in to the same thing, I&#39;m running Windows 10 Insiders Build 14367 (on the fast ring), and I&#39;m unable to use npm. When I do a simple `npm -v` I get this error...

`C:\code&gt;npm -v

events.js:160

&nbsp; &nbsp; &nbsp; throw er; // Unhandled &#39;error&#39; event

&nbsp; &nbsp; &nbsp; ^`

`Error: This socket is closed

&nbsp; &nbsp; at WriteStream.Socket._writeGeneric (net.js:672:19)

&nbsp; &nbsp; at WriteStream.Socket._write (net.js:724:8)

&nbsp; &nbsp; at doWrite (_stream_writable.js:307:12)

&nbsp; &nbsp; at writeOrBuffer (_stream_writable.js:293:5)

&nbsp; &nbsp; at WriteStream.Writable.write (_stream_writable.js:220:11)

&nbsp; &nbsp; at WriteStream.Socket.write (net.js:650:40)

&nbsp; &nbsp; at WriteStream.stream.write (C:\Program Files\nodejs\node_modules\npm\node_modules\npmlog\node_modules\ansi\lib\newlines.js:36:21)

&nbsp; &nbsp; at Cursor.write (C:\Program Files\nodejs\node_modules\npm\node_modules\npmlog\node_modules\ansi\lib\ansi.js:157:23)

&nbsp; &nbsp; at Cursor.(anonymous function) [as show] (C:\Program Files\nodejs\node_modules\npm\node_modules\npmlog\node_modules\ansi\lib\ansi.js:226:26)

&nbsp; &nbsp; at Object.ProgressBar.hide (C:\Program Files\nodejs\node_modules\npm\node_modules\npmlog\node_modules\gauge\progress-bar.js:101:15)

&nbsp;3.9.5`

My workaround is simply to type `bash` and get into Ubuntu where I have node and npm. There&#39;s not really any disadvantage to this either since it operates on the same directory structure. I&#39;m loving this Bash on Ubuntu on Windows thing.