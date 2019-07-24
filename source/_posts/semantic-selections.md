---
title: Semantic Selections and Why They Matter 
categories: [Developer Tools]
tags: [code, vscode, productivity]
date: 2019-06-24
---

I'm a big fan of at least two things in life: **writing code** and **being productive**. On matters involving both I get downright giddy, and one such matter is _semantic selection_. VS Code calls them [smart selections](https://code.visualstudio.com/updates/v1_33#_smart-select-api), but whatever.

Semantic selection is overlooked by a lot of developers, but it's a crying shame to overlook something so helpful. It's like [what comedian Brian Regan says about getting to the eye doctor](https://www.bing.com/videos/search?q=brian+regan+eyeglasses+instantly+improved+vision&view=detail&mid=BDDC50CDAE1000386E3EBDDC50CDAE1000386E3E&FORM=VIRE).

Semantic selection is a way to select the text of your code using the keyboard. Instead of treating every character the same, however, _semantic_ selection uses insights regarding the symbols and other code constructs to (usually) select what you intended to select with far fewer keystrokes.

I used to rely heavily on this feature provided by ReSharper way back when I used heavy IDEs and all ;)

Some may ask why you would depend on the keyboard for making selections when you could just grab the mouse and drag over your characters from start to finish? Well, it's my strong opinion that going for the mouse in an IDE is pretty much always a compromise - of your values at least but usually of time as well. That journey from keyboard to mouse and back is like a trans-Pacific flight. 

>I can't count the number of times I've watched over the shoulder as a developer carefully highlighted an entire line of text using the mouse and then jumped back to the keyboard to hit BACKSPACE. Learning the keyboard shortcut for deleting a line of text (`CTRL+SHIFT+K` in VS Code) can shave minutes off your day.

Without features like semantic selection, however, selecting text using the keyboard alone can be arduous. For a long time, we've had `SHIFT` to make selections and `CTRL` to jump by word, but it's still time consuming to get your cursor to the start and then to the end of your intended selection.

To fully convey the value of semantic selection, imagine you're cursor is just after the last `n` of the `currentPerson` symbol in this code...

``` ts
function getPersonData() {
    var result = requestData(currentPerson, 2);
}
```

Now imagine you want change `currentPerson` to `currentContact`. With smart selection in VS Code, you would...

1. Tap the left arrow one time to get your cursor into the `currentPerson` symbol (instead of on the trailing comma)
1. Hit `SHIFT+ALT+RIGHT ARROW` to expand the selection

Now, notice what got highlighted - just the "Person" part of `currentPerson`. Smart selection is smart enough to know how camel case variable names work and just grab that. Now simply typing the word Contact will give you what you wanted.

What if you wanted to replace the entire variable name from `currentPerson` to say `nextContact`? For that you would simple hit `SHIFT+ALT+RIGHT ARROW` one more time to expand the selection by one more step. Now the entire variable is highlighted.

One more time to get the entire function signature.

Once more to get the function call.

Once more to get the entire statement on that line and again to get the whole line (which is quite common).

Once more to get the function body.

Once more to get the entire function.

That's awesome, right?

Integrate this into your routine and shave minutes instead of yaks.

Happy coding!