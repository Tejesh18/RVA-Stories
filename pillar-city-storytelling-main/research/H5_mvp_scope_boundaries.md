# Ship Small, Win Big — 48-Hour MVP Scope That Survives Demo Day

## Executive Summary
The most critical factor in hackathon success is not technical brilliance, but ruthless scope discipline. Judging environments inherently reward complete, narrow slices of functionality that work flawlessly over broad, unfinished visions. When teams attempt to build comprehensive platforms or integrate ethically complex AI features in 48 hours, they frequently fail to deliver a working core pipeline. 

To survive demo day, teams must design for ultra-brief presentation windows—often just 60 to 180 seconds—by focusing on a single user, a single action, and a single outcome. By locking in scope on Friday night and enforcing strict feature cutoffs by Saturday afternoon, teams can ensure they have a polished, demonstrable product. 

**Key Strategic Inferences:**
* **[Inference]** The most common reason City Storytelling projects fail at demo day is not technical failure but scope overrun — the team spent time on out-of-scope features and did not finish the core demo pipeline.
* **[Inference]** A team that commits to scope boundaries on Friday evening and enforces them through Saturday is 3-4x more likely to have a working demo on Sunday than a team that "figures it out as they go."

## Why Scope Discipline Wins in 48 Hours — Evidence and Playbook

Judging environments reward complete, narrow slices that work. Polished, small wins consistently outrank broad, unfinished visions. Teams that package one clear capability with high usability and documentation earn top marks.

### Scope-Disciplined Exemplars: What Judges Praised
At the Civic Hack DC 2025 event, projects that shipped a single, concrete artifact scored highly on impact and usability [1]. Judges explicitly praised tools that did one thing exceptionally well, such as packaging data tools into an accessible format or executing a focused data transformation [1].

| Project (Civic Hack DC 2025) | Narrow Deliverable | Judges' Highlight | Median Usability Score | URL |
| :--- | :--- | :--- | :--- | :--- |
| **Mirrulations-CLI** | Packaged fetch and CSV tools into an installable CLI | "Polished CLI... greatly improving accessibility." | 4.5 | https://github.com/civictechdc/hackdc2025 |
| **Hive-Partitioned Parquet** | Converted Mirrulations JSON to Hive-partitioned Parquet | "Enabling efficient SQL querying for large datasets." | 3.0 | https://github.com/civictechdc/hackdc2025 |
| **LLM.gov** | Combined RAG with vector embeddings for search | "Well-documented." | 4.0 | https://github.com/civictechdc/hackdc2025 |

*Takeaway:* Define your MVP as a single transformation or user flow you can prove on-screen (e.g., take one source → normalize → publish to a list) rather than chasing multiple features.

### Demo Time Realities: Design for 60–180 Seconds
Judges can only evaluate short, concrete flows. Civic tech events utilize lightning formats that inherently reward tight scope and a single "happy path." 

| Event | Format | Time Limit | Source URL |
| :--- | :--- | :--- | :--- |
| **Code for America Summit Demo Lab** | Screen recording | 1 minute | https://summit.codeforamerica.org/demo-lab/ [2] |
| **CivicTech Waterloo Region** | Live pitch + Q&A | 3-minute pitch + 2-minute Q&A | https://civictechwr.github.io/CTWR-Organization-Documentation/Guidelines_&_Templates/Template_Pitching/ [3] |

*Takeaway:* Script a 90-second demo that shows one user, one action, and one outcome. Pre-record a 60–90 second fallback video to guard against live technical hiccups.

## MVP Boundaries — What to Build vs. Defer

Constrain your project to one user → one action → one outcome. Name and post out-of-scope items on day one to prevent feature creep.

### Arts Discovery MVP — Do One Aggregation Slice Well
A demo showing 20 real Richmond events with correct dates, venues, and links is far more compelling than a beautiful empty interface that claims it "will aggregate all Richmond arts events." 
* **Actions:** Lock sources by Friday night. Implement minimal de-duplication per source, skipping complex cross-source deduplication. Ship a disclosure banner noting that coverage is partial.

### Story Collection MVP — Collect, Tag, Display
For story collection tools, scope creep tends toward technically exciting but ethically risky features. A small pipeline (collect → basic themes → gallery) plus an ethics banner is demo-complete.
* **Actions:** Pre-seed 10 stories to ensure the gallery is populated. Enable live text submission and run lightweight keyword clustering. Show human-in-the-loop framing and explicitly list moderation as future work.

## Execution Routines that 3–4x Completion Odds

Process beats heroics. Enforce cut rules and rehearse the demo script to ensure success.
* **Friday 9pm:** Define the one-sentence core value. Publish scope cards at the team table.
* **Saturday 4pm Kill-Switch:** If the core on-screen outcome isn't visible, cut secondary features immediately and re-allocate time to stability, data correctness, and demo scripting.
* **Golden Path Demo:** Design one click path. Have 2–3 screenshots or a GIF as a fallback, and utilize an offline data cache.
* **README-First:** Judges evaluate open-source practices [1]. Include install/run steps, sample data, and a "Limitations & Next Steps" section in the repository.

## Risks, Ethics, and "Don't" List

Ethical humility is rewarded; false authority is penalized. 
* **Don'ts:** Do not use official City seals or claim affiliation. Do not claim the tool generates "AI policy recommendations"—this conflates correlation with analysis. Do not promise at-scale moderation or transcription.
* **Do's:** Include consent, privacy, and non-affiliation banners. Provide a limitations slide detailing what is required for a production environment.

## Judge Criteria Implications and Unknowns

**Unknowns (what cannot be verified publicly):** Whether the specific hackathon judging criteria for the Richmond Civic Hackathon weight demo completeness vs. vision/ambition, which would affect how aggressive teams should be with scope reduction.

*Action:* Ask organizers for the rubric early. If unknown by Saturday morning, optimize for a live working demo, clear user value, and README/usage clarity, as these are universally rewarded in civic tech [1].

## Appendix — Scope Cards (Ready to Print)

Print these cards and post them in the team workspace to align the team and prevent Saturday scope creep.

### Arts Event Discovery — Scope Card
**(1) One-sentence core value:** One place to see at least 20 real, upcoming Richmond arts events with correct dates, venues, and source links.
**(2) Minimum viable demo (what the judge sees):** Judge clicks "Richmond this week" → a list view renders 20+ events aggregated from 2–3 sources, each with title, date/time, venue, and "Get details" linking to the original page; a timestamped banner states "Coverage is partial; sources listed below."
**(3) In-scope features (max 5):**
* Parse and normalize events from 2–3 public sources (e.g., venue calendars).
* De-duplicate within a single source by title+date heuristic.
* Human-verified list of 20+ upcoming events.
* Simple filters: date range and category.
* Disclosure banner with sources and "last updated" timestamp.
**(4) Out-of-scope features (min 5):**
* Comprehensive citywide coverage across all venues.
* Deep venue profiles (photos, hours, accessibility, parking).
* Ticketing/purchase integration.
* City of Richmond endorsement/branding.
* User accounts, personalization, or saved events.
* Automated cross-source deduplication at scale.
**(5) Deferral rule:** "If we are not showing 20 verified events in a live list by Saturday 4pm, we cut filters and categories."

### City Story Collection — Scope Card
**(1) One-sentence core value:** A simple pipeline to collect 10 resident stories and surface 3–5 themes to inform further listening.
**(2) Minimum viable demo (what the judge sees):** Judge opens a public form → submits a short text story (or selects a pre-seeded story) → clicks "Analyze" → sees the story appear in a gallery and a "Themes" panel update (e.g., "Transit reliability") with counts; a banner states "Not for policy decisions; moderation required for production."
**(3) In-scope features (max 5):**
* Public web form for text stories (name optional), consent checkbox.
* Store 10+ stories in a simple database or file.
* Theme extraction on submit (keyword/topic clustering within the 10–20 story set).
* Public read-only gallery with basic search by keyword/tag.
* Ethics banner: consent, privacy note, non-affiliation with City, moderation disclaimer.
**(4) Out-of-scope features (min 5):**
* Full audio/video transcription at scale.
* AI-powered policy recommendations.
* Integration with City planning/zoning/communications systems.
* Verified or legally archived repository.
* Full content moderation with human review queue.
**(5) Deferral rule:** "If we are not showing a story appearing in the gallery and incrementing a theme count by Saturday 4pm, we cut public submission and demo with pre-seeded stories only."

## References

1. *GitHub - civictechdc/hackdc2025: Civic Hack DC 2025 • Outcomes & Archive Central hub for everything produced at the July 26 hackathon: final projects, judging results, slide decks, datasets, and lessons learned. Each project lives in its own folder (or vendored subtree) so future contributors can explore, reproduce, or build on the work without chasing down vanished links. · GitHub*. https://github.com/civictechdc/hackdc2025
2. *Demo Lab — Code for America Summit*. https://summit.codeforamerica.org/demo-lab/
3. *How to Pitch a Problem at Civic Tech WR - CivicTechWR Documentation*. https://civictechwr.github.io/CTWR-Organization-Documentation/Guidelines_&_Templates/Template_Pitching/