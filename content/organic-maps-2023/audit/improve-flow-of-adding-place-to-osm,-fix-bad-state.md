---
title: "Improve flow of adding Place to OSM, fix bad state"
date: "2023-08-16"
weight: 
type: "audit"
url_source: "https://github.com/organicmaps/organicmaps/issues/5727"
focus: "Improve OSM Engagement"
score: "4"
heuristic: "5"
outputs:
  - Reveal
observations:
suggestions:
  - "The confirm `✓` button in Step `5.` should not take the user directly to OSM login screen. 
The button should take the user back to the map view with the newly added Place selected."
  - "To submit data to OSM, there should be a toggle switch in the Add Place form.
<code>
Conribute Place to OSM   [Off / On]
</code>"
  - "The toggle should default to `Off` on each new Place unless it is editable in a global setting. 
Upon toggling to `On` if a user is logged into OSM, then nothing unusual happens, the data is sent.
If a user **is not logged into** OSM, then it should pop-up the OSM login screen at that moment."
images:
  - "/organic-maps-2023/260821916-e21568b0-f8f3-4c18-859c-1cdd9920597e.png"  
---

While attempting to add a Place when clicking the back button `⭠` the user is taken to an incorrect state.
The following triggers the bad state.

1. Select a point on map
2. Open drawer and click `Add Business`
3. Select appropriate category
4. Fill out fields of data for Place / Business
5. Click the confirm checkmark `✓` in top right (Red Circle 1)

The `✓` communicates to user that they should confirm saving the data they just input. It is unclear (to me) if the Place data has been saved somewhere, or if clicking `✓` saves state.

Upon clicking `✓` the user is taken to `Login to Open Street Maps` webview. 

1. At the Open Street Map login, click the back `⭠` button (Red Circle 2)
2. User is taken to `Categories Search` view from Step `3.` 

The categories search field is a bad state. It is confusing to user where they are.
If the user clicks on the appropriate category, the input fields are partially incomplete from data they just entered.
