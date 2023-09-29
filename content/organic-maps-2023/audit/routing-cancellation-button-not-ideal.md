---
title: "Routing cancellation button not ideal"
date: "2023-08-11"
weight: 
type: "audit"
url_source: "https://github.com/organicmaps/organicmaps/issues/5699"
focus: "Route Building"
score: 2
heuristic: "4"
outputs:
  - Reveal
observations:
  - "Clicking the button cancels the entire Route building as well as selected Place interaction."
  - "This is a drastic and unexpected interaction compared to other common implementations of this button."
suggestions:
  - "Maintain state of which step in route building and revert user to that step"
  - "Default back to first selected Place"
images: 
  - "/organic-maps-2023/259962210-614573fa-5ad5-4722-80e7-b1ce34864e95.png"
---

The only clear deliberate way to exit or cancel a route that is being built is
the back button `⭠` in the top left.

This is a common UI element also used in Google Maps. However, in OMaps
implementation, it does not go back to previous stage of "route building" or selected Place.
