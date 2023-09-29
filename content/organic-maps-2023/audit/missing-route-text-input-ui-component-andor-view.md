---
title: "Missing Route text input UI component and/or view"
date: "2023-08-11"
weight: 
type: "audit"
url_source: "https://github.com/organicmaps/organicmaps/issues/5697"
focus: "Route Building"
score: 3
heuristic: "4"
outputs:
  - Reveal
observations:
suggestions:
  - "Implement the standard UI component with fields which trigger edit state"
  - "Display text of Place selected in `Step 2` on  `Step 3` and both selected places on `Step 5` just not editable"
  - "Make selected points on map more obviously and selected, display step name in a tooltip"
images:
  - "/organic-maps-2023/259801756-47321df9-9572-48c0-a980-5bc52ab4b624.png"
  - "/organic-maps-2023/259954604-3b795fb0-0d83-469c-8b35-402c7bcd7dfa.png"
---

In almost every map app there is a UI component "drawer" style or full screen
view where the user clearly sees two editable text fields clearly displaying a
starting point and destination, e.g.

```
From: Address 123, Manhattan
To: Other Address 456, Brooklyn
```

In OMaps this UI component does not exist or it is *extremely* difficult to
discover. The Routing implementation in OMaps is most similar to that in iOS
Maps in terms of UX flow, but deviates in some ways which will be discussed in
multiple issues. This issue is to propose / track the idea of this specific UI
component.

The current implementation is functional, more so once a user has used it
multiple times. 

At no point in this flow does the user see text representations of *both* 
the start and destination points except as an intermediary selection item.

The missing UI component may be crucial reason which causes the
sense of feeling lost and unclear on what interaction a user is doing or the
state of the route action.
