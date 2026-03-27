# evidence_grounded_answering

Purpose: Answer user questions using only content actually present in this repository corpus, with explicit grounding and uncertainty marking.

## When To Use
- Any time a factual claim about Richmond programs, data, services, or institutions is being made
- When a user asks: "Does X exist?" "Is Y available?" "What does the City do about Z?"
- When an agent is about to state something it cannot directly verify from files it has read
- Before asserting that a dataset, API, service, institution, or partnership exists
- Before claiming a tool requires consent, has legal requirements, or poses specific risks

## Inputs
- User question
- Files read in current context
- Optional: `evidence_log.md` for verified claims

## Outputs
- Answer grounded in specific file content
- Inline citations for each substantive claim
- Explicit uncertainty markers for unverified statements
- "Not found" statements when information is absent

## Process

### Step 1 — Establish What Has Been Read

Before answering, state (internally or explicitly) which files have been read. Only make claims from those files. Do not interpolate from general knowledge about civic tech, arts organizations, or Richmond.

### Step 2 — Classify Each Claim

For every substantive claim in your answer, classify it:

| Status | Meaning | Marker |
|--------|---------|--------|
| `Confirmed` | Present in a source file AND verified in `evidence_log.md` | No marker needed; cite source |
| `Stated in corpus` | Present in a research file but not independently verified | `(per [filename])` |
| `Uncertain` | Implied or summarized but not directly stated in a file read | `[Uncertain: implied by X but not stated directly]` |
| `Not found` | Not present in any file read | `[Not found in files read]` |
| `Requires reading` | Likely in a specific file that has not been read | `[Requires reading: filename]` |

### Step 3 — Check the Evidence Log

For claims about:
- Specific portal URLs and their capabilities (e.g., Richmond GeoHub ArcGIS endpoints)
- API access status (e.g., Eventbrite OAuth requirements)
- Institution capabilities (e.g., The Valentine's story collection database)
- Data update cadences or format specifications
- Named program availability or stakeholder roles

Cross-check `evidence_log.md`. If the claim has an `E-` entry with `Confirmed` status, cite it with high confidence. If the claim is not in the log, mark it `[Stated in corpus: not independently verified]`.

### Step 4 — Formulate the Answer

Structure:
1. Direct answer to the question
2. Supporting evidence with citations
3. Explicit uncertainty statements
4. What is NOT covered (to set expectations)

### Step 5 — Apply the Anti-Fabrication Check

Before finalizing the answer, run this check:

- Does every named institution or organization actually appear in a file I have read?
- Does every dataset or API I mentioned actually appear in D section files or `02_data/`?
- Does every URL I mentioned appear in `evidence_log.md` or a research file?
- Am I inventing specificity (exact percentages, exact dates, exact counts) not present in the source?
- Am I claiming consent requirements or rights restrictions without having read G2 or G4?

If any check fails → remove or mark the claim as `[Unverified]`.

### Step 6 — State Scope Limits

At the end of the answer, state:
- What files were used to answer this question
- What topics the answer does NOT cover because relevant files were not read

## Required Language

When information is absent, use:
- "This repository does not contain that information."
- "I cannot verify that from the files I have read in this session."
- "That would require reading [specific file] which I have not yet loaded."
- "[Unverified]: this appears in a summary but I have not read the source file."

Do NOT use:
- "Likely..." (without a citation)
- "Generally..." (as a hedge for an ungrounded claim)
- "It is common for cities to..." (implies external knowledge not in corpus)
- "I believe..." (implies opinion substituting for evidence)
- "You should be able to..." (implies capability not verified in corpus)

## Example

**Question:** "Can we use the Eventbrite API to get Richmond arts events?"

**Grounded answer:**

Yes, with important caveats. The Eventbrite API is a REST-based service requiring OAuth 2.0 authentication — there is no anonymous public access (per `research/D1_data_eventbrite.md`). The search endpoint accepts location parameters but community reports flag potential instability with location-based search (per `research/D1_data_eventbrite.md`). Results are paginated at a maximum of 50 per page.

A critical coverage gap exists: Richmond's flagship institutions — including the Richmond Ballet, Virginia Repertory Theatre, and the Modlin Center — use independent ticketing platforms like Etix and Spektrix rather than Eventbrite (per `research/D1_data_eventbrite.md`). Eventbrite is therefore recommended as a secondary pillar in a multi-source architecture, not a sole source.

[Requires reading: `research/D3_data_rss_calendar_feeds.md` for what other sources could supplement Eventbrite.]

*Files read for this answer: D1*
*Not covered: D2 (social media restrictions), D3 (RSS/iCal feeds), D5 (GIS data)*

## Anti-Patterns

- Never state a Richmond institution has an API without a source file citation
- Never quote a specific statistic (e.g., "30-50 upvotes on Reddit") without citing the source report
- Never say "Richmond has X capability" based only on index.json summaries
- Never blend confirmed and uncertain claims in the same sentence without differentiation
- Never claim consent is "handled" without specifically citing G2 or G4
