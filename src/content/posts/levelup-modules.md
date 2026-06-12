---
title: Level Up Your JavaScript Game! - ES6 Modules
categories: [JavaScript]
tags: [Node.js,Node,node,js,javascript,ecmascript,promise,promises,async]
date: 2018-02-21 09:31:03
---

> This post is not yet finished <!-- remove before publishing -->

> See [Level Up Your JavaScript Game!](/levelup) for related content.

Unfortunately, the whole concept of modules in JavaScript has undergone a ton of evolution and competing standards, and for a while it seems like no two JavaScript environments used modules the same way. Spending a little time figuring out exactly what’s happening goes a long way toward demystifying things.

To level up in JavaScript modules, I recommend you learn...

## ...to transition from Node.js's CommonJS modules to ES6 modules.

Node has not yet fully adopted ES6 modules, but it's coming soon. We developers can today though using a transpiler, and I recommend it. We may as well get into tomorrow's habits today. Instead of...

```js
const myLib = require('myLib');
```

...use...

```js
import { myLib } from 'myLib';
```

The former strategy - CommonJS - is a well-established habit for most of us, but it's not inherantly as capable as the latter - ES6 modules. I'm going to assume you've used the CommonJS pattern plenty and skip explaining its nuances, and talk only about the newer, better, faster, stronger ES6 modules.

To play with some the concepts on this page, install TypeScript.

```bash
npm i -g typescript
```

## ...to define an ES6 module and export all or part of it.

CommonJS modules are defined largely by putting some JavaScript in a separate file and then requiring it. ES6 modules are too. The differences come in how a module describes what it _exports_ - that is what it makes available to anyone who decides to depend on it.

In ES6 modules, you put `export` on anything you want to export. Period. That's easy :)

```ts
//mymodule.ts
let x = "a thing";
export let y = "another thing";
let z = "yet another thing";
```

In the above example, only `y` would be available to whoever takes a dependency on `mymodule`.

You can put `export` on variable declarations (like the `let` above), classes, functions, interfaces (in TypeScript), and more. Read on to see how these various exports get imported. 

## ...to import an entire module.

To import everything a given module has to offer - all of the exports...

```ts
import * as mymodule from './mymodule';
console.log(mymodule.y);
```

The `*` indicates that we want everything and the `as mymodule` aliases (or namespaces) everything as `mymodule`. After this import, we would be free to use `mymodule.y` in our calling code.

## ...to import parts of a module.

Let's say our module looked like this...

```ts
//mymodule.ts
export let x = "a thing";
export let y = "another thing";
export function sum(a,b) {
    return a + b;
};
```

If we decide in our calling code that we need `x` and we need the `sum` function, then we can use...

```ts
import { x, sum } from './mymodule'
console.log(x);
console.log(sum(10,10));
```

Notice that we don't need to prefix the `x` and `sum` functions. They're in our namespace.

## ...to alias modules on import.

Sometimes, you want to change the name of something you import - for instance, to avoid a naming conflict...

```ts
import { x, sum as add } from './mymodule'
```

That'll do it for ES6 module imports. Now head back to [Level Up Your JavaScript Game!](/levelup) or move on to my final topic on [ES6 features](/levelup-es6).