# From Red Flags to Roadmap: Building Equitable Richmond Story Tools

## Executive Summary

The "A City That Tells Its Stories" pillar of the upcoming Hack for RVA event presents a unique challenge: building civic technology that actively resists the default biases of digital participation. Without intentional design, story collection tools and arts aggregators will inevitably skew toward digitally fluent, English-speaking, middle-class residents—the exact demographic this pillar is *not* targeting. 

To succeed, teams must treat the eight identified "Red Flags" as hard stopping conditions. Equity must be engineered into the product through voice-first inputs, mandatory Spanish language options, and zero-login pathways. Furthermore, technical sustainability requires abandoning fragile dependencies like Facebook Events in favor of robust APIs, while ethical sustainability demands explicit consent flows and partnerships with established cultural institutions like The Valentine. By focusing on a narrow set of high-impact equity features and demonstrating a clear "then what" pathway for collected stories, teams can deliver solutions that are both ethically sound and technically viable for the $10,000 prize pool.

## Context and Stakes — Why this pillar matters now

The City of Richmond, in partnership with AI Ready RVA, Plan RVA, and VCU School of Business, is hosting its first-ever civic hackathon, Hack for RVA, from March 27–29, 2026 [1] [2]. The event challenges participants to develop solutions aligned with Mayor Danny Avula's Mayoral Action Plan (MAP) [1] [3]. 

The seventh pillar of this plan is "A city that tells its stories (and tells the truth about its past)" [1]. The hackathon offers a $10,000 prize pool, including a $5,000 Mayor's Choice Award, a $2,500 Moonshot Award, and $1,000 for each of the seven MAP pillars [1]. Success in this pillar requires moving beyond traditional tech-first approaches to prioritize people, place, and purpose, ensuring that the tools built do not inadvertently cause civic harm by excluding marginalized voices [3].

## Risk Landscape — The 8 Red Flags that must shape design

The following eight failure modes represent significant civic harm risks. Each must be treated as a stopping condition unless explicitly mitigated in the project design:

* **RED FLAG 1 — Dominant Narrative Capture:** Designing tools that only work for digitally fluent, English-speaking residents fails the core equity goal.
* **RED FLAG 2 — Tech Access Barriers:** Requiring smartphones, broadband, or modern browsers excludes elderly residents and those facing gentrification.
* **RED FLAG 3 — Claiming to Represent "All" Richmond Voices:** Presenting self-selected submissions as a representative sample is misleading and harmful.
* **RED FLAG 4 — Collection Without Use Commitment:** Gathering stories without a credible "and then what?" pathway results in performative listening and destroys trust.
* **RED FLAG 5 — Manual Curation Dependency:** Aggregators requiring unfunded human staff to maintain listings will decay within weeks.
* **RED FLAG 6 — Facebook Events Dependency:** Relying on Meta's restricted Graph API for public event data is a technical dead end.
* **RED FLAG 7 — Replacing Museum and Archive Work:** Attempting to replace institutions with established consent and preservation practices is unethical.
* **RED FLAG 8 — No Consent Mechanism:** Launching collection tools without explicit, readable consent flows creates severe ethical and legal risks.

## Data Source Viability — Build an aggregator without fragile dependencies

Building a sustainable arts and events aggregator requires selecting data sources that do not require manual upkeep or rely on restricted platforms. Meta's Graph API has severely restricted access to public event data since 2018 [4]. Developers report that even with approved `pages_read_engagement` and `pages_show_list` permissions, accessing in-person events from Pages is highly inconsistent or impossible [5] [6] [7]. 

| Source | Access Path | Policy/Access Risk | Update Automation | Fit for 48h MVP | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Facebook Events | Graph API (page tokens) | High (post-2018 limits; in-person events often inaccessible) | Low (fragile) | No | Exclude by design; note as a known gap in the demo. |
| Eventbrite | Public API | Low | High | Yes | Strong seed for arts and civic events. |
| RSS/iCal Feeds | Standard feeds | Low | High | Yes | Many organizations publish standard calendar feeds. |
| Direct Site Scrapes | Scraping (robots-aware) | Medium (site variance) | Medium | Maybe | Use sparingly for 2-3 high-signal, trusted organizations. |

**Key Takeaway:** Teams must exclude Facebook Events from their architecture to avoid immediate technical failure. Focus entirely on Eventbrite APIs, RSS/iCal feeds, and targeted scraping to ensure the tool survives beyond the hackathon weekend.

## Equity by Design — Features that shift power to underrepresented voices

To mitigate dominant narrative capture and tech access barriers, teams must implement specific features that lower the barrier to entry for non-digital natives.

| Feature (MVP) | Red Flags Mitigated | Complexity (48h) | Notes |
| :--- | :--- | :--- | :--- |
| Voice recording (primary) | RF1, RF2 | Medium | Must work on older Android devices and slow networks via audio compression. |
| Spanish language option | RF1 | Low–Medium | Prioritize consent screens and UI labels; expand to full localization later. |
| No-login submission | RF1, RF2 | Low | Use anonymous IDs to protect privacy and remove friction. |
| 3-step submission flow | RF2 | Low | Reduces cognitive and technical barriers for elderly users. |
| Voicemail hotline | RF2 | Medium | Use a Twilio-style number to accept stories from non-smartphone users. |

**Key Takeaway:** A tool with fewer features that includes voice input and Spanish localization is vastly superior to a feature-rich application that only works in English on an iPhone. Lock these equity features into the MVP scope immediately.

## Consent, Privacy, and Stewardship — Make trust explicit

Launching any story collection feature without an explicit, readable consent flow is both an ethical failure and a legal risk. A mandatory consent screen must be implemented before any submission occurs. This screen must use plain language, clearly state the intended use of the data, and name a specific data steward. 

Users must be given opt-in choices regarding how their stories are used (e.g., public display versus internal research only) and provided with a clear process for requesting the takedown of their data. Without these protections, the city risks exploiting the very residents it aims to uplift.

## Representation and Analytics — Prevent misuse of aggregates

Self-selected story submissions are not a statistically valid sample of the city's population. Any dashboard, summary, or visualization that implies these stories represent "what Richmond thinks" commits a civic harm. 

To mitigate this, every aggregate view must feature a prominent, unremovable disclaimer: "Based on stories voluntarily shared — not a representative sample of Richmond residents." Teams should focus on presenting themes as "what we heard from contributors" rather than definitive civic sentiment, providing transparent submission counts without implying comprehensive coverage.

## Partnerships That Add Legitimacy — Museums and archives as allies

Civic tech projects should not attempt to replace the vital work of established cultural institutions. Organizations like The Valentine have deep expertise in oral histories, established consent practices, and long-term preservation commitments [8]. For example, The Valentine's "Richmond Stories" initiative and their bilingual "Nuestras Historias" exhibit demonstrate their capacity to handle complex, diverse community narratives [9] [10] [11].

| Institution | Why Partner | Complementary Role | Risk if Ignored |
| :--- | :--- | :--- | :--- |
| The Valentine | Active oral histories; community exhibits | Seed content; consent templates; stewardship | Ethical gaps; duplication of effort; lost preservation. |
| Black History Museum | Trusted community narratives | Co-design outreach; host listening sessions | Exclusion of key voices; community mistrust. |
| VCU Libraries | Academic rigor; archiving | Long-term storage; metadata standards | Data loss; poor metadata management. |

**Key Takeaway:** Position your tool as complementary to these institutions. Propose a formal Memorandum of Understanding (MOU) in your continuation plan to handle ongoing stewardship and consent support.

## "Then What?" — Close the loop from collection to action

Building a story collection portal without a credible answer to "and then what?" guarantees failure. Residents who submit stories and see no visible outcome will feel the City engaged in performative listening and will not participate again. 

Teams must be explicit in their demo about the intended use pathway. Show a concrete workflow: for example, how tagged stories route to Neighborhood Services for follow-up, how they are summarized for City Council briefings, or how they serve as seed content for inclusive museum exhibits. Name an owner and establish a cadence for visible updates post-hackathon.

## Sustainability Plan — Automate or fund, but don't wish-cast

An arts event aggregator that requires human staff to review, add, or maintain listings will decay within weeks of launch. Sustainability requires ruthless automation. 

Teams must automate data ingestion using APIs and RSS feeds that self-update. If any manual curation is absolutely required, the team must explicitly document the estimated staff time (hours per week) and propose exactly who will fund and execute this work. Do not launch an aggregator that requires daily human entry without a named budget.

## Platform Constraints and Compliance — Avoid blocked pipes

Meta is actively deprecating legacy metrics and altering API access through 2026 [12]. Furthermore, the Graph API's restrictions on public event data mean that relying on Facebook for an arts aggregator is a guaranteed failure mode [4]. Teams must exclude Facebook from their data architecture entirely, note it as a known gap during their pitch, and rely on stable, accessible sources like Eventbrite.

## Field Testing and Outreach — Prove it works for target users

Testing a civic storytelling tool on a MacBook Pro over gigabit Wi-Fi proves nothing. To ensure the tool meets the pillar's equity goals, teams must conduct pre-demo checks on older Android devices and throttled network connections. Verify that the Spanish UI and consent flows are accurate and that the voicemail submission flow functions correctly. If possible, conduct micro-pilots or listening sessions to capture friction notes from non-digital users and adjust the design accordingly.

## Demo-Day Checklist — Show, don't tell

To win a share of the $10,000 prize pool, your Demo Day presentation must explicitly prove that you have mitigated the Red Flags. Ensure your pitch includes:
* A live demonstration of voice submission in both English and Spanish, requiring no login.
* An aggregate dashboard view featuring the mandatory non-representative disclaimer.
* Proof of automated event ingestion from Eventbrite and RSS/iCal (explicitly noting the exclusion of Facebook).
* A clear view of the plain-language consent screen with a named data steward.
* A dedicated slide explaining the "Then what" workflow, naming a city or partner owner.
* A sustainability slide detailing the automation architecture and accounting for any manual curation hours.

## References

1. *City of Richmond to Partner in City’s First-Ever Civic Hack-a-thon | Richmond*. https://www.rva.gov/press-releases-and-announcements/news/city-richmond-partner-citys-first-ever-civic-hack-thon
2. *Hack for RVA - Richmond's First Civic Hackathon | AI Ready RVA*. https://aireadyrva.com/events/hack-for-rva
3. *Hack for RVA a Civic Hackathon Happening in March - RVAHub*. https://rvahub.com/2026/02/17/hack-for-rva-a-civic-hackathon-happening-in-march/
4. *Breaking Changes - Meta for Developers - Facebook*. https://developers.facebook.com/docs/graph-api/changelog/breaking-changes/%2324-4-2018
5. *Permissions Reference - Graph API - Meta for Developers*. https://developers.facebook.com/docs/permissions/
6. *How to access in person events from a Page - Developer Community Forum - Meta for Developers*. https://developers.facebook.com/community/threads/1976021589590235/
7. *Facebook Graph API - I suddenly am not getting all events ...*. https://www.reddit.com/r/webdev/comments/16o7yeo/facebook_graph_api_i_suddenly_am_not_getting_all/
8. *The Valentine Museum: Uncovering Richmond's Deep-Rooted History and Evolving Urban Tapestry - Wonderful Museums*. https://www.wonderfulmuseums.com/museum/the-valentine-museum/
9. *Case Study: Launch of the “Nuestras Historias” Exhibit at The Valentine Museum - Joe Kutchera*. https://joekutchera.com/case-study-launch-nuestras-historias-exhibit-valentine-museum/
10. *Richmond Stories® - The Valentine Museum*. https://thevalentine.org/explore/richmond-stories/
11. *2017 — Nuestras Historias - The Fight for Knowledge*. https://www.fightforknowledge.org/nuestras-historias
12. *Introducing Graph API v25.0 and Marketing API v25.0I*. https://developers.facebook.com/blog/post/2026/02/18/introducing-graph-api-v25-and-marketing-api-v25/