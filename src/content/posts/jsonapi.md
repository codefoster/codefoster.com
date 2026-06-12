---
title: The World's Quickest API
categories: [Software]
tags: [api,productivity,javascript,backend,server]
date: 2017-11-10 15:38:55
---

Sometimes you just need a quick API. Am I right?

I was working on a project recently and needed just that. I needed an API, and I didn't want to spend a lot of time on it.

One of my strategies for doing this in days of old was to write up some code-first C# entities, reverse engineer the code to create an Entity Framework model, and serve it using OData. It was great and all that stuff is still around... still supported... still getting improved and released, so you could go that way, but that's not how I made my last "instant API".

My last one was even easier.

I found a node package called [json-server](http://npmjs.com/packages/json-server) that takes a JSON file and turns it into an API. Done. Period. End of story. A few minutes composing a JSON file if you don't have one already and then a few lines of code to turn it into an API.

I also often use a node package called [localtunnel](http://npmjs.com/packages/localtunnel) that opens a local port up to the internet. Now I spend a few minutes writing a JSON file and 20 seconds opening a port and I have myself an API that I can share with the world.

For example. Let's say I want to write an app for dog walkers.

Here's some dog data...

``` json
{
    "dogs": [
        {
            "id": 1,
            "name": "Rover",
            "size": "large",
            "gender": "male",
            "preferences": [
                "feed": true,
                "time": "morning"
            ],
            "notes":"Rover doesn't get along well with other dogs"
        },
        {
            "id": 2,
            "name": "Spot",
            "size": "small",
            "gender": "male",
            "preferences": [
                "feed": false,
                "time": "afternoon"
            ],
            "notes":"Spot loves frisbee!"
        },
        {
            "id": 3,
            "name": "Jill",
            "size": "medium",
            "gender": "female",
            "preferences": [
                "feed": false,
                "time": "morning"
            ],
            "notes":""
        },
    ]
}
```

Now let's turn that into an API stat! I'm going to be thorough with my instructions in case you are new to things like this.

I'll assume you have Node.js installed.

Create yourself a new folder, navigate to it, and run `npm init -y`. That creates you a `package.json` file. Then run `touch index.js` to create a file to start writing code in.

Now install `json-server` by running `npm i json-server`

>The `i` is short for `install`. As of npm version 5, the `--save` argument is not necessary to add this new dependency to the `package.json` file. That happens by default.

Finally, launch that project in your IDE of choice. Mine is [VS Code](http://code.visualstudio.com), so I would launch this new project by running `code .`

Edit the `index.js` file and add the following code...

``` js
const jsonServer = require('json-server')
const server = jsonServer.create()
server.use(jsonServer.defaults())
server.use(jsonServer.router("data.json"))

server.listen(1337, () => {
    console.log('JSON Server is running on port 1337')
})
```

Let me describe what's going on in those few lines of code.

The first line brings in our `json-server` package.

The second line creates a new server much like you would do if you were using Express.

Lines 3 and 4 inject some middleware, and the rest spins up the server on port 1337.

Note that line 4 points to `data.json`. This is where your data goes. You can make this simpler by simply specifying a JavaScript object there like this...

```js
server.use(jsonServer.router({dogs: {name"Rover"}}))
```

But I discovered that if you use this method, then the data is simply kept in memory and changes are not persisted to a file. If you specify a JSON file, then that file is actually updated with changes and persisted for subsequent runs of the process.

So that's pretty much all there is to it. You run that using `node .` and you get a note that the API is running on 1337. Then you can use CURL or Postman or simply your browser to start requesting data with REST calls.

Use `http://localhost:1337/dogs` to get a list of all dogs.

Use `http://localhost:1337/dogs/1` to fetch just the first dog.

Or to create a new dog, use CURL with something like `curl localhost:1337/dogs -X POST -d '{ "id":4, "name":"Bob", ...}`

Now you have a new API running on localhost, but what if you want to tell the world about it. Or what if you are working on a project with a few developer friends and you want them to have access. You could push your project to the cloud and then point them there, but even easier is to just point them to your machine using a tunneler like [ngrok](http://ngrok.io) or [Local Tunnel](http://nmpjs.com/packages/localtunnel). I usually use the latter just because it's free and easy.

To install Local Tunnel, run `npm i -g localtunnel`.

To open up port 1337 to the world use `lt -p 1337 -s dogsapi` and then point your developer friend that's working on the UI to fetch dogs using `http://dogsapi.localtunnel.me/dogs`.

Be kind though. You set your API up in about 4 minutes and your UI dev probably hasn't gotten XCode running yet. :)