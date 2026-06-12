---
title: TIL Something About Bot Middleware
categories: [Bots]
tags: [bots,caap,chatbot,bot]
date: 2017-04-05 23:10:03
---


>PREAMBLE: I am trying to blog about the little things now. The idea is partly the reason why so many technical blogs exist - it's a place for me to record things I'll need to recall later. But modern search engines are good enough, that you just might make it to this blog post to answer a question that's burning a hole in your brain right now and that's awesome. I know I love it when I get a simple, concise, and sensible explanation of something I'm trying to figure out.

>MORE PRE-RAMBLE: So, I've sort of drifted into bot territory. That is, I didn't initially get extremely excited about the concept of chat bots. It seemed silly. I have since been convinced of their big business value and have really enjoyed learning how to embrace the [Node.js SDK](http://github.com/Microsoft/botbuilder) for [Microsoft's Bot Framework](http://botframework.com).

Recently, I realized that the very best way to learn about the SDK is not to search online for docs or posts, but to go straight to the [source](https://github.com/Microsoft/BotBuilder/tree/master/Node), and when you get there, look specificallly for the [/core/lib/botbuilder.d.ts](https://github.com/Microsoft/BotBuilder/blob/master/Node/core/lib/botbuilder.d.ts) file.

That file is a treasure trove of useful comments directly decorating the methods, interfaces, and properties of your bot. It's great that the bot is written in TypeScript, because that means this source code contains a lot of documenting types that not only made it easier for the team to developer this, but now make it easier for us to read it as well.

Tonight I was specifically wondering about something. I had seen middleware components for bots using property values of `botbuilder` and `send`, but then I saw `receive` and wondered what every possible property was and specifically what they did.

I discovered that in fact `botbuilder`, `send`, and `receive` are the only possible property values there. Let me drop that snippet of the source code here, so you can see how well documented those are...

``` javascript
/** 
 * Map of middleware hooks that can be registered in a call to __UniversalCallBot.use()__. 
 */
interface IMiddlewareMap {
    /** Called in series when an incoming event is received. */
    receive?: IEventMiddleware|IEventMiddleware[];

    /** Called in series before an outgoing event is sent. */
    send?: IEventMiddleware|IEventMiddleware[];

    /** Called in series once an incoming message has been bound to a session. Executed after [analyze](#analyze) middleware.  */
    botbuilder?: ICallSessionMiddleware|ICallSessionMiddleware[];
}
```

The `IMiddlewareMap` is an interface, which is a TypeScript concept. That's not in raw JavaScript. TypeScript does interfaces right, because they're not actually enforced on objects that implements them (we are, afterall, talking about JavaScript where pretty much _nothing_ is enforced). Rahter, they're an indication of intent - as in "I intend for my object to conform to the `IMiddlewareMap` interface."

That means that at design time (when you're typing the code in your IDE), you get good information back about whether what you're typing lines up with what you said this object is expected to be.

So that's just one little thing I learned tonight wrapped up with all kinds of preamble, pre-ramble, and other words. Hope it helps. Happy hacking.