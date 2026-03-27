<div align="center">

# A City That Tells Its Stories — Decision Funnel

Richmond Civic Hackathon • March 27–29, 2026

[![Pillar](https://img.shields.io/badge/Pillar-A_City_That_Tells_Its_Stories-8b5cf6)](#)
[![Stage](https://img.shields.io/badge/Stage-Decision_Funnel-00a38f)](#)
[![Focus](https://img.shields.io/badge/Focus-From_Idea_%E2%86%92_MVP-ff7a59)](#)
[![Accessibility](https://img.shields.io/badge/Accessibility-Highest_Across_All_Pillars-22c55e)](#)

</div>

This is a guided decision environment for teams working on the A City That Tells Its Stories pillar. It's designed to help you quickly choose a credible, source‑linked, weekend‑buildable MVP — and avoid fantasy software.

Journey stages: Land → Orient → Choose → Research → Compare MVPs → Lock Scope → Build → Validate → Demo → Hand‑off

Three questions to answer fast: 1) What problem are we actually solving? 2) Can we credibly demo by Sunday? 3) What should we refuse to build?

---

## Hackathon build (Problem 1): What’s On RVA

**Working prototype:** [`mvp-whats-on-rva/`](mvp-whats-on-rva/)  
**Handoff doc (demo script, scope, packaging):** [`HACKATHON_DELIVERABLE.md`](HACKATHON_DELIVERABLE.md)

---

## The Challenge

**→ Full detail in [`CHALLENGE.md`](CHALLENGE.md).** Read it before anything else — it defines the two problems, the top blue sky vision, data constraints, and exactly how judges will score your solution.

### Problem 1: Discovering and Participating in Richmond's Arts & Cultural Events — 25/32 — Strong

> How might we use technology to improve how residents discover and engage with Richmond's local arts and cultural events so that locally produced creative work is easier to find, support, and experience — while minimizing manual curation?

Build toward: Richmond Arts Aggregator (Eventbrite API, RSS, gallery feeds) · "What's On in RVA" discovery feed · Arts & Cultural District map linked to original sources

⚠ No arts/cultural event data exists in Richmond's open data catalog. Aggregation from existing sources is the only viable path.

---

### Problem 2: Resident Stories as Civic Insight — 25/32 — Strong

> How might we use technology to improve how Richmond gathers and learns from residents' lived experiences so that community stories help inform City decisions, preserve Richmond's social history, and amplify underrepresented voices?

Build toward: Voice-to-Story Portal with guided prompts + consent mechanism · Story-to-Insight Dashboard surfacing themes from submitted narratives · Mobile-friendly guided story interface

⚠ Privacy and consent are non-negotiable. Any story collection tool must be consent-first.

---

### Top Blue Sky: Exploring Richmond Through Its Stories — 24/27 — Exceptional ★ HIGHEST ACROSS ALL 7 PILLARS

> How might we use technology to help residents and visitors explore Richmond's neighborhoods, history, and culture through the stories of the people who shaped them?

Scope to one neighborhood or one story type — not all of Richmond. Jackson Ward jazz history, Church Hill community change, or a story layer on a map are weekend-viable.

---

### Pillar Award Rubric

| Category | Weight | Dominant question |
|----------|--------|-------------------|
| **Impact** | **5** | Does this directly address one of the two problems above? |
| User Value | 4 | Is there a specific real user? Does the prototype improve their experience? |
| Feasibility | 3 | Could this be piloted by a City or cultural partner within a year? |
| Innovation | 3 | Fresh thinking on storytelling, discovery, or civic engagement? |
| Execution | 3 | Does a working demo exist? Is the flow coherent? |
| Equity | 3 | Does it reach underrepresented voices, not just digitally comfortable users? |

Full rubric with scoring anchors and judge instructions: [`../RUBRIC.md`](../RUBRIC.md)

---

## Table of Contents

0. [The Challenge](#the-challenge)
1. Quick Start
2. Repo Map
3. Guardrails
4. Decision Phases
   - Phase 0: Landing & Framing
   - Phase 1: Rapid Orientation
   - Phase 2: Problem Selection
   - Phase 3: Research Spin‑Up
   - Phase 4: Opportunity Framing
   - Phase 5: Scope Lock
   - Phases 6–9: Build → Validate → Demo
5. Verification Workflow
6. Hackbot Helper
7. Appendix: Pillar Context & Rubric

---

## Quick Start

Do these first 15–30 minutes to get moving:

1) Read: `CHALLENGE.md` — the two problems, top blue sky, and rubric (start here, not QUICKSTART.md)
2) Read: `QUICKSTART.md`
2) Skim: `00_core/00_pillar_overview.md` and `01_problem_space/02_targeted_problem_statements.md`
3) Capture a 5‑bullet "Working Direction" using `99_templates/working_direction_note.md`
4) Decide your path:
   - Path A — already have a rough problem: jump to Phase 2 and Phase 4
   - Path B — need help choosing: start at Phase 1 and proceed in order

---

## Repo Map

| Directory / File | Purpose |
|-----------------|---------|
| `research/` | 51 deep research reports (the core corpus) |
| `00_core/` | Pillar overview and MAP alignment |
| `01_problem_space/` | Problem statements (scored) |
| `02_data/` | Data source inventory and index |
| `03_artifacts/` | Synthesized artifacts (journeys, recommendations, data landscape) |
| `04_build_guides/` | MVP shapes, architectures, demo advice |
| `05_prompts/` | Prompts and runners |
| `skills/` | Agent skill definitions |
| `99_templates/` | Team and project templates |
| `research_notes.md` | Research hub — promoted findings |
| `evidence_log.md` | Evidence tracker — verified claims |

### Navigation files

| File | Purpose |
|------|---------|
| `CORPUS_GUIDE.md` | Canonical orientation for corpus navigation (humans and AI agents) |
| `manifest.json` | Machine-readable index of all significant files |
| `research/index.json` | Machine-readable index of all 51 research reports |
| `research/INDEX.md` | Human-readable table of contents for the research directory |
| `MAINTENANCE.md` | How to add, update, and synchronize reports and metadata |

---

## Guardrails

- Pick one user, one workflow, and one credible data/doc base.
- Avoid claiming to collect or represent all Richmond stories — be honest about participation gaps.
- Always include consent mechanisms for any story collection tool.
- Always cite official sources. Log every claim in `evidence_log.md`.
- Keep AI constrained to aggregation, discovery, guided prompting, and theme surfacing.

---

## Decision Phases

<details open>
<summary><strong>Phase 0 — Landing & Framing</strong></summary>

Goal: understand what this repo is and how to use it without "exploring" for two hours.

What this pillar is about:
- Arts and cultural event discovery; resident civic storytelling; neighborhood history preservation; Richmond's diverse narratives under A City That Tells Its Stories.

Success patterns:
- Source‑linked, narrow scope, credible demo, explicit limits, consent-first for story tools.

Anti‑patterns:
- Manual calendar curation; claiming to represent all voices; duplicating museum work; requiring City endorsement of content.

Admin quick links:
- Research hub: `research_notes.md`
- Evidence tracker: `evidence_log.md`
- Source inventory (CSV): `02_data/source_inventory.csv`
- Artifacts: see Repo Map above

Call to action: choose Path A or Path B.

</details>

<details open>
<summary><strong>Phase 1 — Rapid Orientation (20–30 min)</strong></summary>

Read just enough to build a shared mental model:
- `QUICKSTART.md`
- `00_core/00_pillar_overview.md`
- `00_core/01_map_alignment.md`
- `01_problem_space/02_targeted_problem_statements.md`

Filter for:
- user groups; pain points; what the City actually cares about
- problems that are software‑shaped vs policy‑shaped
- where consent and representation risks appear

Team checkpoint — Working Direction (use `99_templates/working_direction_note.md`):

```
## Working Direction
- Pillar: A City That Tells Its Stories
- Candidate problem:
- Likely user:
- Why it matters:
- Why it seems weekend-buildable:
- Biggest uncertainty:
```

</details>

<details>
<summary><strong>Phase 2 — Problem Selection (30–45 min)</strong></summary>

Files:
- `01_problem_space/01_bluesky_problem_statements.md`
- `01_problem_space/02_targeted_problem_statements.md`
- `00_core/04_solution_patterns.md`
- `05_prompts/01_problem_selection_prompt.md`

Decision rule — choose only if the problem has:
- a real user and understandable workflow
- a plausible public data/document base
- a demoable artifact by Sunday
- a clear answer to "how does consent work?" if stories are involved

Output: Decision Memo (`99_templates/decision_memo.md`)

```
## Chosen Problem
## User
## Why this one
## Why not the others
## Risks
```

</details>

<details>
<summary><strong>Phase 3 — Research Spin‑Up (60–90 min)</strong></summary>

Goal: gather just enough evidence to avoid fantasy software.

Use the runner to execute targeted prompts and capture findings:
- Perplexity runner: `05_prompts/perplexity_runner/` (see its README)
- Research plan: `05_prompts/research/99_research_plan.md`
- Data index: `02_data/00_index.md`

Evidence Log structure (log in `evidence_log.md`):

```
## Evidence Log
### Confirmed
### Likely but unverified
### Missing
### Useful datasets
### Useful source documents
### Prior art
### Risks
```

Tip: parse URLs from API metadata; don't ask for URLs in prompt text.

</details>

<details>
<summary><strong>Phase 4 — Opportunity Framing (45–60 min)</strong></summary>

Compare at least two MVP shapes before choosing.

Files:
- `04_build_guides/01_mvp_shapes.md`
- `04_build_guides/02_recommended_architectures.md`
- `05_prompts/03_mvp_scoping_prompt.md`
- `05_prompts/06_risk_review_prompt.md`

Output:

```
## MVP Options
1. …
2. …
3. …

## Recommended MVP
## Why
## What we are explicitly not building
```

</details>

<details>
<summary><strong>Phase 5 — Scope Lock (45–60 min)</strong></summary>

Pin down must‑haves, mockables, data, AI role, limits, and demo path.

Files:
- `99_templates/project_one_pager_template.md`

Key sentence:

> By Sunday, we will show a prototype that helps [user] do [specific thing] using [specific data/docs], without pretending to do [dangerous overclaim].

</details>

<details>
<summary><strong>Phases 6–9 — Build → Validate → Demo</strong></summary>

Build:
- Break work into FE/BE/data/content; assign source verification and demo owner.
- Keep AI constrained to aggregation, discovery, guided prompts, and theme surfacing.

Validate:
- Use risk review prompts and red flags; check source links, consent language, and representational claims.

Demo:
- Follow `04_build_guides/05_demo_advice.md`.

</details>

---

## Verification Workflow

1) Add official URLs and dates in `evidence_log.md`; flip status to Verified.
2) Mirror verified sources into `02_data/source_inventory.csv` with access mode and key fields.
3) After verification, promote findings into the Executive Brief inside `research_notes.md`.

---

## Hackbot Helper

You can use Hackbot to reconstruct context, run research, and shape an MVP.

- Boot prompt: `HACKBOT_BOOT_PROMPT.md`
- Team profile (recommended): `99_templates/team_profile_template.md`

**Team skills:**
- `repo_memory` — reconstruct repository state
- `problem_scoping` — help choose a strong problem
- `research_runner` — execute research prompts and collect findings
- `dataset_mapper` — identify usable datasets
- `opportunity_mapper` — translate research into buildable solutions
- `mvp_designer` — turn an opportunity into a concrete MVP
- `risk_review` — prevent civic-tech mistakes (consent, bias, overclaim)
- `demo_coach` — help teams present effectively
- `repo_librarian` — navigate repository knowledge
- `continuity_planner` — identify post-hackathon opportunities

**Research corpus skills:**
- `research_corpus_navigation` — map a question to the correct section and files
- `cross_report_synthesis` — synthesize findings with source traceability
- `evidence_grounded_answering` — answer only from corpus content with uncertainty marking
- `report_update_protocol` — safely add/update reports and keep indexes in sync

**Hackbot resources:**
- Corpus guide: `CORPUS_GUIDE.md`
- Full file manifest: `manifest.json`
- Research index: `research/index.json`

Notes:
- Hackbot never invents government programs or civic partnerships. It cites official sources and encourages verification.
- Hackbot always flags consent and representational bias risks for story collection or arts data aggregation tools.
- For best results, create a team profile so Hackbot can map tasks to roles and follow your communication preferences.

---

## Appendix: Pillar Context & Rubric

<details>
<summary>Open context from the Pillar Committee session (March 2, 2026)</summary>

Working Session: March 2, 2026, 9:00 AM – 11:00 AM

Named potential champions: Todd B. Waldo (Shockoe Institute), Meg Hughes (The Valentine), Sylvio Lynch III (History & Culture Commission), Chaya Braxton (Office of Strategic Communications). This pillar has the most natural champions of any pillar.

Rubric Score Summary
| Statement                                | D1 | D2 | D3 | D4 | D5 | D6 | D7 | D8 | Total | Band   |
|------------------------------------------|----|----|----|----|----|----|----|----|-------|--------|
| Arts & Cultural Event Discovery          | 4  | 3  | 2  | 3  | 4  | 3  | 4  | 4  | 27    | Strong |
| Resident Stories as Civic Insight        | 4  | 3  | 2  | 3  | 4  | 3  | 3  | 4  | 26    | Strong |

Note: Both statements score 25/32 per rubric document. D8 (Accessibility) = 4 for both — **highest accessibility scores across all seven pillars**.

Dimension key: D1 Clarity | D2 Scope | D3 Data readiness | D4 Champion | D5 Population & impact | D6 Operating environment | D7 Success criteria | D8 Accessibility

Quick‑kill flags: both targeted statements lack a continuation pathway.

Targeted Statement 1: Discovering and Participating in Richmond's Arts & Cultural Events (Score 25/32 — Strong)
- Problem, context, constraints, success, and gaps are in `01_problem_space/02_targeted_problem_statements.md`.

Targeted Statement 2: Resident Stories as Civic Insight (Score 25/32 — Strong)
- Problem, context, constraints, success, and gaps are in `01_problem_space/02_targeted_problem_statements.md`.

Blue Sky Statements
- See `01_problem_space/01_bluesky_problem_statements.md`.
- "Exploring Richmond Through Its Stories" scored 24/27 — **highest-scoring blue sky statement across all pillars**.

Prioritized Actions Before March 27, 2026
1) Name departmental champion (Todd Waldo, Meg Hughes, Sylvio Lynch III, or Chaya Braxton)
2) Compile list of Richmond arts event data sources (Facebook Events, Eventbrite, gallery pages, Style Weekly, Richmond.com)
3) Compile list of existing oral history and story collections (the Valentine, Black History Museum, VCU libraries)
4) Add arts and cultural event data section to open data catalog
5) Specify output types

</details>
