# Data Index — A City That Tells Its Stories

This index covers known and potential data sources for both targeted problem statements in this pillar. Entries are organized by source type. Verification status is marked where known.

Teams should treat all entries as **[Unverified]** until they personally confirm access and format during the hackathon.

---

## Arts & Cultural Event Data Sources

### Eventbrite API
- Type: REST API
- Access: Public search endpoint available; enhanced access requires API key registration
- Scope: Public events listed on Eventbrite; many Richmond arts organizations and venues publish here
- Fields: event title, date, time, venue, description, category, URL, organizer
- Limitations: Only covers events explicitly listed on Eventbrite; does not aggregate events from other platforms
- Hackathon use: Pull Richmond-area events by location, filter by arts/culture categories
- Verification status: [Unverified — API availability and rate limits need confirmation]
- Reference: https://www.eventbrite.com/platform/api

### Facebook Events (Graph API)
- Type: REST API (heavily restricted post-2018 Cambridge Analytica changes)
- Access: Public event discovery via the Graph API is severely limited; requires app review for many features
- Scope: Many Richmond arts organizations and venues post events on Facebook
- Limitations: Facebook significantly restricted public event data access. Current public access is minimal. Do not plan your MVP around Facebook Events data availability.
- Hackathon use: [Unverified — treat as likely inaccessible without significant prior approval]
- Note: This is a known gap. The rubric notes arts/cultural event data is missing from the open data catalog.

### Richmond Arts Organization Websites — RSS and iCal Feeds
- Type: RSS/Atom feeds, iCal (.ics) files, HTML calendars
- Access: Varies by organization; many arts organizations maintain publicly accessible calendar pages
- Scope: Galleries, performing arts organizations, community arts spaces, cultural centers
- Example sources to verify:
  - Richmond Triangle Players
  - Virginia Museum of Fine Arts (VMFA) events calendar
  - Richmond Symphony
  - Firehouse Theatre
  - Institute for Contemporary Art (ICA) at VCU
  - 1708 Gallery
  - Black History Museum and Cultural Center of Virginia
- Hackathon use: Manual or automated RSS scraping if feeds exist; HTML parsing if not
- Verification status: [Unverified — teams must check each organization's website for feed availability]

### Style Weekly
- Type: Website / possible RSS
- Scope: Richmond's alternative weekly; maintains arts and entertainment event listings
- Access: Public website; RSS feed status unconfirmed
- Hackathon use: Potential data source for event listings if structured access exists
- Verification status: [Unverified — check styleweekly.com for event listings structure and RSS]
- Reference: https://www.styleweekly.com

### RVA Magazine
- Type: Website
- Scope: Richmond arts, culture, and events coverage
- Access: Public website
- Hackathon use: Potential event listings source if structured
- Verification status: [Unverified]
- Reference: https://rvamag.com

### Richmond.com
- Type: Website
- Scope: Local news and events coverage for Richmond metro area
- Access: Public website
- Hackathon use: Possible events section
- Verification status: [Unverified]
- Reference: https://richmond.com

### dorichmond.com
- Type: Website / app
- Scope: Existing Richmond events aggregator — **already exists**; teams should investigate before building a competing tool
- Note: This is prior art. A hackathon team should study dorichmond.com before claiming to build an arts aggregator, to understand what already exists and where the gaps are.
- Verification status: [Unverified — check current state and coverage]

---

## Geographic Data Sources

### Richmond GeoHub
- Type: ArcGIS REST API and open data portal
- Scope: City of Richmond geographic datasets
- Access: Public; https://rvagis.richmond.gov and https://richmond.gov/city-services/it/gis-mapping/
- Possible layers relevant to this pillar:
  - Arts and Cultural Districts boundaries (if they exist in GeoHub — unconfirmed)
  - Neighborhood boundaries
  - Historic district boundaries
  - Parks and public spaces
- Hackathon use: Map context for arts district event aggregator or neighborhood history explorer
- Verification status: [Unverified — teams must check GeoHub for arts/cultural district layers]

---

## Oral History and Story Collection Sources

### The Valentine (Richmond History Center)
- Type: Museum / archive
- Scope: Richmond's history museum; extensive oral history collections
- Access: Physical collections; some digital materials
- Hackathon use: Partner context; possible source of publicly accessible oral history content
- Key contact: Meg Hughes (named potential champion for this pillar)
- Verification status: [Unverified — scope and digital accessibility of collections unknown]
- Reference: https://thevalentine.org

### Black History Museum and Cultural Center of Virginia
- Type: Museum / archive
- Scope: African American history of Virginia with significant Richmond focus
- Access: Physical collections; digital access unknown
- Hackathon use: Partner context; may have oral history materials
- Verification status: [Unverified]
- Reference: https://blackhistorymuseum.org

### Virginia Museum of History and Culture
- Type: Museum / archive
- Scope: Statewide Virginia history; may include Richmond oral histories
- Access: Physical collections; some digital
- Verification status: [Unverified]
- Reference: https://virginiahistory.org

### VCU Libraries
- Type: Academic library / digital collections
- Scope: VCU maintains digital special collections that may include Richmond oral histories and neighborhood documentation
- Access: Some collections publicly accessible online
- Hackathon use: Potential seed content for neighborhood history tools
- Verification status: [Unverified]
- Reference: https://library.vcu.edu

### StoryCorps Archive
- Type: National oral history archive
- Scope: National; may include Richmond stories
- Access: Public search at https://archive.storycorps.org
- Hackathon use: Prior art reference; may have Richmond content to display or link
- Verification status: [Unverified — Richmond coverage unknown]

---

## City Communications Sources

### Richmond City Website
- Type: Official city website
- Scope: City departments, services, announcements
- Arts/culture sections: Office of Strategic Communications; Dept. of Parks, Recreation and Community Facilities; Commission of Architectural Review
- Reference: https://www.rva.gov

### Richmond Open Data Catalog
- Type: Open data portal
- Scope: City datasets; arts/cultural event data is currently not included (noted gap in rubric)
- Reference: https://richmond-data-discovery.opendata.arcgis.com
- Note: The rubric explicitly identifies "No arts/cultural event data in open data catalog" as a gap. This is a known problem, not a hackathon-buildable solution.

---

## What is missing and why it matters

The rubric notes these as explicit gaps:
1. No structured arts/cultural event data in the open data catalog
2. No confirmed list of Richmond arts organizations with RSS/calendar feeds
3. Arts & Cultural Districts boundary data not confirmed in GeoHub
4. No documentation of how residents currently discover arts events
5. No structured resident story corpus exists
6. Oral history collections at museums: scope, format, and accessibility are undocumented

Teams working in this pillar will need to do some of their own data scouting during the first hours of the hackathon. The research prompts in `05_prompts/research/` are designed to help with this.
