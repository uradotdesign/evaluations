---
title: "Redo buttons through Route building #5"
date: "2023-08-23"
weight: 
type: "audit"
url_source: "https://github.com/organicmaps/organicmaps/issues/5798"
focus: "Route Building"
score: 3
heuristic: "5"
outputs:
  - Reveal
observations:
suggestions:
  - "Hide (or signal state) of the button selected in Place 1"
  - "Implement component suggested in #5697"
images:
  - "/organic-maps-2023/262611573-913ea489-9212-4e0c-80e8-90feb2da9946.png"
---

When interacting with Places while building a Route, the buttons and their placement are not ideal, and in some ways problematic.

- After Place 1 is selected and then Place 2 is selected by manually tapping on the map, the `Route from / to` buttons look identical. 
- This does not communicate state of which location has been previously selected by the user or what stage you are in Route building process.

