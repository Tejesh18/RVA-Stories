# 48-Hour Richmond Arts Aggregator: Ship a Credible MVP with Eventbrite + iCal

## Executive Summary
Building a functional, credible Richmond arts event aggregator in a 48-hour hackathon requires ruthless prioritization of data sources. The most viable technical path is to use the **Eventbrite Search API as the system's spine**, which can be stood up in 2–3 hours to provide a baseline of structured, location-filtered events. Because Eventbrite inherently skews toward mid-size, ticketed events, this spine must be rapidly augmented to close the grassroots coverage gap. 

The fastest way to build legitimacy and breadth without blowing the timeline is to integrate **3–5 zero-auth iCal/ICS feeds from anchor cultural institutions** (such as the Institute for Contemporary Art at VCU). Conversely, attempting to automate Facebook Events via the Graph API is a guaranteed failure path due to strict App Review and Business Verification requirements. Teams should instead rely on manual curation for Facebook and local media calendars. By defining a minimal event schema and focusing on a static, morning-of-demo data pull rather than a live cron job, a team can ship a highly demonstrable, culturally representative MVP.

## MVP Feasibility in 48 Hours — Eventbrite + iCal is the fastest credible path
You can ship a working aggregator in 48 hours by using Eventbrite as the primary data engine and augmenting it with 2–3 ICS feeds. This approach completely bypasses the need for complex authentication flows, cron jobs, or web scraping.

### Eventbrite Search API: 2–3 hours to first results; robust geo/date/category filters
The Eventbrite `/v3/events/search/` endpoint is the only data source that provides high-volume, structured JSON with minimal friction. It supports robust location filters (`location.address`, `location.latitude`, `location.longitude`, `location.within`), date ranges (`start_date.range_start`, `start_date.range_end`), and category queries. Authentication requires only an app-level Bearer token, avoiding user-level OAuth flows entirely. 

By querying for Richmond, VA (e.g., `within=25mi`) over a 14-day window and using the `expand=venue,organizer` parameter, a team can parse rich event data—including names, descriptions, start/end times, and venue addresses—into a local database within the first three hours of the sprint. The primary risk is category filter behavior and rate limits, which must be monitored and paginated carefully.

### Facebook Events: API is effectively gated; use manual seeds only
Historically the richest source for grassroots Richmond arts events, the Facebook Events API is now a dead end for a 48-hour hackathon. Following the Cambridge Analytica fallout in 2018, Facebook deprecated public event discovery. Reading Page events via the Graph API now requires approved permissions (e.g., `pages_read_engagement`), App Review, and Business Verification. 

Do not plan any automated Facebook integration. Instead, build a manual seed list of 10–15 key Richmond arts Pages (e.g., First Fridays RVA, artist-run spaces, neighborhood block parties) and manually copy 1–2 upcoming events into your dataset with a `source_url` linking back to Facebook. This provides the necessary demo credibility without the engineering quicksand.

### iCal/ICS Feeds from Anchors: Zero-auth and high trust; ICA confirmed
RSS and iCal/ICS feeds are the fastest, no-key bridge to aggregator legitimacy. They require no authentication and are inherently machine-readable. The Institute for Contemporary Art (ICA) at VCU actively maintains an events calendar [1] [2] [3] and exposes a confirmed, accessible ICS feed at `https://icavcu.org/calendar/?ical=1` [4]. Individual events also feature direct "Add to Calendar" exports [5]. 

Other anchor institutions like the Black History Museum and Cultural Center of Virginia maintain active event archives (`https://blackhistorymuseum.org/event/`) [6], and the Virginia Museum of Fine Arts (VMFA) publishes robust calendars. While their exact ICS endpoints require manual verification, wiring 2–3 confirmed ICS feeds (starting with the ICA) takes only 1–2 hours per feed for basic mapping. The main challenge is format heterogeneity—handling different field names and timezone quirks—which requires conservative normalization.

## Coverage and Legitimacy — Closing Eventbrite’s gaps fast
[Inference] Expect Eventbrite to yield 15–30 Richmond arts and culture events in any given week. While this is enough volume for a demo, the coverage will be biased. Adding anchor institution feeds and curated media picks ensures the aggregator "feels" complete to local users.

### Richmond museum presence on Eventbrite boosts breadth
Fortunately, Eventbrite is not just for concerts and tech meetups. A search of Richmond events reveals that major cultural institutions actively use Eventbrite for ticketing and registration. This includes the Virginia Museum of History & Culture (VMHC), The Valentine, the American Civil War Museum, and the Virginia Museum of Fine Arts [7]. Targeting these specific organizer IDs can quickly populate the aggregator with high-quality museum lectures, historical tours, and exhibition openings.

### Local media calendars (Do Richmond/Do804, Style Weekly, RVA Magazine) are best as curated inputs
Local media outlets publish rich, grassroots calendars, but they generally lack public APIs. Because their sites are HTML-first, building scrapers introduces massive breakage risk and often violates Terms of Service. For a 48-hour MVP, these sites should be used strictly as sources for manual curation. Hand-picking 5–10 marquee events from these platforms ensures grassroots representation without the 4–8 hour engineering tax of building fragile web scrapers.

## Technical Architecture — Minimal ingestion, normalization, and deduplication
The real engineering tax in this architecture is normalization. Eventbrite JSON and various ICS feeds will differ on field names, timezones, and venue formatting. 

### Minimal Event schema + mapping plan
To ship quickly, define a minimal, universal Event schema: `id`, `title`, `description`, `start_utc`, `end_utc`, `venue_name`, `address`, `source_url`, `source_type`, and `organizer_name`. Write per-source mappers that transform Eventbrite and ICS data into this schema. Deduplicate records based on a composite key of `title + start_utc + venue_name`. Tolerate partial data (e.g., missing venue addresses in ICS feeds) rather than failing the ingestion.

### Integration Estimates and Risks

| Source | Access Method | Auth Required | Richmond Coverage (estimated %) | Format | Estimated Integration Time (hours) | Key Risk |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Eventbrite API** | REST GET `/v3/events/search` | App token (Bearer); no user auth | 30–40% [Inference] | JSON | 2–3 | Coverage bias toward ticketed events; rate limits |
| **Facebook Events** | Graph API `/{page-id}/events` | App Review + Business Verification | 60–80% potential but gated [Inference] | JSON | Not feasible in 48h (manual seed: 1) | Gated access; ToS violations |
| **VMFA iCal** | ICS feed | None | 5–10% [Inference] | ICS | 1–2 | ICS URL unverified; potential field gaps |
| **ICA iCal** | ICS at `icavcu.org/calendar/?ical=1` | None | 2–5% [Inference] | ICS | 0.5–1.5 | Limited volume; timezone/all-day quirks |
| **Do Richmond (Do804)** | HTML site | None | 15–25% [Inference] | HTML | 4–6 (scrape) / 1 (manual) | Scraping ToS; HTML structure changes |
| **Style Weekly events** | HTML site (aggregated) | None | 20–30% [Inference] | HTML | 4–6 (scrape) / 1 (manual) | Aggregator ToS; duplicate events |
| **RVA Magazine events** | HTML site | None | 10–20% [Inference] | HTML | 3–5 (scrape) / 1 (manual) | Inconsistent structure; music-heavy skew |

*Takeaway*: Eventbrite and ICS feeds offer the highest reliability for the lowest effort. Media calendars and Facebook should be relegated to manual seeding to protect the timeline.

## Risks and Mitigations — What can go wrong and how to recover
Time pressure is the ultimate enemy of the MVP. Anticipating API limitations and scoping traps is critical.

### Failure case: Betting on Facebook automation
Teams that plan to "use the Facebook Events API" typically hit permissions walls on Saturday afternoon and ship nothing on Sunday. 
* **Mitigation**: Explicitly de-scope Facebook automation during the kickoff. Allocate a strict 60-minute block for a non-technical team member to manually curate a Facebook seed list.

### Rate limits, categories, and timezones
Eventbrite rate limits can throttle aggressive polling, and ICS feeds are notorious for timezone formatting errors (e.g., floating times vs. UTC).
* **Mitigation**: Use small page sizes and implement exponential backoff for Eventbrite. Convert all incoming times to UTC immediately upon ingestion and store a `source_tz` field. QA the timeline with 3 sample dates early in the build. Do not attempt a live cron job; build a one-shot refresh script that caches 7–14 days of events into a static JSON file or SQLite DB the morning of the demo.

## Action Plan — 48-hour playbook with concrete checkpoints
Execute this timeline to ensure a stable, demonstrable product by Sunday afternoon.

### Day 1 (hours 0–24)
* **0–3h**: Stand up Eventbrite fetch and JSON parse (Target: Richmond, next 14 days; `expand=venue`).
* **3–6h**: Define the minimal Event schema and build the UI skeleton (list view + basic search/filter).
* **6–9h**: Integrate the confirmed ICA ICS feed; write the ICS mapper.
* **9–12h**: Implement deduplication logic and basic time/venue formatting.
* **12–16h**: Refine the demo narrative; manually seed 5–10 events from Facebook and local media calendars.
* **16–20h**: Conduct a QA pass; fix timezone and display issues.

### Day 2 (hours 24–48)
* **24–28h**: Add 1–2 more ICS feeds (attempt to verify VMFA/BHMVA; if blocked, pivot to a known mid-size venue's ICS).
* **28–32h**: Optionally implement an Eventbrite organizer filter if specific museum IDs are discovered; tune search UX.
* **32–36h**: Finalize the one-shot refresh script; snapshot the demo-week dataset to prevent live-demo API failures.
* **36–44h**: Polish the UI; conduct mobile responsiveness and accessibility checks.
* **44–48h**: Dry-run the pitch; test the live refresh; ensure the fallback to cached JSON works flawlessly.

## Evidence and Open Questions — Facts, Inferences, Unknowns

### Facts (with URLs)
* **Eventbrite API**: The public event search endpoint is `GET https://www.eventbriteapi.com/v3/events/search/`. Key parameters include `location.address`, `location.within`, `categories`, `start_date.range_start`, and `expand`. It requires a Bearer token for auth (`https://www.eventbrite.com/platform/docs/authentication`).
* **ICA at VCU iCal**: An ICS feed is confirmed and publicly accessible at `https://icavcu.org/calendar/?ical=1` [4].
* **Black History Museum**: Maintains an active events archive at `https://blackhistorymuseum.org/event/` [6].
* **VMFA**: Maintains an event calendar at `https://www.vmfa.museum/calendar/` (ICS endpoint requires verification).
* **Facebook Events API**: Public event discovery is deprecated. Reading Page events requires App Review and Business Verification (`https://developers.facebook.com/docs/graph-api/reference/page/events/`).
* **Richmond Museum Presence**: Eventbrite searches confirm active usage by the Virginia Museum of History & Culture, The Valentine, and the American Civil War Museum [7].

### Inferences
* **[Inference]** The Eventbrite API alone will return enough Richmond arts events for a convincing demo (estimated 15–30 events in any given week), though coverage will be heavily biased toward larger, ticketed events.
* **[Inference]** Adding 3–5 iCal feeds from anchor cultural institutions (like the ICA) doubles the perceived legitimacy of the aggregator without tripling the build time.

### Unknowns
* **Eventbrite Rate Limits**: The exact practical rate limits for a new app token, and whether category codes for "arts" and "cultural" events accurately return Richmond-specific results without false positives.
* **Unverified ICS Feeds**: Whether the VMFA and BHMVA expose public `.ics` feed URLs directly from their CMS, and what those exact endpoints are.
* **Local Databases**: Whether Richmond's ArtsRVA or similar local arts advocacy organizations maintain a hidden, machine-readable event database that could serve as a better spine than Eventbrite.
* **Organizer IDs**: Which specific Richmond arts organizations or districts have Eventbrite Organizer pages that can be explicitly targeted to improve query precision.

## References

1. *Calendar - Institute for Contemporary Art*. https://icavcu.org/calendar/
2. *Institute for Contemporary Art at Virginia Commonwealth University*. https://icavcu.org/
3. *Events Archive - Institute for Contemporary Art*. https://icavcu.org/events/
4. *Calendar - Institute for Contemporary Art*. https://icavcu.org/calendar/?ical=1
5. *2026 VCUarts MFA Thesis Exhibition, Round 1 Opening - Institute for Contemporary Art*. https://icavcu.org/events/2026-vcuarts-mfa-thesis-exhibition-round-1-opening/
6. *Events Archive - Black History Museum*. https://blackhistorymuseum.org/event/
7. *
    Discover Black History Museum Events & Activities in Richmond, VA | Eventbrite
*. https://www.eventbrite.com/d/va--richmond/black-history-museum/