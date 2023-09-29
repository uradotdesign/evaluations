---
title: "Bundle world map with app installer"
date: "2023-08-22"
weight: 
url_source: "https://github.com/organicmaps/organicmaps/issues/5786"
focus: "First-run experience"
score: 1
heuristic: "5"
outputs:
  - Reveal
observations:
suggestions:
  - "Bundle more map data in the app with really incredible compression"
  - "Load and cache local tiles as a user navigates"
  - "At least bundling the `50 MB` world data in the Organic Maps seems very reasonable"
images:
---

As per [this comment](https://github.com/organicmaps/organicmaps/issues/5746#issuecomment-1684321196) from @biodranik   

> Most users expect to see and use... maps on the first start, ASAP!

This is definitely a nicer UX on first-run than having to download `World Map` and a `Local Map` before doing anything else. 

When considering how map apps achieve this, the most obvious is they include some map data in the installer... 🤷🏻‍♀️  I did not open Wireshark and look at netflow data during app use, but I assume this is what they are doing.

Here is a comparison of Android apps data footprints. 

| App           | Download  | Installed   | World Map | Local Map |
|---------------|-----------|-------------|-----------|-----------|
| Google Maps   | 43 MB     | 345 MB      | Yes       | Yes       |
| AMaps         | 100 MB    | 380 MB      | Yes       | Limited   |
| OsmAnd        | 186 MB    | 346 MB      | Yes       | No        |
| Maps.Me       | 187 MB    | 495 MB      | Yes       | No        |
| Organic Maps  | 102/58 MB | 231 MB      | ???       | No        |

