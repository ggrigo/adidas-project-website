# Content Management Guide
## Understanding What's Editable vs. What Requires Code Changes

**Last Updated**: November 23, 2025
**Purpose**: Guide for understanding which content can be updated via input files vs. what requires coding

---

## Table of Contents

1. [Quick Reference](#quick-reference)
2. [Page-by-Page Breakdown](#page-by-page-breakdown)
3. [Input Files Location](#input-files-location)
4. [Weekly Update Workflow](#weekly-update-workflow)
5. [Centralization Roadmap](#centralization-roadmap)
6. [Recent Changes](#recent-changes)

---

## Quick Reference

### Content Update Difficulty Matrix

| Content Type | Difficulty | Current Location | Update Method |
|--------------|-----------|------------------|---------------|
| **Task data** (27 tasks) | ✅ Easy | `data/task-tracker.csv` | CSV export → copy → parse → deploy |
| **Timeline milestones** | ⚠️ Medium | `lib/timeline-data.ts` | Edit TypeScript → deploy |
| **Document list** | ⚠️ Medium | `app/documents/page.tsx` (inline) | Edit object → upload PDFs → deploy |
| **Weekly status updates** | 🔴 Hard | `app/weekly-progress/page.tsx` | Edit component code → deploy |
| **Homepage content** | 🔴 Hard | `app/page.tsx` | Edit component code → deploy |

---

## Summary Statistics

**Total Website Content**: ~2,500 words across 5 pages

| Page | Total Words | Dynamic (Input Files) | Static (Hardcoded) |
|------|-------------|----------------------|-------------------|
| Home (Executive Briefing) | 922 | 0% | 100% |
| Weekly Progress | 926 | 30% | 70% |
| Timeline | 395 | 60% | 40% |
| Documents | 261 | 40% | 60% |
| **TOTAL** | **2,504** | **~25%** | **~75%** |

**Reality Check**: Only about **25% of website content** can be updated via input files. The rest requires code changes.

---

## Page-by-Page Breakdown

### 1. Home Page (/) - Executive Briefing
**File**: `app/page.tsx`
**Total Words**: 922
**Dynamic Content**: 0%
**Static Content**: 100%

#### ❌ Everything is Hardcoded

All content requires editing `app/page.tsx`:

**Sections:**
- At a Glance (projects, strategic value, current status)
- Business Impact (employees, leaders, organization)
- Technical Foundation (Microsoft stack, innovations)
- Project Journey (timeline with dates)
- What's Next (December meetings, Q1 2026 plans)
- 2026 Roadmap (Q2-Q4 plans, 2027 vision)
- Investment & Value Proposition (costs, benefits)
- Success Metrics (all KPIs)
- Key Contacts (names and emails)

**Common Updates Needed:**
- Dates for upcoming meetings
- Progress percentages
- Current status badges
- Milestone dates
- Contact information

**How to Update:**
```bash
# Edit the file
code app/page.tsx

# Deploy
npm run build
git add .
git commit -m "Update executive briefing content"
git push origin main
```

---

### 2. Weekly Progress (/weekly-progress)
**File**: `app/weekly-progress/page.tsx`
**Total Words**: 926
**Dynamic Content**: 30% (from CSV)
**Static Content**: 70% (hardcoded status)

#### ✅ Dynamic Content (From `data/task-tracker.csv`)

**Weekly Focus Section** (~90 words):
- 10 priority tasks
- Task titles, workstreams, owners, dates, status badges
- Click to open modal with all 15 fields

**All Project Tasks Table** (~185 words):
- 27 tasks in sortable/filterable table
- Columns: Task, Workstream, Owners, Due Date, Status
- Search, filter by workstream (7 options), filter by status (5 options)
- Shows "X of 27 tasks"

**Task Detail Modal** (on click):
All 15 CSV fields:
1. Title
2. Workstream
3. Status
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

**How to Update Tasks:**
```bash
# 1. Export CSV from Excel/Google Sheets
# 2. Copy to project
cp ~/Downloads/LSRT*.csv data/task-tracker.csv

# 3. Run parser
npx tsx lib/parse-task-csv.ts

# 4. Build and deploy
npm run build
git add data/task-tracker.csv lib/task-tracker-data.ts
git commit -m "Update task tracker - $(date +%d.%m.%Y)"
git push origin main
```

#### ❌ Static Content (Hardcoded in Component)

**Header** (~50 words):
- "Week of November 21, 2025"
- "Last Updated: November 21, 2025 at 4:30 PM CET"
- "Prepared by: Lars Boeddener"
- Risk badge: "At Risk - Stakeholder transition"

**Executive Summary** (~80 words):
- Full paragraph describing week's focus
- Key decisions and updates

**Learning Agent Section** (~200 words):
- Status badge: "Awaiting infrastructure approval"
- Completed This Week (3 bullet points)
- In Progress (3 items with owners/dates)
- Blockers & Risks (detailed paragraph)
- Key Metrics (3 metrics with percentages)

**Self-Reflection Tool Section** (~220 words):
- Status badge: "On track for mini pilot"
- Completed This Week (4 bullet points)
- In Progress (3 items with owners/dates)
- Blockers & Risks (detailed paragraph)
- Key Metrics (3 metrics)

**Lessons Learned** (~100 words):
- What Went Well (3 points)
- What Could Be Improved (3 points)

**Footer** (~15 words):
- "Next Report Due: November 29, 2025"
- Contact links

**How to Update Static Content:**
```bash
# Edit the component
code app/weekly-progress/page.tsx

# Update the relevant section
# Lines 42-53: Executive Summary
# Lines 56-151: Learning Agent section
# Lines 153-253: Self-Reflection Tool section
# Lines 265-320: Lessons Learned
# Line 324: Next report date

# Deploy
npm run build
git add .
git commit -m "Update weekly progress status"
git push origin main
```

---

### 3. Timeline (/timeline)
**File**: `app/timeline/page.tsx`
**Data File**: `lib/timeline-data.ts`
**Total Words**: 395
**Dynamic Content**: 60% (from timeline-data.ts)
**Static Content**: 40% (UI text)

#### ✅ Dynamic Content (From `lib/timeline-data.ts`)

**Timeline Data** (~237 words):

**4 Phases:**
- Phase 1: Foundation (Mar-Nov 2025) - Complete, 100%, 6 milestones
- Phase 2: Pilot Testing (Nov-Dec 2025) - Current, 27%, 11 milestones
- Phase 3: Enterprise Rollout (Jan-Mar 2026) - Planned
- Phase 4: Scale & Enhance (Apr 2026-Dec 2027) - Planned

**Each Phase Includes:**
- Name, start date, end date
- Status (complete/current/planned)
- Progress percentage
- Key deliverables (list of 4-6 items)
- Milestones array

**Each Milestone Includes:**
- ID, name, date, description, owner
- Status (complete/pending/at-risk)

**Phase 2 Example Milestones:**
1. Mini Pilot Planning (Nov 15)
2. Executive Briefing Completed (Nov 21)
3. Zsofia Successor Announcement (Nov 29)
4. Face-to-Face Meeting (Dec 2)
5. Mini Pilot Kickoff (Dec 9)
6. Mini Pilot Complete (Dec 13)
7. LeanIX Approval (Dec 20)
8. Phase 1 Billing Complete (Dec 5)
9. Product Roadmap Review (Dec 10)
10. Learning Recommendations Mapped (Dec 12)
11. System Integration Test Complete (Dec 15)

**How to Update Timeline:**
```bash
# Edit the data file
code lib/timeline-data.ts

# Update milestone dates, add new milestones, change statuses
# Update phase progress percentages

# Deploy
npm run build
git add lib/timeline-data.ts
git commit -m "Update project timeline"
git push origin main
```

#### ❌ Static Content (Hardcoded in Component)

**UI Text** (~158 words):
- Header: "Project Timeline & Roadmap"
- Subtitle: "Complete journey from March 2025 through 2027"
- "Timeline Overview" section title
- "You are here" indicator
- Legend section with labels
- "Current Focus" box text

**How to Update Static Text:**
```bash
# Edit the component
code app/timeline/page.tsx

# Deploy
npm run build
git add .
git commit -m "Update timeline UI text"
git push origin main
```

---

### 4. Documents (/documents)
**File**: `app/documents/page.tsx`
**Total Words**: 261
**Dynamic Content**: 40% (inline data)
**Static Content**: 60% (UI text)

#### ✅ Dynamic Content (Inline Data Object)

**Document List** (~104 words):

Located at **lines 1-72** of `app/documents/page.tsx`:

```typescript
const documents = {
  strategic: [
    {
      name: 'Executive Briefing',
      description: 'Comprehensive overview for decision-makers and stakeholders',
      date: 'November 21, 2025',
      type: 'PDF',
      size: '3.6 MB',
      file: '/documents/executive-briefing.pdf',
    },
    // ... more documents
  ],
  operational: [ /* 3 docs */ ],
  handover: [ /* 2 docs */ ],
};
```

**3 Categories, 8 Documents Total:**

**Strategic Documents (3):**
1. Executive Briefing (3.6 MB)
2. Website Structure Outline (107 KB)
3. Master Guide & README (111 KB)

**Operational Documents (3):**
1. Weekly Progress Report Nov 21 (2.1 MB)
2. Project Timeline & Roadmap (165 KB)
3. Weekly Progress Template (190 KB)

**Handover Documents (2):**
1. Project Context Document (154 KB)
2. Stakeholder Map (148 KB)

**How to Update Documents:**
```bash
# 1. Upload new PDFs to public/documents/
cp ~/Desktop/new-doc.pdf public/documents/

# 2. Edit the documents object
code app/documents/page.tsx
# Update lines 1-72

# 3. Deploy
npm run build
git add .
git commit -m "Update document repository"
git push origin main
```

#### ❌ Static Content (Hardcoded)

**UI Text** (~157 words):
- "Project Documents" header
- "Central location for all project artifacts"
- Category headers and descriptions:
  - "Strategic Documents" - "High-level overviews"
  - "Operational Documents" - "Progress reports"
  - "Handover Documents" - "Transition materials"
- Search bar placeholder
- Download button labels

---

## Input Files Location

### Current Structure (NOT Centralized)

```
adidas-project-website/
├── data/
│   └── task-tracker.csv              ✅ Task data (INPUT FILE)
│
├── lib/
│   ├── timeline-data.ts              ⚠️ Timeline data (INPUT FILE - should be in data/)
│   ├── task-tracker-data.ts          🤖 Auto-generated (DO NOT EDIT)
│   ├── task-tracker-types.ts         💻 Type definitions (CODE)
│   └── parse-task-csv.ts             💻 Parser script (CODE)
│
├── app/
│   ├── page.tsx                      ⚠️ Executive briefing (100% HARDCODED)
│   ├── weekly-progress/page.tsx      ⚠️ Weekly status (70% HARDCODED)
│   ├── timeline/page.tsx             💻 Timeline UI (CODE)
│   └── documents/page.tsx            ⚠️ Documents list (INLINE DATA at top)
│
└── docs/
    ├── updating-tasks.md             📖 Task update guide
    ├── content-analysis.md           📖 Detailed content analysis
    └── CONTENT-MANAGEMENT-GUIDE.md   📖 This file
```

### File Type Legend

- ✅ **Input File** - Data you edit to update content
- 🤖 **Auto-Generated** - Created by scripts, do not edit manually
- 💻 **Code** - Application logic and components
- ⚠️ **Mixed** - Contains both data and code
- 📖 **Documentation** - Guides and references

---

## Weekly Update Workflow

### What Needs Updating Every Week?

#### 1. Task Data (Easy - 5 min)
**Frequency**: Weekly
**File**: `data/task-tracker.csv`

```bash
# Export from Excel/Google Sheets
# Copy to project
cp ~/Downloads/LSRT*.csv data/task-tracker.csv

# Run parser
npx tsx lib/parse-task-csv.ts

# Verify output shows correct task count
# Deploy
npm run build && git add . && git commit -m "Update tasks" && git push
```

#### 2. Weekly Progress Status (Hard - 15 min)
**Frequency**: Weekly
**File**: `app/weekly-progress/page.tsx`

**What to Update:**
- Line 24: "Week of [DATE]"
- Line 25: "Last Updated: [DATE] at [TIME]"
- Lines 46-51: Executive Summary paragraph
- Lines 74-92: Learning Agent "Completed This Week"
- Lines 98-111: Learning Agent "In Progress"
- Lines 116-129: Learning Agent "Blockers & Risks"
- Lines 134-147: Learning Agent "Key Metrics"
- Lines 170-194: Self-Reflection "Completed This Week"
- Lines 199-213: Self-Reflection "In Progress"
- Lines 217-231: Self-Reflection "Blockers & Risks"
- Lines 236-249: Self-Reflection "Key Metrics"
- Lines 277-290: "What Went Well"
- Lines 303-316: "What Could Be Improved"
- Line 324: "Next Report Due: [DATE]"

```bash
# Edit component
code app/weekly-progress/page.tsx

# Update all sections listed above
# Deploy
npm run build && git add . && git commit -m "Weekly status update" && git push
```

#### 3. Timeline Milestones (Medium - 5 min)
**Frequency**: As needed (bi-weekly or monthly)
**File**: `lib/timeline-data.ts`

```bash
# Edit timeline data
code lib/timeline-data.ts

# Add new milestones, update dates, change statuses
# Deploy
npm run build && git add . && git commit -m "Update timeline" && git push
```

#### 4. Documents (Rare - 5 min)
**Frequency**: As needed
**Files**: `app/documents/page.tsx` + `public/documents/*.pdf`

```bash
# Upload PDFs
cp new-doc.pdf public/documents/

# Update document list
code app/documents/page.tsx  # Edit lines 1-72

# Deploy
npm run build && git add . && git commit -m "Add new document" && git push
```

---

## Centralization Roadmap

### Problem: Input Files Are Scattered

Currently, editable content is in 3 different locations:
1. `data/task-tracker.csv` - Tasks
2. `lib/timeline-data.ts` - Timeline (mixed with code files)
3. `app/documents/page.tsx` - Documents (inline in component)

Plus, most weekly content is hardcoded in components.

### Proposed: Centralize All Input to `data/` Folder

```
data/
├── task-tracker.csv          # Tasks (already here)
├── timeline-data.ts          # Timeline (move from lib/)
├── documents-data.ts         # Documents (extract from component)
├── weekly-summary.ts         # Weekly status (extract from component)
└── project-stats.ts          # Optional: Extract homepage stats

lib/
├── parse-task-csv.ts         # Parser scripts (code only)
├── task-tracker-types.ts     # Type definitions
└── task-tracker-data.ts      # Auto-generated
```

### Benefits of Centralization

1. **Clear separation**: `data/` = content, `lib/` = code
2. **Easier to find**: All editable content in one place
3. **Consistent workflow**: All updates follow same pattern
4. **Better documentation**: Single source of truth

### Migration Steps

**Phase 1: Move Timeline Data**
```bash
# Move file
mv lib/timeline-data.ts data/timeline-data.ts

# Update import in app/timeline/page.tsx
# Change: from '@/lib/timeline-data'
# To: from '@/data/timeline-data'

# Test and deploy
npm run build && git add . && git commit -m "Centralize timeline data" && git push
```

**Phase 2: Extract Documents Data**
```bash
# Create new file
touch data/documents-data.ts

# Move documents object from app/documents/page.tsx lines 1-72
# to data/documents-data.ts

# Update component to import from data file
# Test and deploy
```

**Phase 3: Extract Weekly Summary (Optional)**
```bash
# Create weekly summary structure
touch data/weekly-summary.ts

# Define interface for weekly status
# Extract hardcoded sections to data file
# Update component to read from data file
```

---

## Recent Changes Log

### November 23, 2025

#### Removed Landing Page
- **Deleted**: `app/page.tsx` (old landing page with hero, stats, progress bars)
- **Moved**: `app/executive-briefing/page.tsx` → `app/page.tsx`
- **Updated**: Header navigation (removed duplicate link)
- **Result**: Executive Briefing is now homepage at `/`
- **Pages**: Reduced from 6 to 5 pages

**Rationale**: Landing page was 100% hardcoded and redundant. Executive Briefing serves as better homepage.

#### Created Content Analysis Documentation
- **Added**: `docs/content-analysis.md` - Detailed Playwright analysis
- **Added**: `docs/CONTENT-MANAGEMENT-GUIDE.md` - This file
- **Added**: `scripts/analyze-content.mjs` - Content crawler script
- **Added**: `scripts/content-analysis.json` - Raw analysis data

**Rationale**: Document what's dynamic vs. static for future maintenance.

### November 19, 2025

#### Implemented CSV Task Tracking
- **Added**: CSV-based task tracking system
- **Added**: Parser script and auto-generation
- **Added**: Task table, weekly focus section, modal
- **Result**: 30% of Weekly Progress page now data-driven

---

## Pain Points & Limitations

### Current Limitations

1. **Weekly Progress is Misleading**
   - Only 30% is CSV-driven (task table)
   - 70% is hardcoded (all status updates)
   - Weekly updates still require coding

2. **Homepage is Static**
   - All 922 words hardcoded
   - Dates, names, metrics all require code changes

3. **Timeline Data Not Centralized**
   - Lives in `lib/` with code files
   - Should be in `data/` folder

4. **Documents Data Inline**
   - Embedded in component code
   - Should be separate data file

5. **No Structured Weekly Summary**
   - Status updates are just text in component
   - Could be structured data (JSON/YAML)

### What Would Make Updates Easier?

#### Short Term (Quick Wins)
1. Move `lib/timeline-data.ts` → `data/timeline-data.ts`
2. Extract documents object → `data/documents-data.ts`
3. Add comments in components showing what needs weekly updates

#### Medium Term (More Effort)
1. Create `data/weekly-summary.ts` for status updates
2. Convert status sections to data-driven components
3. Extract homepage dates/stats to data file

#### Long Term (Full Refactor)
1. JSON/YAML-based content management
2. CMS integration for non-technical updates
3. Automated date updates
4. Progress tracking dashboard

---

## Questions for Future Decisions

Before proceeding with centralization, consider:

1. **How often will weekly status sections change?**
   - If weekly → worth extracting to data
   - If rarely → maybe leave hardcoded

2. **Who will update the content?**
   - Developers → TypeScript is fine
   - Non-technical users → need simpler format (JSON/YAML/CSV)

3. **What's the priority content to centralize?**
   - Timeline data (medium effort, high value)
   - Documents data (low effort, medium value)
   - Weekly summaries (high effort, high value)
   - Homepage stats (medium effort, low value)

4. **Should we move to structured data format?**
   - TypeScript objects (current)
   - JSON files (easier for non-developers)
   - YAML files (most readable)
   - Headless CMS (most complex, most flexible)

---

## Appendix: File Reference

### Input Files (Edit These to Update Content)

| File | Content | Update Method |
|------|---------|---------------|
| `data/task-tracker.csv` | 27 project tasks | CSV export → copy → parse |
| `lib/timeline-data.ts` | Timeline milestones | Edit TypeScript |
| `app/documents/page.tsx` (lines 1-72) | Document metadata | Edit object |
| `app/page.tsx` | Executive briefing | Edit component |
| `app/weekly-progress/page.tsx` | Weekly status | Edit component |

### Auto-Generated Files (Do Not Edit)

| File | Purpose |
|------|---------|
| `lib/task-tracker-data.ts` | Generated from CSV by parser |
| `.next/` | Build cache |
| `out/` | Static export output |

### Code Files (Only Edit for Features)

| File | Purpose |
|------|---------|
| `lib/parse-task-csv.ts` | CSV parser script |
| `lib/task-tracker-types.ts` | TypeScript type definitions |
| `components/*.tsx` | React components |
| `app/*/page.tsx` | Page layouts |

### Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project setup and overview |
| `docs/updating-tasks.md` | CSV update guide |
| `docs/content-analysis.md` | Detailed content analysis |
| `docs/CONTENT-MANAGEMENT-GUIDE.md` | This file |

---

## Next Steps

**Immediate (This Week):**
1. Review this documentation
2. Decide on centralization approach
3. Prioritize which content to make data-driven

**Short Term (Next 2 Weeks):**
1. Move timeline data to `data/` folder
2. Extract documents data to separate file
3. Add update comments to components

**Long Term (Next Month):**
1. Consider structured weekly summary format
2. Evaluate CMS options if needed
3. Automate common updates (dates, progress tracking)

---

**For Questions or Issues:**
- Technical: georgios@baresquare.com
- Content: lars@baresquare.com
- Repository: https://github.com/ggrigo/adidas-project-website
- Deployment: https://adidas-project-website.netlify.app
