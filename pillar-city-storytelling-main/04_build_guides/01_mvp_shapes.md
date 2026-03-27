# MVP Shapes — A City That Tells Its Stories

## Shape A — Arts Event Aggregator
### Best for
Teams with API and backend experience who want to build a data pipeline quickly.

### Inputs
- Eventbrite API (public events by location)
- RSS/iCal feeds from 3-6 Richmond arts organizations
- Optional: HTML scraping of Style Weekly or RVA Magazine events section

### Demo
User types "this weekend in Richmond" or selects a date range → tool shows a unified feed of upcoming arts events with title, date, venue, event type, and direct link to original source. Cards are filterable by neighborhood or event type.

### Architecture (text)
- Data layer: Python or Node.js cron job pulling Eventbrite API + RSS feeds every 4-6 hours
- Storage: Simple JSON file or lightweight database (SQLite, Airtable)
- Frontend: React or vanilla JS with simple card grid and filter controls
- No auth required; all data is public

### Acceptance criteria for demo
- At least 10 real Richmond events displayed
- At least 2 data sources (Eventbrite + one RSS feed minimum)
- Working date and/or event type filter
- Each card links back to original source organization

---

## Shape B — "What's On" Neighborhood Discovery Feed
### Best for
Teams with frontend strength who want a clean, focused user experience.

### Inputs
- Same as Shape A plus GeoHub neighborhood boundaries (for venue-to-neighborhood mapping)
- Venue address geocoding (Google Maps Geocoding API or OpenStreetMap Nominatim)

### Demo
User clicks "Church Hill" on a neighborhood selector → sees all upcoming arts events with venues located in or near Church Hill, ordered by date. Each card shows event name, date, brief description, and link to source.

### Architecture (text)
- Data layer: Same as Shape A plus geocoding step to assign venues to neighborhoods
- Neighborhood polygons: GeoHub or hardcoded bounding boxes if GeoHub data is not confirmed
- Frontend: Neighborhood selector (buttons or simple map) → filtered event feed

### Acceptance criteria for demo
- 3+ neighborhoods represented
- Events filtered accurately by neighborhood (or approximate geographic zone)
- Mobile-friendly layout

---

## Shape C — Arts & Culture District Map
### Best for
Teams with mapping experience (Mapbox, Leaflet, or Google Maps) who want a geographic showcase.

### Inputs
- GeoHub arts and cultural district boundaries (if they exist — must verify on Day 1)
- Arts organization locations (geocoded from websites or manual entry)
- Event data from Shape A sources

### Demo
Interactive Richmond map with arts district overlays. User clicks Jackson Ward → sees events happening this month in Jackson Ward with links to source organizations. Can toggle between organizations, events, and history layers.

### Architecture (text)
- Map: Mapbox GL JS or Leaflet with GeoJSON boundaries
- Event data: Same pipeline as Shape A
- Organization data: Curated list of 20-30 Richmond arts organizations with addresses and categories

### Acceptance criteria for demo
- At least 3 arts districts or neighborhoods visible on map
- Events visible within geographic areas
- Links to source organizations from map

### Risk note
This shape requires confirmed GeoHub arts district data. If that data does not exist, fall back to neighborhood boundaries from GeoHub or hand-coded bounding boxes.

---

## Shape D — Story Collection Portal
### Best for
Teams with UX and content design strength; teams interested in civic participation design.

### Inputs
- No external data required — this tool creates data
- Consent language template (see `99_templates/`)
- Guided prompt set (designed during hackathon)

### Demo
A resident visits the portal, selects a neighborhood and a prompt ("Tell us about a place in Richmond that is gone but you miss"), records or types a brief story, reads and accepts a consent statement, and submits. Confirmation screen acknowledges receipt and explains how stories will be used.

### Architecture (text)
- Frontend: React or simple HTML form with MediaRecorder API for voice input
- Backend: Simple API endpoint (Node.js Express or Python FastAPI) that stores submissions
- Storage: Airtable (easiest for hackathon) or PostgreSQL
- No authentication required for submission; admin view requires simple auth

### Acceptance criteria for demo
- 3-5 guided prompt options
- Voice recording OR typed input working
- Consent screen with plain-language text
- Successful submission stores entry in backend
- Confirmation message displayed to user

---

## Shape E — Story-to-Insight Dashboard
### Best for
Teams with data and NLP skills; best built as a companion to Shape D.

### Inputs
- Story submissions from Shape D (or seeded/synthetic stories for demo)
- LLM-based or keyword-based theme extraction

### Demo
Staff member logs into dashboard, sees 15 submitted stories from the past week. Stories are tagged with themes (displacement, community gathering, historical landmark, food and culture). Map view shows which neighborhoods stories come from. Staff can filter by theme to see all stories mentioning "schools" or "neighborhood change."

### Architecture (text)
- Frontend: React dashboard with table view, theme filters, and map
- Backend: Story storage + theme extraction pipeline
- Theme extraction: Simple keyword matching (quick) or LLM API call (higher quality, requires API key)
- Map: Leaflet or Google Maps with story pins by neighborhood

### Acceptance criteria for demo
- 10+ seeded stories visible in dashboard
- At least 3 theme tags working
- Map shows geographic distribution
- Disclaimer visible: "Based on stories voluntarily shared — not a representative sample"

### Risk note
Self-selection bias disclaimer is non-optional. Any demo that presents story themes as "what Richmond thinks" without this disclaimer is a civic harm risk.
