# 48-Hour Build: Highest-Confidence MVPs for Arts + Place

## Executive Summary

When building an arts and culture prototype in a 48-hour window, minimizing institutional dependencies and avoiding vendor lock-in are the most critical factors for success. Based on an evaluation of prior art and available technical stacks, the highest-confidence path to a compelling weekend demo is a **"Place-based Stories Explorer"**—a hybrid of the Neighborhood History Explorer and the Story Collection Portal. 

Place-based content provides the fastest path to a highly visual demo. By leveraging zero-authentication open APIs like Wikipedia Geosearch, a team can instantly seed a map with rich local data, ensuring a robust presentation even without partner data [1]. Conversely, live event aggregation and automated LLM insight extraction introduce significant risks due to API rate limits, OAuth requirements, and complex data normalization. 

**Key Strategic Recommendations:**
* **Primary MVP Shape:** Build a "Place-based Stories Explorer." Use Leaflet to map open historical data (Wikipedia/Wikidata), and pair it with a Supabase-backed portal for users to submit text and audio stories tied to those locations.
* **Stretch Goals:** If the core MVP is completed early, add a Metabase Docker instance to visualize submission themes, or integrate a single, tightly scoped event feed (e.g., Eventbrite search by location) with a hardcoded JSON fallback.
* **Core Risk:** API rate limits, CORS errors, and browser media-capture quirks can break live demos. Mitigate this by building "offline-first" fallbacks, utilizing file uploads instead of in-browser recording, and caching API responses server-side.

## Weekend Viability Scoring — Why the explorer and portal lead

Open, zero-authentication data and low vendor friction drive the highest viability scores. Dependency-heavy options, such as live event aggregators or ML-driven dashboards, underperform on a 48-hour clock due to the overhead of API approvals, data cleaning, and complex integrations.

### Viability Index and Option Ranking

The Viability Index is calculated using the following formula: `(Demo Quality + Data Availability) - (Technical Complexity + Institutional Dependencies)`. Scoring is on a 1-5 scale, where higher institutional dependencies indicate greater risk for a weekend build.

| Rank | Solution Pattern | Technical Complexity | Data Availability | Demo Quality in 48h | Institutional Dependencies | Viability Index |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **Neighborhood history explorer** (seeded content) | 3 | 5 | 5 | 1 | **6** |
| **2** | **Story collection portal** (guided prompts, uploads) | 3 | 5 | 4 | 2 | **4** |
| **3** | **Arts & culture district map** (geo visualization) | 2 | 3 | 4 | 1 | **4** |
| **4** | **Neighborhood discovery feed** (geo-filtered events) | 4 | 3 | 5 | 3 | **1** |
| **5** | **Arts event aggregator** (Eventbrite + RSS) | 3 | 3 | 4 | 3 | **1** |
| **6** | **Story-to-insight dashboard** (LLM theme extraction) | 4 | 2 | 3 | 4 | **-3** |

**Takeaway:** The Neighborhood History Explorer and Story Collection Portal offer the highest return on investment. They rely on readily available data and standard web forms, completely bypassing the need for third-party API keys or institutional data-sharing agreements.

### Evidence Snapshot: Zero-Auth APIs and Quickstart Stacks

The high scores for the top options are supported by the availability of mature, zero-friction tools. Leaflet provides interactive maps and handles GeoJSON natively without requiring API keys [2] [3]. Supabase offers a Next.js template that scaffolds authentication, database, and storage in a single command [4] [5]. Metabase can be deployed via Docker to instantly connect to a PostgreSQL database and generate dashboards without custom charting code [6] [7].

## Data Foundations You Can Use in Hours — Open sources with immediate ROI

To guarantee a populated map for the demo, rely on open data sources that require zero authentication and provide immediate geographic coordinates.

### Wikipedia Geosearch: 100-result radius queries with no auth

The MediaWiki Geosearch API is the ultimate weekend hackathon tool for place-based data. It allows you to execute a GET request to search for wiki pages near a specific geographic coordinate [1]. By passing parameters like `gscoord` (latitude and longitude), `gsradius` (up to 10,000 meters), and `gslimit` (up to 100 results), you can instantly pull a dense dataset of notable locations for any neighborhood [1]. Because it requires no API key, it eliminates onboarding friction entirely.

### Wikidata SPARQL: Coordinates for museums and venues

For more specific cultural filtering, Wikidata's SPARQL query service allows you to extract highly structured data. For example, you can query for all museums and extract their coordinate locations (property P625) [8]. This provides an alternative to scraping and allows you to seed your map with highly relevant arts and culture venues instantly [9].

### NRHP Open Data: Nationwide points via NPS downloads

The National Register of Historic Places (NRHP) provides unrestricted spatial data for historic sites across the country [10]. This data is available as public feature services and point datasets [11]. While polygon boundaries for complex historic districts may sometimes appear incorrect or require correction, the point data is highly reliable for seeding a weekend prototype [10].

## Map Delivery That Looks Great Fast — Leaflet-first, Mapbox/Google optional

Mapping libraries can consume a massive amount of weekend time if you choose one that requires complex token management or strict data formatting. 

### Leaflet Quick Start + GeoJSON markers in minutes

Leaflet is an open-source JavaScript library that is exceptionally good at handling GeoJSON, a lightweight and popular data format for GIS technologies [2]. It requires zero API keys to get started, making it the safest choice for a 48-hour build [3]. You can create interactive map vectors and plot points almost instantly by feeding a GeoJSON object directly into Leaflet's native handlers [2].

### When to add Mapbox clusters or Google overlays

While Leaflet is the safest default, Mapbox GL JS and Google Maps JavaScript API offer higher visual polish if your team has prior experience with them. Mapbox allows for custom markers, heatmaps, and adding polygons via GeoJSON sources [12] [13] [14]. Google Maps features a Data Layer that easily handles markers, polylines, and polygons [15] [16]. However, both require API key provisioning and domain restriction setups, which introduces unnecessary risk if you are starting from scratch on a Friday night. Keep these as stretch goals.

## Story Collection in One Afternoon — Supabase + Next.js

Building a custom backend for user-generated content is no longer necessary. Backend-as-a-Service (BaaS) platforms can scaffold your entire data collection infrastructure in minutes.

### Scaffold and deploy: with-supabase template and env setup

Supabase provides a Next.js App Router template that pre-configures cookie-based authentication, TypeScript, and Tailwind CSS [4] [5]. By running `npx create-next-app -e with-supabase`, you instantly generate a working full-stack application [4] [5]. You only need to populate your `.env.local` file with your Supabase URL and publishable key to connect the app to your database [4] [5].

### Consent, schema, and storage: practical defaults

Supabase includes a Postgres database for storing user profiles and story submissions, alongside Supabase Storage for handling media uploads like profile photos or audio files [17]. Crucially, it utilizes Row Level Security (RLS), a Postgres primitive that ensures users can only access or modify their own submitted information [17] [18]. For the weekend build, implement a simple boolean checkbox for consent in your schema and rely on RLS to protect the data.

### Audio capture trade-offs: file upload default; recorder as stretch

While in-browser audio recording (via the MediaRecorder API) sounds impressive, browser compatibility and permission quirks often break during live demos. Default to a standard `<input type="file" accept="audio/*">` element. This allows users to record voice memos using their native phone apps and upload them seamlessly to Supabase Storage, ensuring a 100% success rate during the demo.

## Insights Without ML First — Metabase for instant credibility

Attempting to build an LLM-driven theme extraction pipeline (Story-to-insight dashboard) in 48 hours introduces massive technical complexity and API dependency risks. Instead, use standard Business Intelligence tools to visualize structured data.

### Docker Compose for Metabase + Postgres

Metabase is an open-source business intelligence platform that can be deployed rapidly using Docker [19] [7]. By using a simple `docker-compose.yml` file, you can spin up a Metabase container alongside a PostgreSQL container in minutes [7]. Metabase will automatically create its necessary application tables on startup [7]. 

### Useful first charts: stories by place/theme/time

Once connected to your Supabase Postgres database, Metabase allows you to create dashboards by grouping a set of questions (charts or queries) into tabs on a single page [20] [6]. You can instantly generate charts showing "Story Submissions by Neighborhood," "Most Active Places," or "Submissions over Time" without writing any frontend charting code [6].

## Events: Scope to a Single Source + Seeded Fallback

The "Arts event aggregator" is a trap for weekend hackathons. Event data is notoriously messy, and relying on it for your core demo is highly risky.

### Eventbrite search parameters and OAuth reality

While Eventbrite offers robust search capabilities (filtering by location, date ranges, and categories), dealing with OAuth flows, rate limits, and pagination can consume an entire day of development. If you must include events to satisfy a stakeholder requirement, scope it strictly to a single server-side call to Eventbrite's search endpoint for a specific latitude/longitude, and cap the results at 10-20 items.

### RSS/ICS and social APIs: why they are risky on a weekend

Aggregating local arts calendars via RSS or ICS feeds is inconsistent; many local venues have broken or non-standard feeds. Furthermore, platforms like Facebook and Meetup have severely restricted their API access, making weekend scraping or API integration nearly impossible without prior institutional approval. Always prepare a hardcoded JSON file of 10 dummy events to serve as a fallback if the live feeds fail.

## Districts vs. Places — Avoid boundary rabbit holes

The "Arts and culture district map" is viable only if you reframe it from "districts" (polygons) to "places" (points). 

### Quick wins: manual polygons for 2-3 demo districts

Finding clean, unified public shapefiles for official cultural district boundaries is difficult. If your demo absolutely requires showing a district boundary, do not attempt to source and parse complex municipal GIS data. Instead, use a tool like geojson.io to manually draw 2-3 simple polygons over your target neighborhoods and load them directly into Leaflet.

### Post-weekend: sourcing and normalizing boundary data

True boundary normalization—dealing with overlapping jurisdictions, varying projection formats, and municipal data portals—is a post-weekend task. Stick to point data (like the NRHP dataset) for the 48-hour sprint [11].

## Build Plan — 48-Hour Timeline and Roles

To execute the "Place-based Stories Explorer," the team must parallelize the map interface and the backend portal.

### Day 1: Map + seed content; portal scaffold
* **Morning:** Developer A initializes the Next.js + Supabase template and configures the Postgres schema (Places, Stories, Users) [4]. Developer B sets up the Leaflet map and writes the server-side fetch to the Wikipedia Geosearch API to pull 100 local points [1].
* **Afternoon:** Developer A builds the Supabase Storage upload flow for audio/image files [17]. Developer B implements click-to-open map cards displaying the Wikipedia summary snippets and a "Share your story here" button.

### Day 2: Submission flow + list + basic charts; polish and fallbacks
* **Morning:** Connect the map's "Share your story" button to the Supabase submission form. Ensure the consent checkbox is mandatory and RLS policies are active [18]. 
* **Afternoon:** (Stretch) Spin up Metabase via Docker to create a simple dashboard of submission counts [7]. Crucially, spend the last 4 hours building the "Demo Mode" toggle that disconnects all live APIs and loads data from local JSON files.

## Risk Register and Fallbacks — Make the demo unbreakable

A successful hackathon demo is an unbreakable demo. Anticipate these specific risks for the recommended MVP:

| Risk Factor | Impact | Mitigation Strategy |
| :--- | :--- | :--- |
| **Wikipedia API CORS/Quota Limits** | Map fails to load points during live demo. | Fetch data via your Next.js server (not the client browser) and cache the response. Save a static JSON copy of the payload. |
| **Sparse Geographic Areas** | Wikipedia Geosearch returns 0 results for the demo neighborhood. | Preload 10-20 seed points from the NRHP or Wikidata datasets to guarantee map density [10] [8]. |
| **Media Upload Failures** | Large audio files crash the Supabase storage upload. | Enforce strict file size limits on the `<input>` tag. Validate MIME types server-side. Provide clear error/retry UI. |
| **Live Event API Outages** | Eventbrite or RSS feeds return empty arrays on Sunday. | Implement a "Demo Mode" switch that bypasses all external fetch calls and renders a hardcoded `fallback_events.json` file. |
| **Scope Creep (LLMs/Boundaries)** | Team burns 15 hours trying to get OpenAI embeddings to cluster themes. | Strictly timebox all ML and complex GIS tasks. Only attempt them if the core map-to-submission flow is 100% complete and tested. |

## References

1. *API:Geosearch - MediaWiki*. https://www.mediawiki.org/wiki/API:Geosearch
2. *Using GeoJSON with Leaflet - Leaflet - a JavaScript library for interactive maps*. https://leafletjs.com/examples/geojson/
3. *Quick Start Guide - Leaflet - a JavaScript library for interactive maps*. https://leafletjs.com/examples/quick-start/
4. *Use Supabase with Next.js*. https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
5. *Use Supabase Auth with Next.js*. https://supabase.com/docs/guides/auth/quickstarts/nextjs
6. *Introduction to dashboards | Metabase Documentation*. https://www.metabase.com/docs/latest/dashboards/introduction
7. *Running Metabase on Docker | Metabase Documentation*. https://www.metabase.com/docs/latest/installation-and-operation/running-metabase-on-docker
8. *Wikidata:SPARQL query service/Building a query/Museums on Instagram - Wikidata*. https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service/Building_a_query/Museums_on_Instagram
9. *Wikidata:SPARQL query service/queries/examples - Wikidata*. https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service/queries/examples
10. *Data Downloads - National Register of Historic Places (U.S. National Park Service)*. https://www.nps.gov/subjects/nationalregister/data-downloads.htm
11. *National Register Of Historic Places Points*. https://public-nps.opendata.arcgis.com/datasets/nps::national-register-of-historic-places-points/about
12. *Add a polygon to a map using a GeoJSON source | Mapbox GL JS | Mapbox*. https://docs.mapbox.com/mapbox-gl-js/example/geojson-polygon/
13. *Add custom markers in Mapbox GL JS | Help | Mapbox*. https://docs.mapbox.com/help/tutorials/custom-markers-gl-js/
14. *Examples | Mapbox GL JS | Mapbox*. https://docs.mapbox.com/mapbox-gl-js/example/
15. *Data Layer  |  Maps JavaScript API  |  Google for Developers*. https://developers.google.com/maps/documentation/javascript/datalayer
16. *Map Your Data: A Complete Guide to GeoJSON and Google Maps Integration | by Mansoor Mohammed | Medium*. https://medium.com/@mansoor711/map-your-data-a-complete-guide-to-geojson-and-google-maps-integration-c6e889d88431
17. *Build a User Management App with Next.js*. https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs
18. *Row Level Security | Supabase Docs*. https://supabase.com/docs/guides/database/postgres/row-level-security
19. *Metabase documentation | Metabase Documentation*. https://www.metabase.com/docs/latest
20. *PostgreSQL | Metabase Documentation*. https://www.metabase.com/docs/latest/databases/connections/postgresql