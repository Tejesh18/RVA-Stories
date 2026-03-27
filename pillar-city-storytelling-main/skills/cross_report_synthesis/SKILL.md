# cross_report_synthesis

Purpose: Synthesize findings from multiple research reports into a coherent answer while preserving source traceability and acknowledging uncertainty.

## When To Use
- A user asks a question that spans multiple reports or sections
- A team needs a summary of findings across a problem domain (e.g., "what does the research say about consent across all storytelling reports?")
- An agent needs to answer: "What does the corpus say about X across all relevant reports?"
- A user asks for a synthesis of risks, data sources, or opportunity spaces

## Inputs
- User question or synthesis goal
- List of relevant report files (from `research_corpus_navigation` skill)
- Access to the source `.md` files

## Outputs
- Synthesized answer with per-claim source citations
- Tensions or contradictions noted explicitly
- Confidence level per claim (confirmed, likely, uncertain)
- List of reports read vs. reports not read
- Identified gaps where synthesis is incomplete

## Process

### Step 1 — Load Navigation Context

Before synthesizing, confirm you have run `research_corpus_navigation` or equivalent to identify which files are relevant. Do not synthesize from random file selections.

### Step 2 — Read Source Files Fully

For each file in the reading list:
1. Read the full `.md` file (not just summaries or frontmatter)
2. Note specific claims, data points, named entities, and source citations
3. Note the confidence level of each claim: does the report cite a primary source, or is it a secondary synthesis?

Do NOT synthesize from index.json summaries alone. Summaries are navigation aids, not authoritative content.

### Step 3 — Build a Claim Map

For each substantive claim you plan to include:

```
Claim: [statement]
Source: [filename, section heading if helpful]
Confidence: confirmed | likely | uncertain
Primary source: [URL or citation if available in the report]
Conflicts with: [other report + how it conflicts, if applicable]
```

### Step 4 — Identify Tensions and Gaps

Before writing the synthesis, explicitly check:
- Do any reports contradict each other? (If so, note both positions and their sources)
- Are there claims that appear in one report but are absent from others where you would expect them?
- Are there questions that the reports together still do not answer?

Flag gaps with: `[Gap: no report in this corpus addresses X]`

### Step 5 — Write the Synthesis

Structure:
1. **Scope**: which files were read, which were not
2. **Main findings**: 3–7 bullet points with inline citations
3. **Tensions**: any conflicting information and its sources
4. **Gaps**: what the corpus does not cover
5. **Confidence summary**: overall confidence in the synthesis

### Citation Format

Use inline citations:
- `(per research/A1_problem_landscape_arts_discovery.md)`
- `(per evidence_log.md, E-001)`
- `[Unverified: not found in files read]`
- `[Uncertain: mentioned in summary but not verified in source]`

Never blend claims from different sources into a single uncited sentence.

### Step 6 — State What Was NOT Read

Always end the synthesis with:

```
Files read for this synthesis:
  - research/[FILE].md
  - research/[FILE].md

Files not read (possibly relevant):
  - research/[FILE].md — reason it may contain relevant information
```

This allows the user or a future agent to know the synthesis is incomplete if additional files exist.

## Anti-Patterns to Avoid

- **Never** synthesize from index.json summaries alone
- **Never** blend claims from different reports without attribution
- **Never** omit tensions or contradictions to make the answer cleaner
- **Never** claim the synthesis is complete if relevant unread files exist
- **Never** invent figures, statistics, or named programs not present in source files
- **Never** state consent requirements without reading G2 directly

## Example Output Structure

```
**Synthesis: What data sources are available for a Richmond arts aggregator?**

Files read: D1, D2, D3, D5, 02_data/source_inventory.csv
Files not read (possibly relevant): D4 (oral history archives — relevant if storytelling is in scope)

**Main Findings**
1. Eventbrite provides an OAuth 2.0 REST API with search-by-location and returns up to 50 results per page (per D1; note: community reports flag location search fragility).
2. Facebook Events API access has been severely restricted since 2018 — building on this data source will cause projects to stall (per D2).
3. Several Richmond arts organizations publish RSS and iCal feeds that are accessible without authentication (per D3).
4. Richmond GeoHub provides Arts & Cultural District Incentive Zone boundaries as an ArcGIS FeatureServer — API-ready (per D5).

**Tensions**
- D1 recommends Eventbrite as a "high-yield secondary pillar" but D2 confirms that the platform is insufficient as a sole source (per D2; consistent framing, not a true conflict).

**Gaps**
- [Gap: no report specifies exactly which Richmond venues publish iCal feeds vs. require web scraping]

**Confidence: Moderate-High** — core data claims come from dedicated D section reports; individual feed availability not independently verified.
```
