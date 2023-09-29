---
title: "Locate is slow, difficult or fails entirely"
date: "2023-08-07"
weight: 
type: "audit"
url_source: "https://github.com/organicmaps/organicmaps/issues/5669"
focus: "Miscellaneous"
score: 4
heuristic: "5"
outputs:
  - Reveal
observations:
suggestions:
  - "If unable to access location, at bare minimum inform user why it cannot (Location settings, etc.), Transportr displays this message:"
  - "**UPDATE:** OMaps *does* already have a warning for this, which is better than Transporter as it offers a call to action that takes user to `Settings -> Location`"
  - "Missing Messages From OMaps"
  - "Popular FOSS apps Transportr and OsmAnd~ both display following status messages to user"
  - "Allow users to manually specify their location."
images:
  - "/organic-maps-2023/258883050-c7b9eaf2-c0f0-4900-ae4a-6b8c8af235f0.png"
  - "/organic-maps-2023/258878317-3e7a95c0-d025-4520-bf68-c13da2d4e09e.png"  
  - "/organic-maps-2023/258878835-980e12a3-e23f-42bd-a680-eb6fd69c32e4.png"
  - "/organic-maps-2023/259090723-2454e2d9-007f-4136-8aa4-fa564a5b8010.png" 
  - "/organic-maps-2023/258878826-76848299-ccaa-4b76-912c-ee4402a6afe6.png"  
  - "/organic-maps-2023/258879069-205cbf1f-c1c7-4b62-9826-90bdcf92fcd3.jpg" 
---

Clicking the `Locate` icon button, OMaps fails to determine location of user.
This problem is acute and makes OMaps routing highly unreliable and/or entirely unsuable.
Related issue #3450

In Android Location permission settings, OMaps has the same state granted as other map apps:

```
Allow only while using the app   [Y]
```

0. Use device with Calyx, Lingeage, or Graphene OS without Google Services
1. Place phone in airplane mode. Disable Location access.
2. Click the `Locate` icon button 
3. The `Locating` radar icon starts spinning.

After multiple minutes in the `Locating` state, a pop-up asks `Continue detecting your location?`

This icon spinning state and failure persists through the following:

- Turning off Airplane mode
- Enabling device Location
- Quitting app 
- Force stopping app
- Toggling `Disable / Enable` app

After all attempts at changing the phones state, Organic Maps fails to resolve any result or activate. 

In none of the above states, does OMaps trigger the `Accessing Location` green icon in the phone's topbar, which other mapping apps with the same permissions and user conditions do. 

OsmAnd~ and Transportr both work fine and trigger the `GPS Locating` UI widget of the OS, and properly show me on a map after updating the GPS data. Once this has occurred Organic Maps can also locate me successfully. 
