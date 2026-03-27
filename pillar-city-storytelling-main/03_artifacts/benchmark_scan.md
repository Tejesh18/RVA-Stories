# Benchmark Scan — A City That Tells Its Stories

National and international comparables across both problem statements. Use these for inspiration and for demonstrating credibility to judges ("tools like this have worked in other cities").

---

## Arts Event Aggregators

### Do Richmond (dorichmond.com)
- Location: Richmond, VA — **existing local tool**
- What it does: Aggregates Richmond events and things to do; not exclusively arts-focused
- Why it matters: This is prior art in the same city. Teams must study this before building an arts aggregator to understand what already exists and where the gaps are. The question is not "can we build an aggregator?" but "what does dorichmond.com not do that arts-focused residents need?"
- Status: [Unverified — current state of coverage and maintenance unknown]
- Key question: Does dorichmond.com cover gallery openings and smaller arts events, or is it primarily mainstream entertainment?

### Eventful (defunct)
- What it was: National event aggregator that pulled from multiple sources
- Why it matters: It was shut down in 2019, partly due to the challenge of maintaining data feeds. Cautionary tale about sustainability of aggregators that depend on third-party data sources without strong institutional backing.

### Chicago Arts & Culture Map (City of Chicago)
- Location: Chicago, IL
- What it does: City-sponsored map of arts organizations, venues, and cultural districts with event information
- Why it matters: Example of a city-sponsored arts discovery tool with geographic component; demonstrates municipal interest in cultural visibility
- Note: Chicago has a dedicated Office of Cultural Affairs and Special Events with staff to maintain such tools — Richmond's capacity is different

### DC Arts (Washington, DC)
- Location: Washington, DC
- What it does: ArtsInDC.com and related tools aggregate DC-area arts events
- Why it matters: Comparable mid-Atlantic city with similar arts scene fragmentation problem
- Status: [Unverified — current state unknown]

### CultureMap (Houston, Atlanta, Dallas, Austin)
- Location: Multiple cities
- What it does: City-specific arts and culture news and event coverage
- Why it matters: Shows market interest in city-specific arts discovery; commercial model rather than civic

---

## Civic Story Collection Tools

### StoryCorps
- Location: National (US)
- What it does: Oral history collection via recorded conversations; creates a permanent archive of American voices
- Why it matters: The gold standard for oral history at scale; model for consent, archive, and impact
- Accessible archive at: https://archive.storycorps.org (may include Richmond stories)
- Key design lessons: Two-person conversation format, permanent preservation commitment, clear use policy, strong emotional resonance
- Limitation for hackathon: StoryCorps requires specific recording infrastructure and trained facilitation — not a weekend-buildable model at full fidelity, but the consent and archive design principles are directly applicable

### Historypin
- Location: International (UK-based, global)
- What it does: Platform for place-based historical photo and story collections; lets individuals and institutions pin historical content to maps
- Why it matters: Direct model for a neighborhood history explorer; allows institutions like The Valentine to contribute alongside residents
- Reference: https://www.historypin.org
- Key design lessons: Map-first interface; institutional and individual contributions coexist; place-anchoring of memory
- Hackathon applicability: High — a simple version of Historypin focused on one Richmond neighborhood is a weekend-viable MVP

### Community Oral History Toolkit (Oral History Association)
- Location: National
- What it does: Guidance and tools for community oral history projects including consent templates, interview guides, and archive practices
- Why it matters: Provides the ethical and methodological framework that a story collection portal should be built on
- Reference: https://www.oralhistory.org

### Storycorps Archive
- Location: National
- What it does: Searchable archive of thousands of oral history recordings including metadata, transcripts, and audio
- Why it matters: Demonstrates the value of a structured story corpus for discovery and insight; also a potential source of Richmond content
- Reference: https://archive.storycorps.org

### PlaceStories (various local implementations)
- What it does: QR-code-linked storytelling at physical locations in neighborhoods
- Why it matters: Model for connecting digital stories to physical place; very low barrier for non-digital users (walk by a sign, scan a code, hear a story)
- Hackathon applicability: Medium — requires some physical installation but the digital component is simple

### City of Boston — Voices of Dudley
- Location: Boston, MA
- What it does: Oral history project collecting stories from longtime residents of the Dudley neighborhood during rapid gentrification
- Why it matters: Direct comparable to Richmond's Church Hill and other changing neighborhoods; shows that city-connected oral history work can produce both civic insight and community trust
- Key lesson: Time-sensitivity of collection during neighborhood change is a real phenomenon, not just a framing device

---

## Failure Cases and Cautionary Tales

### Every City's "Official Events Calendar"
- Pattern: City or CVB builds an official calendar of events, assigns a staff member to curate it, curating becomes burdensome, calendar falls behind, residents stop trusting it
- Why it matters: The rubric explicitly warns against solutions that depend on heavy manual curation. This failure mode is extremely common and well-documented.
- Lesson for this hackathon: Automation and aggregation are essential. If humans must maintain the data for the tool to stay current, plan for the tool to fail within 6 months.

### Engagement Portals Without Use Commitments
- Pattern: City deploys a "tell us your story" portal; submissions are collected; nothing visibly happens with them; residents feel ignored; participation drops; portal becomes archival
- Why it matters: The rubric notes "collection without use is archiving; collection with use is governance"
- Lesson: Any story collection tool must answer "and then what?" before launch. Teams should be explicit about the intended pathway from submission to use — even if the hackathon version only demonstrates the collection end.
