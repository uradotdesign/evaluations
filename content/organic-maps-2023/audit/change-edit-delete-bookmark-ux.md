---
title: "Change edit  delete Bookmark UX"
date: "2023-08-24"
weight: 
type: "audit"
url_source: "https://github.com/organicmaps/organicmaps/issues/5813"
focus: "Miscellaneous"
score: "2"
heuristic: "3"
outputs:
  - Reveal
observations:
  - Currently, once a Place is bookmarked the `SAVE` button changes to a `DELETE` button which removes a place from Bookmarks. 
  - The `EDIT BOOKMARK` button resembles the `EDIT PLACE` button instead of the prior location where a user interacts with a Bookmark (the bottom bar).
  - Deviates from the single button UX `ADD / EDIT PLACE`
  - Clutters the Place drawer with two buttons to interact with a Bookmark
  - Given centered bottom location, it is easy to accidentally delete a Bookmark
suggestions:
  - Change current `DELETE` Bookmark button instead to `EDIT`
  - Move delete functionality to a button on bottom of Bookmark editor
images:
  - "/organic-maps-2023/263060426-9d9a0a95-22fd-4276-b4ff-dcb9f85acb84.png"
---

