# What's On RVA (Problem 1 MVP)

Weekend-buildable prototype for **Discovering and Participating in Richmond's Arts & Cultural Events**.

## What this includes

- **Live ingestion** from CultureWorks Localist API (`/api/2/events`) with **bundled fallback** if the API is unreachable
- Source-linked event discovery feed
- Filters: region label (from CultureWorks), category, free vs paid, date window
- Neighborhood arts map (Leaflet + OpenStreetMap) with pins linking to original listings
- **Tonight Near Me** (geolocation + weekend filter)
- Lightweight personalization based on saved category + region
- Data transparency panel (sources, scope disclaimer, last updated)
- Static frontend only: `index.html`, `styles.css`, `app.js`

## Run locally

**Recommended (live API):** serve this directory over HTTP so the browser can fetch CultureWorks JSON (CORS-friendly in normal hosting).

Examples (run from this folder or point the server at this folder):

- `npx --yes serve .`
- `python -m http.server 8080`

Then open the served URL and load `index.html`.

**Quick open:** double-click `index.html`. If you see **demo mode** (yellow banner), the API did not load (often `file://` or network); use a static server for live data.

## Primary API

`https://calendar.richmondcultureworks.org/api/2/events`

## Why this fits the rubric

- **Impact / User value:** helps residents find real listings without insider networks  
- **Feasibility:** public API + attribution; no City internal systems  
- **Execution:** filters, map, and original-source links work in one flow  
- **Equity:** region-based discovery + plain-language summaries  

## Scope disclaimer

This is a **pilot aggregator**. It does not list every arts event in RVA. Always link to original sources.
