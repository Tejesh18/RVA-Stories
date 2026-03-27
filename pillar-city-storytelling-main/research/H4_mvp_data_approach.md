# Richmond Arts MVP: Ship a Credible Demo from Fragmented Data in 48 Hours

## Executive Summary

The defining data challenge for the Richmond arts discovery problem is that no single authoritative event source exists. This fragmentation is not a solvable problem within a 48-hour hackathon—it is the exact problem the tool is trying to address. Teams that spend significant time searching for "the right API" or hoping a comprehensive Richmond arts database exists will fail. The MVP must demonstrate that useful aggregation is possible from imperfect, heterogeneous sources. 

The recommended strategy is a **layered spine approach**: use the Eventbrite API as the primary automated data source, add manually curated events from anchor Richmond cultural institutions (VMFA, ICA at VCU), and hand-seed a small dataset of events from neighborhood arts organizations. This approach explicitly timeboxes data integration to under 8 hours, leaving crucial time for UI polish, filtering, and integrating real community stories. Depth and credibility will beat breadth; judges will reward a working, queryable demo of "best-case" data over a broken app that overclaims comprehensive coverage.

## Problem Framing: Prove Aggregation Value, Not Completeness

### Why Fragmentation is Structural, Not Temporary
Richmond's arts data is inherently fragmented across multiple independent organizers using mixed tooling—from ticketing platforms to WordPress calendars and static PDFs. Because there is no centralized data warehouse, the MVP must focus on proving that a unified discovery experience is valuable, even with a constrained dataset. Judges will reward credible focus, transparent sourcing, and working filters over claims of comprehensive coverage that fall apart during a live demo.

## Primary Data Spine: Eventbrite Geosearch + Categories

Eventbrite supplies high-volume, well-structured JSON via documented endpoints, making it the ideal anchor for the dataset. However, access details and parameter usage are critical for a fast implementation.

### Evidence and Parameters to Implement
Eventbrite's Platform API documents an event search endpoint and category support [1] [2]. Crucially, the API supports expansions, allowing developers to retrieve detailed venue and category information in a single request by appending `expand=venue,category` [3]. 

*Caution*: Eventbrite's older Discovery search documentation regarding location-based queries shows deprecation [4]. Teams must validate current Platform endpoints with a live OAuth token early on Day 1 rather than relying on outdated documentation.

### Implementation Notes and Risks
Teams should query Richmond via latitude/longitude with a defined radius, filter for Arts/Culture categories, and use expansions to get structured addresses [3]. The primary unknown is whether Eventbrite's category structure reliably surfaces smaller community events or only large ticketed performances. To mitigate this, teams should widen the search radius modestly and supplement the automated feed with hand-seeded entries.

## Anchor Institutions: VMFA and ICA at VCU Feed Reality Check

Do not burn hackathon hours hunting for institution feeds that do not exist. A review of major Richmond cultural anchors reveals a lack of machine-readable syndication.

### Findings on Institutional Feeds
* **VMFA**: The calendar relies on HTML filters (Date, Audience, Type) with no visible ICS, iCal, or RSS endpoints [5] [6].
* **ICA at VCU**: The calendar presents HTML listings with no obvious public iCal or Atom endpoints [7] [8].
* **Action**: Preselect 3–5 high-signal events from each institution and hand-enter them via an admin form or CSV in under 60 minutes. Only attempt to integrate a feed if a clearly documented ICS emerges.

## Local Media Calendars: Low ROI for MVP Ingestion

Local media calendars are not quick wins for data intake. Treat them as editorial references rather than automated data sources.

### Findings on Media Feeds
* **Style Weekly**: The calendar page features newsletter signup forms but exposes no RSS or iCal feeds [9] [10].
* **DoRichmond**: A review of the domain (dorichmond.com) reveals no publicly documented event API or feed.
* **Action**: Exclude these from the MVP pipeline. If coverage pressure arises, scrape 2–3 headline events manually rather than building fragile, time-consuming web scrapers.

## Facts with URLs: Confirmed vs. Deprecated Sources

The following facts confirm the availability (or lack thereof) of public APIs and feeds for Richmond arts data:

* **Eventbrite API Search**: Confirmed support for event search endpoints (`https://www.eventbrite.com/platform/api#/reference/event-search/list/search-events`) [1].
* **Eventbrite Categories**: Confirmed category list endpoint (`https://www.eventbrite.com/platform/api#/reference/categories/list/list-categories`) [2].
* **Eventbrite Expansions**: Confirmed support for expanding venue, category, and status details (`https://www.eventbrite.com/platform/docs/events`) [3].
* **Eventbrite Deprecation**: The older "By Location" search documentation is deprecated (`https://www.eventbrite.com/platform/docs/by-location`) [4].
* **VMFA Calendar**: No public ICS/Atom feed observed (`https://www.vmfa.museum/calendar`) [5].
* **ICA at VCU Calendar**: No public ICS/Atom feed observed (`https://icavcu.org/calendar/`) [7].
* **Style Weekly Calendar**: No public RSS/iCal feed observed (`https://www.styleweekly.com/richmond/Calendar`) [9].
* **Do Richmond**: No public API or feed observed on the domain (`https://dorichmond.com/`).

## Unknowns and Partnership Options

Two critical uncertainties remain that cannot be verified publicly. Plan tests and outreach, but do not hinge the MVP's success on them.

* **Unknown 1**: Whether Eventbrite's event category structure returns meaningful results for Richmond's smaller, free, or community-driven arts events, or if it only surfaces large ticketed performances.
 * *Mitigation*: Run sample queries early on Day 1 and compare the output to manual spot-checks of known local venues.
* **Unknown 2**: Whether any Richmond arts council or Business Improvement District (BID) maintains a private event database that could be accessed through a partnership request.
 * *Mitigation*: Identify and contact 1–2 plausible partners for post-hackathon integration, and mention this as a scaling strategy during the pitch.

## Data Quality Risks: 48-Hour Mitigations

Data cleaning challenges in arts event aggregation are predictable. Accept some mess and apply light-touch, targeted fixes that maximize demo reliability.

| Common Issue | Root Cause | MVP-Time Mitigation |
| :--- | :--- | :--- |
| **Duplicate events** | Multi-posting (e.g., same event on Eventbrite and a venue's site) | Skip automated dedup. Display the source URL prominently. If time permits, use a simple fuzzy match (name + datetime + venue) for the top 10 venues only. |
| **Inconsistent venue names** | Human-entered text ("The Valentine" vs. "1015 Clay St") | Maintain a tiny venue alias map for 10 priority venues. Use Eventbrite's expanded venue object when available [3]. |
| **Missing/imprecise geocoding** | Neighborhood-only addresses | Geocode only missing addresses for top events on-demand. Allow the map filter to be optional in the UI. |
| **Stale/canceled events** | Organizer edits description without API flags | Filter to future dates. Conduct a pre-demo manual QA sweep for the top 30 events. Display a "last verified" timestamp. |

*Takeaway*: Attempting to build automated deduplication or perfect geocoding across heterogeneous sources will consume debugging time that hackathon teams cannot afford. Show the best-case data and be transparent about its limits.

## Story Seed Strategy: Choose Credibility Over Speed

For story collection tools, the seed dataset question is highly strategic. Teams must decide how to populate the app before the hackathon begins.

| Story Approach | Speed to Produce | Credibility | Risk / Drawback | Recommendation |
| :--- | :--- | :--- | :--- | :--- |
| **A: Fictional/Composite** | Fastest | Lowest | High risk of being seen as inauthentic by judges. | Use only as an absolute last resort. |
| **B: Public Archival** | Medium | High | Requires checking licensing (e.g., Valentine Museum public domain). | Good fallback option. |
| **C: Real Pilot Stories** | Hardest (Logistics) | Highest | Requires pre-hackathon outreach and consent. | **Highly Recommended**. Produces dramatically more compelling demos. |

*Takeaway*: Approach C (gathering 5–8 real pilot stories pre-hackathon) wins judge trust because teams can answer "Where did these come from?" with a real, replicable community intake process.

## Data Source Selection Decision Tree

Match your data pipeline ambition to your team's actual developer capacity. Scope creep is the biggest failure mode.

| Team Capacity | Recommended Sources | Pipeline Steps | Est. Hours | Expected Events | Key Risk & Mitigation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1 Developer** | Eventbrite API + 5–10 hand-seeded events | OAuth + `/events/search` with lat/long + `expand=venue,category` [3] [1]. Admin CSV import for seeds. Minimal UI filters. | 6–7 hours | 20–35 | *Risk*: Eventbrite coverage gaps. *Mitigation*: Widen radius; seed marquee events manually. |
| **2 Developers** | Eventbrite API + 2–3 anchor institutions + 5–10 seeds | Dev A: Eventbrite pipeline. Dev B: Curates/ingests anchor events via CSV. Shared: UI filters + venue alias map (10 entries). | 8–10 hours | 30–50 | *Risk*: Duplicates across sources. *Mitigation*: No automated dedup; show sources; spot-merge top duplicates manually. |
| **3+ Developers** | Eventbrite API + 3–5 anchors + 5–10 seeds | Dev A: Eventbrite. Dev B: Ingestion tooling/admin. Dev C: UI + map. Optional: Simple dedup for top venues if time remains. | 10–14 hours | 40–60 | *Risk*: Scope creep (adding more feeds). *Mitigation*: Freeze sources after 3–5; invest extra time in UI polish and story QA. |

*Takeaway*: Regardless of team size, freeze data sources once the spine is live. Invest remaining time in a polished, queryable demo rather than chasing marginal data volume.

## 48-Hour Build Plan and Demo Narrative

Lock the data spine by the end of Day 1; spend Day 2 on filters, polish, and story credibility.

* **Day 1 AM (3–4h)**: Eventbrite auth, search implementation, and ingestion. Ensure `expand=venue,category` is working [3].
* **Day 1 PM (3–4h)**: Build admin CSV import. Seed 10–15 manual events. Scaffold the UI (list view + basic filters).
* **Day 2 AM (3–4h)**: Add map (optional), implement the venue alias map, and add "last verified" labels. Curate 3–5 anchor events from VMFA/ICA.
* **Day 2 PM (3–4h)**: Integrate 5–8 pilot stories. Perform a manual QA sweep for cancellations. Write and rehearse the demo script.
* **Demo Arc**: Show a specific user query (e.g., "free events this weekend in Jackson Ward"), click into real-source event pages, and connect the event to a relevant, real community story.

## Success and Failure Snapshots

* **Success**: Delivering 35–45 live events with clear filters, 5+ real community stories, transparent source links, and an honest narrative about how to scale post-hackathon.
* **Failure**: Scraping 100+ noisy items filled with duplicates and stale events, lacking a cohesive narrative of how a user actually discovers something meaningful.

## Judge Q&A Prep

Preempt tough questions by being transparent on coverage limits and explicit on scaling.

* **"Where did the stories come from?"** $\rightarrow$ "From 8 real community submissions gathered pre-hackathon; we have consent and a repeatable intake form."
* **"How comprehensive is this?"** $\rightarrow$ "It's a focused demo of the best-available public data (Eventbrite + curated anchors + seeds). We show sources and last-verified times; completeness comes post-hackathon via additional partnerships."
* **"How will you scale?"** $\rightarrow$ "Post-hackathon, we will add additional ICS/RSS feeds where available, pursue a data-sharing MoU with local arts councils, and introduce background deduplication and geocoding services."

---

## Appendix: Inferences

* **[Inference]** A layered spine approach (Eventbrite + 3–5 curated iCal/manual feeds + 5–10 hand-seeded events) can produce a demo dataset of 25–50 current Richmond arts events within 8 hours of development, which is sufficient for a compelling demo.
* **[Inference]** Attempting automated deduplication across 3+ heterogeneous sources will consume 4–6 hours of debugging time that most hackathon teams cannot afford, making manual curation and transparent sourcing the superior MVP strategy.

## References

1. *Fetched web page*. https://www.eventbrite.com/platform/api#/reference/event-search/list/search-events
2. *Fetched web page*. https://www.eventbrite.com/platform/api#/reference/categories/list/list-categories
3. *Getting Information on Events - Documentation | Eventbrite Platform*. https://www.eventbrite.com/platform/docs/events
4. *Searching Events by Location - Documentation | Eventbrite Platform*. https://www.eventbrite.com/platform/docs/by-location
5. *Calendar - Virginia Museum of Fine Arts*. https://www.vmfa.museum/calendar
6. *Calendar - Virginia Museum of Fine Arts*. https://www.vmfa.museum/calendar?audience=adults
7. *Calendar - Institute for Contemporary Art*. https://icavcu.org/calendar/
8. *Events Archive - Institute for Contemporary Art*. https://icavcu.org/events/
9. *Calendar - Style Weekly*. https://www.styleweekly.com/richmond/Calendar
10. *Home - Style Weekly*. https://www.styleweekly.com/