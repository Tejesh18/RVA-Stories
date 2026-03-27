# Richmond Arts Data Playbook — Buildable Feeds, Blocked APIs, and Partner Paths

## Executive Summary

For hackathon teams tackling the "A City That Tells Its Stories" pillar, the path to a working prototype requires navigating a fragmented digital landscape. Public event data in Richmond is findable but scattered. CultureWorks operates a Localist-powered calendar [1], and VPM directs audiences to Style Weekly’s Artsline [2]. However, relying on Facebook Events is a dead end, as structured access is now restricted to Marketing Partners. 

Audience discovery remains highly multi-channel, relying heavily on community-led platforms like Reddit's r/rva weekend threads, Instagram, and in-person rituals like First Fridays. Fortunately, the region's arts network is robust enough to support direct partner ingestion, with the nonprofit arts sector generating $329.9 million in economic impact in 2022 and encompassing 93 organizations. 

The most time-sensitive and "shovel-ready" civic opportunity for a 48-hour hackathon is arts aggregation. Story collection, while urgent due to neighborhood change, requires parallel scoping for consent protocols and institutional agreements that are not yet documented. Teams should build an aggregation MVP using accessible feeds while drafting a comprehensive consent framework for future oral history pilots.

## Events Data Landscape — Localist and Style Weekly are immediate ingestion anchors; Facebook is not

Start with buildable feeds, not proprietary social media APIs. CultureWorks and Style Weekly provide the most validated and immediately useful starting points for event aggregation.

| Source | Platform/Notes | Machine-readable outputs (status) | Integration action |
| :--- | :--- | :--- | :--- |
| CultureWorks Arts & Culture Calendar | Localist-powered ("Widget powered by Localist") [1] | RSS and iCal available [3] | Pull RSS/ICS; if needed, fall back to HTML widget parsing; request partner access |
| Style Weekly Artsline | Media calendar promoted by VPM | iCal and RSS available [2] | Parse iCal/RSS; contact for stable syndication |
| Visit Richmond events | DMO/tourism listing | No public feed; HTML only [4] | Verify third-party scraper options; treat as tertiary source |
| VMFA calendar | Major institution | No public feed; HTML only [5] | Request export (ICS/XML); fallback to HTML parsing |
| Richmond Public Library events | Library system | iCal available via LibCal [6] | Consume iCal; confirm bulk export support |

**Key Takeaway:** An MVP can cover a meaningful share of high-interest events with just two connectors (CultureWorks and Artsline) plus a public submission form. Run a brief feed discovery pass for the remaining institutional sources.

## DoRichmond Coverage & Gaps — Needs verification; assume complementary rather than comprehensive

Attempts to profile dorichmond.com’s coverage, categories, and feeds yielded no analyzable data in this research cycle. Betting on opaque coverage risks duplicating effort or missing underserved arts niches, such as small galleries, BIPOC organizations, and neighborhood events.

**Action:** Execute a 1-day gap audit. Sample 100 events across CultureWorks, Artsline, and major institutions, then check their presence on DoRichmond. Document missing categories and any feed/export options before deciding whether to augment or differentiate from their platform.

## How Richmond Residents Discover Events — Media calendars + Reddit + Instagram + in-person rituals

Event discovery in Richmond is not platform-unified; it is community-led. Design your tools for multi-channel discovery and user-generated content (UGC) capture.

| Channel | Evidence | Strengths | Gaps |
| :--- | :--- | :--- | :--- |
| Style Weekly Artsline | VPM directs audiences here for a "full calendar... every day" | Broad, updated, media-backed | Feed is hidden behind export buttons; scraping may be fragile [2] |
| r/rva Weekend Thread | Weekly open call for events on Reddit | Hyperlocal, participatory | Unstructured; ephemeral |
| Instagram/Meetup/FB groups | Reddit advice cites IG (e.g., RestlessRVA), Meetup, FB | Fast, scene-centric | Hard to ingest; platform silos |
| First Fridays/Gallery walks | Reddit mentions First Fridays as a go-to | High signal for arts crowd | Offline; requires manual data entry |

**Key Takeaway:** Build distribution alongside aggregation. Publish a weekly digest, auto-post highlights to r/rva, and feature First Fridays to align with existing community habits.

## Facebook Events API Reality Check — Events data restricted to Marketing Partners; plan around it

Treat Facebook as a distribution channel, not a data source. Meta has universally restricted the ability to import Facebook events to external sites for general use. 

Currently, access to Events on Users and Pages via the Graph API is strictly limited to Facebook Marketing Partners. Furthermore, Meta's Graph API v25 introduces ongoing deprecations and changes, underscoring the fragility of relying on their proprietary endpoints. 

**Action:** Exclude Facebook ingestion from the hackathon scope. Favor open standards (RSS/ICS/email ingests) and human-in-the-loop curation.

## Partner Network for Data & Stories — AEP6 identifies 93 orgs; target 10–20 for data-sharing

Partnership beats scraping for data quality and sustainability. The Richmond and Tri-Cities nonprofit arts sector is massive, generating $329.9 million in economic activity in 2022 and supporting 6,742 jobs. The recent AEP6 study collected financial data from 93 local nonprofit arts and culture organizations.

| Organization (AEP6 participant) | Type | Likely data channel | Next step |
| :--- | :--- | :--- | :--- |
| Virginia Museum of Fine Arts (VMFA) | Museum | Site calendar | Request ICS/RSS; map schema [5] |
| Virginia Museum of History & Culture (VMHC) | Museum | Site calendar | Outreach for feed/export |
| The Valentine | Museum/History | Exhibits/events | Co-design story pilot scope [7] |
| Afrikana Film Festival | Festival | Seasonal schedule | Explore Eventbrite/own site |
| Firehouse Theatre | Performing arts | Performance calendar | Request season schedule/feeds |
| Visual Arts Center of Richmond | Arts education | Class/event calendar | ICS export or CSV email |
| Richmond Symphony | Performing arts | Season calendar | Bulk season import |
| Studio Two Three | Community arts | Programs/events | Feed request + submission SOP |

**Key Takeaway:** Stand up a "Top 20 Partners" program. Offer a 30-minute onboarding session and a simple submission template (RSS/iCal/email) to secure reliable data pipelines.

## Oral History & Neighborhood Story Collections — Partial visibility; validate digital accessibility first

While the specific digital oral-history portals and rights frameworks for The Valentine are not fully documented, the Virginia Museum of History & Culture hosts an oral history collection page [8], the Black History Museum lists its collections online [9], and VCU Libraries provides digital collections with fair use guidelines [10].

**Action:** Before building tools, inventory access and rights. Create a discovery worksheet tracking collection names, URLs, digital accessibility, rights/consent, and bulk export options. Schedule brief calls with each institution to identify pilot content.

## Inclusive Storytelling Channels for Older, Non-digital, LEP Residents — Hypotheses to test locally

Reliance on digital-first channels risks excluding older residents, non-digital users, and those with limited English proficiency (LEP). 

**Action:** Pilot low-tech capture modes with trusted intermediaries (libraries, senior centers). Test phone hotline/voicemail stories, paper postcards with scan-and-upload capabilities, and bilingual in-person recording pop-ups to measure participation and consent clarity.

## Consent & Privacy Frameworks for Story Collection — Borrow from StoryCorps/Historypin; design for city use

Consent for civic story collection must be explicit, revocable, and written in plain language. 

**Action:** Compile reference policies from established platforms like StoryCorps and Historypin. Draft a framework that includes tiered consent (public, community-only, private), a clear revocation workflow, media releases, language access (EN/ES), and strict data retention policies. Review this with city legal teams before any collection begins.

## Named Champions & Institutional Capacities — Validate roles and secure commitments

Champions such as Todd Waldo, Meg Hughes [11], Sylvio Lynch III [12], and Chaya Braxton [13] have been identified, but their specific institutional capacities for post-hackathon continuation need validation.

**Action:** Confirm each champion's institutional home, decision authority, and availability. Propose specific roles (e.g., data partnership lead, consent advisor) and secure 60–90 day commitments to ensure project continuity after the hackathon.

## Time-Sensitive Opportunity: Aggregation Now, Story Collection Scoped Next — De-risk with a two-track plan

For the hackathon timeline, arts aggregation is the immediate win, while story collection requires careful, parallel scoping.

| Dimension | Arts aggregation | Story collection |
| :--- | :--- | :--- |
| Data readiness | High: CultureWorks (Localist) [1], Style Weekly Artsline [2] validated | Low-Medium: Partial digital access confirmed (VMHC, BHMVA) [9] [8], but comprehensive rights frameworks require validation |
| External dependencies | Medium: partnerships help but not required to start | High: requires consent framework + institutional MOUs |
| Community urgency | Ongoing: constant need to know "what's on" | High but sensitive: aging residents imply urgency, but consent is critical |
| Build effort (hackathon) | Low-Medium: 2-3 connectors + submission form + digest | Medium-High: capture UX, consent flows, storage, governance |

**Key Takeaway:** Ship an aggregator MVP in the first 2-4 weeks using Localist and Artsline connectors. Simultaneously, draft the story-collection consent framework and hold stakeholder reviews with key museums to define a 60-90 day pilot.

## References

1. *CultureWorks*. https://richmondcultureworks.org/
2. *Events for March 22, 2026 - Style Weekly*. https://www.styleweekly.com/events/today/
3. *Events Calendar - Richmond CultureWorks*. https://calendar.richmondcultureworks.org/
4. *Calendar of Events in Richmond | Things To Do*. https://www.visitrichmondva.com/events/
5. *VMFA Calendar*. https://www.vmfa.museum/calendar
6. *Show All - Upcoming Events - LibCal - Richmond Public Library*. https://rvalibrary.libcal.com/calendars
7. *The Valentine Museum*. https://thevalentine.org/
8. *Oral Histories - Virginia Museum of History & Culture*. https://virginiahistory.org/learn/virginia-vietnam-war/oral-histories
9. *Collections Archive - Black History Museum*. https://blackhistorymuseum.org/collection/
10. *Copyright and fair use - VCU Libraries*. https://www.library.vcu.edu/research-teaching/publishing/copyright/
11. *Meg Hughes - The Valentine*. https://www.linkedin.com/in/meg-hughes-1168743b
12. *about - Sylvio Lynch III*. https://www.sylvioland.com/about
13. *Community-Centered Governance: Richmond's Approach to ...*. https://www.newamerica.org/insights/revitalizing-civic-engagement-through-meaningful-power-shifts/community-centered-governance-richmonds-approach-to-tackling-income-inequality-policy-strategist-chaya-braxton/