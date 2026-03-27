# Research Corpus Guide

**A City That Tells Its Stories Pillar — Richmond Civic Hackathon**

This file is the canonical orientation document for both human readers and AI agents using this research corpus. Read it before diving into individual reports.

---

## What This Corpus Is

This repository contains a structured research corpus on Richmond's civic storytelling and arts discovery problem space, organized to support a weekend civic hackathon. It includes:

- **51 deep research reports** generated via Perplexity `sonar-deep-research` (in `research/`)
- **Evidence-synthesized artifacts** (in `03_artifacts/`)
- **Data source inventory** (in `02_data/`)
- **Build and demo guides** (in `04_build_guides/`)
- **Skills** — executable procedural guides for AI agents (in `skills/`)
- **Templates** — team and project scaffolding (in `99_templates/`)

The corpus is grounded in publicly verifiable claims about Richmond. It does not contain invented data, unverified program descriptions, or fabricated citations.

The two core problem domains covered are:
1. **Arts and cultural event discovery** — automating the aggregation of Richmond arts events from fragmented sources
2. **Resident civic storytelling** — capturing and surfacing community narratives to inform City decisions with consent

---

## Canonical Source of Truth

| Priority | File | What It Contains |
|----------|------|-----------------|
| 1 (highest) | `research/[SECTION][N]_*.md` | Primary research reports — authoritative content |
| 2 | `evidence_log.md` | Evidence tracker with verified claims |
| 3 | `research_notes.md` | Promoted findings from verified evidence |
| 4 | `03_artifacts/*.md` | Synthesized artifacts (journeys, recommendations) |
| 5 (lowest) | Index and manifest files | Navigation aids — not authoritative for claims |

**Rule:** Navigation aids (README, index.json, manifest.json, CORPUS_GUIDE.md) reduce search scope. They are not substitutes for reading original reports. Before making substantive claims, read the source report.

---

## How the Corpus Is Organized

### Top-Level Directories

```
research/         ← 51 deep research files (the core corpus)
03_artifacts/     ← synthesized artifacts (research notes, journeys, recommendations)
02_data/          ← data source inventory and index
04_build_guides/  ← MVP shapes, architectures, demo advice
00_core/          ← pillar overview and MAP alignment
01_problem_space/ ← problem statements (scored)
skills/           ← agent skill definitions
99_templates/     ← team and project templates
evidence_log.md   ← evidence tracker (root level in this repo)
research_notes.md ← promoted findings (root level in this repo)
```

### Research Section Structure

The `research/` directory is organized into labeled sections:

| Section | Topic | Files |
|---------|-------|-------|
| `00–01` | Context & Framing | 2 files |
| `90–93` | Cross-Cutting Analysis | 4 files |
| `A` | Problem Landscape | A1–A5 |
| `B` | Users & Stakeholders | B1–B5 |
| `C` | Services & Programs | C1–C5 |
| `D` | Data Sources | D1–D5 |
| `E` | Prior Art & Benchmarks | E1–E5 |
| `F` | Opportunity Spaces | F1–F5 |
| `G` | Risks & Guardrails | G1–G5 |
| `H` | MVP Shape & Constraints | H1–H5 |
| `I` | Demo Strategy | I1–I5 |

---

## How to Navigate the Corpus

### Start With Navigation Artifacts (Always)

**Before reading any research report, use navigation files to narrow scope:**

1. **`manifest.json`** (root) — machine-readable index of all significant files with summaries and tags
2. **`research/index.json`** — structured metadata for all 51 research files (id, section, title, summary, key_terms)
3. **`research/INDEX.md`** — human-readable table of contents for the research directory
4. **`README.md`** (root) — decision phases and overall repo map

### Navigation Decision Tree

```
User question received
        ↓
Is it about the hackathon process?
  YES → README.md, QUICKSTART.md, 04_build_guides/
  NO ↓
Is it about a specific problem domain?
  Arts event discovery → research/A1, A3, B1, D1, D3, F2, H2
  Resident storytelling → research/A2, A5, B3, C3, D4, F3, H3
  Both → read 00_pillar_summary_context first
        ↓
Narrow to section using research/index.json
        ↓
Read original .md files for claims
        ↓
Verify against evidence_log.md if needed
```

### Question-to-Section Mapping

| User Question Type | Start Here |
|-------------------|-----------|
| What problems exist? | `A` section (A1–A5) |
| Who are the users? | `B` section (B1–B5) |
| What services exist already? | `C` section (C1–C5) |
| What data is available? | `D` section (D1–D5), `02_data/` |
| What has been built elsewhere? | `E` section (E1–E5) |
| What should we build? | `F` section (F1–F5) |
| What could go wrong? | `G` section (G1–G5) |
| Is this feasible in a weekend? | `H` section (H1–H5) |
| How do we demo this? | `I` section (I1–I5) |
| What datasets are mentioned? | `D1`, `D2`, `D3`, `02_data/source_inventory.csv` |
| What is the executive summary? | `research_notes.md`, `03_artifacts/` |
| Arts discovery specifically? | `A1`, `A4`, `B1`, `C1`, `C2`, `D1`, `D3`, `F2`, `H2` |
| Resident storytelling specifically? | `A2`, `A5`, `B3`, `B4`, `C3`, `D4`, `F3`, `H3` |
| Consent and privacy risks? | `G2`, `G4`, and `02_data/` |
| What not to build? | `F5`, `E4`, `92_red_flags` |

---

## How to Use the Metadata Files

### `research/index.json`

A JSON array with one entry per research file. Each entry has:
- `id` — file basename (e.g., `A1_problem_landscape_arts_discovery`)
- `section` — section label (e.g., `A`, `B`, `cross-cutting`)
- `title` — display title
- `summary` — 1–2 sentence grounded summary
- `key_terms` — 6 relevant terms for keyword search

**Use it to:** find which files are relevant before reading them. Do not answer questions from summaries alone — read the source `.md` file.

### `manifest.json`

A comprehensive machine-readable index of all significant files in the repository. Each entry includes:
- `id`, `path`, `type`, `title`, `summary`
- `pillar`, `tags`, `recommended_audience`
- `read_after` — what to read first
- `source_of_truth` — whether this file is authoritative

**Use it to:** build a retrieval index, understand the full scope of the corpus, or identify which file type to use for a given purpose.

### `evidence_log.md`

A tracker of verified factual claims with official source URLs, access dates, and verification status. Status values: `Confirmed`, `Likely`, `Missing`.

**Use it to:** check whether a specific factual claim has been verified. Do not invent claims that are not in this log.

---

## How AI Agents Should Use This Corpus

### Required Behavior

1. **Always read navigation artifacts before raw reports.** Start with `research/index.json` or `manifest.json` to identify relevant files. Do not dive into arbitrary `.md` files without knowing their scope.

2. **Read original reports before making substantive claims.** The summaries in index files are useful for navigation, not for citation. If a question requires a specific fact, find it in the source `.md` file.

3. **Scope before answering.** Identify the relevant section(s) first. A question about event data belongs to sections `D` and `A1`. A question about demo strategy belongs to section `I`.

4. **Acknowledge when files have not been read.** If a report appears relevant but has not been read in the current context, say so rather than guessing from summaries.

5. **Cite the source file.** When presenting findings, reference the file they came from (e.g., "Per `research/A1_problem_landscape_arts_discovery.md`...").

6. **Distinguish navigation files from source-of-truth files.** `manifest.json`, `README.md`, `research/INDEX.md`, and `index.json` are navigation aids. They are not authoritative for factual claims.

7. **Mark uncertainty explicitly.** If a claim cannot be verified from the files that have been read, use: `[Unverified]` or `[Requires reading: filename]`.

8. **Apply consent and bias checks.** This pillar involves story collection and community representation. Before recommending any tool that collects personal narratives or aggregates community content, read G2 (consent/privacy) and G1 (representational bias).

### How to Answer Cross-Report Questions

When a question requires synthesis across multiple reports:
1. Use `research/index.json` to identify all potentially relevant files
2. Read the summaries, then decide which reports need full reading
3. Read the source files
4. Synthesize from source content, citing each report separately
5. Note any tensions or contradictions between reports
6. Do not blend claims from different sections without acknowledging the synthesis

### When to Read Additional Files

You MUST read additional files before answering if:
- The question involves a specific dataset or API → read D section
- The question involves a specific user persona → read B section
- The answer requires citing prior art → read E section
- The question is about risk, consent, or guardrails → read G section
- The question involves story collection → also read G1, G2, G4

---

## What This Corpus Does NOT Contain

- Legal advice or eligibility determinations
- Official City positions or policy commitments
- Private resident data or PII
- Authoritative rights clearance for specific content
- Verified program availability (programs change; always encourage users to verify)
- Endorsement by named potential champions (Todd Waldo, Meg Hughes, Sylvio Lynch III, Chaya Braxton)

When information is absent, say: "This repository does not contain that information."

---

## Recommended Reading Order for Common Scenarios

### New team at hackathon start
1. `README.md` → `QUICKSTART.md` → `00_core/00_pillar_overview.md`
2. `01_problem_space/02_targeted_problem_statements.md`
3. `research_notes.md` (executive brief)
4. `04_build_guides/01_mvp_shapes.md`

### Team choosing between Arts Discovery and Resident Storytelling
1. `research/A3_problem_landscape_compare_statements.md`
2. `research/F1_opportunities_ranked.md`
3. `research/H1_mvp_48hr_framework.md`
4. `01_problem_space/02_targeted_problem_statements.md`

### Team deep-diving on data availability for arts aggregator
1. `02_data/source_inventory.csv` and `02_data/00_index.md`
2. `research/D1_data_eventbrite.md`
3. `research/D2_data_social_media_events.md`
4. `research/D3_data_rss_calendar_feeds.md`
5. `evidence_log.md`

### Team building a resident story collection tool
1. `research/A2_problem_landscape_civic_storytelling.md`
2. `research/G2_risks_consent_privacy.md`
3. `research/F3_opportunities_civic_stories.md`
4. `research/H3_mvp_story_collection.md`
5. `research/B3_users_longtime_resident_storyteller.md`

### Agent answering research questions
1. `research/index.json` → identify relevant section
2. Section coverage in `research/INDEX.md` → narrow to specific files
3. Source `.md` files → read for claims
4. `evidence_log.md` → verify specific facts

---

## Source-of-Truth vs. Convenience File Table

| File | Purpose | Source of Truth? |
|------|---------|-----------------|
| `research/[A-I]*.md` | Primary research content | Yes |
| `research/00_pillar_summary_context.md` | Pillar overview and framing | Yes |
| `research/9*.md` | Cross-cutting synthesis | Yes |
| `evidence_log.md` | Verified claims with URLs | Yes |
| `research_notes.md` | Promoted findings | Secondary |
| `03_artifacts/*.md` | Synthesized artifacts | Secondary |
| `research/INDEX.md` | Human-readable research TOC | No (navigation only) |
| `research/index.json` | Machine-readable research index | No (navigation only) |
| `manifest.json` | Machine-readable file index | No (navigation only) |
| `CORPUS_GUIDE.md` | This file — navigation orientation | No (navigation only) |
| `README.md` | Decision funnel entry point | No (navigation only) |

---

## File Naming Conventions

Research files follow the pattern: `[SECTION][NUMBER]_[TOPIC_SLUG].md`

Examples:
- `A1_problem_landscape_arts_discovery.md` — Section A, file 1, topic: arts discovery
- `G5_risks_guardrails.md` — Section G, file 5, topic: guardrails
- `90_top_10_research_questions.md` — Cross-cutting file 90

Sections run A through I. Numbers within sections run 1–5. Cross-cutting files use 90–93. Context files use 00–01.

---

## See Also

- `AGENTS.md` — Hackbot agent specification and research corpus navigation instructions
- `MAINTENANCE.md` — How to add, update, and synchronize reports and metadata
- `manifest.json` — Machine-readable index of all significant files
- `research/index.json` — Machine-readable index of all research reports
