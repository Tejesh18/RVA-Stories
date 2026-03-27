# A City That Tells Its Stories — Hackathon Challenge

This file defines the two practical problem statements for this pillar and the top-rated blue sky vision. Read this before reading anything else in the repository.

---

## The Two Problems You're Solving

### Problem 1: Discovering and Participating in Richmond's Arts & Cultural Events

**Score: 25/32 — Strong**

**Statement:**
How might we use technology to improve how residents discover and engage with Richmond's local arts and cultural events so that locally produced creative work is easier to find, support, and experience, while minimizing manual curation and acknowledging City technology, staffing, and budget constraints?

**Why this problem matters:**
Richmond's arts community is vibrant but invisible from the outside. Event information is scattered across galleries, social media, nonprofit newsletters, and word of mouth. No broad view of what is happening exists. The City cannot sustain a manually curated calendar. The opportunity is aggregation — surfacing and connecting what already exists rather than creating new content.

**Build toward:**
- Richmond Arts Aggregator pulling from Eventbrite API, RSS feeds, gallery websites
- "What's On in RVA" discovery feed filtered by neighborhood, type, or date
- Arts & Cultural District map linking to original source event listings

**Key constraints:**
- Aggregate existing information — do not recreate content manually
- Avoid solutions that depend on ongoing staff curation
- Respect preferences of partner organizations whose event info you surface
- Work within City technology approval processes

**Data gaps to work around:**
- No arts/cultural event data in Richmond's open data catalog
- Arts district boundary data not confirmed in GeoHub — verify before building on it
- Richmond.com, Style Weekly, or RVA Magazine may have accessible feeds — check before assuming

---

### Problem 2: Resident Stories as Civic Insight

**Score: 25/32 — Strong**

**Statement:**
How might we use technology to improve how Richmond gathers and learns from residents' lived experiences so that community stories help inform City decisions, preserve Richmond's social history, and amplify voices that are often underrepresented, while respecting privacy, trust, and limited staff capacity?

**Why this problem matters:**
Richmond is experiencing rapid neighborhood change. Long-time residents — especially from underrepresented communities — hold stories that are not captured anywhere and risk being lost. Existing engagement tools collect issue-specific feedback, not lived experience. The gap between story collection and City decision-making is real and underfilled.

**Build toward:**
- Voice-to-Story Portal with guided prompts and explicit consent mechanism
- "Tell Us Your Story" guided interface, mobile-friendly, structured prompts
- Story-to-Insight Dashboard that surfaces themes and patterns from submitted narratives

**Key constraints:**
- Privacy and consent are non-negotiable — build consent-first
- Complement, do not duplicate, oral history work led by museums (the Valentine, Black History Museum, VCU)
- Avoid heavy manual transcription or processing — staff capacity is limited
- Do not claim to represent "all" Richmond stories without addressing participation bias

**Data gaps to work around:**
- No existing compiled oral history collection is accessible for weekend use
- Community storytelling channels for target populations are undocumented — do not assume digital-only

---

## The Blue Sky Vision (Highest-Rated Across All 7 Pillars)

### Exploring Richmond Through Its Stories — 24/27 — Exceptional ★

**Statement:**
How might we use technology to help residents and visitors explore Richmond's neighborhoods, history, and culture through the stories of the people who shaped them, so that the city's identity becomes richer, more accessible, and more inclusive for everyone who lives here or comes here?

**Why this scored highest across all seven pillars:**
Richmond has one of the most distinct neighborhood histories in the mid-Atlantic, a rich civil rights and transformation history, active oral history institutions (the Valentine, Black History Museum, VCU), and an arts scene that is genuinely neighborhood-rooted. Rapid neighborhood change makes the archive-before-loss framing urgent. The raw material exists. The civic need is real.

**Hackathon path if you're aiming at this vision:**
Scope to one neighborhood or one story type — do not try to cover all of Richmond. Strong approaches:
- Neighborhood history explorer (Jackson Ward jazz history, Church Hill community change)
- Story layer on a map (oral history pins, QR code connection to place)
- Guided walking-tour style app seeded with narratives from a single museum partner

The blue sky is the ceiling. The targeted problem statements above are the floor. A team that builds one of the targeted statements with the blue sky framing in mind will have a compelling pitch for both the Pillar Award and the Moonshot Award.

---

## How Your Solution Will Be Judged (Pillar Award)

The Pillar Award uses the following weights. For full category definitions and scoring anchors, see [`/RUBRIC.md`](../../RUBRIC.md) at the hackathon root.

| Category | Weight | What judges are asking |
|----------|--------|------------------------|
| **Impact** | **5** | Does this directly address one of the two problem statements above? |
| **User Value** | 4 | Is there a specific, real user? Does the prototype improve their experience? |
| **Feasibility** | 3 | Could this be piloted by a City department or cultural partner within a year? |
| **Innovation** | 3 | Does the team bring fresh thinking to storytelling, discovery, or civic engagement? |
| **Execution** | 3 | Does a working demo exist? Is the flow coherent? |
| **Equity** | 3 | Does the solution reach underrepresented voices, not just digitally comfortable users? |

**Score formula:** Sum of (category score 1–5 × weight). Maximum 105.

**Tiebreaker:** User Value score.

**What wins here:** A prototype that makes Richmond's stories more findable or more useful to the City, built on real sources, scoped to something demonstrable in a weekend.

**What loses here:** Tools claiming to represent "all" Richmond stories, platforms with no consent mechanism, solutions requiring official City endorsement or museum system integration.
