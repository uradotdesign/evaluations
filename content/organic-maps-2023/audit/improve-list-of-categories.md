---
title: "Improve List of Categories"
date: "2023-08-07"
weight: 
type: "audit"
url_source: "https://github.com/organicmaps/organicmaps/issues/5670"
focus: "Miscellaneous"
score: 2
heuristic: "8"
outputs:
  - Reveal
observations:
suggestions:
  - "Add a `Sort` button that allows user to sort by different values (Popular, Alphabetical, Nearby)"
  - "Allow users to assign `priority` flag to place categories (common to *that* user) at top of the list."
  - "Sort Categories alphabetically. Ideally following the same UX header with vertical `...` style menu as on Bookmarks view."
images:
  - "/organic-maps-2023/258883672-3e1f8c20-db37-4c69-a451-d41dffc0c4c8.png"
---

The Categories list is sorted by an algorithm that is unclearly optimized.

- Is it category with most Place listings? 
- Most commonly used? Impossible! 
- By what type of user (see: #issue- )? 

**Expected behavior**

A user should be able to look at a medium length list like Categories and make sense
how to quickly find the item they want (e.g. quickly scroll to bottom or middle)
without reading all category names.

Related #3475
