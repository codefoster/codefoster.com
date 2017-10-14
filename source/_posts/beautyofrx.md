---
title: Highlighting the Beauty of Rx
categories: [Software]
tags: [rx, rxjs, observable, observables, streams, reactive-extensions, software, algorithms]
date: 2017-10-13 17:13:54
---

Some time ago, myself and a small team of guys dedicated one evening a week to working on an app.

After the formulation of a ton of good ideas and some real progress on the project, we came to the unfortunate realization that we just didn't have the after-hours bandwidth the project required.

I still wish I did though, because it's a good idea, and the idea is often the hardest part of any project.

I don't want to dive into the details of the project, but I do want to share the pattern we were pursuing - the observable pattern.

The first time I saw [Reactive Extensions (Rx)](http://reactivex.io) I had a jaw drop experience. Its elegance was apparent despite its implementation being a bit complex. It's one kind of complex at first and continues to be another kind of complex the more you use it. Since then I've been looking for excuses to use this pattern and this library and have found a few, and our app was one of them.

The app I'm alluding to is a game, and it handles a bunch of game data that happens to represent _real life_ players with a mobile device and a GPS, but it could just as well represent 2D or 3D sprites or something besides a game at all.

Without the low-level context, I need you to understand what was going on in the app and that shouldn't be too difficult.

Imagine every possible _event_ that might occur in a game - _everything_. A player might move - even a small distance. A player might join... or quit... or shoot... or whatever. These are considered _GameEvents_.

Now imagine all of these events in one giant stream. That's right one flat structure. Sort of like a Redux store or a transaction log.

Now imagine all of these events funneling through a single observable inside the game service (the service all players are sending their game events to).

And that should give you enough context to understand what I'll share next - an observable-based engine for processing game rules.

Now before I embark, know that one of the biggest advantages here is that this general pattern gives us the flexibility to define whatever sorts of rules we want. So one set of rules would implement one game, and another set of rules would implement something altogether different.

Let's say we want to write a rule that is only interested in when a player has physically moved (as it turns out, that's one of the most interesting events in the game). In the Rx world, that would look something like...

``` csharp
var playerMoves$ = game.Events
    .Where(ev => ev.Type == GameEventType.PlayerLocation);
```

> Note that I'm writing C# code here because that's what we started with, but this should look pretty similar to some other popular languages you might be using.

What that code says is that I want to declare a new observable (`playerMoves$`) that is a filtered set of the entire set of game events - only the ones of type `PlayerLocation`.

Since the player location changes are such an important event, it's good to set that one up to feed the others. Now let's get on to another...

``` csharp
//any player collides with any other player
var playerCollisions$ = playerMoves$
    .Select(pl => new { PlayerLocation = pl, CollidingPlayers = pl.Game.Players.Where(other => other != pl.Player && other.Location.Distance(pl.Location) < 5) })
    .Where(c => c.CollidingPlayers.Any());
```

This rule depends on the playerMoves$ we declared and set in the previous block and extends it.

This one projects each player that just moved into a new anonymous object that includes any _other_ players that are very close to him (in this game proximity determines a "collision").

Then we chain the `.Where` function on there to say that we're only interested in occurrences where there was a collision (that's the `.Any` part).

If you don't understand that code, spend some time with it. Print it and take it to dinner with you. Put it on your nightstand. This is the sort of code block that looks bizarre first and elegant eventually.

Okay, now I'm only going to take you one step further, and I'm going to do so because although I've been calling these "rules," you haven't seen a real rule yet.

These were conveniences. These were the application of a couple of Rx operators that essentially gave us some alternate _views_ into that massive stream of game events.

The `playerMoves$` gave us a subset and the `playerCollisions$` gave us another subset. To create a real rule, we need to take some action. Watch this...

``` csharp
playerCollisions$
    .Select(c => new {
        c.PlayerLocation,
        CollidingPlayers = c.CollidingPlayers
            .Where(cp => cp.Team() != c.PlayerLocation.Player.Team()) //make sure it's a collision with an _opponent_
            .Where(cp => c.PlayerLocation.Location.Intersects(cp.Team().Zones.Single(z => z.Name.StartsWith("Zone")).Definition)) //in opponent's territory
        })
    .Subscribe(c => {
        //send the player to jail
        c.PlayerLocation.Player.NavigationTarget =
        c.CollidingPlayers.First().Team().Waypoints.Single(w => w.Name == "Jail");
    });

```

So this block starts with that convenience observable - `playerCollisions$`.

Then it projects it to an anonymous object that includes the player(s) that are in collision. In that filter, the colliding players are filtered to only the players that are a) on the other team and b) in the other player's area (zone). This rule actually comes from Capture the Flag in case you didn't recognize it and occurs when a player gets tag running in another player's territory.

And then what may be considered the interesting part if I weren't such a geek and found all this stuff to be interesting :)

The `.Subscribe` method. This method determines _what happens_ when this sort of collision occurs. In the case of Capture the Flag, the player is to be sent to jail - the other player's jail that is. Thus...

``` csharp
c.PlayerLocation.Player.NavigationTarget =
c.CollidingPlayers.First().Team().Waypoints.Single(w => w.Name == "Jail");
```

That is... set the player's (the one that got tagged) navigation target (where the app tells the player to go) to the other teams waypoint labelled "Jail".

And that's as far as I'll go.

Remember, the purpose here is to help you understand why you might choose to use the observable program in your application and to show you how terse and elegant it can make your code.

Happy hacking!