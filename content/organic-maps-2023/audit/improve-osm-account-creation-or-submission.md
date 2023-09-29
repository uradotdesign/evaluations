---
title: "Improve OSM account creation or submission"
date: "2023-08-17"
weight: 
type: "audit"
url_source: "https://github.com/organicmaps/organicmaps/issues/5740"
focus: "Improve OSM Engagement"
score: 4
heuristic: "8"
outputs:
  - Reveal
observations:
suggestions:
  - "Improve OSM signup flow and potentially make Third Party Authentication a user selectable option from directly within OMaps"
  - "Use OS level [Single Sign-On](https://en.wikipedia.org/wiki/Single_sign-on) to bootstrap a user into OSM account:"
  - "[Apple Documentation](https://developer.apple.com/documentation/authenticationservices), [Android Documentation](https://developer.android.com/work/guide#sso)"
  -  "The technical feasibility with respect to infrastructure required by OMaps and OSM's API is beyond scope of this UX audit, but this feels worth exploring."
  - "An alternate option to consider is to create multiple anonymous OSM user accounts that are hard coded into OMap builds. An example of this is the privacy protecting Google Play app store [Aurora Store](https://auroraoss.com), see their account UI:"
  - "This would offer users ability to *submit data anonymously* to OSM and cut out the user-experience signup flow altogether."
  - "Given the difference of this being `POST` style action compared to Aurora's `GET` requests, this does pose some ethical threat vectors to consider."
images:
  - "/organic-maps-2023/261326576-0ecf7314-bd80-4087-8d37-a6aec4332093.png"
  - "/organic-maps-2023/261314681-6b5b8051-8406-4e2a-b150-7babefca50aa.png"
  - "/organic-maps-2023/261308213-a60e9de8-01bd-44a2-8277-c9289efa44de.png"
---

To serve the goal of making it easier to contribute OSM content as per #5686

The current user registration form of OSM has multiple UX issues. It breaks most [UX principles for easy signup](https://www.learnui.design/blog/tips-signup-login-ux.html). There are some UX issues with OSMs `Third Party Authentication`

1. Select Third Party Authentication provider
2. Discover it still requires an email address, unique display name, and the only benefit is not requiring a manually entered password. 
3. OSMs form validation when attempting Third Party Auth is very bad

This negates most of the benefits of third-party auth altogether. This is obviously not OMaps issue, but rather OSM side of things.

However, this impacts curious OMaps users who may want to try contributing data to OSM unless they complete the standard form, as cumbersome as it is

Relates to privacy concerns in #5727 and being able to toggle submission ability per Place.
