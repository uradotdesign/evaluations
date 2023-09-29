---
title: "Unify style of buttons when interacting with a Place"
date: "2023-08-24"
weight: 
type: "audit"
url_source: "https://github.com/organicmaps/organicmaps/issues/5809"
focus: "Miscellaneous"
score: "2"
heuristic: "8"
outputs:
  - Reveal
observations:
  - "Style 1. The `ROUTE...` and `SAVE` and `DELETE` buttons have icons and are in the bottom bar"
  - "Style 2. The `EDIT BOOKMARK` and `EDIT PLACE` and `ADD BUSINESS` are part of the Place drawer and have no icon. The `EDIT BOOKMARK` varies with background color as well. Given each button occupies full width of the screen, the buttons take more vertical space that they need too."
  - "Contrast this with nice standardized buttons like in Maps.Me"
suggestions: 
  - "Make a second row of buttons above `ROUTE...` bottom bar in Style 1. with logical icons included."
images:
  - "/organic-maps-2023/262967187-72b1b546-a312-4586-a77f-2f85f4a699a6.png"
  - "/organic-maps-2023/262965099-7c0e6ea7-1940-4961-b66b-0a8a45fd7dfd.png"
---

Currently the buttons when interacting with a place have two distinct visual styles and this is disorienting to users.
