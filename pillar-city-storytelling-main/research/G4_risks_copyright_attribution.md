# De-risking RVA Arts Data: Rights, Attribution, and Consent Playbook

## Executive Summary

Navigating the intellectual property landscape of Richmond's arts and cultural data requires moving beyond technical feasibility to legal and ethical compliance. Arts organizations retain copyright over their promotional materials, and scraping this data without permission exposes projects to reputational harm and takedown requests. 

Key findings indicate that the Eventbrite API offers a compliant path for event aggregation, provided developers adhere to strict rules: mandatory linkbacks, a prohibition on storing past event data without user consent, and a strict ban on scraping [1] [2]. For civic storytelling, treating user submissions as intellectual property is paramount. The Valentine Museum models this through formal Deeds of Gift to transfer rights [3], while platforms like Esri require users to grant broad, royalty-free licenses for uploaded content [4] [5]. To succeed, data products must position themselves as "finders, not publishers," implementing robust attribution schemas, explicit consent flows, and rapid takedown protocols.

## Why Rights and Attribution Will Make or Break RVA's Arts Data Products

### The stakes for small orgs—reputation and revenue on the line

Misattribution risk is material for small arts organizations. A single event listing may involve a venue, a presenting organization, individual artists, and a ticketing platform. An aggregator that surfaces this event without clear attribution could misattribute the event to the wrong organization, omit artist credit entirely, or present the aggregator itself as an authoritative source. In Richmond's tight-knit arts community, misattribution causes real reputational harm—such as a gallery incorrectly listed as closed or a ticket link that goes to a defunct page. Trust-first product patterns and responsive correction tooling are essential.

## Source-by-Source Rights Map: What You Can Legally Republish and How

### Eventbrite API—Compliant path with mandatory linkback and storage limits

Eventbrite provides a structured API for pulling event data, ticket classes, and venue information [6], but its use is governed by strict terms. The API Terms of Use require that any application displaying Eventbrite site content must show the event title and a direct, crawlable link (without a "nofollow" attribute) to the associated Eventbrite webpage [1]. Furthermore, developers may store data relating to future events, but are explicitly prohibited from storing content relating to past events unless the user has given explicit permission [1]. The API enforces a rate limit of 1000 calls per hour on each OAuth token [1]. Crucially, Eventbrite's general Terms of Service prohibit scraping, crawling, or employing automated means to extract data from their sites for commercial purposes [2].

### Facebook Page Events—Restricted access; plan for App Review and PPCA

Following heavy restrictions in 2018, accessing Facebook Events data requires elevated approvals. Graph API access to Page events typically needs specific Page permissions and App Review. Reading public Page content at scale often requires "Page Public Content Access" plus Business Verification. Projects should use Facebook only as a secondary source, plan the compliance path carefully, and limit initial scope to whitelisted Pages.

### Galleries/venues RSS and iCal—Lowest-friction pipes with variable licenses

[Inference] Many small Richmond gallery and arts organization websites do not have explicit terms of service addressing automated scraping. This means the legal status of aggregation is ambiguous, though not clearly prohibited for non-commercial use. To mitigate risk, aggregators should default to providing a link, a short excerpt, and a thumbnail where the license is unclear, avoiding the republication of high-resolution images without direct permission.

## Attribution Architecture: Getting Credit, Canonicality, and Provenance Right

### Model the ecosystem—venue, presenter, artists, ticketing platform

To avoid misattribution, the database schema must separate entities. Design an attribution schema with distinct fields for the organizer, presenter, venue, featured artists, and the canonical ticket URL. This ensures that credit is accurately distributed and users are directed to the correct point of sale.

### "Finder not publisher"—UX and policy patterns

Aggregators risk presenting themselves as the authoritative source, especially when mixing data from multiple feeds. To combat this "data gravity," the product must be positioned as a finder. Always prefer canonical links, keep excerpts short, prominently display the source and last-updated timestamps, and add a standing disclaimer: "Event details are sourced from organizers; please confirm via the official link."

## Consent and Rights for Civic Stories: Ethics Meets Product

### Museum-grade baseline—Valentine's deed-of-gift model

When residents submit personal stories, that narrative remains their intellectual property. The Valentine Museum handles this by requiring formal agreements; after an object or story is approved, "Deeds of Gift are sent to donors for signature to complete transfer of title and rights" [3]. A story collection prototype must ship with a minimal consent flow that includes a plain-language license to display and archive, clear purpose, and the option to remain anonymous.

### Platform ToS ≠ project license—close the gap

Relying on third-party platform terms is insufficient for project-level rights. For example, Esri's Terms of Use state that users uploading content grant Esri a "nonexclusive, revocable, royalty free, worldwide limited license" to use, store, reproduce, and distribute the data [4] [5]. However, this grants rights to Esri, not the local project team. Projects must add contributor license language to their submission forms that allows the city or partner to use and publicly display stories independently of the hosting platform.

### Anonymization and withdrawal by default for sensitive contexts

Civic storytelling requires ethical guardrails. [Inference] A story collection tool prototype without explicit consent language creates ethical risk if stories are shared in a demo without contributor permission. Projects should offer default anonymization options and a clear policy for contributors to withdraw their stories if identifiable harm is likely.

## Takedown and Withdrawal Protocols: Fast Paths That Build Trust

### Event takedowns—48-hour SLA and authenticated org portal

Event aggregation needs a verified channel for corrections and removals by organizations. Implement an authenticated organization portal and an email intake system with a 48-hour Service Level Agreement (SLA) for takedowns to limit reputational damage.

### Story withdrawals—identity checks and archival decisions

Civic stories need a withdrawal process for contributors. This requires an identity-verified request mechanism and a clear policy distinguishing between public removal and internal archival retention.

## Engineering for Compliance: Data Flows, Caching, and Audits

### Time-bounded caches and field-level provenance

Compliance must be encoded into the architecture. Because Eventbrite prohibits storing past event data without consent [1], systems must implement time-bounded caches with automatic purges post-event. Every field should be source-tagged for auditability, and copy-paste exports of full text should be prevented where licenses are ambiguous.

### Rate-limit aware ingestion and fallback strategies

With Eventbrite enforcing a limit of 1000 calls per hour per token [1], ingestion engines must utilize token-aware request throttling, backoff strategies, and queueing to ensure graceful degradation when sources throttle.

## Unknowns and Validation Plan: Close Gaps Before Launch

### Open questions to resolve

Several factors cannot be verified publicly. It remains unknown whether specific Richmond arts organizations have Terms of Service that explicitly prohibit aggregation, or whether Richmond's City Attorney's office has issued any formal guidance on civic storytelling data rights.

### 2-week validation sprint

Before launch, the team must conduct a 10-site Terms of Service audit of local galleries, confirm Meta's Page Public Content Access checklist, and secure concrete examples of civic story consent language from peer projects.

## Implementation Roadmap: 30/60/90-Day Plan With Gates

### 0–30 days—MVP on "clear-rights" sources

Focus the MVP on low-friction sources. Integrate the Eventbrite API, direct submissions, and licensed RSS/iCal feeds. Establish the attribution schema, version 1 of the consent form, and the takedown workflow. Note that the City of Richmond's Open Data Portal provides data "in an open format with no fee, legal encumbrance, or registration requirement," serving as a model for frictionless public data [7] [8].

### 31–60 days—Scale sources and harden governance

Begin the Facebook Page Events pilot post-App Review. Launch the organizer portal for event management and implement comprehensive monitoring and audit logs.

### 61–90 days—Community onboarding and policy refinements

Conduct outreach to local galleries, finalize withdrawal and anonymization policies, and publish a public transparency report detailing data usage and rights compliance.

## Appendices and Deliverables

### Facts and Inferences

* **Fact:** Eventbrite API Terms of Use require displaying the event title and a direct, crawlable link to the event page [1].
* **Fact:** Eventbrite prohibits storing past event data without explicit user permission [1].
* **Fact:** Eventbrite API rate limits are 1000 calls per hour per OAuth token [1].
* **Fact:** Eventbrite Terms of Service prohibit scraping or employing automated means to extract data [2].
* **Fact:** The Valentine Museum uses Deeds of Gift sent to donors for signature to complete the transfer of title and rights for collections [3].
* **Fact:** Esri's terms require users to grant Esri a nonexclusive, royalty-free, worldwide license to use, reproduce, and distribute uploaded content [4] [5].
* **Inference:** Most small Richmond gallery websites lack explicit scraping terms, making aggregation legally ambiguous but not clearly prohibited for non-commercial use.
* **Inference:** A story collection prototype without explicit consent language creates ethical risks if stories are shared in a demo without permission.
* **Unknown:** Whether specific Richmond arts organizations have ToS explicitly prohibiting aggregation.
* **Unknown:** Whether the Richmond City Attorney has issued guidance on civic storytelling data rights.

### Rights and Attribution Comparison

| Dimension | Arts Event Aggregation (Column A) | Story Collection (Column B) |
| :--- | :--- | :--- |
| **Copyright Ownership** | Retained by venues, artists, or ticketing platforms (e.g., Eventbrite). | Retained by the individual resident/contributor submitting the story. |
| **Republishing Permission** | Requires adherence to API terms (e.g., Eventbrite linkbacks) or explicit ToS; scraping often prohibited. | Requires explicit user consent/license granted via submission forms (e.g., Esri terms, Deeds of Gift). |
| **Attribution Requirements** | Complex multi-entity attribution (venue, presenter, artist) and canonical links required. | Clear contributor credit required, with options for default anonymization. |
| **Takedown/Withdrawal Rights** | Needs a 48-hour SLA takedown portal for organizations to correct misattributions. | Needs an identity-verified withdrawal process for contributors to remove sensitive personal stories. |
| **Commercial Use Restrictions** | Often strictly prohibited by source platforms (e.g., Eventbrite ToS bans commercial scraping). | Governed by the specific license granted by the contributor; usually restricted to civic/non-profit use unless specified. |

*Takeaway: Event aggregation focuses on compliance with corporate API terms and preventing misattribution, while story collection centers on ethical IP transfer and personal consent.*

## References

1. *API Terms of Use | Eventbrite Help Center*. https://www.eventbrite.com/help/en-us/articles/833731/eventbrite-api-terms-of-use/
2. *Eventbrite Terms of Service | Eventbrite Help Center*. https://www.eventbrite.com/help/en-us/articles/251210/eventbrite-terms-of-service/
3. *Donate an Object FAQ - The Valentine Museum*. https://thevalentine.org/learn-and-research/collections/how-we-collect-curate/donate-an-object-faq/
4. *
	Terms of Use - Esri Community
*. https://community.esri.com/t5/user/termsofservicepage
5. *Esri Web Site and Service Terms of Use | Esri Legal*. https://www.esri.com/en-us/legal/terms/web-site-service
6. *Intro to APIs — Documentation | Eventbrite Platform*. https://www.eventbrite.com/platform/docs/introduction
7. *Open Data Portal | Richmond*. https://www.rva.gov/information-technology/open-data-portal
8. *Open Data Portal | Richmond*. https://rva.gov/index.php/information-technology/open-data-portal