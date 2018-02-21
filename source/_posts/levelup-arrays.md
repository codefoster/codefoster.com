---
title: levelup-arrays
categories: []
tags: []
date: 2018-02-21 09:30:47
---

Including filtering, mapping, and if you want to be a ninja even reducing.
This will give you plenty of experience with fat arrow functions, so you don’t need to practice that on its own. Learn… 
o	Get Star Wars characters using http://swapi.co/api/people and filter it down to only males
o	Map the characters to a new object that looks like this…
{ character_name: "<name>", is_tall: "<true if over 170cm>" }
o	Use reduce to sum up the species and their counts…
{ species: "<species>", total: <total> }
(note that the species is a navigated property meaning that if you want to put the actual species name into <species> it’s going to require a second level web service call. If you just put the species URL in there it will be easier.
