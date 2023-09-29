---
title: "Add Directions Routing button"
date: "2023-08-11"
weight: 
type: "audit"
url_source: "https://github.com/organicmaps/organicmaps/issues/5698"
focus: "Improve Home Screen"
score: "3"
heuristic: "4"
outputs:
  - Reveal
observations:
suggestions:
  - "Adding a `Directions` button to UI. Clicking this button could trigger one of multiple interactions:"
  - "A drawer with text inputs"
  - "Automatically selects users current location"
  - "Instructions to select a place"
images:
  - "/organic-maps-2023/259961677-07484ff6-a4a5-4fc4-802c-9719c082bd7e.png"
  - "/organic-maps-2023/259961778-4c4acdea-2903-44ca-aabb-1dbfbf24250c.png"
---

As is being discussed in #5673 one thing I've discovered in my analysis that is missing from other map apps is a `Directions` button which triggers some part of `Route building` user flow.

Looking at Google Maps, OsmAnd, and Yandex, all feature a `Directions` button

Upon clicking this button it triggers an interaction that directly leads to UI component as described in #5697

iOS Maps diverges from this and appears to be what OMaps has been most closely modeled after. 
iOS Maps manages to achieve a high degree of usability by relying on `drawer` or `slide panel` as I call them.

OMaps already has these `drawer` style panels for Place information./
