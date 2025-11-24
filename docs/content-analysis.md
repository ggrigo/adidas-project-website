# Website Content Analysis
## Dynamic vs Static Content Mapping

**Generated**: November 23, 2025
**Purpose**: Identify which content is editable via input files vs. hardcoded in components

---

## Summary

| Page | Total Words | Dynamic Content | Static Content | Input Files Used |
|------|-------------|-----------------|----------------|------------------|
| Landing Page | 349 | 0% | 100% | None |
| Executive Briefing | 922 | 0% | 100% | None |
| Weekly Progress | 926 | ~30% | ~70% | `data/task-tracker.csv` |
| Timeline | 395 | ~60% | ~40% | `lib/timeline-data.ts` |
| Documents | 261 | ~40% | ~60% | `app/documents/page.tsx` (inline data) |

---

## Page-by-Page Analysis

### 1. Landing Page (/)
**Total Words**: 349

#### ✅ DYNAMIC CONTENT (Editable via Input Files)
**None** - All content is hardcoded

#### ❌ STATIC CONTENT (Requires Code Changes)
All 349 words are hardcoded in `app/page.tsx`:

**Hero Section:**
- "Transforming Learning & Leadership Development with AI"
- "adidas' first enterprise HR AI deployment"

**Key Stats (StatusCard components):**
- Employees Impacted: **60,000**
- Leaders Supported: **10,000**
- Technology Stack: **100%**
- Time Savings: **6+ months**
- All subtitles and descriptions

**Current Status Section:**
- "Last updated: November 21, 2025 at 4:30 PM CET"
- Learning Agent status: **"Awaiting Approval"**
- Progress: **95%**
- Status text: "Technical development complete - Awaiting deployment approval"
- Checklist items: "Core AI engine complete", "SharePoint integration ready", "Awaiting LeanIX approval"
- Self-Reflection Tool status: **"On Track"**
- Progress: **90%**
- Status text: "Ready for mini pilot - December 9-13, 2025"
- Checklist items

**What We're Building:**
- Learning Agent description
- Self-Reflection Tool description

**Value Delivered:**
- For Employees/Leaders/Organization sections

**Upcoming Milestone:**
- "December 2-3, 2025 - Face-to-face meeting in Herzogenaurach"

**Contact Information:**
- All team member names and emails

**To Update**: Edit `app/page.tsx` directly

---

### 2. Executive Briefing (/executive-briefing)
**Total Words**: 922

#### ✅ DYNAMIC CONTENT (Editable via Input Files)
**None** - All content is hardcoded

#### ❌ STATIC CONTENT (Requires Code Changes)
All 922 words are hardcoded in `app/executive-briefing/page.tsx`:

- Entire briefing content (At a Glance, Business Impact, Technical Foundation, etc.)
- All dates, numbers, metrics
- Project Journey timeline
- What's Next section
- 2026 Roadmap
- Investment & Value Proposition
- Success Metrics
- Key Contacts

**Special Note:** There's a "Download PDF" button that links to a static PDF file in `/public/documents/`

**To Update**: Edit `app/executive-briefing/page.tsx` directly

---

### 3. Weekly Progress (/weekly-progress)
**Total Words**: 926 (30% dynamic, 70% static)

#### ✅ DYNAMIC CONTENT (Editable via Input Files)

**Source**: `data/task-tracker.csv` → `lib/task-tracker-data.ts` (auto-generated)

**Weekly Focus Section (~10% of page):**
- 10 priority tasks with:
  - Task titles
  - Workstreams
  - End dates
  - Owners (adidas)
  - Status badges (5 types)
- Displayed as cards with star icons
- Click to open modal with all 15 fields

**All Project Tasks Table (~20% of page):**
- 27 tasks with columns:
  - Task title
  - Workstream
  - Owners (both teams)
  - Due Date
  - Status
- Sortable by: title, workstream, date, status
- Filterable by: workstream (7 options), status (5 options), search text
- Results counter: "Showing X of 27 tasks"
- Click row to open modal

**Task Detail Modal (appears on click):**
- All 15 CSV fields displayed:
  1. Title
  2. Workstream
  3. Status badge
  4. Description
  5. Why it matters
  6. Latest Update
  7. adidas Comments
  8. Start Date
  9. Duration (weeks)
  10. End Date
  11. Lead (adidas/baresquare)
  12. Owner (adidas)
  13. Owner (baresquare)
  14. Weekly Focus flag
  15. Completed flag

**Dynamic Word Count**: ~277 words from CSV data

#### ❌ STATIC CONTENT (Requires Code Changes)

**Hardcoded in `app/weekly-progress/page.tsx` (~70% of page):**

**Header:**
- "Weekly Progress Report"
- "Week of November 21, 2025"
- "Last Updated: November 21, 2025 at 4:30 PM CET"
- "Prepared by: Lars Boeddener"
- Risk badge: "At Risk - Stakeholder transition"

**Executive Summary (entire section):**
- Full paragraph about focus this week

**Learning Agent Section:**
- Status badge: "Awaiting infrastructure approval"
- "Completed This Week" (3 bullet points)
- "In Progress" (3 items with owners and dates)
- "Blockers & Risks" (full blocker description)
- "Key Metrics" (3 metrics with percentages)

**Self-Reflection Tool Section:**
- Status badge: "On track for mini pilot"
- "Completed This Week" (4 bullet points)
- "In Progress" (3 items)
- "Blockers & Risks" (full blocker description)
- "Key Metrics" (3 metrics)

**Lessons Learned:**
- "What Went Well" (3 points)
- "What Could Be Improved" (3 points)

**Footer:**
- "Next Report Due: November 29, 2025"
- Contact information

**Static Word Count**: ~649 words hardcoded

**To Update**:
- **Dynamic content**: Edit `data/task-tracker.csv`, run `npx tsx lib/parse-task-csv.ts`
- **Static content**: Edit `app/weekly-progress/page.tsx`

---

### 4. Timeline (/timeline)
**Total Words**: 395 (60% dynamic, 40% static)

#### ✅ DYNAMIC CONTENT (Editable via Input Files)

**Source**: `lib/timeline-data.ts`

**Timeline Data (~60% of content):**
- 4 phases with:
  - Phase names
  - Start/end dates
  - Status (complete/current/planned)
  - Progress percentages
  - Key deliverables (lists)
  - Milestones with:
    - Milestone names
    - Dates
    - Descriptions
    - Owners
    - Status (complete/pending/at-risk)

**Current Phase Data:**
- Phase 1: 100% complete (6/6 milestones)
- Phase 2: 27% complete (in progress)
  - 11 milestones including:
    - Mini Pilot Planning (Nov 15)
    - Executive Briefing (Nov 21)
    - Zsofia Successor Announcement (Nov 29)
    - Face-to-Face Meeting (Dec 2)
    - Mini Pilot Kickoff (Dec 9)
    - Mini Pilot Complete (Dec 13)
    - LeanIX Approval (Dec 20)
    - Phase 1 Billing Complete (Dec 5)
    - Product Roadmap Review (Dec 10)
    - Learning Recommendations Mapped (Dec 12)
    - System Integration Test Complete (Dec 15)
- Phase 3: Planned (Jan-Mar 2026)
- Phase 4: Planned (Apr 2026-Dec 2027)

**Dynamic Word Count**: ~237 words from timeline data

#### ❌ STATIC CONTENT (Requires Code Changes)

**Hardcoded in `app/timeline/page.tsx` (~40% of page):**

**Header:**
- "Project Timeline & Roadmap"
- "Complete journey from March 2025 through 2027"

**Timeline Overview Section:**
- Visual timeline bar display
- "You are here" indicator positioning

**Legend:**
- Phase Status colors and labels
- Milestone Status icons and labels
- Current Focus box:
  - "Phase 2: Pilot Testing"
  - "Dec 2-3 executive meeting and mini pilot execution"

**Static Word Count**: ~158 words hardcoded

**To Update**:
- **Dynamic content**: Edit `lib/timeline-data.ts`
- **Static content**: Edit `app/timeline/page.tsx`

---

### 5. Documents (/documents)
**Total Words**: 261 (40% dynamic, 60% static)

#### ✅ DYNAMIC CONTENT (Editable via Input Files)

**Source**: `app/documents/page.tsx` (inline data object, lines 1-72)

**Document List (~40% of content):**
- 8 documents across 3 categories:

**Strategic Documents (3 docs):**
- Executive Briefing (3.6 MB)
- Website Structure Outline (107 KB)
- Master Guide & README (111 KB)

**Operational Documents (3 docs):**
- Weekly Progress Report Nov 21 (2.1 MB)
- Project Timeline & Roadmap (165 KB)
- Weekly Progress Template (190 KB)

**Handover Documents (2 docs):**
- Project Context Document (154 KB)
- Stakeholder Map (148 KB)

Each document has:
- Name
- Description
- Date
- Type (PDF)
- Size
- File path (/documents/...)

**Dynamic Word Count**: ~104 words in document metadata

#### ❌ STATIC CONTENT (Requires Code Changes)

**Hardcoded in `app/documents/page.tsx` (~60% of page):**

**Header:**
- "Project Documents"
- "Central location for all project artifacts and materials"

**Category Headers:**
- "Strategic Documents" + description
- "Operational Documents" + description
- "Handover Documents" + description

**UI Elements:**
- Search bar (non-functional placeholder)
- Section icons
- Download buttons

**Static Word Count**: ~157 words hardcoded

**To Update**:
- **Dynamic content**: Edit `documents` object at top of `app/documents/page.tsx` (lines 1-72)
- **Static content**: Edit rest of `app/documents/page.tsx`

---

## Input Files Location Summary

### Current State (NOT centralized)

```
data/
└── task-tracker.csv              # Task data (15 columns, 27 tasks)

lib/
├── timeline-data.ts              # Timeline milestones (INPUT FILE)
├── task-tracker-data.ts          # Auto-generated from CSV (DO NOT EDIT)
├── task-tracker-types.ts         # Type definitions (code)
└── parse-task-csv.ts             # Parser script (code)

app/documents/page.tsx
└── (lines 1-72)                  # Document metadata (INPUT DATA inline)

app/
├── page.tsx                      # Landing page (100% hardcoded)
├── executive-briefing/page.tsx   # Executive briefing (100% hardcoded)
├── weekly-progress/page.tsx      # Weekly progress (70% hardcoded)
└── timeline/page.tsx             # Timeline (40% hardcoded)
```

### Input Files by Type

**CSV Data** (1 file):
- `data/task-tracker.csv` - Task tracking data

**TypeScript Data** (1 file):
- `lib/timeline-data.ts` - Timeline milestones

**Inline Data** (1 file):
- `app/documents/page.tsx` - Document metadata embedded in component

**Hardcoded in Components** (4 files):
- `app/page.tsx` - Landing page
- `app/executive-briefing/page.tsx` - Executive briefing
- `app/weekly-progress/page.tsx` - Weekly summaries and status
- `app/timeline/page.tsx` - Timeline UI text

---

## Recommendations for Centralization

### Option 1: Minimal Change
Move only `lib/timeline-data.ts` → `data/timeline-data.ts`

**Pros**: Clearest separation (all input in `data/`)
**Cons**: Documents data still inline in component

### Option 2: Complete Centralization
1. Move `lib/timeline-data.ts` → `data/timeline-data.ts`
2. Extract document data → `data/documents-data.ts`
3. Consider: Extract landing page stats → `data/project-stats.ts`

**Pros**: All editable content in `data/` folder
**Cons**: More refactoring required

### Option 3: Status Quo + Documentation
Keep current structure, but clearly document what's input vs. code

**Pros**: No code changes, just clarity
**Cons**: Input files still scattered

---

## Weekly Update Workflow by Content Type

### What Changes Every Week?

**1. Task Data** (Easy - CSV workflow):
- File: `data/task-tracker.csv`
- Workflow: Export CSV → Copy → Run parser → Deploy
- Affects: 30% of Weekly Progress page

**2. Timeline Milestones** (Medium - TypeScript editing):
- File: `lib/timeline-data.ts`
- Workflow: Edit TypeScript → Deploy
- Affects: 60% of Timeline page

**3. Weekly Summary Text** (Hard - Code editing):
- File: `app/weekly-progress/page.tsx`
- Workflow: Edit component code → Deploy
- Affects: 70% of Weekly Progress page
- **Includes**: Executive summary, Learning Agent status, Self-Reflection status, Lessons Learned

**4. Landing Page Stats** (Hard - Code editing):
- File: `app/page.tsx`
- Workflow: Edit component code → Deploy
- Affects: Progress bars, dates, status badges on home page

**5. Documents** (Medium - Inline data editing):
- File: `app/documents/page.tsx` (top of file)
- Workflow: Edit document object → Upload PDFs → Deploy
- Affects: 40% of Documents page

---

## Current Pain Points

### 1. Weekly Progress Page Split Personality
- **30% dynamic** (tasks from CSV) ✅ Easy to update
- **70% static** (status summaries) ❌ Requires code changes

**Problem**: Most weekly changes require editing component code, not just CSV

### 2. Timeline Data Not Centralized
- `lib/timeline-data.ts` is INPUT data mixed with CODE files
- Not obvious where to update milestones

### 3. Documents Data Inline
- Document metadata embedded in component
- Should be separate data file

### 4. Landing Page Stats Hardcoded
- Progress percentages (95%, 90%)
- Status badges
- Dates ("November 21, 2025")
- All require code changes to update

---

## Questions for User

1. **Should weekly status summaries become data files?**
   - Currently: Hardcoded in `app/weekly-progress/page.tsx`
   - Could be: `data/weekly-summary.ts` or even CSV

2. **Should landing page stats become dynamic?**
   - Currently: Hardcoded progress bars and dates
   - Could be: `data/project-stats.ts`

3. **Should we centralize all input files to `data/` folder?**
   - Move `lib/timeline-data.ts` → `data/`
   - Extract documents data → `data/`
   - Clear separation: `data/` = input, `lib/` = code

4. **Which content will you update most frequently?**
   - Task CSV (weekly)
   - Timeline milestones (monthly?)
   - Weekly status summaries (weekly)
   - Landing page stats (rarely?)

---

## Content Update Frequency Estimate

**Weekly Updates:**
- Task CSV data (27 tasks)
- Weekly progress status text
- Landing page "last updated" date
- Progress percentages

**Monthly Updates:**
- Timeline milestones
- Document list

**Quarterly/Rare Updates:**
- Landing page hero text
- Executive briefing content
- Team contact information

---

## Conclusion

**Current Reality:**
- Only **30% of Weekly Progress** page is truly "input file driven"
- Only **60% of Timeline** page is data-driven
- **100% of Landing Page** requires code changes
- **100% of Executive Briefing** requires code changes

**To make the site more "input file driven", you would need to:**
1. Extract weekly status summaries to data files
2. Extract landing page stats to data files
3. Centralize all data files to `data/` folder
4. Consider converting more static text to JSON/CSV format

**Current workflow requires coding for:**
- Weekly status updates (Learning Agent, Self-Reflection sections)
- Landing page progress bars and dates
- Any text changes on any page
