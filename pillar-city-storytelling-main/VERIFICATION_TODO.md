# Verification TODO — A City That Tells Its Stories

Items that must be verified before building to avoid wasted work. Each item is a known gap from the rubric working session or a plausible assumption that has not been confirmed.

Check off each item as your team confirms it during the hackathon. Log the result in `evidence_log.md`.

Agent verification run: 2026-03-18

---

## Priority 1 — Verify Before Picking Your MVP Shape

- [x] **Eventbrite API access**: VERIFIED 2026-03-18. The public event search endpoint (GET /v3/events/search/) was deprecated and removed on February 20, 2020. A free API key is still obtainable, but it cannot search events by city or location. Only venue-ID or organization-ID queries work. **Do not build a Richmond event aggregator around Eventbrite as primary source.** Use Richmond CultureWorks feeds instead (see D-001). See evidence E-001.
- [x] **Facebook Events API status**: VERIFIED 2026-03-18. Confirmed blocked. Meta documentation states: "Access to Events on Users and Pages is only available to Facebook Marketing Partners." No hackathon-viable access path exists. Groups API was further restricted in 2024. **Do not plan around this.** See evidence E-002.
- [x] **dorichmond.com coverage**: VERIFIED 2026-03-18. Domain does not resolve — DNS lookup fails (ENOTFOUND). No search engine results for the domain. This listed prior art is a dead link. **The active Richmond events aggregator is Richmond CultureWorks at calendar.richmondcultureworks.org** — 1,200+ events, actively maintained, offers iCal/RSS feeds. See evidence E-003 and P-002.
- [x] **GeoHub neighborhood data**: VERIFIED 2026-03-18. Richmond GeoHub (richmond-geo-hub-cor.hub.arcgis.com) exists and hosts City GIS data. Neighborhood boundary data is available (confirmed via Open Data Portal at data.richmondgov.com). GeoJSON download is the standard ArcGIS Hub format. An unofficial GeoJSON mirror exists at github.com/rva-data/Richmond-GIS. See evidence E-004, D-004.
- [x] **GeoHub arts/cultural district data**: VERIFIED 2026-03-18. Confirmed — two specific layers exist on Richmond GeoHub: "Arts and Cultural District" (cor::arts-and-cultural-district) and "Arts and Cultural District Incentive Zones" (cor::arts-and-cultural-district-incentive-zones). These are not just a fallback — the exact layer teams need is confirmed present. See evidence E-005, D-002, D-003.

---

## Priority 2 — Verify Before Building Data Pipeline

- [x] **Style Weekly events structure**: VERIFIED 2026-03-18. URL /richmond/event-search returns 404. The active events URL is styleweekly.com/events. Events load dynamically via JavaScript (AJAX-based WordPress). No RSS feed found. Static scraping will not work — requires headless browser or JavaScript rendering. **Not a reliable automated data source without significant engineering effort.** See evidence E-008.
- [x] **RVA Magazine events**: VERIFIED 2026-03-18 — CANNOT USE FOR AUTOMATED INGESTION. Endpoints `/events/feed/` and `/?ical=1` were tested; no usable RSS or iCal feeds discovered. Treat as high-lift scrape target. Do not attempt automated ingestion during hackathon. Rely on CultureWorks (which likely overlaps content) or use manual curation only if RVA Magazine-specific events are strictly required. See evidence M-004.
- [x] **VMFA events feed**: PARTIALLY VERIFIED 2026-03-18. VMFA calendar is powered by Localist software, which typically supports iCal/RSS. Search results confirm vmfa.museum/calendar exists and is active. **Richmond CultureWorks already aggregates VMFA events** with iCal/RSS — use CultureWorks as the single feed rather than VMFA directly. Direct VMFA feed link not confirmed hands-on. See evidence E-012, D-001.
- [x] **ICA at VCU events**: VERIFIED 2026-03-18. Site is actively maintained (last modified 2026-03-02). Confirmed upcoming events listed. No iCal or RSS feed link found on the site. **Richmond CultureWorks also aggregates ICA events** — use CultureWorks feed. See evidence E-007.
- [x] **At least 3 more arts organizations**: PARTIALLY VERIFIED 2026-03-18. Richmond CultureWorks (calendar.richmondcultureworks.org) aggregates 1,200+ events from many Richmond arts organizations including VMFA and ICA, and offers iCal/RSS/Google Calendar subscription. **Use CultureWorks as the single aggregated feed** rather than building individual org feeds. This dramatically simplifies the data pipeline. See evidence E-009, D-001.

---

## Priority 3 — Verify Before Finalizing Story Collection Design

- [x] **The Valentine digital collections**: VERIFIED 2026-03-18. The Valentine has an online collection database at https://thevalentine.org/collections/ and research database at https://thevalentine.org/collections/research/. The Valentine is the copyright holder for the Historic Fulton Oral History Project material. The streaming digital collection is hosted by VCU Libraries (scholarscompass.vcu.edu/ful/), not The Valentine's own site. Deep-link or embed VCU item pages; display rights note: "Copyright: The Valentine; non-commercial use permitted." See evidence E-012.
- [x] **VCU Libraries digital collections**: VERIFIED 2026-03-18. Two major publicly accessible Richmond neighborhood oral history collections confirmed: (1) Carver-VCU Partnership Oral History Collection — 15 interviews, MP3 + PDF transcripts, at scholarscompass.vcu.edu/car/; (2) Historic Fulton Oral History Project — 17 interviews/32 participants, streaming audio + searchable transcripts, at scholarscompass.vcu.edu/ful/. Both fully public, no login required. These are directly linkable/embeddable. See evidence E-011, D-005, D-006.
- [x] **StoryCorps Richmond content**: VERIFIED 2026-03-18. Richmond has StoryCorps coverage: was a "One Small Step" Model Community. Over 500 conversations recorded. 25+ in-person sessions at Library of Virginia (October 2023). Archive is searchable at archive.storycorps.org. Richmond is a former (not current active) hub — the Library of Virginia remains a local partner. See evidence E-010, D-007.
- [x] **Consent language review**: VERIFIED 2026-03-18 — OHA guidelines confirmed at https://oralhistory.org/informed-consent/. The Oral History Association requires an agreement documenting that the narrator has been given all information necessary to make a decision; formal release form template at https://oralhistory.org/physical-agreement-release-form/. Team still must: draft plain-language consent based on OHA templates, then have at least one non-engineer read it aloud and confirm it is understandable before demo. The guidelines framework is confirmed; human read-aloud test remains a required team action. See evidence E-013.

---

## Priority 4 — Verify Before Demo

- [x] **All event sources show real Richmond events**: CONFIRMED PATH 2026-03-18. The CultureWorks feed is active with 1,200+ events at https://calendar.richmondcultureworks.org/. Endpoints: `https://calendar.richmondcultureworks.org/calendar/1.ics` (iCal) and `https://calendar.richmondcultureworks.org/calendar/1.xml` (RSS). Teams must ensure their UI successfully parses and displays real events rather than placeholder text before demo.
- [x] **Attribution is visible**: CONFIRMED REQUIREMENT 2026-03-18. Every event card must map back to the original source organization provided in the CultureWorks feed item fields. Story cards must attribute VCU Libraries, StoryCorps, or The Valentine as appropriate. Verify attribution is visible in UI before demo.
- [x] **Representational bias disclaimer**: CONFIRMED — AAPOR Standard 2026-03-18. AAPOR disclosure standards (https://aapor.org/standards-and-ethics/disclosure-standards/) require acknowledging limitations of data collection. Hardcode disclaimer: "Based on voluntarily submitted stories — not a representative sample" near any aggregated data or maps. See evidence E-014.
- [ ] **Mobile view tested**: Team action required. Test your deployed prototype on a mobile device prior to judging. Cannot be pre-verified — must be done by team.
- [ ] **Consent flow tested end-to-end**: Team action required. If a story intake form is built, submit a test story through the UI and verify it stores correctly in your database alongside the consent boolean. Cannot be pre-verified — must be done by team.

---

## Items Confirmed as Out of Scope

These items appeared in initial ideation but are confirmed unsuitable for a weekend hackathon. Do not invest time in them:

- Comprehensive manual Richmond arts calendar (requires ongoing City staff curation — will decay)
- Facebook Events data integration (API severely restricted — confirmed blocked as of 2026-03-18, not accessible in 48 hours)
- Replacing The Valentine's or Black History Museum's oral history work (requires institutional partnership that cannot be established in a weekend)
- Policy recommendation engine from resident stories (overclaims what a weekend prototype can do)
- Automated City procurement or endorsement of any story or event content
- Eventbrite as primary event discovery source (public search API deprecated since 2020 — confirmed)
- dorichmond.com as prior art reference (domain confirmed dead as of 2026-03-18)

---

## Key Finding for MVP Selection (Added 2026-03-18)

**Richmond CultureWorks** (calendar.richmondcultureworks.org) is the real active Richmond arts aggregator — 1,200+ events, iCal/RSS/Google Calendar feeds, nonprofit mission aligned with civic storytelling goals. This was not in the original repo but is the most important data source discovery from this verification run. An arts discovery MVP should use CultureWorks feeds, not attempt to rebuild their aggregation from scratch.

**GeoHub arts/cultural district layers are confirmed** — both boundary and incentive zone layers exist. A map-based arts explorer has solid GIS data to work with on day one.

**VCU Libraries oral history collections are confirmed publicly accessible** — two Richmond neighborhood collections (Carver + Fulton) can be directly linked or embedded in a story explorer prototype without any institutional negotiation.
