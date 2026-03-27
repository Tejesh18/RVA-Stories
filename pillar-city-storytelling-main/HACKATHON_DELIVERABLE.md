# Hackathon deliverable — Problem 1: Arts & cultural event discovery

**Pillar:** A City That Tells Its Stories  
**Track:** Problem 1 — Discovering and participating in Richmond’s arts & cultural events  
**Project name:** **What’s On RVA**  
**Prototype path:** [`mvp-whats-on-rva/`](mvp-whats-on-rva/)

## What we built

A **source-linked** discovery experience (not a manually curated city calendar):

- **Smart feed** with filters: region/neighborhood label (from CultureWorks), category, free vs paid, date window  
- **Neighborhood arts map** (Leaflet + OpenStreetMap) with pins and popups linking to original listings  
- **“Tonight Near Me”** uses browser geolocation + nearest area centroid, then filters to **this weekend**  
- **Light personalization**: remembers category + region to surface “because you liked…” messaging  
- **Data transparency**: lists sources, shows live vs demo mode, states non-comprehensive scope  

**Primary data source (judge-aligned):** CultureWorks Localist API —  
`https://calendar.richmondcultureworks.org/api/2/events`  
The app fetches and normalizes this JSON in the browser when CORS allows (typical when served over HTTP/HTTPS).

## How to run the demo

1. **Best (live CultureWorks data):** serve the folder with any static file server, then open `index.html` route, for example:
   - `npx --yes serve mvp-whats-on-rva` (if Node is installed elsewhere), or  
   - `python -m http.server` inside `mvp-whats-on-rva`, or  
   - “Live Server” in VS Code / Cursor on that folder  

2. **Quick:** double-click `mvp-whats-on-rva/index.html`. If the API cannot load (file protocol or network), the app **falls back to bundled sample events** and shows a yellow status banner.

## Judge demo script (about 3 minutes)

1. Show the **green “Live data”** banner (or explain yellow demo mode and HTTP serving).  
2. Filter **this weekend** + a **region** (e.g. RVA Downtown) + a **category**.  
3. Open **Neighborhood Arts Map** and click a pin → **Original source** link.  
4. Tap **Tonight Near Me** (grant location) → weekend + nearest area.  
5. Read **Data Transparency**: sources, not comprehensive, last updated.  

## What we refused to build (on purpose)

- No claim of **complete** coverage of all RVA arts events  
- No **manual** citywide calendar curation as the primary workflow  
- No resident **story collection** in this build (that is Problem 2)  

## Repository packaging for submission

This environment may not include `git`. To create a repo locally:

```bash
cd pillar-city-storytelling-main
git init
git add .
git commit -m "What's On RVA: Problem 1 MVP with CultureWorks aggregation"
```

Push to GitHub/GitLab and submit that URL per hackathon instructions.

## Evidence and sources (for your team log)

- CultureWorks calendar API base: `https://calendar.richmondcultureworks.org/api/2/events`  
- Mirror claims your team verifies into root `evidence_log.md` per pillar guidance.
