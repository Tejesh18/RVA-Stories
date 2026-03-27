# Prototype Recommendations — A City That Tells Its Stories

Six concept directions across both problem statements. Rated for weekend viability (H = high, M = medium, L = low) and civic impact (H = high, M = medium).

---

## Concept 1 — RVA Arts Aggregator

**Problem:** Arts Event Discovery
**Viability:** H | **Impact:** H

### What it is
A web application that pulls arts and cultural events from multiple public sources (Richmond CultureWorks iCal/RSS feed, RSS feeds from arts organization websites) and presents them in a single unified, filterable view.

### Why it scores well
- Real feeds exist today — Richmond CultureWorks (calendar.richmondcultureworks.org) aggregates 1,200+ events with stable iCal and RSS feeds (corrected 2026-03-18)
- Addresses the core pain point from Journey 1 directly
- No custom content creation required — purely aggregation
- Sustainable without City staff involvement if sources maintain their own listings
- Demonstrable in 48 hours with real Richmond data

### Core user flow
1. User visits the aggregator
2. Filters by date range, neighborhood, event type (gallery, music, performance, festival)
3. Sees a card grid or list of upcoming events with title, date, venue, and direct link to original source
4. Clicks through to the originating organization's page to get tickets or details

### Key risks
- Eventbrite public location-search API was deprecated February 2020 — do not use as a data source (corrected 2026-03-18)
- Facebook Events API requires Facebook Marketing Partner status — not hackathon-viable (corrected 2026-03-18)
- CultureWorks covers major arts organizations well but may miss hyperlocal or pop-up events
- RSS feed quality from smaller organizations may be inconsistent
- Attribution to source organizations is important — do not strip away the originating org

### Weekend scope
- Friday: parse and cache CultureWorks iCal/RSS feed; identify 2-3 additional RSS/iCal sources for organizations not already in CultureWorks; scaffold basic frontend
- Saturday: integrate data sources; build filter UI; handle edge cases
- Sunday: polish, demo data seeded, pitch prep

---

## Concept 2 — "What's On in RVA" Neighborhood Discovery Feed

**Problem:** Arts Event Discovery
**Viability:** H | **Impact:** H

### What it is
A simple, mobile-friendly feed of arts and cultural events organized by Richmond neighborhood. A resident in Carytown sees Carytown events. A resident in Scott's Addition sees Scott's Addition events. Uses the same data sources as Concept 1 but with geographic filtering as the primary interface.

### Why it scores well
- Solves the "I don't know what's happening near me" version of the problem
- Neighborhood identity is strong in Richmond — this framing resonates locally
- Simpler UI than a full aggregator — one filter does the organizing
- GeoHub neighborhood boundary data may exist to power geographic matching

### Core user flow
1. User selects their neighborhood (or allows location)
2. Feed shows upcoming arts events in or near that neighborhood
3. Cards include event name, date, venue, distance, and link to source
4. Optional: "also happening nearby" section for adjacent neighborhoods

### Key risks
- Venue-to-neighborhood mapping requires data work (geocoding or manual mapping)
- Some events are citywide and do not belong to a single neighborhood
- GeoHub neighborhood boundaries need to be verified as compatible with venue addresses

### Weekend scope
- Subset of Concept 1 with neighborhood filter; add geocoding of venue addresses to neighborhood polygons
- Achievable with GeoHub data + CultureWorks iCal/RSS feed + 2-3 additional organization feeds (corrected 2026-03-18; Eventbrite public location search API deprecated Feb 2020)

---

## Concept 3 — Arts & Culture District Map

**Problem:** Arts Event Discovery
**Viability:** M | **Impact:** M

### What it is
An interactive map of Richmond's arts and cultural districts, with each district showing upcoming events, linked organizations, and direct navigation to event sources.

### Why it scores medium
- Geographic visualization is compelling for demos
- Requires confirmed arts district boundary data from GeoHub (unverified gap)
- May need manual curation of organization-to-district mapping
- Higher build complexity than a feed-based aggregator

### Core user flow
1. User sees a Richmond map with arts district overlays (Jackson Ward, Carytown, Scott's Addition, etc.)
2. Clicks a district to see events happening there this month
3. Clicks an event to see details and link to source
4. Can also browse by organization or venue within the district

### Key risks
- Arts district boundary data may not exist in GeoHub in usable form
- Map-first UI is harder to build and demo well in 48 hours
- Maintenance requires geographic data to stay current

### Weekend scope
- Achievable only if GeoHub arts district data is confirmed on Day 1
- Fallback: use neighborhood boundaries instead of arts district boundaries

---

## Concept 4 — Resident Story Collection Portal

**Problem:** Resident Stories as Civic Insight
**Viability:** H | **Impact:** H

### What it is
A web application that invites residents to share their lived experiences with Richmond, using guided prompts, voice recording or typed input, explicit consent flow, and a clear explanation of how stories will be used.

### Why it scores well
- Directly addresses the Journey 2 user (75-year-old Church Hill resident with irreplaceable knowledge)
- Voice input option removes the typing barrier
- Guided prompts reduce the "I don't know where to start" problem
- Consent-first design builds trust
- Does not require City system integration — just a collection endpoint

### Core user flow
1. User arrives at landing page: "Share your Richmond story. Your memory matters."
2. Selects a starting prompt: "Tell us about a neighborhood you remember" / "What has changed most about Richmond in your lifetime?" / "What do you wish people knew about [neighborhood]?"
3. Records a voice memo (phone-friendly) or types a response
4. Provides optional: name (can be anonymous), neighborhood, approximate decade of memory
5. Reads a one-paragraph consent statement: how their story will be stored, who will see it, and what it will be used for
6. Submits. Receives a confirmation message.

### Key risks
- Voice transcription quality for older voices and accented speech varies
- Storage and data handling requirements need clarity (where do submissions go?)
- Who "owns" the stories? City? Partner organization? Submitter?
- Without a clear use pathway, collection risks becoming archiving without impact
- Consent language needs careful review by someone with civic or legal experience

### Weekend scope
- Voice recording via browser MediaRecorder API or a simple file upload
- Simple backend to store submissions (Airtable, Google Forms, or basic Node/Python API)
- 3-5 guided prompt options
- Consent screen with plain-language text
- Anonymous submission option as default

---

## Concept 5 — Story-to-Insight Dashboard

**Problem:** Resident Stories as Civic Insight
**Viability:** M | **Impact:** H

### What it is
A staff-facing dashboard that processes submitted resident stories and surfaces recurring themes, geographic concentrations, and time-period patterns to help City staff and decision-makers understand what is being shared.

### Why it scores medium
- High potential impact if paired with a story collection portal
- Requires submitted stories to exist before it is useful (chicken-and-egg)
- NLP theme extraction is technically achievable but needs careful framing
- Risk of overclaiming: themes from a self-selected sample are not representative of Richmond's population

### Core user flow
1. Staff member logs into dashboard
2. Sees a timeline of recent story submissions with search and filter
3. Views automated theme tags (neighborhood, decade, topic: "displacement", "community gathering", "business", "school")
4. Can map stories geographically — pins on a Richmond map by neighborhood mentioned
5. Can download a summary report for planning or programming use

### Key risks
- Self-selection bias: stories come from whoever heard about the tool and was comfortable using it
- Theme extraction requires either manual review or LLM-based processing — both have limitations
- Overclaiming that themes = community consensus is a serious civic harm risk
- Without a real story corpus, the demo requires synthetic or seeded data

### Weekend scope
- Only viable as a companion to Concept 4
- For demo: seed 10-15 synthetic stories across Richmond neighborhoods
- Show theme clustering, geographic distribution, and time-period filtering
- Include prominent disclaimer: "Based on stories shared voluntarily — not a representative sample"

---

## Concept 6 — Neighborhood History Explorer

**Problem:** Resident Stories as Civic Insight / Blue Sky 2
**Viability:** M | **Impact:** H

### What it is
A place-based storytelling tool that connects Richmond neighborhoods to specific people, places, and memories — drawing on existing oral history collections, user-submitted stories, and historical media where available.

### Why it scores well
- Maps directly to the Exceptional-scored Blue Sky Statement 2 ("Exploring Richmond Through Its Stories")
- Neighborhood identity is strong in Richmond; people respond to place-anchored stories
- Can use existing oral history content from partner institutions as seed content
- Potential for QR code integration at physical locations (stretch goal)

### Key risks
- Requires seeded content to be compelling at demo — an empty map is not a demo
- Sourcing oral history content from The Valentine or other institutions requires partnership conversations before or during the hackathon
- Copyright and attribution for museum oral history content needs clarity
- Scope must be limited to one or two neighborhoods to be achievable in 48 hours

### Weekend scope
- Choose one neighborhood (Jackson Ward or Church Hill recommended for richness of available history)
- Seed with 5-10 stories from publicly accessible sources + any user-submitted content
- Simple map interface with story pins
- Click a pin → see/hear the story with source attribution
- Consent and attribution displayed prominently

---

## Recommended Paths

**If your team is stronger in frontend and APIs:** Concept 1 or 2 (arts aggregator or discovery feed)
**If your team is stronger in UX and civic design:** Concept 4 (story collection portal)
**If your team has data/NLP skills:** Concept 5 paired with Concept 4
**If your team wants the most ambitious and showcase-worthy project:** Concept 6 (neighborhood history explorer) with Concept 4 as companion
