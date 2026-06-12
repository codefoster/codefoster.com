---
title: Dynamic Bot Dialogs
categories: [Bot Framework]
tags: [bot,chatbot,node.js]
date: 2017-04-11 10:19:58
---

> Please note that this article's age is showing as it's talking about Bot Framework v3. The subsequent version of Bot Framework works entirely differently.

I'm having a lot of fun developing against [botbuilder](http://github.com/microsoft/botbuilder) - the Node.js SDK for the bot framework.

When you're learning to make bots, you study and build a lot of simple bots that do very little. In this case, it makes good sense to simply define the bot's dialogs in the same file where you do everything else - the file you may call server.js or app.js or index.js. But if you are working on a bot with enough complexity or bulk to the dialogs, you'll want to settle on a pattern.

## Encapsulated Dialogs
The first pattern embraced I learned from [@pveller](https://github.com/pveller)'s excellent [ecommerce-chatbot](https://github.com/pveller/ecommerce-chatbot). In fact, I learned a lot of good patterns from this bot.

In the ecommerce-chatbot bot, Pavel breaks each dialog out into a separate JavaScript file and wraps them in a separate module. Then from the main page, he calls out to those modules, passing in the bot, and "wires up" the dialog to the bot within that separate module.

Notice in the following code that the main `app.js` file configures the dialog by requiring it and then calling the returned function passing in the `bot` object. That allows the dialog to use the `bot` internally (even though it's a separate module) to call `bot.dialog()` and define the dialog functions.

``` js
//simplified from https://github.com/pveller/ecommerce-chatbot

//app.js
...
let showProductDialog = require('./app/dialogs/showProduct');
...
intents.matches('ShowProduct', '/showProduct');
...
showProductDialog(bot);
...

//sampledialog.js
module.exports = function (bot) {
    bot.dialog('/showProduct', [
        function(session,args,next) {
            //waterfall function 1
        },
        function(session,args,next) {
            //waterfall function 2
        }
    ]);
}

```

The result is a much more concise `app.js` file and a bit of welcome encapsulation. The dialogs handle themselves and nothing more.

## Dynamically Loaded Dialogs
Later, while I was working with Johnson and Johnson on a bot, I developed a pattern for dynamically loading dialogs based simply on a) their presence in the `dialogs` project folder and b) their conformation to a simple pattern.

To create a new dialog, then, here's all I need to do...

``` js
module.exports = function (name, bot) {
    bot.dialog(`/${name}`, [
        function (session, args, next) {
            session.endDialog(`${name} reached`);
        }
    ]).triggerAction({matches:name});
};

``` 

The convention I need to follow is to define a module with a function that accepts both a name and a bot object.

That function then calls the `dialog()` method on the `bot` just like before, but it uses the name that's passed in as a) the dialog route and b) the trigger action. This means that if the dialog is called `greeting`, then it will be triggered whenever an action called `greeting` fires.

So far, this is a small advantage, but look at how I load this and the other dialogs...

``` js
getFileNames('./app/dialogs')
    .map(file => Object.assign(file, { fx: require(file.path) }))
    .forEach(dialog => dialog.fx(dialog.name, bot));
```

The `getFileNames` function is my own, but it simply reads the path you pass in recursively returning all `.js` files.

The `.map()` calls require on the path of each found file and adds the resulting export (in our case here the modules are exporting a function) to the array as a property called `fx`.

Finally, we call `.forEach()` on this and actually execute the function. This configures the dialog for our bot.

The overall result then is the ability to add dialogs to the bot without any wiring. You just create a new dialog, give it a filename that makes good sense in your application, and it should be loaded and ready to be targeted.

You may not get enough context from these snippets to implement this if that's what you want to do, so check out a fuller sample in the [botstarter](https://github.com/DanielEgan/botstarter) repo that [@danielegan](https://github.com/DanielEgan) is working on. The botstarter repo is designed to be a good starting point for creating bots.