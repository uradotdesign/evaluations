---
title: "Create in-app Donation user flow"
date: "2023-08-18"
weight: 
type: "audit"
url_source: "https://github.com/organicmaps/organicmaps/issues/5745"
focus: "Improve OSM Engagement"
score: "2"
heuristic: "10"
outputs:
  - Reveal
observations:
suggestions:
images:
  - "/organic-maps-2023/261586578-588c0fde-b412-473d-9a5b-95b1f6632dcf.png"
  - "/organic-maps-2023/261586511-348eb8ae-8def-491b-a689-2ec848e2ac9c.jpg"
---

One way to drive more donations to a community supported project like Organic Maps is to reduce friction and make it as easy as possible to donate. A good example of this is this in-app flow in the [Signal](https://signal.org) messaging app.

After clicking continue- a bottom drawer pops-up and Signal offers users the option to donate via PayPal or a credit card payment as methods.

One subtle UX "nudge" with Signal's in-app donation is they tack-on a little badge on the avatar so users can see who is a supportive user who did. This will not work for OMaps as the app itself offers no social graph like Signal. Perhaps there is some area to explore with a partnership OSM which could be leveraged here. Tangentially related to #5740

**Crypto Currency**

On the web Signal does [accept cryptocurrency donations](https://signal.org/donate/), which are handled by a [third-party](https://thegivingblock.com/resources/why-donate-bitcoin/).

Given that OMaps appears to [self-custody their crypto donations](https://organicmaps.app/donate/#crypto), perhaps building this into the in-app flow would be nice.
