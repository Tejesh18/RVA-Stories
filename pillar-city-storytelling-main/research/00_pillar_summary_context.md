---
title: "Richmond Stories, Real Tools: Weekend Builds That Last"
pillar: city-storytelling
section: context
problem_statement: general
tags:
 - pillar-overview
 - MAP-2025
 - arts-discovery
 - civic-storytelling
 - hackathon-framing
summary: "Overview of Pillar 7 framing two core hackathon challenges — arts event discovery and resident civic storytelling — and the MAP 2025 priorities that anchor viable prototypes."
geography: Richmond, VA
source: perplexity-sonar-deep-research
status: raw
related_reports:
 - A1_problem_landscape_arts_discovery
 - A2_problem_landscape_civic_storytelling
---

# Richmond Stories, Real Tools: Weekend Builds That Last

## Executive Summary

The Hack for RVA civic hackathon, scheduled for March 27–29, 2026, challenges participants to build solutions aligned with Mayor Danny Avula's Mayoral Action Plan (MAP) [1]. Pillar 7, "A City That Tells Its Stories," presents two core challenges ripe for weekend prototyping: automating arts and cultural event discovery, and capturing residents' lived experiences to inform city decisions. 

The primary failure mode for civic tech in this space is the reliance on manual curation. To survive beyond the weekend, prototypes must utilize automated pipelines (Eventbrite API, RSS, iCal) and avoid deprecated platforms like the Facebook Events API. Furthermore, solutions must align with specific FY2026 MAP goals—such as capturing oral histories of public servants and creating visitor guides for Black empowerment [2]—to secure a long-term continuation champion. With $10,000 in total prizes on the line, including a $1,000 specific award for City Storytelling [1] [3], the most successful teams will build low-maintenance, consent-first tools that complement existing institutional archives rather than attempting to replace them.

## Pillar 7 Context: Truthful, Inclusive Storytelling With Real Civic Uses

Pillar 7 aims to make Richmond a national model for telling the truth about its own history, including the struggles for Black empowerment since the city's founding [4] [2]. The hackathon challenges participants to use technology and creative tools to help Richmond tell its history and cultural stories [3]. Hackathon outputs should advance these goals by providing practical tools that facilitate inclusive dialogue and cultural connection, rather than attempting to build comprehensive historical archives from scratch.

### MAP 2025 Priorities That Anchor Viable Prototypes

The Mayoral Action Plan outlines specific goals for Fiscal Year 2026 that provide concrete alignment targets for hackathon teams. These include capturing oral histories and multimedia conversations with veteran and retired Richmond public servants, developing visitor-friendly historical guides to studying Black empowerment and Civil Rights struggles, and facilitating participation in the Virginia 250 commemorations [2]. Prototypes that directly address these named actions have a much clearer path to adoption.

## Users and Jobs-To-Be-Done: Who Needs What, When

The ecosystem of users for Pillar 7 solutions is diverse. It includes new residents seeking cultural connection, longtime residents (especially elders and underrepresented groups) holding irreplaceable neighborhood knowledge, and arts organizations needing broader visibility without administrative overhead. Additionally, City communications staff, historians, and planning staff require community input that goes beyond standard surveys and public comment periods.

### Two Critical JTBDs Drive Scope

The scope of viable prototypes is driven by two primary Jobs-To-Be-Done (JTBDs):
1. "Show me arts and culture events near me without requiring manual curation from city staff."
2. "Help me share my neighborhood stories with explicit consent so that city staff can learn from them and act."

## Opportunity 1 — Arts Event Discovery Without Manual Curation

A resilient event aggregator delivers immediate civic value by connecting residents to local culture. By utilizing public source types like the Eventbrite API, RSS feeds, and iCal links, teams can build automated pipelines that require zero manual data entry from city staff. Adding geographic and event-type filters allows users to discover neighborhood-specific happenings effortlessly.

### Data Strategy Under Post-2018 Facebook Limits

Since 2018, Facebook Events API access has been severely restricted. Attempting to build a prototype dependent on Facebook data will cause the project to stall immediately after the hackathon. Teams must design around this limitation by whitelisting venues with public calendars, respecting robots.txt, and utilizing open data standards.

### Minimum Viable Features That Fit 48 Hours

Within the 48-hour hackathon window, teams should focus on a tight feature set: ingest data from 3-5 public sources, deduplicate entries, apply ZIP-code geofencing, and tag by event type. Complex recommendation engines should be deferred to future iterations.

## Opportunity 2 — Consent-First Resident Story Capture and Insight

The second major opportunity is building a resident story collection portal. A bilingual, mobile-friendly intake system with clear consent tiers allows the City to gather lived experiences ethically. This tool must complement, not compete with, the rigorous oral history work already being done by local institutions.

### Why This Matters Now: Preservation and Reach

Capturing elders' memories is highly time-sensitive. Furthermore, the Richmond metropolitan area is home to approximately 100,000 Latino residents [5] [6]. Providing bilingual (English/Spanish) prompts and voice-to-text intake meaningfully expands reach and ensures that storytelling is truly inclusive and representative of the city's changing demographics.

### From Stories to Use: Staff Dashboards and Exports

Stories are only useful to the City if they can be analyzed. Light-touch tagging and export packets (CSV/JSON plus audio files) enable Planning and Communications staff to translate qualitative stories into programming and place-based insights.

## Partnerships, Not Replacements: Working With The Valentine, BHMVA, VCU

Richmond already boasts robust cultural institutions. The Valentine Museum recently completed 65 interviews for its *Nuestras Historias* exhibit [5], and the Black History Museum and Cultural Center of Virginia (BHMVA) actively records firsthand accounts of older African Americans [7]. Hackathon prototypes must act as discovery layers and intake funnels that point to and feed these institutions, respecting their provenance and archival expertise.

### Cautionary Examples and Boundaries

Teams must avoid claiming their tools represent "all" Richmond voices, which is a civic harm risk. Community submissions must be clearly labeled, and generated summaries should never be presented as the "official history" of Richmond.

## Ethics, Consent, and Risk Management

Story collection requires explicit consent mechanisms and clear use commitments. Baking in consent collection, moderation queues, and visible scope disclaimers is essential to avoid civic harm and build trust with vulnerable communities.

### Consent Model and Governance

A robust prototype should offer three consent states: public and attributed, public but pseudonymous, and private-to-staff. Users must also have clear pathways to withdraw their consent, and consent metadata must be stored securely with each record.

## Success Metrics and MAP Alignment

Success should be measured by how well the prototype aligns with MAP values. Metrics include the number of oral histories captured with explicit consent, the volume of events auto-aggregated weekly, the breadth of neighborhood coverage, and the number of successful link-outs to institutional partners.

### Suggested Metrics

For the weekend demo, teams should aim to preload 50–100 seeded events and 20–30 seeded story snippets. The prototype should demonstrate live feeds from at least 10 venues, ensure 75% of stories have geotags, and feature active links to at least two institutional partners.

## Prototype Concepts You Can Ship This Weekend

To maximize feasibility and continuity, teams should focus on scoped builds that avoid manual upkeep and align directly with MAP FY2026 goals.

### Build Options Compared

| Concept | Primary Use Case | Data Sources | 48h Build Effort | Key Risks | Continuation/Handoff Plan |
| --- | --- | --- | --- | --- | --- |
| **Arts Near Me** | Auto-aggregated arts/culture events by proximity | Eventbrite API, 8–12 venue RSS/iCal feeds | Medium | Source changes; dedupe accuracy | Docker + cron; venue list + add-feed admin; README for City Comms |
| **Story Portal (EN/ES)** | Voice/text story capture with 3 consent tiers and geotag | User uploads, phone call intake, transcription | Medium | Consent clarity; moderation load | Consent storage schema; moderation queue; export to CSV/JSON + audio |
| **Neighborhood History Explorer** | Map linking landmarks, events, and story snippets | Public collections (The Valentine, BHMVA) links + seed data | Medium-Low | Overstating completeness | Prominent disclaimers; source attributions; link-out patterns |
| **Public Servant Oral Histories Kit** | FY2026-aligned capture kit for retirees | Intake forms, prompt guides, storage templates | Low | Adoption without owner | Package as toolkit PDF + forms; identify City HR/Comms liaison |

The table above outlines four viable paths for Pillar 7. The "Arts Near Me" and "Story Portal" concepts offer the highest technical engagement, while the "Public Servant Kit" provides the most direct alignment with specific FY2026 MAP objectives [2].

## Technical Architecture and Data Compliance

A simple, portable tech stack is crucial for civic tech survival. Teams should rely on static frontends, serverless ingest functions, and scheduled fetches while strictly honoring terms of service and robots.txt files.

### Stack Sketch and DevOps

A recommended stack includes a React or Vue frontend, Python or Node for data ingestion, and SQLite or Postgres for storage. Deployments should be Dockerized, with scheduled fetches handled via GitHub Actions or cron jobs, and media stored in S3 or GCS.

## Continuity and Ownership: Designing for Survival

The most significant risk to Pillar 7 projects is the lack of a named continuation champion. To prevent the project from dying on Sunday night, teams must reduce the ownership load and design the system to be easily adopted by City Communications, Planning departments, or local arts alliances.

### Handoff Checklist

Every submission must include a comprehensive README, a 5-minute demo video, a one-page operations runbook, a contact list, and a realistic 30/60/90-day task outline for the adopting agency.

## Community Engagement Plan

Technology alone cannot capture stories. A successful deployment requires a 30-day story drive partnered with 2–3 community organizations to gather early feedback, refine prompts, and test moderation workflows.

### Inclusive Outreach Tactics

Outreach must include English and Spanish materials, pop-up events at local libraries and senior centers, QR codes placed at cultural venues, and physical "story booths" at community gatherings.

## Roadmap Beyond the Weekend

The hackathon is just the beginning. Phase 1 involves hardening the MVP and finalizing content seeding. Phase 2 focuses on institutional pilots with museums. Phase 3 expands neighborhood coverage and analytics, and Phase 4 establishes a long-term sustainability plan.

### Funding and Incentives

Teams can leverage the $1,000 Pillar 7 prize [1] [3] as seed funding to host the application. Long-term sustainability should explore microgrants from local arts councils and sponsorships to cover ongoing transcription and hosting costs.

## References

1. *City of Richmond to Partner in City's First-Ever Civic Hack-a-thon | Richmond*. https://www.rva.gov/press-releases-and-announcements/news/city-richmond-partner-citys-first-ever-civic-hack-thon
2. *Mayoral Action Plan | 2025*. https://rva.gov/sites/default/files/2025-10/2025-MAP-Oct15_F.pdf
3. *Richmond Civic Hackathon: Richmond's best hustlers, hackers, and artists solving the city's toughest challenges. - Devpost*. https://hack-for-rva.devpost.com/?ref_feature=challenge&ref_medium=discover
4. *Pillars | Richmond*. https://www.rva.gov/mayors-office/pillars
5. *Bilingual Latino oral history exhibit opens at the Valentine*. https://www.wric.com/news/bilingual-latino-oral-history-exhibit-opens-at-the-valentine/
6. *Case Study: Launch of the "Nuestras Historias" Exhibit at The Valentine Museum - Joe Kutchera*. https://joekutchera.com/case-study-launch-nuestras-historias-exhibit-valentine-museum/
7. *Black History Museum Richmond VA: Unearthing Virginia's Enduring African American Legacy in the Commonwealth - Wonderful Museums*. https://www.wonderfulmuseums.com/museum/black-history-museum-richmond-va/