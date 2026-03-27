# 48-Hour Civic Story MVP: Ethical Collection, Honest Insights

## Executive Summary

Building a resident story collection and insight tool in a 48-hour hackathon presents a unique set of technical and ethical challenges. The primary feasibility gate is not code speed, but ethical responsibility. While a basic submission form can be built in hours, skipping explicit consent and anonymization to "go faster" creates an ethical blocker that should prevent a public demo. 

Furthermore, insight dashboards fail without data. Hackathon teams often spend 80% of their time building sophisticated NLP infrastructure only to have no corpus to run it on. The remedy is pre-seeding 10–15 stories or utilizing clearly labeled archival datasets, such as the Historic Fulton Oral History Project [1]. For the insight engine, GPT-based per-story tagging is demo-ready and fits the time constraints, whereas corpus-level clustering (LDA, k-means) does not. Success requires strict scope discipline: lock down a responsible intake form, implement simple GPT tag extraction, and frame the final demo honestly as an illustrative prototype rather than a statistically robust community sentiment analysis.

## MVP Goal and Success Criteria — Ship a responsible, believable demo that proves value with 15–20 real or archival stories

The definition of "done" for this MVP is a responsible intake pipeline paired with per-story tags and simple aggregated insights, rather than exhaustive analytics. 

### What "good" looks like at 48 hours — consent-first intake + tag frequency + honest framing

A safe, minimal, transparent pipeline beats a fragile, over-engineered stack in a hackathon. The fastest path that still tells a compelling story involves three components: a responsible form with explicit consent, per-story GPT theme tags, and a frequency list mapped by neighborhood. Attempting geo-clustering, advanced topic models, or complex user accounts will crowd out these must-have features.

## Feasibility of Story Collection — Build the form fast; invest time in consent and safeguards

The collection interface is technically straightforward but carries significant ethical weight. A basic form with fields for neighborhood, time period, story text, and optional name can be built in 3–4 hours. However, building it responsibly takes more time and deliberate UX design.

### Minimum viable consent UI patterns you can copy (Street Story, EngagementHQ)

Proven civic tech tools provide clear templates for minimum viable consent. The UI must use plain-language consent, avoid Personally Identifiable Information (PII), emphasize voluntary participation, and require an explicit terms/privacy check. 

* **Street Story (UC Berkeley SafeTREC):** Their consent flow explicitly informs users that participation is voluntary and involves minimal risk [2]. It instructs users to ensure descriptions "do not include identifying information, such as names or vehicle license plates numbers" [2]. It also guarantees that data will be handled confidentially and that any published results will have individual names removed [2].
* **EngagementHQ (Bang the Table):** For their "Stories" tool, if unverified participation is enabled, users must provide an email and screen name, and explicitly "agree to the terms of use and privacy policy before submitting" [3]. Their privacy policy clearly outlines how engagement information (content created during interactions) and profile information are collected and used [4].

### Public intake vs. closed beta: moderation, guidelines, and demo safety

Opening a public, anonymous story intake during a 48-hour hackathon invites harmful content and consent gaps. Established platforms pair open input with strict guidelines, moderation, and user registration. For example, coUrbanize requires users to register to post comments, ensuring that registration data is governed by their Privacy Policy [5]. They also emphasize creating messaging that matches the project phase to generate productive engagement [6]. 

**Action:** Keep intake in a "closed-beta" state restricted to pre-seeded contributors during the hackathon. Publish a read-only demo. If live input must be accepted, enable manual moderation and display clear community guidelines.

## Data Strategy — Pre-seeding real content or using clearly labeled archival transcripts

No corpus means no insights. Teams must secure 10–15 stories by Friday evening or use archival material transparently to have a functional demo by Sunday.

### Seed dataset sources with rights signals

If live pre-seeding is not possible, curated public oral history excerpts can serve as a demonstration dataset. The Valentine Museum, in partnership with VCU, hosts the Historic Fulton Oral History Project, which contains 17 interviews with 32 participants documenting life in the predominantly African American neighborhood from the 1930s through the 1950s [1]. 

The collection includes written transcripts and audio files [1]. Crucially for hackathon use, the rights are clearly defined: all interviewees donated copyright to The Valentine [1]. The rights statement explicitly notes: "You are permitted to use this material in any way that is permitted by copyright. In addition, non-commercial use of this material is permitted. For any commercial uses, permission is required" [7]. 

**Unknowns:** It must be verified whether a civic tech prototype demonstration qualifies strictly as non-commercial use under these terms. Additionally, it is unknown whether local Richmond community organizations (e.g., RVA Community Land Trust) have constituent story collections available for pilot data.

### Outreach plan for 10–15 pilot stories in 24 hours

To run insight tools on real data, teams should reach out to 5–10 community members before the hackathon begins. Leveraging 2–3 civic organizations or neighborhood associations to collect short, structured narratives ensures the NLP pipeline has valid input to process.

## Insight Feasibility — GPT tagging now, clustering later

The AI/NLP component requires a pragmatic approach. GPT API calls can extract themes from short story texts in seconds, but teams must be honest about the statistical limitations of a small corpus.

### Realistic output quality on 15–20 narratives

[Inference] GPT API-based theme extraction on 15–20 stories will produce legible, demonstrable output but should not be presented as statistically robust community sentiment analysis. A prompt asking to "Extract the three most prominent themes from this resident story, using 3-5 word phrases" will yield useful tags. The win is showing traceability from raw text to per-story tags to aggregated patterns.

### Comparison table: GPT tagging vs LDA vs k-means on embeddings

Only GPT tagging fits the 48-hour constraints and small corpora typical of a hackathon.

| Method | Setup Time | Data Needed for Signal | Interpretability | 48-Hour Fit |
| :--- | :--- | :--- | :--- | :--- |
| **GPT per-story themes** | Low | 10–20 stories | High (tags) | Yes |
| **LDA topic modeling** | Medium | 100+ stories | Medium | No |
| **k-means on embeddings** | Medium | 100+ stories | Medium/Low | No |

*Takeaway:* Classical clustering algorithms require larger corpora to produce meaningful results and carry a steep setup cost that derails hackathon timelines. Stick to GPT-based tagging.

### Honesty in framing: "imagine 200 stories" storyboard

The most honest and achievable path is to build a simple aggregation view showing which tags appear most frequently. Frame the insight demo as "imagine 200 stories ran through this system" rather than claiming the 15-story demo corpus represents community-wide insight.

## Cost and Throughput — Pricing, tokens, and rate limits for tiny workloads

Processing 15–20 short stories (roughly 150–250 words each) equates to approximately 3,000–5,000 input tokens. Using a small, fast model (like GPT-4o-mini) for tagging will cost mere cents and easily fall within default OpenAI rate limits. Cost and throughput will not be the bottleneck at this scale.

## Consent and Privacy Patterns — What to show users before "Submit"

A four-part consent block plus an anonymization option is the ethical minimum for any civic story tool.

### Example language components drawn from civic tools

Combine the clarity of Street Story with the explicit agreements of EngagementHQ:
1. **Purpose/Use:** Explain what the stories will be used for in plain language.
2. **PII Guardrails:** Explicitly ask users not to include identifying information like names or license plates [2].
3. **Consent Checkbox:** Require agreement to terms and privacy policies before submission [3].
4. **Confidentiality/Withdrawal:** State that data will be handled confidentially and provide a contact mechanism for withdrawal [2].

### Failure modes and mitigations

The primary failure mode is inviting real resident story submissions without adequate consent, which is an ethical violation. Mitigate this by blocking submission until the consent checkbox is ticked, defaulting to anonymized submissions, and providing a clear withdrawal path.

## Build Sequence Checklist — Weekend plan with "cut if behind" controls

[Inference] A team of 3 can build a working story submission form with basic consent language and a simple tag-based insight view in 48 hours if they pre-seed with 10-15 stories before the hackathon begins.

| Time Block | Must-Do Tasks | Nice-to-Have | Cut if Behind |
| :--- | :--- | :--- | :--- |
| **Friday Evening (3–5 hrs)** | Data model (text, neighborhood, time, anonymization flag); Consent copy + links; Static form UI; Seed outreach emails. | Field validation; Basic community guidelines page. | User accounts; OAuth; Rich text editor. |
| **Saturday AM (4–6 hrs)** | Submission backend (store, sanitize text); Admin review UI; GPT tagging function + prompt; Tag schema. | Rate-limit handling; Batch processing. | Any clustering or advanced NLP. |
| **Saturday PM (3–5 hrs)** | Basic insights view (tag frequency, filter by neighborhood/time); Simple map using submitted neighborhood. | Tag co-occurrence chart. | Geo-clustering; Multi-page dashboards. |
| **Sunday AM (2–4 hrs)** | Seed data load (10–15 stories or archival excerpts with labels); QA consent flow; Add withdrawal contact. | Light theming. | Public intake toggle. |
| **Sunday PM (2–3 hrs)** | Demo script: one story → tags → rollup; Slides with ethics notes and rights; "Imagine 200 stories" mock. | Short video capture. | Live open intake during demo. |

*Takeaway:* Timebox decisions strictly. Protect the seed data tasks and slash features early (like user accounts or clustering) to keep the core demo coherent.

## Demo and Pitch Framing — Make it credible, not over-claimed

Lead with ethics, show traceability, and close with a scale-up path. 

### Narrative arc and proof points

In the pitch, walk one story end-to-end: show the raw text, the GPT-extracted tags, and how those tags roll up into an aggregated view. Connect an individual's story to an actionable planning insight, and then show a mocked "what we'd do with 200+ stories" view.

### Risks, unknowns, and next steps

Explicitly name the limitations of the prototype. Acknowledge that small-n results are illustrative. If using archival data like the Historic Fulton Oral History Project, include a rights note in the demo stating these are archival stories, not new submissions [1]. Propose a 4–6 week pilot to collect 200 stories as the logical next step.

## Reference Appendix — Sources, examples, and templates

* **Consent Exemplars:** 
 * Street Story Intro/Consent: safetrec.berkeley.edu/tools/street-story-platform-community-engagement [2]
 * EngagementHQ Stories: helpdesk.bangthetable.com/en/articles/3606145-about-the-stories-tool [3]
* **Community Guidelines/Terms:** 
 * coUrbanize Guidelines: courbanize.com/community-guidelines [6]
 * coUrbanize Terms: courbanize.com/terms-of-use [5]
* **Seed Dataset:** 
 * Historic Fulton Oral History Project: archives.library.vcu.edu/repositories/5/resources/312 [1]
 * Example Item Rights Note: scholarscompass.vcu.edu/ful/16 [7]

## References

1. *Collection: Historic Fulton Oral History Project | Virginia Commonwealth University*. https://archives.library.vcu.edu/repositories/5/resources/312
2. *Street Story - SafeTREC - University of California, Berkeley*. https://streetstory.berkeley.edu/
3. *About the Stories Tool | EngagementHQ Help Desk*. https://helpdesk.bangthetable.com/en/articles/3606145-about-the-stories-tool
4. *Privacy Policy | Live Demo - Granicus*. https://livedemo.engagementhq.com/privacy
5. *Terms of Use - coUrbanize*. https://www.courbanize.com/terms-of-use
6. *Guide to Drafting Engaging, Productive Comment Topics - coUrbanize*. https://www.courbanize.com/blog/guide-to-drafting-engaging-productive-comment-topics
7. *
"An oral history interview with Raymond Jones, March 8, 2012"
 *. https://scholarscompass.vcu.edu/ful/16/