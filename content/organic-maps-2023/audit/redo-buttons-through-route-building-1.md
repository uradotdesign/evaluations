---
title: "Redo buttons through Route building #1"
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
  - "Keep `Search` and `Bookmarks` icons on the bottom of screen"
  - "Group them into a UI component (background, border, etc. connected to the process)"
images:
  - "/organic-maps-2023/262611573-913ea489-9212-4e0c-80e8-90feb2da9946.png"
---

When interacting with Places while building a Route, the buttons and their placement are not ideal, and in some ways problematic.

- The `Search` and `Bookmarks` buttons are suddenly located on left of screen instead of the bottom. 
- The icons are not part of a UI component (they float over the map like on the Home screen), it is unclear they are "connected" to the Route building process.
- The user subconsciously questions: why did they move? Do they have a different behavior now?
