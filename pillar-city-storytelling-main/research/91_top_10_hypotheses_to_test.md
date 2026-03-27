# Building Richmond's Living Arts & Memory Network: What's Viable Now, What's Not

## Executive Summary

Richmond's arts and cultural memory landscape is rich but digitally fragmented. Small arts organizations heavily rely on Facebook to announce events, but Meta's restrictive Graph API policies make third-party aggregation effectively impossible for a weekend hackathon. Conversely, rich oral history assets exist—such as the Historic Fulton Oral History Project—but are scattered across institutional silos. To build a successful "City That Tells Its Stories" MVP, the strategy must pivot away from brittle social media scraping toward durable, permissioned data feeds (RSS/ICS) and direct institutional partnerships with entities like VCU Libraries and The Valentine. 

## Event Data Landscape: What's Usable Now vs. Brittle

Facebook is where small organizations post, but Meta's API policies make it a dead end for aggregation; reliable sources are RSS/ICS, venue calendars, and direct submissions.

### Meta/Facebook Access Reality Check: Aggregation is Gated

Events data on Facebook is accessible only to Marketing Partners or apps with advanced Page permissions after strict App Review. Small Richmond arts organizations, such as Gallery5 [1], Party Liberation Foundation [2], and Eric Schindler Gallery [3], rely heavily on Facebook Pages for event announcements. However, Meta's Event object limits access to "Events on Users and Pages" strictly to Facebook Marketing Partners [4]. Furthermore, accessing page data requires permissions like `pages_read_engagement`, which mandates a rigorous App Review process [5]. Even with permissions, Meta can reject access based on risk scoring or internal policy rules [6]. Notably, following 2018 policy changes, the API often returns a silent empty response (a 2xx status with no events) rather than an explicit access denied error, which can silently break downstream applications [7]. 

### Known Reliable Feeds and Venues to Target First

RSS/ICS and venue calendars are the most durable sources; a 4–6 source starting set is feasible for a weekend build. To bypass Meta's restrictions, the MVP must rely on direct calendar feeds from established Richmond organizations. An immediate audit of 16 targeted organizations (including VMFA, ICA at VCU, Visual Arts Center, and The Broadberry) is required to confirm the presence of machine-readable RSS or `.ics` feeds.

### Eventbrite's Role: Strong for Ticketed Venues, Weak for Galleries

Expect Eventbrite to cover mid/large venues; galleries and pop-ups skew to Facebook/Instagram; needs empirical Richmond test. While Eventbrite is highly reliable for ticketed events at larger venues, it historically underserves free community gatherings and gallery openings. 

### DoRichmond Audit Plan

DoRichmond's arts specificity is currently unknown; a quick audit can verify coverage and filtering gaps. Sampling 30 days of arts-tagged listings will determine if it adequately serves users looking for niche neighborhood arts events versus general city entertainment.

## Oral Histories Landscape: Existing Assets and Gaps

There's enough digitized material to seed a public hub today, but holdings are scattered and access varies by institution.

### What's Already Digitized and Linkable

VCU Libraries hosts item-level, linkable Fulton interviews, providing excellent seed content. The Historic Fulton Oral History Project, hosted by VCU Libraries, contains 17 interviews with 32 named participants who grew up in the predominantly African-American community from the 1930s through the 1950s [8]. These interviews document life prior to the City of Richmond's 1970s urban renewal plan [8]. Additionally, the Church Hill oral history collection contains 34 transcripts and audiocassettes focusing on social and living conditions during the era of segregation [9].

### Where Access is Unclear or Offline

The Valentine co-led the Fulton project but lacks visible item-level public access; the Black History Museum's oral-history digitization status is not publicly evident. The Fulton project was developed in 2011 in partnership with The Valentine, LISC, and others, with physical copies distributed to various institutions [10]. However, unified digital access remains fragmented.

### Neighborhood Focus Prioritization

Church Hill and Fulton have active documentation; Northside appears under-indexed publicly—an opportunity to capture at-risk memory. Future collection efforts should pilot listening sessions in the Northside to capture the knowledge of older residents before it is lost.

## Channels and Participation: Reaching Skeptical and Older Residents

Voice/phone intake may broaden participation, but clear "use pathways" are essential to overcome skepticism.

### Voice-First Feasibility Test

Audio-first aligns with prior archival formats (like the Church Hill audiocassettes [9]) and may reduce friction for residents aged 65+. A two-week A/B test comparing web form submissions against a dedicated voicemail line in Church Hill and Fulton is recommended to measure demographic reach and story completeness.

### "Use Pathway" Communication to Earn Trust

Participation hinges on showing how stories inform city action. A story collection tool will fail to attract meaningful participation from skeptical residents unless it clearly communicates how these stories will inform City decisions. 

## MVP Plan: Weekend Arts Aggregator That's Actually Useful

A narrow, reliable MVP can be meaningfully better even with 50% coverage if it is transparent and participatory.

### Scope, Sources, and Architecture

Build on 4–6 RSS/ICS/venue sources plus Eventbrite; exclude Facebook entirely; add a "submit an event" feature. The architecture should implement ingestion with source adapters, deduping by title, time, and venue, and offer specific filters for "Gallery openings" and "Neighborhood arts."

### Product Risks and Guardrails

Biggest risks are silent source failures and legal/API compliance. Because platforms like Facebook can fail silently [7], the system requires source health dashboards and error budgets to alert maintainers when ingestion drops.

### Success Metrics and Iteration

Measure utility and community pull, not completeness alone. Key performance indicators should include weekly active users, repeat sessions, and the number of user-contributed events per week.

## Partnership and Continuation: Hand-off to Institutions with Mandate

The Valentine and VCU Libraries are best-positioned to own long-term stewardship; bring the Office of Strategic Communications (OSC) in for city signal amplification.

### Engagement Plan and MOU Scaffolding

Define roles early—hosting, editorial governance, IP/rights, funding. A 30-day MOU draft should be established with The Valentine as the program owner and VCU Libraries as the digital host, leveraging their existing infrastructure [10].

## Risks, Ethics, and Rights

Protect contributors' rights, avoid scraping restricted platforms, and ensure accurate representation of communities.

### Data Rights and Consent

Oral histories need explicit consent, clear licenses, and takedown paths. Standardized contributor agreements and a published takedown standard operating procedure are mandatory before launching any public collection tool.

## Research Gaps and Next Steps

Several hypotheses remain untested; time-boxed audits and pilots will close them quickly.

### 10-Hypothesis Status and Next Actions

| Hypothesis | Status | Evidence (examples) | Next Action |
| :--- | :--- | :--- | :--- |
| H1: Org calendars exist; <50% have RSS/ICS | Unresolved | Target list of 16 orgs identified; feed presence not yet audited | 2-hour audit: record calendar URL + RSS/ICS presence |
| H2: Eventbrite misses galleries/pop-ups | Unresolved | Anecdotal; no Richmond-specific recall test yet | 90-day query + 6-gallery cross-check |
| H3: Facebook Events primary for small orgs; API inaccessible | Confirmed | Gallery/collectives use FB Pages [1] [2]; Event API gated to Marketing Partners [4]; 2018 silent empty responses [7] | Exclude FB from MVP; explore VCU research partnership |
| H4: DoRichmond underserves arts-specific needs | Unresolved | No audit yet | 30-day sample scrape; classify by event type |
| H5: Major institutions hold oral histories; little is digitally accessible | Partially Confirmed | VCU Fulton digital (17 interviews) [8]; Valentine co-led but unclear public item access [10] | Inventory digitized items at VCU; meet Valentine/BHM |
| H6: Older residents hold uncaptured knowledge | Confirmed (directionally) | Church Hill (34 transcripts) [9] and Fulton (17 interviews) [8] show some capture; gaps remain | Pilot Northside outreach |
| H7: Voice/phone collection reaches different demographic | Unresolved | No local test data | 2-week A/B intake test (web vs. voicemail) |
| H8: Without clear "use pathway," participation lags | Unresolved | General civic precedent; no local test | Launch with "how stories inform decisions" page |
| H9: Weekend MVP with ~50% coverage is better than status quo | Unresolved | Known source availability but no UX test | Ship MVP; track WAU and submissions |
| H10: Best continuation via The Valentine and/or OSC | Partially Confirmed | Valentine's prior leadership on Fulton [10] | Convene tri-party meeting; draft MOU |

*Key Takeaway:* The immediate priority is to abandon Facebook integration due to API restrictions and focus on building the MVP using direct feeds, while simultaneously formalizing partnerships with VCU and The Valentine to host the oral history components.

### Facebook Data Access Routes (Why Not for MVP)

| Route | Who Can Use | What You Get | Why It's Not Viable for MVP |
| :--- | :--- | :--- | :--- |
| Graph API Events on Pages/Users | Marketing Partners / apps with advanced Page perms + App Review [5] [4] | Page events with permissions | High-friction approvals; uncertain timeline; risk of rejection [6] |
| Page Public Content Access | Approved apps after App Review | Public Page data (limited) | Strict review; subject to revocation; no broad search capability |
| Meta Content Library/API | Approved researchers | Full public content archive | Research-only license; not for consumer product ingestion |

*Key Takeaway:* Meta's ecosystem is entirely hostile to lightweight, third-party event aggregation. Any attempt to build a sustainable community tool must route around it.

### Oral History Holdings Snapshot

| Institution/Project | Format | Public Digital Access | Notes |
| :--- | :--- | :--- | :--- |
| VCU Libraries — Historic Fulton | 17 interviews; 32 participants [8] | Yes, item-level pages | Stable links; excellent seed content |
| Church Hill (DOVE index) | 34 transcripts; cassettes [9] | Index public; digitization mixed | Signals depth, but access varies |
| The Valentine (Fulton partner) | Exhibition/partnership [10] | Unclear item-level links | Meeting needed to clarify access |
| Black History Museum | Unknown | Unknown | Requires discovery meeting |

*Key Takeaway:* VCU Libraries provides the most immediate, linkable infrastructure for the project's memory pillar, making them the critical first partner for the digital archive.

## References

1. *Gallery5 | Richmond VA*. https://www.facebook.com/gallery5arts/
2. *Party Liberation Foundation | Richmond VA*. https://www.facebook.com/plfrva/
3. *Eric Schindler Gallery | Richmond VA*. https://www.facebook.com/p/Eric-Schindler-Gallery-100057796714102/
4. *Event - Graph API Reference - Meta for Developers*. https://developers.facebook.com/docs/graph-api/reference/event/
5. *Permissions Reference - Graph API - Meta for Developers*. https://developers.facebook.com/docs/permissions/
6. *Facebook graph api integration permissions needed for pages_read_engagement while using a test app - Stack Overflow*. https://stackoverflow.com/questions/63844054/facebook-graph-api-integration-permissions-needed-for-pages-read-engagement-whil
7. *ruby on rails - Facebook events api access 2018 access restrictions - Stack Overflow*. https://stackoverflow.com/questions/49943475/facebook-events-api-access-2018-access-restrictions
8. *
Historic Fulton Oral History Project - VCU Libraries Digital Collections - VCU Scholars Compass - Virginia Commonwealth University | Oral Histories | Virginia Commonwealth University
*. https://scholarscompass.vcu.edu/ful/
9. *Church Hill [Richmond] oral history collection – Desegregation of Virginia Education (DOVE)*. https://dove.gmu.edu/index.php/2018/10/25/church-hill-richmond-oral-history-collection/
10. *Collection: Historic Fulton Oral History Project | Virginia Commonwealth University*. https://archives.library.vcu.edu/repositories/5/resources/312