# Maintenance Guide

**A City That Tells Its Stories Pillar Research Corpus**

This file explains how to add, update, and synchronize reports and metadata so the repository remains consistent and agent-navigable.

---

## Adding a New Research Report

Follow these steps in order. Do not skip steps — incomplete additions create orphaned files that break navigation.

### Step 1 — Choose a file location

Research reports go in `research/`. Choose the appropriate section prefix:

| Section | Topic |
|---------|-------|
| `A` | Problem Landscape |
| `B` | Users & Stakeholders |
| `C` | Services & Programs |
| `D` | Data Sources |
| `E` | Prior Art & Benchmarks |
| `F` | Opportunity Spaces |
| `G` | Risks & Guardrails |
| `H` | MVP Shape & Constraints |
| `I` | Demo Strategy |

If the report spans sections or introduces a new topic, use the next available number in the `90–98` range (cross-cutting).

### Step 2 — Name the file consistently

Pattern: `[SECTION][NUMBER]_[topic_slug].md`

Example: `A6_problem_landscape_arts_funding.md`

Use lowercase snake_case for the topic slug. Keep it short but descriptive.

### Step 3 — Add YAML frontmatter to the report

At the top of the `.md` file, add:

```yaml
---
title: "Your Report Title"
pillar: city-storytelling
section: A
problem_statement: arts-discovery | civic-storytelling | general
tags:
  - keyword1
  - keyword2
  - keyword3
summary: "One to two sentence grounded summary of what this report contains."
key_entities:
  - Entity Name (e.g., The Valentine, CultureWorks, Richmond GeoHub)
datasets:
  - Dataset name if mentioned
geography: Richmond, VA
date_generated: YYYY-MM-DD
source: perplexity-sonar-deep-research | manual | other
status: raw | reviewed | verified
related_reports:
  - A1_problem_landscape_arts_discovery
---
```

Only include fields you can support from the actual content. Do not fabricate metadata.

### Step 4 — Update `research/index.json`

Add a new entry to the JSON array:

```json
{
  "id": "A6_problem_landscape_arts_funding",
  "section": "A",
  "title": "Problem Landscape: Arts Funding Gaps",
  "summary": "One to two sentence grounded summary.",
  "key_terms": ["term1", "term2", "term3", "term4", "term5", "term6"]
}
```

Insert the entry in the correct section order. Do not leave the JSON in an invalid state.

### Step 5 — Update `research/INDEX.md`

Add a row to the appropriate section:

```markdown
- [`A6_problem_landscape_arts_funding.md`](A6_problem_landscape_arts_funding.md) — Brief description of the report
```

### Step 6 — Update `manifest.json` (root)

Add an entry to the manifest for the new file:

```json
{
  "id": "research/A6_problem_landscape_arts_funding",
  "path": "research/A6_problem_landscape_arts_funding.md",
  "type": "research_report",
  "title": "Problem Landscape: Arts Funding Gaps",
  "pillar": "city-storytelling",
  "section": "A",
  "summary": "One to two sentence grounded summary.",
  "tags": ["arts funding", "problem landscape", "Richmond"],
  "recommended_audience": ["teams exploring arts ecosystem", "teams researching sustainability"],
  "read_after": ["research/A1_problem_landscape_arts_discovery.md"],
  "source_of_truth": true
}
```

### Step 7 — Verify internal consistency

Run a quick check:
- Does the file exist in the expected location?
- Does the frontmatter match the index.json entry?
- Is the manifest.json valid JSON? (Use `python3 -m json.tool manifest.json`)
- Is the research/INDEX.md entry accurate?

---

## Updating an Existing Report

### Updating content only

1. Edit the `.md` file directly.
2. If the summary changed substantially, update the `summary` field in `research/index.json`.
3. If you updated a verified claim, check whether `evidence_log.md` needs a corresponding update.
4. Update `status` in frontmatter if moving from `raw` to `reviewed` or `verified`.

### Renaming or moving a file

Renaming creates broken references. Before renaming:
1. Find all references to the old filename: `grep -r "OLD_FILENAME" .`
2. Update every reference (INDEX.md, index.json, manifest.json, AGENTS.md, any skill files, any report frontmatter with `related_reports`)
3. Rename the file
4. Verify no dangling references remain

Avoid renaming unless necessary.

---

## Updating the Evidence Log

`evidence_log.md` (at repo root) tracks verified factual claims.

When you verify a new claim:
1. Add a row with a new `E-` ID (next sequential number)
2. Include: claim description, official source URL, access date, status
3. If a claim was previously `Likely` and is now `Confirmed`, update the status
4. If a claim is found to be incorrect, update the entry with a correction note rather than deleting it

---

## Regenerating Navigation Files

### When to regenerate

- After adding or removing 3 or more research files
- After a major structural reorganization
- After updating a large number of summaries

### Regenerating `research/index.json`

The index.json should contain one entry per research `.md` file (excluding INDEX.md). To regenerate:
1. List all `.md` files in `research/` (excluding INDEX.md)
2. For each file, extract: id (filename without extension), section (letter prefix or "context"/"cross-cutting"), title (from H1 heading or frontmatter), summary (from frontmatter or write a new grounded one), key_terms (from frontmatter or extract from content)
3. Write the resulting JSON array to `research/index.json`
4. Validate: `python3 -m json.tool research/index.json`

### Regenerating `manifest.json`

The manifest covers all significant files, not just research. To regenerate:
1. Start with all entries in `research/index.json` (format slightly differently for manifest)
2. Add entries for all files in: `00_core/`, `01_problem_space/`, `02_data/`, `03_artifacts/`, `04_build_guides/`, `99_templates/`, `skills/`, root-level `.md` files
3. Each entry needs: id, path, type, title, pillar, summary, tags, recommended_audience, read_after, source_of_truth
4. Validate: `python3 -m json.tool manifest.json`

### Keeping navigation files in sync

After any structural change, verify:

| File | What to check |
|------|--------------|
| `research/INDEX.md` | All sections have rows for existing files |
| `research/index.json` | All .md files have entries, no orphans |
| `manifest.json` | All significant files present, types correct |
| `AGENTS.md` | Section-to-file mappings still accurate |
| `CORPUS_GUIDE.md` | Question-to-section table still accurate |
| `README.md` | Repo Map table matches actual directories |

---

## Adding or Updating a Skill

Skills live in `skills/[SKILL_NAME]/SKILL.md`.

### Adding a new skill

1. Create `skills/[skill_name]/SKILL.md`
2. Include at minimum: Purpose, When To Use, Inputs, Outputs, Process (step-by-step)
3. Add the skill name to the Available Skills list in `AGENTS.md` (Step 6 — Announce Available Skills section)
4. Add the skill name to the skills list in `README.md`
5. Add an entry to `manifest.json` with `type: "skill"`

### Updating an existing skill

1. Edit `skills/[skill_name]/SKILL.md`
2. If the skill's purpose changed significantly, update its entry in `manifest.json`
3. If the skill was renamed, update all references (AGENTS.md, README.md, manifest.json)

---

## Adding a Template

Templates live in `99_templates/`.

1. Add the `.md` file to `99_templates/`
2. Add an entry to `manifest.json` with `type: "template"`
3. Reference it from `README.md` Repo Map table if it is a primary user-facing template

---

## Validation Checklist (Run Before Committing)

```
[ ] All new .md files have consistent H1 headings
[ ] research/index.json is valid JSON and includes new files
[ ] manifest.json is valid JSON and includes new files
[ ] research/INDEX.md sections include new files
[ ] evidence_log.md updated if new verified claims added
[ ] No broken internal links (spot-check key references)
[ ] Frontmatter is accurate (no fabricated fields)
[ ] Git commit message references which files changed and why
```

---

## Quick Reference: File Types

| Type | Location | Purpose | Source of Truth? |
|------|----------|---------|-----------------|
| `research_report` | `research/*.md` | Primary research content | Yes |
| `synthesized_artifact` | `03_artifacts/*.md` | Promoted findings | Secondary |
| `data_file` | `02_data/*` | Data inventory | Yes for data |
| `nav_file` | `README.md`, `research/INDEX.md` | Navigation only | No |
| `manifest` | `manifest.json`, `research/index.json` | Machine-readable nav | No |
| `skill` | `skills/*/SKILL.md` | Agent procedures | Yes for process |
| `template` | `99_templates/*` | Team scaffolding | No |
| `evidence_log` | `evidence_log.md` | Verified claims | Yes |
| `build_guide` | `04_build_guides/*` | MVP patterns | Secondary |
