---
title: "Removing point from Route building is confusing"
date: "2023-08-22"
weight: 
type: "audit"
url_source: "https://github.com/organicmaps/organicmaps/issues/5790"
focus: "Route Building"
score: 2
heuristic: "5"
outputs:
  - Reveal
observations:
  - "This relates to things being discussed in #5674 #5698"
  - "If user clicks a selected place `Action 5` instead of `Action 4` options, a `Remove` button is shown. This is vague and detached in meaning."
  - "When the `Remove` button in `Action 6` is clicked, elements like green topbar with `Routing Options` and the white bottom bar `Add a...` persist, but the route being built is cleared."
  - "This is confusing. The screen is IDENTICAL to the previous screen (where a user is selecting the `Point 2`) except for the subtle blue text word change from `Destination` to `Start` but in reality a user is back at the first view of the flow."
suggestions:
  - "Implement missing UI component described in #5697"
  - "Clear the green topbar and white bottom bar when route is empty"
  - "Disable tapping on first selected Point and/or don't show `Remove` button"
images:
  - "/organic-maps-2023/259892387-6d72a2da-8c10-4a04-a076-6eff8e4d082e.png"
  - "/organic-maps-2023/262417111-d2404027-fc03-4425-90e7-62f00700448b.png"
---
