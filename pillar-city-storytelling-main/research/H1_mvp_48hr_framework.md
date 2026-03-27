---
title: "Thin-Slice Wins: 48-Hour MVPs for Richmond Arts & Stories"
pillar: city-storytelling
section: H
problem_statement: general
tags:
  - 48-hour-framework
  - demo-path
  - thin-slice
  - scope-discipline
  - failure-patterns
  - Sunday-2pm
summary: "Forcing function framework for 48-hour MVP design anchored to demo day: defines the realistic arts discovery demo (5-10 real events, one live source, one filter) and the fundamental split between story collection and story insight scopes."
geography: Richmond, VA
source: perplexity-sonar-deep-research
status: raw
related_reports:
  - H2_mvp_arts_aggregator
  - H3_mvp_story_collection
  - F1_opportunities_ranked
---

# Thin-Slice Wins: 48-Hour MVPs for Richmond Arts & Stories

## Executive Summary

The most common failure mode in civic hackathons is misreading what "done" means. Teams often spend Friday and Saturday building comprehensive database schemas and authentication, ending up on Sunday with a login page and no data. For City Storytelling problems, the trap is conceptual richness: ambitious visions like a "living map of Richmond's cultural soul" or an "AI system that translates resident stories into policy briefs" are emotionally resonant but unbuildable in 48 hours. 

Teams need a forcing function: **on Sunday at 2pm, what will a judge see on the screen, and what will it show them that they could not see before?** Every design decision must be evaluated against that single question. 

For arts event discovery, the realistic demo is a working interface showing 5-10 real Richmond arts events, pulled from at least one live data source, filterable in at least one useful dimension (e.g., "this weekend" and "visual arts"). For story collection, the 48-hour split is fundamental: story collection (submission interface) and story insight (extracting themes) are different products. Teams must choose one primary value proposition to demo.

## Reality Check: Define "Done" at 2pm Sunday

The demo is the product; anything not on the demo path is backlog. Teams that anchor the demo to "what a judge sees at 2pm Sunday" ship; those that chase coverage don't. 

### The 90-second demo contract: from first click to last insight

Write the exact clicks, data shown, and success criteria now; code only what the script uses. For example: "On Sunday, select 'This weekend' + 'Visual arts' and see 5-10 real Richmond events with links." Treat any work not required for that screen as backlog.

### Failure patterns to preempt

Avoid spending Saturday on infrastructure that won't be visible. Ship thin, real-data slices. The common failure mode is spending 1-2 days on auth/schema and ending with "a login and no data."

## MVP Path 1 — Arts Event Discovery in 48 Hours

Event discovery is feasible in 48 hours if the scope is one live source + one filter. A 3-4 person team starting Friday night can display real data by Saturday afternoon if they integrate 1 source and keep the UI thin.

### Validate Eventbrite access: search deprecation → pivot to org/venue endpoints + cache

Beware outdated assumptions: public Eventbrite "search by location" was removed from open access. Eventbrite announced removing public access to `GET /v3/events/search/` on December 12, 2019, with denial after February 20, 2020 [1]. Community corroboration in 2024 notes location search is deprecated [2]. 

**Decision/Action:** Run a 2-hour spike Friday 7-9pm to validate endpoints. If search is blocked, pivot to authenticated `org/:id/events` or `venue/:id/events` [3] with a pre-cached JSON fallback for demo reliability.

### Source selection: 1 primary feed + 1 hard-coded category/keyword

Choose one Eventbrite organizer/venue or a single ICS/JSON feed; avoid cross-source deduplication this weekend. Example organizers likely to surface in Richmond Eventbrite listings include:
- Visual Arts Center of Richmond [4]
- Studio Two Three [5] [6]
- Institute for Contemporary Art at VCU [7] [8]

### Implementation blueprint: 6 steps to "This weekend + Visual arts"

Wire up the endpoint call, normalize fields (title, start, venue, url), implement one date filter, render the list, add a link-out, and add a cache/fallback. Category filters exist, but don't build taxonomy UIs this weekend. Hard-code one category or keyword ("visual arts") in the initial MVP; show the filter toggle, not the taxonomy builder.

### Demo script and acceptance tests

"Select This Weekend → See 5-10 events with venue/date/link → Click-through works." Record a backup video.

### Risk mitigations and fallbacks

Build a caching layer on Saturday (JSON snapshot + toggle to "Live/Offline"), cap API calls, and log a graceful empty state. Prepare a no-internet fallback video capture of the demo flow.

## MVP Path 2 — Story Collection in 48 Hours

Story collection (building a submission interface) and story insight (extracting themes from stories) are different products requiring different architectures. The submission interface is achievable in 48 hours.

### Scope the submission flow: 4 fields + instant publish

A form with a few fields (neighborhood, time period, story text, optional anonymization toggle), a backend that stores submissions, and a basic display of submitted stories. Submissions appear instantly in a reverse-chron list.

### Data and privacy guardrails

Store minimally; display with consent; basic profanity filter; export CSV for future use.

### Community signal > UI polish

"Data before design" beats "perfect UI": Judges credit real content over polish. A simple, readable page with 5-10 real submissions wins trust.

### Demo script

"Enter story → Submit → Appears with timestamp and neighborhood label." Prepare 2-3 pre-filled examples.

## MVP Path 3 — Story Insights in 48 Hours

The insight dashboard — showing AI-extracted themes, connections across stories, policy-relevant patterns — is a much harder problem and requires a seed dataset to demonstrate at all.

### Seed-first strategy: pre-collect 10-20 real stories before kickoff

If teams choose insight, they need to pre-populate the tool with seed stories before the event, because no real stories will accumulate during the hackathon. Research suggests that teams who reach out to 5-10 community members before the hackathon for real pilot story submissions produce more credible demos than teams who write fictional stories themselves.

### Minimal insights pipeline

Do just enough — topic clustering into 3-5 themes, frequency counts, and 1 policy-relevant sentence per theme.

### Demo script

"Load dashboard → Show top 3 themes across 10-20 stories → Read 1-2 exemplar quotes per theme."

### Risks and safeguards

If the seed count is <10, pivot to the collection MVP; otherwise, cache inference results ahead of the demo.

## Feasibility Scorecards

| Dimension | Arts Event Discovery | Story Collection | Story Insights |
| :--- | :--- | :--- | :--- |
| Data Accessibility | 3 (Requires pivot to org endpoints) | 5 (User-generated) | 2 (Requires pre-collection) |
| Technical Complexity | 3 (API integration) | 2 (Basic CRUD) | 5 (NLP/AI pipeline) |
| Demo Clarity | 5 (Highly visual) | 4 (Clear flow) | 3 (Abstract without good data) |
| Community Impact Legibility | 4 (Immediate utility) | 3 (Foundational) | 5 (Policy relevance) |
| 48-Hour Achievability | 4 (With thin slice) | 5 (Highly achievable) | 2 (High risk) |
| **Scope Trap to Avoid** | Comprehensive coverage, deduplication, geocoding | Complex moderation workflows | Building without seed data |

## Facts & Links Compendium

### Eventbrite API realities and endpoints

- **Fact:** Public "search by location" is deprecated. Eventbrite announced removing public access to `GET /v3/events/search/` on December 12, 2019 [1].
- **Fact:** Authenticated organization/venue endpoints are viable. Example: `GET /v3/organizations/{organization_id}/events/` [3].
- **Link:** API Reference hub: https://www.eventbrite.com/platform/api [9]

### Categories and filters

- **Fact:** Category filters exist in the API reference, but implementing a multi-level taxonomy is out of scope for a 48-hour build.

### Richmond organizer candidates

- Visual Arts Center of Richmond [4]
- Studio Two Three [5] [6]
- Institute for Contemporary Art at VCU [7] [8]

### Inferences vs unknowns

- **[Inference]** A team of 3-4 people that starts with Eventbrite API on Friday evening can have a working event display with real data by Saturday afternoon, leaving time for UI polish and demo prep.
- **[Inference]** A story insight tool demoed without at least 10 seed stories will not convincingly demonstrate the insight value proposition to judges.
- **Unknowns:** Whether Eventbrite API rate limits or category structures have changed recently enough to affect 48-hour build estimates; whether any Richmond arts organizations have machine-readable event feeds beyond Eventbrite.

## Run of Show

### Friday (6-10pm): Validate, decide, and spike

2-hour API spike; choose MVP path; seed data wrangling; define acceptance test.

### Saturday (9am-6pm): Build only what the demo needs

Morning — data pipeline + UI skeleton; Afternoon — cache/fallback + polish; 5pm demo script walkthrough. Team role focus accelerates Saturday PM polish. Assign explicit owners: 1) Data/API + caching; 2) Frontend list/map + single filter; 3) Content/data seeding + QA; 4) Demo script + narrative.

### Sunday (9am-2pm): Stabilize and rehearse

Freeze at 11am; record backup; rehearse 3 times; assign roles for live demo.

## Risks, Traps, and How We'll Avoid Them

### Known traps

Comprehensive arts coverage, deduplication across sources, neighborhood geocoding, mobile-optimized accessibility, and account systems are explicitly "not achievable" in 48 hours. Declare these out-of-scope on Friday; capture in a "Next 30 days" slide so judges see the path without penalizing the demo.

### Failure case library

- "Built auth, no data" → Countermeasure: Data before design.
- "API failed live" → Countermeasure: JSON snapshot + toggle.
- "Beautiful UI, fictional content" → Countermeasure: Pre-collect seed stories.

## Appendices

### Checklist: Arts discovery thin-slice

- Endpoint/ID confirmed
- One filter works
- 5-10 events render
- Links open
- Snapshot ready

### Checklist: Story collection thin-slice

- Submit → store → list
- CSV export
- Basic moderation
- Consent language

### Example JSON snapshots and toggle pattern

Drop-in offline data ensures demo resilience.

## References

1. *Eventbrite v3 Search API is deprecated. Turning off Feb 20, 2020 · Issue #83 · Automattic/eventbrite-api · GitHub*. https://github.com/Automattic/eventbrite-api/issues/83
2. *javascript - Issue getting specific events (via location) from Eventbrite API - Stack Overflow*. https://stackoverflow.com/questions/54834854/issue-getting-specific-events-via-location-from-eventbrite-api
3. *Getting Information on Events - Documentation | Eventbrite Platform*. https://www.eventbrite.com/platform/docs/events
4. *Visual Arts Center of Richmond*. https://www.visarts.org/
5. *Studio Two Three*. https://www.studiotwothree.org/
6. *Event Space Survey — Studio Two Three*. https://www.studiotwothree.org/event-space-survey
7. *
    Institute of Contemporary Art Events - 2 Upcoming Activities and Tickets | Eventbrite
*. https://www.eventbrite.com/o/institute-of-contemporary-art-8483530913
8. *Calendar - Institute for Contemporary Art*. https://icavcu.org/calendar/
9. *
    Eventbrite for Developers - Eventbrite Platform
*. https://www.eventbrite.com/platform/api