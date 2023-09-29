---
title: "Improve first run experience with local map downloads"
date: "2023-08-07"
weight: 
type: "audit"
url_source: "https://github.com/organicmaps/organicmaps/issues/5668"
focus: "First-run experience"
score: 3
heuristic: "9"
outputs:
  - Reveal
observations:
suggestions:
  - "Request user's location, guide that user to download map for where they are located"
  - "Offer a button to download that map instead of `No address found`"
  - "Explain `you must download map for this area`"
images:
  - "/organic-maps-2023/258853722-1c3993c5-9dcf-40af-a34b-1ef70a645085.png"
---

On first install and use of app, after downloading the World Map, OMaps should be more helpful walking users through features and further setup.

- It is not obvious one must download a more local map to search anything
- The `No address found` when no maps installed is unclear why

Related issues #1677 #3450
