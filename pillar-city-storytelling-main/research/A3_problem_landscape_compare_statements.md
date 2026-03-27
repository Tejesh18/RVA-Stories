# Pillar 7, Right-Now ROI: Choosing Between Arts Discovery and Resident Stories in Richmond

## Executive Summary

For teams competing in the Richmond Civic Hackathon under Pillar 7 ("A City That Tells Its Stories"), choosing the right problem statement is the difference between a viable pilot and a stalled prototype. Based on current Richmond civic data, **Resident Stories as Civic Insight** offers a significantly higher return on investment for a 48-hour build than Arts Event Discovery. 

The City of Richmond is currently midstream in major equity-centered planning cycles. The Richmond Connects initiative recently incorporated feedback from over 20,000 residents [1], and the Office of Neighborhood Engagement (ONE) was established in 2024 to foster community participation [2]. This creates an immediate, urgent demand for tools that process qualitative resident feedback. Furthermore, rich, exportable data is already available via Richmond Connects' public ArcGIS dashboards [3]. Conversely, while special events require permits 45 days in advance [4], there is no centralized, open-data feed for arts events, making an event discovery platform highly risky for a weekend hackathon (Inference). Teams should prioritize the Resident Stories track to maximize their scores in the "Impact" and "Feasibility" judging criteria [5].

## Decision Context — City Engagement Cycles

### Civic Urgency Peaking Around Lived-Experience Inputs
Richmond is actively seeking ways to operationalize resident feedback. The Richmond Connects draft action plan, released in late 2023, was built on feedback from over 20,000 Richmonders [1]. To institutionalize this relationship, the City established the Office of Neighborhood Engagement (ONE) in 2024 to act as a liaison between the community and local government [2]. Additionally, recent community-based participatory research (CBPR) in Richmond, such as a study on substance use, demonstrates that lifting local voices provides critical insights to drive local action [6]. 

### The Missing Infrastructure for Arts Discovery
While arts and culture are vital to Richmond, the provided civic data does not identify a clear, immediate policy window or a dedicated City owner for a unified arts discovery platform. Special events on public property require a conditional use permit submitted at least 45 days prior to the event [4], but this permitting process does not currently output to an open, accessible public events calendar (Inference).

## Data Landscape — What's Extractable in 48 Hours

### Ready-Now Assets for Resident Stories
A weekend hackathon requires immediate data access. The Richmond Connects initiative provides a wealth of accessible data, including a Survey Responses Dashboard, Needs Analysis Mapping (featuring 11 Investment Need Category maps and 10 Equity Factor maps), and a Top Recommendations Dashboard [3]. Furthermore, the Path to Equity policy guide details the results of a 2021 survey with 1,904 participants, noting that 43% of participants were dissatisfied or very dissatisfied with existing transit options [7]. This data is ready to be ingested, mapped, and analyzed.

### Gaps in Event Discovery Data
Building an Arts Event Discovery platform requires a reliable feed of upcoming events. However, the City's open data portals and parks department pages do not list an API or exportable dataset for permitted events [4] [8]. Relying on web scraping third-party calendars introduces severe technical friction that could consume the entire 48-hour window (Inference).

## Dimension-by-Dimension Comparison

The following table evaluates the two problem statements across the six requested dimensions to determine the optimal hackathon strategy.

| Evaluation Dimension | Resident Stories as Civic Insight | Arts Event Discovery | Advantage |
| :--- | :--- | :--- | :--- |
| **1. Urgency** | High. Aligns with active Richmond Connects planning [1] and the newly established ONE [2]. | Low. No immediate, time-bound City process identified that depends on this tool (Inference). | **Resident Stories** |
| **2. Accessible Data** | High. Connects StoryMaps, Needs/Equity maps, and survey dashboards are live and exportable [3]. | Low. Special event permits exist [4], but no open dataset is published (Inference). | **Resident Stories** |
| **3. Continuation Pathway** | Clear. Can be handed off to ONE [2] or the Office of Equitable Transit and Mobility [3]. | Unclear. Lacks an identified City "owner" or governance structure in the provided data. | **Resident Stories** |
| **4. Compelling Demo** | High. Can leverage existing equity maps [3] to show automated clustering and geographic overlays. | High Risk. Visually appealing only if a reliable data feed is manually created or scraped (Inference). | **Resident Stories** |
| **5. Equity Implications (D8)** | Strong. The Path to Equity survey captured 226 responses from the Southside [7], directly addressing mobility barriers. | Moderate. Access to arts is an equity issue, but less directly tied to immediate infrastructure needs. | **Resident Stories** |
| **6. Both in 48 Hours?** | Feasible only as the primary framework, with events acting as a secondary data layer. | Feasible only if the scope is drastically reduced to a small, manually curated list of events. | **N/A** |

*Key Takeaway:* Resident Stories dominates across almost all dimensions, particularly in data accessibility and continuation pathways, making it the safest and most impactful choice for a 48-hour sprint.

## Risks and Mitigations

### Data Quality and Bias Controls
Open civic forums can easily backfire without proper guardrails. During the Path to Equity survey outreach, a post on the City's Facebook account received nearly 350 comments, many of which were "intentionally incendiary in nature" and expressed explicit biases [7]. 
* **Mitigation:** A Resident Stories platform must implement guided prompts, human-in-the-loop moderation, and strict codes of conduct to ensure the data remains actionable and safe.

### Privacy, Consent, and Accessibility
To meet the hackathon's accessibility judging criteria [9], the platform must ensure that story collection is genuinely usable for intended users. This includes plain-language consent forms, screen-reader compatibility, and multilingual support to capture a truly representative sample of Richmond's diverse neighborhoods.

## Demo Pathways and Continuation

### Stories MVP: Geo-Tagged Narratives and Insight Cards
A winning demo for Resident Stories should focus on a "stories-to-insights" pipeline. Teams can build an MVP that ingests qualitative comments, tags them by geography (e.g., Southside/District 8), and overlays them onto the existing Richmond Connects Equity Factor maps [3]. The final output should be 3-5 policy-facing "insight cards" that summarize community needs, directly addressing the "Impact" and "Feasibility" judging criteria [5].

### Handoff to City Teams
The continuation pathway for this project is highly defined. The MVP can be pitched directly to the Office of Neighborhood Engagement (ONE), which is tasked with assisting with problem-solving and acting as a liaison between the community and local government [2]. 

## Both-Problems Integration

### Conditions for Addressing Both
Attempting to solve both Arts Event Discovery and Resident Stories in 48 hours is highly risky but possible under strict conditions:
1. **Pre-curated Data (Inference):** Because no open event feed exists, the team must manually seed a small list (25-50) of known, permitted events at City venues.
2. **Events as Story Nodes:** Instead of building a comprehensive calendar, use the curated arts events as geographic "nodes" to capture resident stories. For example, prompt attendees to share stories about their transit experience getting to the event, overlaying this data onto the Richmond Connects Needs Analysis maps [3].
3. **Scope Guardrails:** Cap event data entry at 2-3 hours. Dedicate the vast majority of the hackathon to the story-capture mechanism and equity analysis to ensure a functional demo.

## Recommendation

**Prioritize Resident Stories as Civic Insight.** 

If a team can only choose one problem statement, Resident Stories is the definitive recommendation. It is more urgent due to active City engagement cycles [1], has immediately accessible public data via Richmond Connects [3], offers a clear handoff to the Office of Neighborhood Engagement [2], and delivers a reliably compelling demo under weekend constraints. This path squarely advances equity implications for areas like the Southside [7] and perfectly aligns with the hackathon's core judging criteria.

## References

1. *City releasing Richmond Connects draft action plan addressing transportation needs | Richmond*. https://www.rva.gov/press-releases-and-announcements-public-works/news/city-releasing-richmond-connects-draft-action
2. *Neighborhood Engagement | Richmond*. https://rva.gov/neighborhood-and-community-services/neighborhood-engagement
3. *Richmond Connects: Map Collection Overview*. https://storymaps.arcgis.com/stories/f97d698bdb1e4be79d0bce1717c3bc27
4. *Special Event Planning | Richmond*. https://www.rva.gov/parks-recreation/special-event-planning
5. *Richmond Civic Hackathon: Richmond's best hustlers, hackers, and artists solving the city's toughest challenges. - Devpost*. https://hack-for-rva.devpost.com/?ref_feature=challenge&ref_medium=discover
6. *
            A community conversation process to establish resident and service provider perspectives on needs related to use and treatment of opioids and substances - PMC
        *. https://pmc.ncbi.nlm.nih.gov/articles/PMC12886460/
7. *A Policy Guide for Richmond Connects*. https://rva.gov/sites/default/files/2022-02/PTE%20FINAL%202.18.pdf
8. *Forms | Richmond*. https://www.rva.gov/planning-development-review/forms
9. *Accessibility Hackathon: Create apps that solve real-world accessibility challenges. - Devpost*. https://accessibility-hackathon.devpost.com/