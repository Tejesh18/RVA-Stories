# From Resident Voices to City Decisions: Richmond Demo Strategy

## Executive Summary
A successful 90-second demo for a civic story collection tool must bridge the gap between emotional resonance and institutional utility. Best practices dictate a dual-path approach: dedicating 30 seconds to the resident submission experience to build empathy, followed by 60 seconds on the insight dashboard to prove practical value to city planners. Specificity is the engine of credibility in this demo. Generic stories produce vague, unhelpful theme clusters, whereas highly specific Richmond narratives—naming exact streets, neighborhoods, and institutions—generate actionable data. 

To build a compelling and ethical demo, teams can leverage publicly accessible, authentic archival voices from The Valentine and VCU's Historic Fulton Oral History Project, provided they are properly attributed and used non-commercially. These stories must then be connected to live, high-stakes municipal decisions. Currently, Richmond's "Code Refresh" zoning rewrite and the Diamond District redevelopment offer perfect canvases. By mapping resident stories (e.g., the loss of neighborhood-serving retail) directly to zoning levers or public realm infrastructure, the demo will prove that story-based insights can reveal critical policy signals that traditional permit data and public hearings miss.

## Why This Demo Matters — Stories reveal policy signals permits can't see
Without capturing resident stories, the City of Richmond misses visible neighborhood impacts that do not appear in official permit data or formal public hearing transcripts. When a neighborhood loses a corner store or a laundromat, the resulting transit burden on seniors or low-income residents is a lived reality that zoning codes directly influence. A story collection tool captures these granular, human-scale data points and aggregates them into actionable signals. By demonstrating this capability, the tool proves it is not just a community venting space, but a vital diagnostic instrument for zoning and capital decisions.

## Evidence Base and Sources — Verifiable assets we can use now
We can legally and credibly seed the demo with real Richmond voices and align our insights to active municipal decisions using the following verified assets:

* **Valentine/VCU Oral Histories**: The Historic Fulton Oral History Project is hosted on VCU's Scholars Compass [1]. The collection includes streaming audio and downloadable transcripts of interviews with residents like Theresita Braxton [2] and Carolyn Fuller [3]. Copyright is held by The Valentine, and non-commercial use is explicitly permitted, making it ideal for a labeled demo environment [1].
* **Active Richmond Planning Processes**: 
 * **Code Refresh**: The City is updating its zoning ordinance for the first time since 1976 [4]. While public comment on the draft map closed on September 28, 2025, the process continues through Spring 2026 [4]. Crucially, there is a massive engagement gap: as of September 2025, 38 Southside neighborhoods had provided zero feedback [5].
 * **Diamond District**: The City secured $10.3 million from the Central Virginia Transportation Authority (CVTA) in January 2026 to support transportation infrastructure improvements, including traffic signals at Arthur Ashe Boulevard and Hermitage Road, with Phase 1A public infrastructure construction running through March 2027 [6].
* **Civic Insight Dashboard Exemplars**: 
 * **PublicInput**: The City of Rancho Cucamonga uses PublicInput's dashboard to segment resident engagement by demographics (age) and geography, providing a clear visual template for how cities view community data [7].
 * **EngagementHQ**: Granicus offers in-platform dashboards that summarize visitor insights, project participation, and demographic representation [8] [9].

## Demo Architecture — 90 seconds that show input, output, and policy impact
A submission-only demo is emotionally strong but fails to prove institutional ROI, while a dashboard-only demo lacks human context. The optimal architecture is a 90-second flow that shows the input first to anchor empathy, then the output to prove decision utility. 

* **0–30 seconds**: A resident submits a Richmond-specific story. The interface should show prompts that elicit concrete place names and timeframes (e.g., "Street/intersection," "Year," "Institution affected").
* **30–90 seconds**: The perspective shifts to the City staff dashboard. The UI reveals theme clusters, map pins, and a quantified theme tied directly to Code Refresh or the Diamond District, closing on exactly what the City could learn and act upon next week.

## Seed Content Plan — 10–15 specific Richmond stories with clear provenance
To ensure the dashboard generates credible theme clusters, the demo must be seeded with 10 to 15 highly specific Richmond stories. Vague composites will lead to meaningless clusters like "change," which will not impress judges.

The dataset should be a mix of archival and composite content:
* **Archival Snippets (7–10 stories)**: Utilize excerpts from the Historic Fulton Oral History Project [2] [3]. These must be clearly labeled on-screen as "Archival—The Valentine/VCU" to maintain ethical compliance and adhere to non-commercial use terms [1].
* **Targeted Composites (3–5 stories)**: Team-written stories based on real patterns (e.g., "Broad Rock/Midlothian corner store closure in 2021"). These must include specific Richmond nouns, dates, and intersections.
* **Consent and Compliance**: If any real, modern submissions are used, the team must secure explicit visual-demo consent and support anonymization. Compliance is a feature that should be highlighted in the UI.

## Where Stories Meet Decisions — Map themes to 2026 Richmond choices
Positioning the dashboard as a decision aid requires mapping the story themes directly to active 2026 Richmond choices. 

| Process/Decision | 2026 Status & Context | Story Signal to Surface | Actionable Policy Lever |
| :--- | :--- | :--- | :--- |
| **Code Refresh (Zoning Rewrite)** | In progress through Spring 2026; draft map comments closed Sept 2025 [4]. | Loss of neighborhood-serving retail; missing small-format groceries; bus-dependent corridors. | Calibrate mixed-use permissions; allow corner stores by-right with design standards in Southside nodes. |
| **Southside Engagement Gap** | 38 Southside neighborhoods had zero feedback as of Sept 2025 [5]. | Low story density south of the James River; specific Spanish-language needs. | Filter dashboard by geography to surface gaps; trigger targeted, bilingual outreach campaigns. |
| **Diamond District Infrastructure** | $10.37M CVTA funding secured Jan 2026; Phase 1A infrastructure underway to Mar 2027 [6]. | Resident mentions of crossing safety, night lighting, and stormwater near low-lying areas. | Prioritize crosswalk lighting at Ashe/Hermitage and validate stormwater sequencing with story heatmaps. |

**Takeaway**: By connecting a specific theme (like retail loss) to a specific lever (by-right corner store zoning), the tool transitions from a passive listening device to an active urban planning instrument.

## Dashboard UX Blueprint — Mirror familiar analytics to reduce cognitive load
To make the dashboard instantly recognizable and credible to city officials, the UI should emulate proven conventions from platforms like PublicInput and EngagementHQ [9] [7]. 

The 60-second dashboard walkthrough should feature:
* **Theme Clusters**: Clear counts of specific issues (e.g., "Retail loss: 8," "Transit gaps: 5").
* **Geographic Filters**: Map pins colored by theme, with the ability to filter by council district or specific areas like the Southside [7].
* **Demographic Chips**: Visual segments showing language or age breakdowns [7].
* **Quote Drilldowns**: A one-click reveal showing the specific place and time details of a resident's story.
* **Visual Cues**: Clear tags indicating "Source: Archival—The Valentine/VCU" versus "New—Consented," alongside a "Policy Lever" pill that links a cluster directly to a Code Refresh chapter.

## Guardrails and Failure Modes — How to stay credible and safe
Treating compliance and clarity as product features is essential. The primary risks include using real stories without explicit demo consent, presenting archival content as new submissions, and using vague composites that lead to meaningless data clusters. 

To mitigate these risks, the demo must include an on-screen consent indicator and an anonymization toggle. Prompts must force users to input specific places, times, and institutions. Finally, all archival content must feature strict "Archival" labels and attribution to confirm non-commercial demo use under The Valentine's copyright [1].

## Success Criteria — What "impressive" looks like to a planner
The ultimate "chair-sit-up" moment for a City planner is seeing one quantified, place-specific insight tied to a clear zoning or capital lever. The demo will be successful if it displays 10–15 stories resulting in 1–2 dominant clusters, with at least one cluster tied to a Code Refresh lever using a numeric stat (e.g., "7 of 12 stories cite corner-store loss near Midlothian/Broad Rock"). Furthermore, showing geographic coverage that highlights the Southside underrepresentation proves the tool's value in auditing engagement equity [5].

## 90-Second Demo Script — Input emotion → output action

**[0–20 seconds] Problem framing (the cost of not capturing stories)**
"Every zoning map and permit leaves something out: the lived experience. When the corner store on Midlothian closed, seniors in Broad Rock added two bus transfers just to get milk. That impact never shows up in permit data. Our tool captures those stories—and turns them into actionable signals for Richmond's Code Refresh and Diamond District planning."

**[20–50 seconds] Submission experience walkthrough**
"Meet Alicia on the 5100 block of Midlothian Turnpike. She taps 'Share My Story,' enters 'Midlothian & Lynhaven,' selects 'Retail closure,' and adds: 'Our laundromat on Hull closed in 2022; now we bus to Jeff Davis.' She can add a photo, choose English or Spanish, and opt to anonymize. Submit—done in under a minute."

**[JUDGE QUESTION] "Are these real stories?"**
*Prepared response*: "For the demo, we've mixed clearly labeled archival excerpts from The Valentine and VCU's Historic Fulton collection with new, consented submissions. Archival clips are tagged 'Archival—The Valentine/VCU' with source links; today's residents are tagged 'New—Consented.'"

**[50–80 seconds] Insight dashboard walkthrough with a specific theme example**
"Switching to the City dashboard: we have 12 seed stories from Church Hill, Jackson Ward, and Southside. The system generates clusters: 'Retail loss (8),' 'Transit gaps (5),' 'Stormwater (3).' Map pins light up heavily along Midlothian and Broad Rock. Drilling in, the insight reads: '8 of 12 stories mention loss of neighborhood-serving retail within a 10-minute walk.' A policy lever recommendation appears: 'Code Refresh → allow corner stores by-right in Southside nodes with design standards.' That is a zoning adjustment you can act on."

**[JUDGE QUESTION] "But who in the City would actually use this?"**
*Prepared response*: "Day-to-day: PDR's Code Refresh team would use it to validate mixed-use permissions and target Southside outreach gaps. Economic Development would use it for Diamond District public realm priorities, and Council offices would use it to see service gaps by district."

**[80–90 seconds] Closing with "what the City could learn"**
"In just one week, this tool can reveal exactly where zoning changes would restore daily essentials—like corner stores and laundromats—especially in underrepresented Southside neighborhoods. That is resident voice turning directly into Richmond's next policy move."

## Assumptions & Inferences — What we believe and why it matters
* **[Inference]** A demo showing the submission interface followed by a dashboard with 10-15 seed stories, including at least one concrete insight connecting a theme to a real Richmond context, will be significantly more compelling than a demo showing only one of the two components.
* **[Inference]** Stories that include specific Richmond neighborhood names, street names, or institution names (rather than generic urban change language) will produce more credible-seeming theme clusters in the insight dashboard.

## Unknowns & Next Steps — Close gaps that strengthen the "who uses this" answer
* **Unknowns**: It cannot be verified publicly whether Richmond's Office of Community Wealth Building, Department of Planning and Development Review (PDR), or similar offices have any internal, undocumented interest in story-based community input as a complement to formal public comment processes. Confirming this would vastly strengthen the "who uses the insight dashboard" narrative.
* **Next Steps**: The team should attempt to conduct brief stakeholder interviews with a PDR Code Refresh lead or a Southside Council office representative. Additionally, preparing a one-pager that maps dashboard outputs to their current internal decisions (zoning text, outreach plans) will solidify the tool's hypothetical integration into city infrastructure.

## References

1. *
Historic Fulton Oral History Project - VCU Libraries Digital Collections - VCU Scholars Compass - Virginia Commonwealth University | Oral Histories | Virginia Commonwealth University
*. https://scholarscompass.vcu.edu/ful/
2. *Fulton Oral History Project*. https://scholarscompass.vcu.edu/cgi/viewcontent.cgi?filename=0&article=1003&context=ful&type=additional
3. *Fulton Oral History Project*. https://scholarscompass.vcu.edu/cgi/viewcontent.cgi?filename=0&article=1009&context=ful&type=additional
4. *Code Refresh: Help Shape the Richmond You Want to Live In — Southside ReLeaf*. https://www.southsidereleaf.org/blog/code-refresh
5. *City planners want more feedback on rezoning maps from Southside residents*. https://www.richmonder.org/city-planners-want-more-feedback-on-rezoning-maps-from-southside-residents/
6. *Diamond District Funding Advances with Regional Collaboration  | Richmond*. https://rva.gov/press-releases-and-announcements/news/diamond-district-funding-advances-regional-collaboration
7. *Rancho Cucamonga, CA Builds Strong Citizen Engagement | PublicInput*. https://publicinput.com/wp/2023/03/21/rancho-cucamonga-builds-citizen-engagement/
8. *Data - dashboards, reporting and analysis - Live Demo*. https://livedemo.engagementhq.com/data-dashboards-reporting-and-insights
9. *EngagementHQ Community Engagement Reporting & Analytics | Granicus*. https://granicus.com/uk/blog/engagementhq-reporting-analytics/