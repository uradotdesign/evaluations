---
title: "Add Home pinning of Categories & Bookmarks"
date: "2023-07-28"
weight: 
type: "audit"
url_source: "https://github.com/organicmaps/organicmaps/issues/5619"
focus: "Improve Home Screen"
score: "3"
heuristic: "7"
outputs:
  - Reveal
observations:
  - "In OMaps currently, the number of steps required to"
  - "Category - 3 taps"
  - "Bookmark - 3 taps"
  - "This also includes time to visually parse the list of items and select the correct list before seeing the results."
suggestions:
  - "A user should be able to view their most commonly used lists of `Categories` or `Bookmarks` with 1 tap from loading the app."
  - Add the ability to "pin" both Categories or Bookmarks item to the Home screen. 
  - This display as smaller priority buttons below search field.
  - This is an improvement to user journeys 3 and 4.
images:
  - "/organic-maps-2023/258883672-3e1f8c20-db37-4c69-a451-d41dffc0c4c8.png"
---

Finding specific groups of Places (Categories or Bookmarks) *relevant to them* is a crucial feature of mapping apps. Google Maps implemented a clever shortcut bubble on the `Home` screen!

However, Categories which are important vary amongst user types and their daily activities. Consider the following:

- Gas & Parking are useless to a city user with no car
- Transport is useless to a user driving across countryside
- Hotels are not needed by most users most of their lives
- Users often look for specific food (Italian, Vegan, Cafes...)
- Quickly find multiple places relevant to that user

This also doesn't take into account non-public places such as:

- Friend's houses
- Romantic date spots
- Spot with an epic view
- Buried treasure / microfilm dead-drop

Related: #2520 #4233
