# Recommended Architectures — A City That Tells Its Stories

Lightweight, weekend-buildable architectures for each MVP shape. All architectures prioritize: fast setup, real data, no infrastructure that requires approval or credentials the team does not already have.

---

## Architecture A — Event Aggregator (Shapes A and B)

### Stack
- Frontend: React (Vite) or Next.js
- Backend/Data: Python scripts (requests + feedparser) or Node.js
- Storage: JSON files (simplest) or SQLite via better-sqlite3
- Deployment: Vercel (frontend) + GitHub Actions cron or Render (backend)
- Maps (optional): Leaflet + OpenStreetMap (free, no API key required)
- Geocoding (if needed): OpenStreetMap Nominatim (free, rate-limited) or Google Maps Geocoding (requires API key)

### Data flow
1. Cron script runs every 4 hours
2. Fetches Eventbrite API results for Richmond, VA within 30-mile radius
3. Parses RSS/iCal feeds from confirmed arts organization URLs
4. Deduplicates by title + date + venue
5. Writes normalized JSON: { id, title, date, time, venue, address, type, source, url }
6. Frontend reads JSON, renders card grid with filters

### Key libraries
- Python: `requests`, `feedparser`, `icalendar`, `geopy`
- Node: `axios`, `rss-parser`, `node-ical`
- Frontend: React + `date-fns` for date formatting, `fuse.js` for search

### Demo data strategy
If API access is incomplete during the hackathon: pre-fetch a sample dataset on Friday and use it as a seed. Label it clearly in the demo: "data pulled [date]".

---

## Architecture B — Story Collection Portal (Shape D)

### Stack
- Frontend: React (Vite) or plain HTML/CSS/JS for maximum simplicity
- Backend: Node.js Express or Python FastAPI
- Storage: Airtable (easiest hackathon setup — no schema migration, visual admin UI) or PostgreSQL
- Voice recording: Browser MediaRecorder API (no dependencies; works in mobile Chrome and Safari)
- Deployment: Vercel (frontend) + Railway or Render (backend)

### Data flow
1. User selects a prompt and records or types their story
2. Frontend sends story text and/or audio blob to backend API
3. Backend validates (length, required fields) and stores in Airtable or database
4. Returns success message with submission ID

### Airtable setup (fastest for hackathon)
Fields: submission_id, timestamp, prompt_selected, story_text, audio_url (if voice), neighborhood (optional), decade (optional), consent_given (boolean), anonymous (boolean)

### Voice recording implementation note
```javascript
// Basic MediaRecorder pattern
const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
const recorder = new MediaRecorder(stream);
const chunks = [];
recorder.ondataavailable = e => chunks.push(e.data);
recorder.onstop = () => {
  const blob = new Blob(chunks, { type: 'audio/webm' });
  // Upload blob to backend
};
recorder.start();
```

### Consent screen requirements
Must appear before submission. Must include:
- Who will see the story (City staff, partner organization, or is it public?)
- How the story will be stored and for how long
- Whether the story may be shared or published
- Explicit yes/no checkbox — not pre-checked

---

## Architecture C — Insight Dashboard (Shape E)

### Stack
- Frontend: React + Recharts or Chart.js for theme visualization
- Map: Leaflet + OpenStreetMap
- Backend: Same as Shape D if paired; or standalone with seeded data for demo
- Theme extraction: Simple keyword matching (fast) or OpenAI API (if key is available)
- Auth: Simple hardcoded admin token for demo

### Theme extraction approach
**Option 1 — Keyword matching (no API required):**
Maintain a dictionary of themes: { "displacement": ["moved", "displaced", "evicted", "priced out", "had to leave", "sold", "developer"], "community": ["neighborhood", "block", "gathering", "church", "school", "barbershop"], ... }
Count matches per story; assign top 2-3 themes.

**Option 2 — LLM classification (requires API key):**
Send story text to OpenAI or Anthropic API with prompt: "Classify this story into 1-3 of these themes: [list]. Return JSON array."
More accurate; requires API access and cost consideration for volume.

### Demo data seeding
Prepare 10-15 synthetic stories before the hackathon. Include:
- At least 3 Richmond neighborhoods represented
- A range of time periods (1960s through present)
- Multiple themes (community gathering, neighborhood change, arts and culture, food and business)
- Mix of text and metadata

---

## Deployment Checklist

Before demo Sunday:
- [ ] All external API keys working and not rate-limited
- [ ] Demo data seeded and stable (not dependent on live APIs during demo)
- [ ] Consent language reviewed by someone other than the developer
- [ ] Mobile view tested (many judges will use phones)
- [ ] Source attribution visible on every card or story
- [ ] Representational bias disclaimer visible on any insight or analysis view
- [ ] App loads in under 3 seconds on a typical connection
