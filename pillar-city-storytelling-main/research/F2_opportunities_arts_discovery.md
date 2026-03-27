
# 60-Second Arts Discovery for Richmond — A Judge-Ready Hackathon Blueprint

## Executive Summary
Richmond’s arts and events scene is vibrant but digitally fragmented. Currently, there is no single "source of truth" for event discovery in the city. While national platforms like DoStuff Media operate in 21 cities and drive $3.4 billion in live entertainment spending [1], they do not currently operate a "DoRichmond" site [1]. Local listings are scattered across institutional pages (VMFA, ICA), venue networks (The Broadberry), local magazines (RVA Mag), and broad aggregators (VisitRichmond, Eventbrite) [2] [3] [4] [5] [6] [7]. 

For a hackathon prototype to win, it must solve the "where do I look?" problem immediately. By aggregating 5–7 authoritative local sources into a normalized feed, the prototype can deliver a highly credible, judge-ready demo. The highest-impact feature for first-time users is a "This weekend near me + free/under $15" filter, which collapses choice overload. The prototype should explicitly avoid selling tickets or building complex recommendation algorithms, focusing instead on a frictionless 60-second user flow that connects users to official venue ticketing pages.

## Opportunity and Positioning
Richmond lacks a unified arts discovery hub. Users currently have to check multiple siloed calendars to plan a night out. Because DoStuff does not have a presence in Richmond [1], a lean, locally-focused aggregator that "just works" creates immediate user value and partner upside. The prototype should be positioned as a connective tissue for the city's culture—a tool that complements existing local media and venues by driving qualified traffic directly to their official pages, rather than attempting to replace them.

## Minimum Viable Data Set for a Credible Demo
To build immediate trust with judges and users, the prototype must feature recognizable, name-brand events from known Richmond institutions. Relying on a single aggregator is insufficient; the data pipeline must pull from a mix of venues, institutions, and local media.

| Source | Category Focus | Access Type | Example/Notes | Must-Have Fields |
| :--- | :--- | :--- | :--- | :--- |
| **VMFA (Virginia Museum of Fine Arts)** | Visual arts, performing arts | HTML with consistent paths | Calendar with category filters (e.g., Dominion Energy Jazz Café) [5] | title, start/end, venue, category, link |
| **ICA at VCU** | Contemporary art, talks | HTML listings | Upcoming events page (e.g., 2026 VCUarts MFA Thesis Exhibition) [6] | title, datetime, location, link |
| **The Broadberry Network** | Live music | HTML event pages | Includes The Broadberry, Richmond Music Hall, The Camel [7] | title, date/door time, venue, ticket link |
| **RVA Mag** | Mixed culture/music | RSS | Exposes an events RSS feed (/rss/events) [8] | title, pubDate/eventDate, link, category |
| **VisitRichmond** | Regional aggregator | HTML finder | Broad arts/festivals; official DMO [2] | title, date, venue, link |
| **Eventbrite (Richmond, VA)** | Long tail ticketed | HTML/API | Category pages (e.g., Music); many smaller shows [4] | title, date, venue, ticket link |

*Key Takeaway*: Choosing sources with reliable markup and recognizable names maximizes coverage and trust quickly.

## Data Pipeline: Architecture and ETL Steps
Fast ingestion is feasible using existing feeds and structured HTML. The architecture should prioritize stability under demo pressure.

* **Ingestion Order**: Start with RSS (RVA Mag) [8], move to venue HTML (VMFA, ICA, Broadberry) [5] [6] [7], and backfill with aggregators (VisitRichmond, Eventbrite) [2] [4].
* **Normalized Schema**: Extract minimal fields: `title`, `start_datetime`, `end_datetime` (optional), `venue_name`, `venue_address` (optional), `lat/lon` (geocode if missing), `price_min` (optional), `category`, `source_name`, `source_url`, `ticket_url`.
* **Geocoding**: Cache via OpenStreetMap Nominatim; fallback to known coordinates for anchors (VMFA, ICA, The Broadberry).
* **Deduplication**: Implement deterministic deduplication (exact match on normalized date, start time ±15 min, venue, and casefolded title). Fall back to fuzzy title matching (≥0.9) as a tiebreaker. Always prefer the venue-origin source over an aggregator.
* **Freshness**: Re-scrape every 60 minutes; store `last_checked`; render "as of [time]" in the UI.

## Core User Flow (Under 60 Seconds)
New users decide quickly. The core flow must default to action, minimizing choices and proving value by moving a user from zero to a ticket link in three taps.

1. **Step 1 (0–5s)**: Landing page loads a "This Weekend in Richmond" preset with 8–12 events. Toggle chips are visible: Near Me (2 miles), Free/Under $15, Live Music, Visual Arts.
2. **Step 2 (5–20s)**: User taps "Near Fan District" or uses geolocation; results re-rank by distance; map and list update instantly.
3. **Step 3 (20–35s)**: User selects an anchor card (e.g., "An Evening with Geordie Greep" at The Broadberry [7] or "Dominion Energy Jazz Café" at VMFA [5]).
4. **Step 4 (35–55s)**: Event detail shows What/When/Where, a "Verified at [Venue]" badge, a trust footer ("Source: thebroadberry.com"), and a primary action button: "Get Tickets" or "Event Page."
5. **Step 5 (55–60s)**: Optional "Walkable tonight" micro-itinerary suggestion showing events within 1 mile.

## Feature Priorities
Ship the smallest thing that feels complete. Must-haves prove coverage and correctness; nice-to-haves signal vision.

| Tier | Features | Rationale |
| :--- | :--- | :--- |
| **Must-Have** | Source ingestion (VMFA, ICA, Broadberry, RVA Mag, VisitRichmond), Normalize + dedupe, "This Weekend" preset, Filters (distance, category, price), Map + list, Event detail with source links, "Verified" indicator | Core credibility and demo flow. Proves the pipeline works. |
| **Nice-to-Have** | "Walkable tonight" toggle, Micro-itinerary (2–3 events within 1 mile), Save/share (URL deep link), Export to calendar | Elevates delight without blocking core functionality. Fits Richmond's urban geography. |
| **Out of Scope** | Accounts/login, payments/ticketing, notifications, advanced personalization/ML, comprehensive citywide coverage | High effort; low incremental demo value. Distracts from the core discovery problem. |

*Key Takeaway*: Focus weekend effort on coverage, correctness, and a frictionless flow rather than over-engineered personalization.

## Credibility Tests
Judges will reward proof over polish. The following acceptance criteria must be true for the demo to succeed:

| Demo Acceptance Criteria |
| :--- |
| 5+ distinct sources live (venue + institution + media + aggregator) visible in the UI, each with at least 3 events. |
| 30–60 upcoming events for the next 7–10 days returned on first load. |
| 6+ anchor events from at least 4 named Richmond institutions/venues (e.g., VMFA, ICA, The Broadberry, Richmond Music Hall). |
| 100% of event detail pages show a working "Get Tickets" or "Event Page" external link. |
| Deduplication demonstrably removes at least 1 duplicate (show before/after in dev console or via a toggle). |
| Filters re-run instantly (<500 ms perceived) and map/list stay consistent. |
| Each card displays "Source" and "Last checked <60 min" for recency. |

*Key Takeaway*: Pass/fail checks align to trust, usefulness, and technical soundness.

## Explicit Scope Boundaries and Messaging
Setting expectations builds trust. The tool must clearly communicate what it does *not* do using explicit UI copy.

| Boundary | Communication / UI Copy |
| :--- | :--- |
| **Ticket Sales** (No in-app purchase) | "We don't sell tickets — we link you directly to official venue or ticketing pages." |
| **Completeness** (Not every event in RVA) | "Early preview; we're adding sources weekly." |
| **Personalization** (No user profiles/ML) | "Smart defaults (time, distance, price) — no account needed." |
| **Real-Time Changes** (Not guaranteed) | "Times/lineups may change; check the source link before you go." |
| **Moderation** (No UGC intake) | "Listings come from official or trusted sources only in this prototype." |

*Key Takeaway*: Use clear UI copy to prevent confusion and avoid derailers during the pitch.

## Relationship to Existing Tools (incl. DoStuff)
DoStuff Media operates in 21 major cities, driving 2.5 million monthly website visits and 1.5 million email subscribers [1]. However, they do not operate a "DoRichmond" site [1]. Local calendars like VisitRichmond and RVA Mag exist but are siloed [2] [3]. 

This prototype should be pitched as a complement, not a replacement. It acts as a connective tissue. If DoStuff expands to Richmond later, this tool could export its normalized feed or consume theirs. For local venues and media, the tool drives qualified outbound clicks, acting as a partner for traffic rather than a competitor.

## Demo Script: 45–60 Seconds That Proves Value
Lead with anchors and trust signals, then a one-tap ticket link.

1. **0:00**: "This Weekend in Richmond" loads instantly with 12 events.
2. **0:10**: Tap filters: Near Me (2 mi), Free/Under $15 → list updates.
3. **0:20**: Show anchor: "Dominion Energy Jazz Café | VMFA — Wed 6 pm" [5] → open; point to "Verified at vmfa.museum" and "Event Page."
4. **0:35**: Back, search "Broadberry" → "An Evening with Geordie Greep — Tue Mar 24, Doors 7 pm" [7] → open; show "Get Tickets (Etix)."
5. **0:50**: Toggle "Walkable tonight" near Fan District → show ICA nearby options (e.g., VCUarts MFA Thesis Exhibition) [6].
6. **1:00**: End: "5 sources, 40+ events next 10 days, deduped; one tap to buy."

## Technical Plan for the Weekend
Parallelize ingestion and UI to ensure a working prototype by Sunday.

* **Friday**: Define schema; build RSS/HTML parsers for RVA Mag, VMFA, and Broadberry; set up DB; seed geocodes for anchors.
* **Saturday AM**: Add ICA, VisitRichmond, and Eventbrite; implement deduplication logic; build list + map UI; set default to "This Weekend."
* **Saturday PM**: Build filters (distance, category, free/under $15); build event detail pages; wire up source/ticket links and "Verified" badges.
* **Sunday AM**: Implement cache/freshness labels; add walkable toggle; conduct QA; record a backup screen capture for offline demo.
* **Sunday PM**: Rehearse the 60-second script; build a "before/after dedupe" dev toggle to prove technical credibility to judges.

## Risk Register and Mitigations
Anticipate failure cases and show responsible handling.

* **Scraper Breakage**: Precache JSON snapshots of the data. Use simple retry/backoff logic and minimal CSS selectors.
* **Missing Fields (Price/Ages)**: Show "Unknown" tags. Never guess data; emphasize the source link for definitive answers.
* **Duplicates**: Enforce a hard preference for venue-origin sources over aggregators. Log collisions and expose "why this won" in the detail view.
* **Slow Geocoding**: Preload coordinates for anchor venues (VMFA, ICA, Broadberry). Use batch/cached Nominatim lookups for the rest.

## References

1. *WE DO. A LOT. | DoStuff*. https://dostuffmedia.com/network
2. *Calendar of Events in Richmond | Things To Do*. https://www.visitrichmondva.com/events/
3. *Events*. https://rvamag.com/events-calendar
4. *Music & Concerts Events in Richmond, VA - Live Music, Dances | Eventbrite*. https://www.eventbrite.com/b/va--richmond/music/
5. *Calendar - Virginia Museum of Fine Arts*. https://vmfa.museum/calendar/
6. *Events Archive - Institute for Contemporary Art*. https://icavcu.org/events/
7. *Events | Richmond's Top Music & Special Events Venue | VA*. https://thebroadberry.com/events
8. *Our upcoming Events Calendar in Richmond, VA*. https://rvamag.com/rss/events/page/20?el_dbe_page