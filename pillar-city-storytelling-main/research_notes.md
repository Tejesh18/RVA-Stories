# Research Notes — A City That Tells Its Stories

Use this file to capture findings as your team runs the research prompts in `05_prompts/research/`.

---

## Executive Brief

_Updated 2026-03-18 from Parallel.ai verification research (run_id: trun_3cad0ebea15c480ea7df83468f6b3e7d). All items below are web-verified unless labeled [Inferred]._

### What we know (confirmed)
- **Richmond CultureWorks** (https://calendar.richmondcultureworks.org) is the only viable automated event data source for a weekend hackathon. It aggregates 1,200+ Richmond arts events with stable iCal (`/calendar/1.ics`) and RSS (`/calendar/1.xml`) feeds. Confirmed live and actively maintained. Use as the primary events backbone.
- **Eventbrite public event search** was deprecated and removed February 20, 2020. No public location-based search endpoint exists.
- **Facebook Events API** is blocked for third-party apps without Facebook Marketing Partner status. Not hackathon-viable.
- **Richmond GeoHub** confirms two specific Arts District layers: "Arts and Cultural District" and "Arts and Cultural District Incentive Zones." Both downloadable as GeoJSON via standard ArcGIS Hub interface. Credit "City of Richmond GeoHub" in map UI.
- **VCU Libraries** hosts two publicly accessible Richmond neighborhood oral history collections — Carver collection (scholarscompass.vcu.edu/car/, 15 interviews, MP3 + PDF transcripts) and Historic Fulton collection (scholarscompass.vcu.edu/ful/, 17 interviews with 32 participants, streaming audio + searchable transcripts). Both are fully public, streamable, and linkable without login. Copyright for Fulton collection held by The Valentine; non-commercial use permitted. (corrected 2026-03-18)
- **The Valentine** (https://thevalentine.org/collections/) holds copyright for the Fulton collection and has an online research database, but does NOT host a streaming portal. Use VCU Libraries for streaming; credit The Valentine as copyright holder.
- **StoryCorps** has 500+ Richmond "One Small Step" conversations archived at archive.storycorps.org. Richmond is a former (not current) active recording hub.
- **AAPOR disclosure standards** require a non-representative sample disclaimer on any aggregated story data. Required text: "Based on voluntarily submitted stories — not a representative sample."
- **OHA informed consent guidelines** are confirmed at https://oralhistory.org/informed-consent/. Any story collection feature requires a plain-language consent flow with a human read-aloud test before demo.
- **Style Weekly events** load dynamically via JavaScript — static scraping unreliable. No RSS feed found.
- **RVA Magazine** has no discoverable automated feeds (`/events/feed/` and `/?ical=1` both failed). Do not attempt automated ingestion.

### What we believe (inferred)
- [Inferred] VMFA events calendar uses Localist software, which typically supports iCal/RSS. Richmond CultureWorks already aggregates VMFA — use CultureWorks rather than VMFA directly.
- [Inferred] ArcGIS Hub GeoJSON downloads are unauthenticated (standard platform behavior). Verify by attempting download at dataset page.
- [Inferred] ICA at VCU events are aggregated by CultureWorks — confirmed no direct iCal/RSS on icavcu.org.

### What we do not know (gaps)
- Scope and format of oral history collections at the Black History Museum (M-003 partially resolved for The Valentine only).
- How Richmond residents currently discover arts events — no user research conducted yet (M-002).
- Whether older/non-digital residents have comfortable storytelling channels (M-005).

### Best project direction based on research
**Build on CultureWorks + VCU/StoryCorps oral histories, visualized over Richmond GeoHub Arts District GIS data.**

Fastest reliable path: parse and cache the CultureWorks iCal/RSS feed for live events, deep-link VCU Libraries collections for neighborhood oral histories, overlay GeoHub Arts District polygons as map context. Day 1: infrastructure and data. Day 2: polish, ethics (consent flow + AAPOR disclaimer), mobile QA.

Do not attempt: Eventbrite as primary source, Facebook Events, Style Weekly scraping, RVA Magazine automated feeds, re-hosting VCU audio, or building individual org scrapers for VMFA/ICA.

---

## Running Notes by Research Area

### A — Problem Landscape

#### A1 — Arts Discovery Problem Landscape
_Run prompt `05_prompts/research/A1_problem_landscape_arts_discovery.txt` and capture findings here._

Findings:

Sources:

Gaps identified:

#### A2 — Civic Storytelling Problem Landscape
_Run prompt `05_prompts/research/A2_problem_landscape_civic_storytelling.txt` and capture findings here._

Findings:

Sources:

Gaps identified:

---

### B — Users and Personas

#### B1 — Arts-Curious Resident
_Run prompt `05_prompts/research/B1_users_arts_curious_resident.txt`_

Findings:

#### B2 — Artist or Venue
_Run prompt `05_prompts/research/B2_users_artist_venue.txt`_

Findings:

#### B3 — Longtime Resident Storyteller
_Run prompt `05_prompts/research/B3_users_longtime_resident_storyteller.txt`_

Findings:

---

### C — Services Landscape

#### C1 — Arts Organizations Landscape
_Run prompt `05_prompts/research/C1_services_arts_orgs_landscape.txt`_

Findings:

#### C2 — Existing Aggregators
_Run prompt `05_prompts/research/C2_services_existing_aggregators.txt`_

Findings: CORRECTION 2026-03-18 — dorichmond.com is NOT confirmed prior art. The domain does not resolve (DNS ENOTFOUND). No search engine results found. Treat as a dead link. The active Richmond arts aggregator is **Richmond CultureWorks** (https://calendar.richmondcultureworks.org) — 1,200+ events, iCal/RSS feeds, nonprofit mission. This is the real incumbent and the primary data source for any arts discovery MVP. See evidence E-003, P-002.

---

### D — Data Inventory

#### D1 — Eventbrite
_Run prompt `05_prompts/research/D1_data_eventbrite.txt`_

API endpoint confirmed: Y/N
Rate limits:
Sample Richmond results:

#### D2 — Social Media Events
_Run prompt `05_prompts/research/D2_data_social_media_events.txt`_

Facebook API access:
Other social sources:

#### D3 — RSS and Calendar Feeds
_Run prompt `05_prompts/research/D3_data_rss_calendar_feeds.txt`_

Organizations with confirmed RSS/iCal:
1.
2.
3.

---

### E — Prior Art

#### E1 — Arts Aggregators Nationally
_Run prompt `05_prompts/research/E1_prior_art_arts_aggregators.txt`_

Best comparable:
Key lessons:

#### E2 — Story Collection Tools
_Run prompt `05_prompts/research/E2_prior_art_story_collection.txt`_

Best comparable:
Key lessons:

---

### F — Opportunities

#### F1 — Ranked opportunities
_Run prompt `05_prompts/research/F1_opportunities_ranked.txt`_

Top-ranked weekend-viable opportunity:

#### F5 — Do Not Build
_Run prompt `05_prompts/research/F5_opportunities_do_not_build.txt`_

Items confirmed as out of scope:

---

### G — Risks

#### G1 — Representational Bias
_Run prompt `05_prompts/research/G1_risks_representational_bias.txt`_

Key risks identified:
Mitigations:

#### G2 — Consent and Privacy
_Run prompt `05_prompts/research/G2_risks_consent_privacy.txt`_

Required consent elements:
Storage and use commitments to make:

---

## Team Decisions Log

| Date/time | Decision | Rationale | Who decided |
|-----------|----------|-----------|-------------|
| | | | |

---

## Prototype Disclaimer

_Added 2026-03-18 — required for any public-facing demo output._

Any prototype built from this research must display the following notices where applicable:

**On aggregated story/insight views:**
> "Based on voluntarily submitted stories — not a representative sample." *(AAPOR disclosure standard)*

**On VCU Fulton collection story cards:**
> "Copyright: The Valentine; non-commercial use permitted. Hosted by VCU Libraries." *(https://scholarscompass.vcu.edu/ful/)*

**On map interfaces using Richmond GeoHub data:**
> "Arts district boundaries: City of Richmond GeoHub." *(https://richmond-geo-hub-cor.hub.arcgis.com)*

**On event listings powered by CultureWorks:**
> "Events sourced from Richmond CultureWorks. Source organization listed per feed item." *(https://calendar.richmondcultureworks.org)*

**On any story submission form:**
> A plain-language consent notice aligned with OHA informed consent guidelines (https://oralhistory.org/informed-consent/). A human read-aloud test of this language must be completed before the demo.

This prototype is a hackathon demonstration only. It is not City-approved, not deployment-ready, and makes no authoritative determinations about events, communities, or residents.
