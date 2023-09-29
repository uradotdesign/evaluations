---
title: "Create a global privacy setting for OSM"
date: "2023-08-18"
weight: 
type: "audit"
url_source: "https://github.com/organicmaps/organicmaps/issues/5746"
focus: "Improve OSM Engagement"
score: "3"
heuristic: "3"
outputs:
  - Reveal
observations:
  - "Each of these user types SHOULD feel comfortable using Organic Maps and it should offer the flexibility to selectively publish data."
suggestions:
  - "After a user successfully signs up / logs into OpenStreetMaps as per flow in #5785 they should be presented with an Organic Maps privacy setting to select. There should be a dropdown menu to save this global setting:"
  - "`Please select your privacy settings for OpenStreetMaps contributions.`"
  - "Each option would yield the following:"
  - "`manual` or `confirm` or `auto` settings"
  - "A user who selects `Opt. 1` would not be bothered every time they update a Place."
  - "A user who selects `Opt. 2` would benefit from this easy confirmation each time"
  - "Implications of this are being discussed in #5727 with the idea of `Contribute Place to OSM` toggle in the Place editor, and in #1325 the `batch submit` proposal."
  - "This somewhat relates to anonymous or a pseudonymous privacy-proxy type OSM user as discussed in #5740 but that does not sound feasible, for now."
images:
---

A privacy-focused application empowering users to "reject surveillance" while simultaneously making it user-friendly to directly contribute to a public open-data repository like [Open Street Maps](https://www.openstreetmap.org) MUST have a clearly stated privacy policy which is tightly integrated into the user-experience. 

Consider the following users types with different privacy / threat models:

**Post-Privacy Contributor** 
Loves open-data, logs into OSM with an account under their legal name (or is easy to discover via homepage / social profiles). This user has no concerns about contributing all sorts of data- their local neighborhood, work, holidays, etc.

**Privacy Conscious Contributor** 
Logs into OSM with an account that is a pseudonym. This user feels this is a sufficient level of privacy to contribute data safely.

- Pseudonyms often lose privacy if they are used long enough
- Can require secondary email accounts, etc...

**Hybrid Contributor**
Logs into OSM with an account they feel comfortable publishing Place information. They sometimes contribute data freely. Other times it could be very for them if their Place data was published. Some examples:

- Small business owner using OMaps with a list of clients they deliver to (likely a mix of public businesses and private homes)
- An LGBTQ person who lives somewhere where their lifestyle is illegal or persecuted by non-state actors
- A politician, judge, law enforcement, or military person with unusual threats
- Someone who has ever had a stalker trying to constantly track them down

**Private Non-Contributor**
Would never log into OSM and would never want any data being sent to public repository like OSM. This is often because they understand how once data is out there, it's out there + how badly privacy is usually handled in apps.
