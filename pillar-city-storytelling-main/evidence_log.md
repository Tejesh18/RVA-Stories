# Evidence Log — A City That Tells Its Stories

Log all sources here. Every factual claim in your project should trace back to an entry in this log. Add rows as you research. Flip status from Unverified to Verified when you have personally confirmed the source.

Access date for all agent-verified entries: 2026-03-18

---

## Evidence Log

### Confirmed
| ID | Claim | Source | URL | Date accessed | Notes |
|----|-------|--------|-----|---------------|-------|
| E-001 | Eventbrite public event search API (GET /v3/events/search/) was deprecated and removed as of February 20, 2020. No public location-based event search is available via the official API. | Eventbrite developer changelog + GitHub issue #83 on automattic/eventbrite-api | https://www.eventbrite.com/platform/docs/by-location | 2026-03-18 | Workarounds: query by venue ID or organization ID only. No free public discovery endpoint exists. Rate limit on authenticated tokens is 1000 calls/hour. A free API key is still obtainable but cannot search events by city. |
| E-002 | Facebook Graph API does NOT allow public event access for third-party apps without Facebook Marketing Partner status or admin-level approval. | Meta for Developers — Graph API Event reference | https://developers.facebook.com/docs/graph-api/reference/event/ | 2026-03-18 | Documentation states: "Access to Events on Users and Pages is only available to Facebook Marketing Partners." Group events require admin token + Groups API feature approval. No hackathon-viable pathway exists. |
| E-003 | dorichmond.com does not resolve — domain appears inactive or non-existent as of March 2026. | DNS lookup failure | https://dorichmond.com | 2026-03-18 | getaddrinfo ENOTFOUND dorichmond.com. No search engine results for the domain. Cannot confirm this was ever a live Richmond events aggregator. Listed as prior art in repo but unverifiable. Treat as dead link. |
| E-004 | Richmond GeoHub (richmond-geo-hub-cor.hub.arcgis.com) exists and hosts downloadable City GIS data organized by category including Neighborhood Planning, Economic Development, and Historic Preservation. | Richmond GeoHub ArcGIS Online | https://richmond-geo-hub-cor.hub.arcgis.com/ | 2026-03-18 | Neighborhood boundary data confirmed available. Download formats include GeoJSON and Shapefile (standard ArcGIS Hub behavior). Unofficial GeoJSON mirror also available at github.com/rva-data/Richmond-GIS. |
| E-005 | Richmond GeoHub has a dedicated Arts and Cultural District boundary layer AND an Arts and Cultural District Incentive Zones layer, both specific to the City of Richmond. | Search engine results linking to ArcGIS Online dataset pages | https://richmond-geo-hub-cor.hub.arcgis.com/datasets/cor::arts-and-cultural-district/about | 2026-03-18 | Two confirmed layers: "Arts and Cultural District" and "Arts and Cultural District Incentive Zones." Both are on the official Richmond GeoHub. Download should be available in GeoJSON/Shapefile via ArcGIS Hub standard interface. |
| E-006 | Richmond's Open Data Portal (data.richmondgov.com) has a Neighborhoods dataset with polygon boundaries for all community neighborhoods, coterminous with Planning Districts. | City of Richmond Open Data Portal | https://data.richmondgov.com/Unique-and-Inclusive-Neighborhoods/Neighborhoods/e9k6-65id | 2026-03-18 | Boundaries defined from subdivision plats, historic maps, Civic Association boundaries, Census Tracts. Socrata-hosted, typically exportable as GeoJSON, CSV, Shapefile. |
| E-007 | ICA at VCU (icavcu.org) is actively maintained as of March 2026, with upcoming events including MFA thesis exhibitions, Mindful Mornings sessions, and film screenings. No iCal or RSS feed link was found on the site. | WebFetch of icavcu.org | https://icavcu.org | 2026-03-18 | Events are human-readable and structured on the site. No machine-readable calendar feed identified. Would require scraping with JavaScript rendering or manual curation. |
| E-008 | Style Weekly events page (styleweekly.com/events) loads events dynamically via JavaScript (AJAX), making static HTML scraping unreliable. JSON-LD schema markup is present but event data is not in the static HTML. No RSS feed link was found. | WebFetch of styleweekly.com/events | https://www.styleweekly.com/events/ | 2026-03-18 | URL /richmond/event-search returns 404. Site uses WordPress with dynamic event loading. Categories include Arts + Culture, Stuff to Do, Food + Drink. Structured scraping requires headless browser or JS rendering. |
| E-009 | Richmond CultureWorks (calendar.richmondcultureworks.org) is an active Richmond arts calendar aggregating 1,200+ events. It offers subscription options including Google Calendar, iCal, Outlook, and RSS feeds. | WebFetch of calendar.richmondcultureworks.org | https://calendar.richmondcultureworks.org | 2026-03-18 | Covers music, visual arts, workshops, theatre, literary events, and family programming. Includes VMFA and many arts organizations. This is a HIGH-VALUE data source — iCal/RSS feeds are confirmed available. |
| E-010 | StoryCorps has recorded stories in Richmond, VA. Richmond was a "One Small Step" model community. Over 500 conversations were recorded through the initiative; 25+ in-person sessions at the Library of Virginia in October 2023. The archive.storycorps.org is searchable. | StoryCorps Richmond page + RVAHub article + Virginia Tech News | https://storycorps.org/richmond/ | 2026-03-18 | Richmond is noted as a former (not current) Model Community. Stories are archived at archive.storycorps.org and searchable. The Library of Virginia partnered with StoryCorps for One Small Step. Coverage exists but Richmond is not currently an active recording hub. |
| E-011 | VCU Libraries hosts two major publicly accessible Richmond neighborhood oral history collections: (1) Carver-VCU Partnership Oral History Collection — 15 interviews (1999-2000), MP3 + PDF transcripts; (2) Historic Fulton Oral History Project — 17 interviews with 32 participants, streaming audio + searchable transcripts. | VCU Libraries search results + VCU News + The Valentine announcement | https://scholarscompass.vcu.edu/car/ and https://scholarscompass.vcu.edu/ful/ | 2026-03-18 | Both collections are fully public with no login required per search results. Audio is streamable. Transcripts are searchable. The Fulton collection documents the demolished African-American Fulton neighborhood (1930s-1950s). These are directly linkable from a hackathon prototype. Web-verified 2026-03-18: Carver collection confirmed at https://scholarscompass.vcu.edu/car/ — MP3 + PDF transcripts publicly accessible. Fulton collection confirmed at https://scholarscompass.vcu.edu/ful/ — 17 interviews, 32 named interviewees, full streaming audio + searchable transcripts. Copyright for Fulton collection held by The Valentine; non-commercial use permitted. |
| E-012 | The Valentine holds the copyright for the Historic Fulton Oral History Project material hosted on VCU Libraries. The Valentine has an online collection database at thevalentine.org/collections/. The streaming digital collection is hosted by VCU Libraries, not The Valentine's own site. | Parallel.ai verification 2026-03-18 citing VCU Scholars Compass and The Valentine website | https://thevalentine.org/collections/ | 2026-03-18 | Web-verified 2026-03-18. Do not look for a dedicated streaming portal on The Valentine's site. Use VCU Libraries links (scholarscompass.vcu.edu/ful/) for streaming, but explicitly attribute copyright to The Valentine. The Valentine's research database is at https://thevalentine.org/collections/research/. Non-commercial use of Fulton material permitted; commercial use requires permission. |
| E-013 | The Oral History Association (OHA) defines informed consent as an agreement documenting that the narrator has been given all information necessary to make a decision. Participating in an oral history interview may involve signing a formal release form assigning intellectual property rights. | Oral History Association — Informed Consent guidelines | https://oralhistory.org/informed-consent/ | 2026-03-18 | Web-verified 2026-03-18. OHA formal release form template at https://oralhistory.org/physical-agreement-release-form/. Hackathon teams must draft plain-language consent based on OHA templates and conduct a human read-aloud test before the demo. |
| E-014 | AAPOR (American Association for Public Opinion Research) disclosure standards require that all research includes a general statement acknowledging limitations of the design and data collection. All aggregated insights from voluntarily submitted stories must display a non-representative sample disclaimer. | AAPOR Disclosure Standards | https://aapor.org/standards-and-ethics/disclosure-standards/ | 2026-03-18 | Web-verified 2026-03-18. Hardcode disclaimer: "Based on voluntarily submitted stories — not a representative sample" on any aggregated data view, insight display, or map generated from user submissions. |

### Likely but unverified
| ID | Claim | Basis for inference | What needs confirmation |
|----|-------|---------------------|------------------------|
| E-015 | VMFA events calendar (vmfa.museum/calendar) is powered by Localist Event Calendar Software, which typically supports iCal/RSS subscription. | Search result snippet mentioning Localist; Localist is known to support these feeds | Confirm by visiting calendar page directly and locating a subscribe/feed button. Richmond CultureWorks already aggregates VMFA events, which may be the easier path. |
| E-016 | The arts and cultural district GeoJSON from Richmond GeoHub is downloadable without authentication | ArcGIS Hub standard behavior for public datasets | Confirm by attempting a download at the dataset page |

### Missing
| ID | Item | Why it matters | How to resolve |
|----|------|---------------|----------------|
| M-001 | Full list of Richmond arts organizations with confirmed iCal/RSS feeds beyond ICA and VMFA | Essential for aggregator data pipeline | Richmond CultureWorks iCal feed may already aggregate these — check their feed coverage. Otherwise visit each org site. |
| M-002 | Documentation of how Richmond residents currently discover arts events | Validates the problem statement | User interviews or survey (1-2 hours of quick research) |
| M-003 | ~~Scope and format of oral history collections at The Valentine~~ PARTIALLY RESOLVED 2026-03-18: The Valentine holds copyright for Fulton collection; streaming is via VCU Libraries. Black History Museum oral history scope remains unverified. | Web-verified 2026-03-18 (Parallel.ai). See E-012. | Black History Museum site still needs direct review. |
| M-004 | Whether Richmond's RVA Magazine (rvamag.com/events) provides structured data or a feed — CANNOT VERIFY. Endpoints `/events/feed/` and `/?ical=1` were tested; no usable RSS or iCal feeds discovered. Treat as high-lift scrape. | Parallel.ai verification 2026-03-18 | Do not attempt automated ingestion during hackathon. Rely on CultureWorks; use manual curation only if RVA Magazine-specific events are strictly required. |
| M-005 | Comfortable storytelling channels for older/non-digital residents | Critical for story collection tool design | Research on accessible civic tech patterns; brief user research if possible |

### Useful datasets
| ID | Dataset | URL | Format | Status |
|----|---------|-----|--------|--------|
| D-001 | Richmond CultureWorks events calendar (iCal/RSS) | https://calendar.richmondcultureworks.org | iCal, RSS, Google Calendar | Confirmed — feeds available |
| D-002 | Richmond GeoHub — Arts and Cultural District boundary | https://richmond-geo-hub-cor.hub.arcgis.com/datasets/cor::arts-and-cultural-district/about | GeoJSON, Shapefile (ArcGIS Hub standard) | Confirmed — layer exists; download format to verify hands-on |
| D-003 | Richmond GeoHub — Arts and Cultural District Incentive Zones | https://richmond-geo-hub-cor.hub.arcgis.com/datasets/cor::arts-and-cultural-district-incentive-zones/about | GeoJSON, Shapefile | Confirmed — layer exists |
| D-004 | Richmond Open Data Portal — Neighborhoods | https://data.richmondgov.com/Unique-and-Inclusive-Neighborhoods/Neighborhoods/e9k6-65id | GeoJSON, CSV, Shapefile (Socrata) | Confirmed — dataset exists |
| D-005 | VCU Libraries — Carver Oral History Collection | https://scholarscompass.vcu.edu/car/ | MP3 audio + PDF transcripts | Confirmed — publicly accessible |
| D-006 | VCU Libraries — Historic Fulton Oral History Project | https://scholarscompass.vcu.edu/ful/ | Streaming audio + searchable transcripts | Confirmed — publicly accessible |
| D-007 | StoryCorps Archive — Richmond, VA stories | https://archive.storycorps.org/ | Web searchable, audio | Confirmed — Richmond coverage exists (500+ One Small Step conversations) |
| D-008 | Eventbrite Richmond events (by venue/org ID only) | https://www.eventbrite.com/platform/api | JSON (REST API) | Confirmed limited — public search deprecated 2020; venue/org queries still work with free API key |
| D-009 | Richmond GeoHub — unofficial GeoJSON mirror | https://github.com/rva-data/Richmond-GIS | GeoJSON | Likely — unofficial repo; verify it is current |

### Useful source documents
| ID | Document | URL | Status |
|----|----------|-----|--------|
| S-001 | Richmond Civic Hackathon Pillar 7 rubric | [internal doc] | Confirmed — this repo |
| S-002 | Perplexity Prompting Guide | https://docs.perplexity.ai | Confirmed |
| S-003 | Eventbrite search deprecation notice | https://www.eventbrite.com/platform/docs/by-location | Confirmed |
| S-004 | Facebook Graph API Event reference | https://developers.facebook.com/docs/graph-api/reference/event/ | Confirmed |

### Prior art
| ID | Tool | City | URL | Relevance |
|----|------|------|-----|-----------|
| P-001 | dorichmond.com | Richmond VA | https://dorichmond.com | DEAD LINK — domain does not resolve as of 2026-03-18. Cannot be treated as active prior art. |
| P-002 | Richmond CultureWorks | Richmond VA | https://calendar.richmondcultureworks.org | NEW — active Richmond arts aggregator with 1,200+ events and iCal/RSS feeds. Strongest local prior art. |
| P-003 | Historypin | International | https://historypin.org | Model for neighborhood history explorer |
| P-004 | StoryCorps | National | https://storycorps.org | Model for oral history collection with consent |
| P-005 | visitrichmondva.com events | Richmond VA | https://www.visitrichmondva.com/events/ | Active Richmond events calendar — tourism-focused |

### Risks
| ID | Risk | Severity | Mitigation |
|----|------|----------|------------|
| R-001 | Facebook Events API inaccessibility | High | Confirmed blocked — do not plan MVP around Facebook data |
| R-002 | Story tool without consent mechanism | High | Require consent screen before any story submission |
| R-003 | Claiming to represent "all" Richmond voices | High | Explicit disclaimer on any insight or aggregate view |
| R-004 | Manual curation decay | Medium | Use Richmond CultureWorks iCal/RSS feeds for automation; no human curation dependencies |
| R-005 | Copyright of arts event content | Medium | Always link to original source; do not copy content wholesale |
| R-006 | Eventbrite location search unavailable | High | Do not plan MVP around Eventbrite as primary event discovery source. Use Richmond CultureWorks feeds instead. |
| R-007 | dorichmond.com listed as prior art is dead | Low | Removed from active prior art list; replaced by Richmond CultureWorks as the real incumbent |
