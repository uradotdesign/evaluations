---
title: "Fails to open address from other apps"
date: "2023-07-25"
weight: 
type: "audit"
url_source: "https://github.com/organicmaps/organicmaps/issues/5601"
focus: "Miscellaneous"
score: "2"
heuristic: "5"
outputs:
  - Reveal
observations:
suggestions:
  - "Perform geocode lookup if string is an address"
  - "Take user to *Search* prompt with address string pre-populated"
  - "Notify user with an error message such as:
      ```
      Organic Maps could not locate the place:

      Europlatz 1, 10557 Berlin
      ```"
images:
  - "/organic-maps-2023/255853437-0951cfcd-63cc-4f97-81ca-92ff03ad1d85.jpg" 
  - "/organic-maps-2023/255853534-c78f6a99-46ac-4284-89cf-4d1cc885469f.jpg" 
---

Please write here a clear and concise description of what the bug/issue is about. When clicking on an address in third-party app (Contacts or Calendar) and trying to load a Point of Interest in OMaps it fails to do anything.

**Steps to reproduce**

- Click on an address in third-party app (Calendar) and select OMaps
- When another map enabled app is installed, and Android prompts user to choose, the result is the same.
- OMaps opens, but does not center or seem to perform any look up on the map. 

Upon further investigation, it seems the issue is when accessing from a third-party app the address is in string format `Europlatz 1, 10557 Berlin`

In this case OMaps fails to do anything, when loading OMaps with a geo-coord `52.517355, 13.38998` it works perfectly as expected and loads the POI.
