---
title: "Improve text message when sharing a place"
date: "2023-07-25"
weight: 
type: "audit"
url_source: "https://github.com/organicmaps/organicmaps/issues/5602"
focus: "Miscellaneous"
score: "2"
heuristic: "8"
outputs:
  - Reveal
observations:
suggestions:
  - "Shows address on a single line"
  - "Less conversational `Hi... I am here` which might not be true or contextually relevant"
  - "Uses [Geo URI Scheme](https://en.wikipedia.org/wiki/Geo_URI_scheme) instead of app specific  `om://` for better interoperability"
  - "More space between entities makes selecting to copy and paste easier"
  - "Alternative option is what OsmAnd~ does, which is pop-up an modal with multiple options, but this approach is more involved engineering wise."
images:
  - "/organic-maps-2023/255859797-d4670d9a-1020-490e-af04-93ab5b63acee.png"
  - "/organic-maps-2023/255859017-d6f2bd76-664d-476e-b120-12f13dfe5ed2.png" 
---

When clicking the "Share" icon in OMaps, the text containing a Place (POI) is undesirable.

- Select any Place and then tap on the share icon which shows the following:
- The user sees the text `Hi, ...` which is unclear as to what is being shared.

Showing a more useful sharable message such as:

```
Unter den Linden, 14, 10127

Open place in an app
geo:52.51745,13.38980?z=17  

See place on a webpage:
https://omaps.app/s4MnKE0BOq/Cold_War_Museum
```
