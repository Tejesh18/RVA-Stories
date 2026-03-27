
# Richmond Arts Discovery Now: Feeds, Maps, and Weekend-Ready Builds

## Executive Summary

Richmond's arts and cultural discovery landscape is highly fragmented, but machine-readable footholds exist to build viable solutions in a 48-hour hackathon. While the City of Richmond's Open Data Portal lacks a centralized arts or events dataset [1] [2], third-party platforms like RVA Magazine and the Richmond Public Library expose structured data feeds (RSS and iCal) [3] [4]. Conversely, gathering residents' lived experiences involves significant privacy, trust, and consent barriers that cannot be responsibly engineered over a weekend. 

Hackathon teams should focus on automated ingestion of existing feeds and City GIS venue data to build meta-discovery utilities, rather than attempting to create "official" City calendars or new, consent-heavy story collection platforms. By leveraging existing submission funnels and structured data, teams can deliver immediate value to residents, small venues, and local media without requiring ongoing manual curation from City staff.

## Purpose and Scope

This research brief is designed to guide teams at the Richmond Civic Hackathon (March 27-29, 2026) toward realistic, high-value software opportunities. The focus is on automated ingestion of existing feeds and City GIS data to solve arts discovery, while explicitly avoiding manual curation and new consent-heavy story collection. The goal is to build sustainable, weekend-ready prototypes that acknowledge Richmond's operational realities and public data constraints.

## Richmond Arts Discovery Landscape

Currently, Richmond relies on third-party feeds and City GIS, with no central calendar. Media and library platforms expose machine-readable events, while the City provides durable venue data but not time-bound events. For example, RVA Magazine maintains an events calendar with RSS capabilities [5] [4], and the Richmond Public Library utilizes LibCal, offering iCal feeds across 9 branches [3] [6]. Meanwhile, the City's official pages, such as the Cultural Arts and Public Art Commission pages, list programs but expose no ingestible feeds [7] [8]. The City's Open Data Portal does not currently host an arts or events dataset [1] [2], though the Planning department maintains a "Civic and Cultural Resources" ArcGIS map [9]. A meta-aggregator combining these sources is both valuable and buildable in a weekend.

### Richmond Event Sources and Data Access

| Source | Owner | URL | Submission Method | Feed/API | Format | Status | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| RVA Mag Events | RVA Magazine | rvamag.com/events-calendar | Editorial + site form | Yes | RSS | Verified | RSS observed on category pages [5] [4] |
| Richmond Public Library LibCal | RPL | rvalibrary.libcal.com/calendars | N/A | Yes | iCal per branch | Verified | 9 branches with structured categories [3] [6] |
| Style Weekly Events | Style Weekly | styleweekly.com/events/ | Public form | Yes | iCal | Verified | Submission form and iCal feed confirmed [10] [11] |
| rva.gov Cultural Arts | Parks & Recreation | rva.gov/parks-recreation/cultural-arts | N/A | No feed seen | Web pages | Verified | Useful for context; not ingestible [7] |
| Planning Civic/Cultural Map | City PDR (ArcGIS) | arcg.is/0fiqrz | N/A | Yes | ArcGIS web map/REST | Verified | Venue geodata anchor [9] |
| City Open Data Portal | City IT | data.richmondgov.com | N/A | API exists | Socrata | Verified | No arts/events datasets found [1] [2] |

## Richmond Story and Lived-Experience Landscape

Institutional archives likely exist in Richmond, but this research pass surfaced no verified intake APIs for organizations like The Valentine, Library of Virginia, or VCU Libraries. Because story capture is consent-heavy and requires robust privacy infrastructure, weekend scope should emphasize discovery and linking, not new capture. Teams should build an index or wayfinding layer that directs users to existing institutional submission pages, avoiding the storage of Personally Identifiable Information (PII) or media files during the hackathon.

## Users and Stakeholders

Residents, small venues, libraries, media, CultureWorks, and City PDR/IT have aligned but distinct incentives. Choosing a neutral host for sustainability is critical.
* **Residents:** Need to find events near them, subscribe easily, and reduce FOMO.
* **Small arts orgs/venues:** Need to get listed without filling out new, redundant forms, leveraging existing media reach.
* **Richmond Public Library:** Can amplify programs through low-lift integrations via their existing LibCal feeds [3].
* **Media (RVA Mag, Style Weekly):** Benefit from more traffic via deep links and clearer submission guidance [5] [11].
* **City PDR/IT:** Can see their ArcGIS data reused without taking on the burden of event curation [9].

## Current-State Journey Maps

Discovery requires hopping across multiple calendars, while story sharing requires finding the right institution and navigating complex consent models.
* **Arts discovery journey (resident):** A user searches for local events and lands on disparate media or library calendars [12] [10]. They face inconsistent categories, no single unified map, and friction when trying to import events to their personal calendars.
* **Story sharing journey (resident/organization):** A user with an intent to share struggles to find the right archive partner, faces unclear consent and licensing terms, and encounters significant submission barriers.

## Source Inventory and Technical Access

Two ingestible event feeds and one City GIS venue map enable working prototypes; more sources can be added after validation.
* **RVA Mag:** RSS endpoint(s) are present; teams can normalize title, date, and venue, and link out to the original post [4].
* **RPL LibCal:** iCal is available per branch; teams can parse VEVENT data and map categories to a unified taxonomy [3] [6].
* **Style Weekly:** An iCal feed is available alongside their confirmed submission form, allowing teams to parse event data without relying on fragile HTML scraping [10] [11].
* **City GIS:** Planning's "Civic and Cultural Resources" ArcGIS web map can be accessed via ArcGIS REST to pull venue features [9].

## Prior Art and Benchmarks

Local media calendars function as de facto listings, while national tools suggest consent and governance overhead that is not weekend-feasible.
* **Richmond-local:** Local media calendars function as de facto listings. VPM Artsline actively routes its event submissions directly to Style Weekly [15], meaning Style Weekly's iCal feed effectively captures Artsline data. Do804 operates under the active national DoStuff Media network [16], though accessing their backend data typically requires formal partnership rather than open APIs. VisitRichmond maintains a calendar, but structured feed access remains restricted.
* **External:** Platforms like Historypin are strong for place-based stories but require heavy moderation and community management. StoryCorps utilizes high-consent workflows that are not feasible for a 48-hour build without prior partner buy-in.

## Opportunity Areas Sorted by Hackathon Feasibility

Teams should choose automation-first concepts that rely on RSS/ICS and ArcGIS, deferring human moderation or consent workflows.

### Opportunity Feasibility Matrix

| Concept | Primary Data | Build Complexity | Ongoing Staffing | Risk | Weekend Score (1-5) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| "RVA Events Aggregator + API" | RSS + ICS | Low | Low | Low | 5 |
| "What's On Near Me" Map | RSS/ICS + ArcGIS | Medium | Low | Medium (geocoding) | 4 |
| "Submit-Once Helper" | Web forms | Low | Low | Low | 5 |
| "Richmond Stories Index" | Link directory | Low | Low | Medium (accuracy) | 4 |
| "New Story Recorder" | New intake + consent | Medium | High | High (privacy) | 1 |

## Risks, Ethics, and Implementation Barriers

Teams must avoid scraping, new PII collection, and promises of "official" status. Document licenses and consent clearly.
* **Risks:** Scraper fragility (if attempting to parse HTML instead of feeds), licensing of media content, representational bias (e.g., missing neighborhood arts groups not on major feeds), venue name ambiguity, and privacy concerns regarding story collection.
* **Mitigations:** Confine ingestion to standards-based feeds (RSS/ICS) only. Use a link-out model rather than hosting full content. Normalize venues via City GIS [9]. Implement health dashboards and explicit disclaimers.

## Recommendations

Four shippable concepts maximize utility with minimal curation.

### 1) RVA Arts Feed Aggregator + Public API
Ingest RPL iCal [3] and RVA Mag RSS [4]. Normalize the data to JSON and a unified ICS format, presented via a basic web UI. Use verified feeds only. Next step: Add a source health dashboard and publish docs for new adapters.

### 2) "What's On Near Me" Map (Events × Civic/Cultural Venues)
Utilize the venue layer from the City's ArcGIS map [9]. Geocode event venues from the aggregator feed, implement a proximity filter, and ensure a mobile-first design. Next step: Add deduplication and a venue alias mapping file.

### 3) Library-First Subscribe/Alert Tool
Filter LibCal data by branch and category [6] [13]. Output personalized ICS feeds with optional SMS reminders. Next step: Partner with RPL for a link directly from rvalibrary.org/events [12].

### 4) Submit-Once Helper + How-To-Get-Listed Guide
Create a simple wizard that routes users to the Style Weekly [11] and RVA Mag [14] submission forms with prefill tips. Include a checklist for Facebook-to-calendar best practices. Store no data; provide links only.

## Unknowns to Validate with City and Partners

While major media feeds have been verified, several institutional data sources require further validation before coding:
* ArcGIS "Civic and Cultural Resources" feature service URL and allowed usage terms [9].
* Any City-run ICS/RSS for Parks & Recreation events not surfaced yet [7].
* Archives APIs (IIIF/OAI-PMH/JSON) and rights statements for local museums and libraries.
* Preferred long-term steward (RPL, CultureWorks, Media consortium) for aggregator hosting.

## Implementation Playbook for Hackathon Teams

* **Day 1:** Confirm feeds (RVA Mag RSS, LibCal iCal) [3] [4]. Stand up parsers, draft a unified schema, stub the API, and pull ArcGIS venues [9].
* **Day 2:** Build the map UI, implement venue matching, add basic search/filter capabilities, create a health dashboard, write documentation, and load demo data.
* **Lightweight governance:** Add a "Sources" page, clear disclaimers, and an opt-out/contact mechanism.

## Appendices

* **LibCal iCal:** Each branch calendar page exposes an "iCal" subscribe link [3]. Copy the URL and parse VEVENT fields (SUMMARY, DTSTART, LOCATION).
* **RVA Mag RSS:** Use the category/events RSS [4]. Normalize title, date, and location, and store the source link for deep linking.
* **ArcGIS:** From the "Civic and Cultural Resources" web map [9], open the item JSON to locate the feature layer REST endpoint. Query by `outFields=*`, `where=1=1`, and cache locally.

## References

1. *Open Data Portal | City of Richmond, Virginia | Open Data Portal | City of Richmond, Virginia*. https://data.richmondgov.com/
2. *Open Data Portal | Richmond*. https://www.rva.gov/information-technology/open-data-portal
3. *LibCal - Richmond Public Library*. https://rvalibrary.libcal.com/calendars
4. *Our upcoming Events Calendar in Richmond, VA*. https://rvamag.com/rss/events/page/20?el_dbe_page
5. *Events*. https://rvamag.com/events-calendar
6. *West End - LibCal - Richmond Public Library*. https://rvalibrary.libcal.com/calendar/westend
7. *Cultural Arts | Richmond*. https://www.rva.gov/parks-recreation/cultural-arts
8. *Public Art Commission | Richmond*. https://www.rva.gov/planning-development-review/public-art-commission
9. *Interactive Mapping Tools | Richmond*. https://www.rva.gov/planning-development-review/interactive-mapping-tools
10. *Events for March 17, 2026 – Style Weekly*. https://www.styleweekly.com/events/
11. *Submit an Event – Style Weekly*. https://www.styleweekly.com/events/community/add/
12. *Events - Richmond Public Library*. https://rvalibrary.org/events/
13. *Main - LibCal - Richmond Public Library*. https://rvalibrary.libcal.com/calendar/main
14. *RVA Mag: Home*. https://rvamag.com/
15. *Artsline - VPM*. https://www.vpm.org/artsline
16. *DoStuff Media*. https://www.dostuffmedia.com/