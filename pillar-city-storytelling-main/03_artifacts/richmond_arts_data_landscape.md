# Richmond Arts Data Landscape

An assessment of what arts and cultural event data is actually accessible in Richmond and what the realistic options are for a hackathon team building an aggregator.

Status: All items below are [Unverified] until confirmed during the hackathon. This document captures what is likely or plausible based on publicly known information.

---

## What Is Likely Accessible

### Richmond CultureWorks — Primary Recommended Source (corrected 2026-03-18)
Richmond CultureWorks (https://calendar.richmondcultureworks.org) is the active Richmond arts event aggregator maintained by a nonprofit. It aggregates 1,200+ events from across Richmond arts organizations.

**Realistic coverage:** Broad coverage of Richmond arts events including gallery openings, performances, and community events from established organizations. More comprehensive than any single organization feed.

**Access:** Public iCal feed at `/calendar/1.ics`; RSS feed at `/calendar/1.xml`. No authentication required. Confirmed live and actively maintained.

**What to expect:** Events from VMFA, ICA at VCU, performing arts organizations, galleries, and community events. The most reliable single starting point for a hackathon aggregator.

**Reference:** https://calendar.richmondcultureworks.org

---

### ~~Eventbrite API~~ — Deprecated; Do Not Use as Primary Source (corrected 2026-03-18)
Eventbrite's public location-based event search API was deprecated and removed on February 20, 2020. There is no public endpoint for searching events by city or bounding box.

**Recommendation:** Do not plan your hackathon MVP around Eventbrite as a data source. Use Richmond CultureWorks as the primary backbone instead.

---

### RSS and iCal Feeds from Arts Organization Websites
Many established arts organizations maintain calendar pages with RSS or iCal feeds. These are less discoverable but more comprehensive for their specific venue or organization.

**Confirmed-likely sources to verify:**
- VMFA (Virginia Museum of Fine Arts) — large institution, likely maintains a structured events calendar
- ICA at VCU — contemporary arts center; likely has a structured events calendar
- Richmond Symphony — ticketed events; likely on Eventbrite and their own site
- Firehouse Theatre — smaller venue; calendar may or may not have a feed
- 1708 Gallery — visual arts; calendar format unknown
- Second Street Gallery (if still active) — visual arts gallery
- Elegba Folklore Society — African and African American arts; calendar unknown

**Realistic coverage:** RSS/iCal coverage will require manual research during the hackathon to identify which organizations actually have usable feeds. Expect 30-50% of organizations to have structured calendar data; the rest will require HTML scraping or manual entry.

**Access:** Public; no authentication required for RSS/iCal.

---

### Style Weekly Events Listings
Style Weekly is Richmond's alternative weekly with comprehensive arts and entertainment coverage. They maintain event listings on their website.

**What to expect:** Broad coverage of Richmond arts events including gallery openings, performances, and community events.

**Data accessibility:** Not accessible for automated ingestion. Events load via JavaScript (AJAX) — static scraping will not work. No RSS feed is available. (corrected 2026-03-18)

**Recommendation:** Do not plan automated ingestion from Style Weekly. Use as a manual reference or direct users to the site for supplemental browsing.

**Reference:** https://www.styleweekly.com/richmond/event-search

---

### RVA Magazine Events
RVA Magazine covers Richmond arts, culture, music, and food. They maintain event listings.

**What to expect:** Arts and culture event coverage with a focus on music, nightlife, and independent arts.

**Data accessibility:** Unknown. Requires investigation during hackathon.

**Reference:** https://rvamag.com/events

---

## What Is Difficult or Inaccessible

### Facebook Events
Facebook's Graph API was severely restricted after the 2018 Cambridge Analytica scandal. Public event data is no longer freely accessible via API for third-party applications. Accessing event data now requires Facebook Marketing Partner status — a formal business relationship not achievable in a hackathon context. (corrected 2026-03-18)

**Recommendation:** Do not plan your hackathon MVP around Facebook Events data. Treat any Facebook event data as inaccessible within a 48-hour window. Note this as a gap in your demo.

**Why this matters:** Many Richmond arts organizations and independent venues rely heavily on Facebook Events as their primary event promotion channel. This means a significant portion of Richmond arts events are not reachable by an API-based aggregator without extraordinary effort.

### Instagram Events
Instagram does not have a public events feed. Event announcements on Instagram are in the form of posts, stories, and reels — unstructured media that would require scraping and NLP processing to extract structured event data.

**Recommendation:** Out of scope for a hackathon MVP.

### Individual Artist Websites and Social Pages
The long tail of Richmond's arts scene — individual artists, pop-up events, community gatherings — lives in personal websites, neighborhood Facebook groups, and word of mouth. This content is not aggregable without a content submission mechanism (which shifts the tool from aggregator to directory).

---

## What a Realistic Hackathon Aggregator Looks Like

Given the above landscape, a realistic Richmond arts event aggregator built in 48 hours would:

1. **Cover:** Richmond CultureWorks iCal/RSS feed (1,200+ events, the most reliable starting point — corrected 2026-03-18); 2-4 additional RSS/iCal feeds from major arts organizations not already covered by CultureWorks
2. **Miss:** Facebook Events (Marketing Partner status required — inaccessible); Style Weekly (JavaScript-loaded, no RSS — corrected 2026-03-18); RVA Magazine (no discoverable automated feeds); small gallery and independent artist events (no structured data); word-of-mouth events
3. **Present:** A unified view with filtering by date, neighborhood (if geocoded), and event type
4. **Acknowledge:** "This aggregator surfaces events from [specific sources]. It does not cover all Richmond arts events. To add your organization's events, [contact info]."

A tool that covers 40-60% of discoverable Richmond arts events and is honest about its coverage is a credible, valuable hackathon output. A tool that claims comprehensive coverage is not.

---

## Gap Worth Naming in Your Demo

The absence of arts and cultural event data from the Richmond open data catalog is a confirmed gap. The rubric notes it explicitly. Naming this gap in your demo — and proposing that your tool could inform what kind of structured data the City should collect — is a stronger civic pitch than claiming your tool solves the whole problem.
