# Task Tracker Update Guide

## Overview

The website's task tracker is powered by a CSV file that gets converted to TypeScript data. This guide explains how to update tasks weekly.

---

## Quick Update Process

### 1. Update the CSV File

Edit the source CSV file:
```
data/task-tracker.csv
```

The CSV has **15 columns**:

| Column | Name | Example |
|--------|------|---------|
| 0 | Completed (✓) | `TRUE` or `FALSE` |
| 1 | Weekly Focus | `X` (for focus) or empty |
| 2 | Workstream | `PRODUCT DEV`, `USER TESTING`, etc. |
| 3 | Task title | `Mini Testing` |
| 4 | Task description | Detailed what/how |
| 5 | Why it matters | Business justification |
| 6 | Latest update | Status from this week |
| 7 | adidas comments | Feedback for next review |
| 8 | Start date | `2025-11-01` (ISO format) |
| 9 | Duration (weeks) | `2.0` |
| 10 | End date | `2025-12-15` (ISO format) |
| 11 | Lead | `adidas` or `baresquare` |
| 12 | Status | `On Track`, `Completed`, `Paused`, `On Watch`, `Not Started` |
| 13 | Owner (adidas) | `Zsofia` |
| 14 | Owner (baresquare) | `Lars` |

### 2. Run the Parser Script

Convert CSV to TypeScript:

```bash
npx tsx lib/parse-task-csv.ts
```

You'll see output like:
```
🚀 Starting CSV import...
📖 Reading CSV from: data/task-tracker.csv
📊 Parsed 46 data rows
✓ Valid rows: 27
✓ Tasks mapped: 27

📈 Statistics:
   - Total tasks: 27
   - Completed: 5
   - Weekly focus: 10
   - Workstreams: 7
✅ Generated: lib/task-tracker-data.ts
✨ Success! Import complete.
```

### 3. Review Generated Data

Check the generated file:
```
lib/task-tracker-data.ts
```

Verify:
- Task count matches expectations
- Weekly focus items are correct
- No parsing errors

### 4. Test Locally

Start dev server and check:
```bash
npm run dev
```

Visit `/weekly-progress` and verify:
- **Weekly Focus section** shows correct priority tasks (with star icons)
- **All Project Tasks table** shows all tasks
- **Filters work** (workstream, status, search)
- **Modal opens** when clicking tasks
- **Timeline page** (`/timeline`) shows updated milestones

### 5. Build and Deploy

Build for production:
```bash
npm run build
```

If successful, commit and push:
```bash
git add data/task-tracker.csv lib/task-tracker-data.ts
git commit -m "Update task tracker - [date]"
git push origin main
```

Then deploy to Netlify:
```bash
netlify deploy --prod
```

---

## Updating Weekly Focus

To mark a task as **weekly focus**:

1. Open `data/task-tracker.csv`
2. Find the task row
3. Put `X` in column 1 (Weekly Focus column)
4. Run parser: `npx tsx lib/parse-task-csv.ts`
5. Task will appear in "This Week's Focus" section with a star icon

---

## Status Values

Use **exact** status values:

- ✅ **On Track** - Progressing as planned
- ✅ **Completed** - Finished
- ⚠️ **On Watch** - Needs monitoring
- ⏸️ **Paused** - Temporarily halted
- ⬜ **Not Started** - Not yet begun

Status determines badge colors:
- Green: `Completed`, `On Track`
- Yellow: `On Watch`
- Gray: `Paused`, `Not Started`

---

## Workstreams

Available workstreams:
- `PRODUCT DEV` - Product development tasks
- `USER TESTING` - Testing activities
- `STAKEHOLDER MGT.` - Stakeholder management
- `CHANGE REQUESTS` - Change request tasks
- `CONTENT OPS` - Content operations
- `ANALYTICS` - Analytics setup
- `PROJECT ADMIN` - Administrative tasks

Leave empty if task doesn't fit a workstream.

---

## Common Tasks

### Adding a New Task

1. Open `data/task-tracker.csv`
2. Add new row with all 15 columns filled
3. Set `completed` to `FALSE`
4. Set `weeklyFocus` to empty (or `X` if priority)
5. Run parser
6. Verify on website

### Completing a Task

1. Find task row in CSV
2. Change column 0 to `TRUE`
3. Change column 12 (status) to `Completed`
4. Run parser

### Changing Task Dates

1. Update columns 8 (start), 9 (duration), 10 (end)
2. Dates must be ISO format: `YYYY-MM-DD`
3. Duration in weeks (decimals OK: `2.5` = 2.5 weeks)
4. Run parser

### Updating Task Description

1. Edit columns 4 (description), 5 (why it matters)
2. Use newlines with `\n` for multi-paragraph text
3. Run parser
4. Full text appears in modal when clicking task

---

## Timeline Integration

The parser automatically syncs some tasks to the timeline as milestones.

Currently integrated:
- Phase 1 Billing (Dec 5) ✅
- Mini Testing (Dec 2-3)
- Product Roadmap Review (Dec 10)
- Learning Recs (Dec 12)
- System Integration Test (Dec 15)
- UI Copy Pilot (Jan 14)
- InfoSec Approval (Jan 26)
- Privacy Approval (Feb 12)

To add more tasks to timeline:
1. Edit `lib/timeline-data.ts`
2. Add milestone to appropriate phase
3. Reference task ID if needed

---

## Troubleshooting

### Parser Fails

**Problem**: CSV parsing error

**Solution**:
- Check CSV has no missing columns
- Ensure dates are ISO format (`YYYY-MM-DD`)
- Remove empty rows (except header)
- Check for special characters in text

### Tasks Missing on Website

**Problem**: Task in CSV but not on website

**Solution**:
- Run parser again: `npx tsx lib/parse-task-csv.ts`
- Check task has title (column 3)
- Verify build succeeded: `npm run build`
- Clear browser cache

### Weekly Focus Not Showing

**Problem**: Task marked with `X` but not in focus section

**Solution**:
- Verify `X` is in column 1 (not column 0)
- Run parser again
- Check `getWeeklyFocusTasks()` in data file

### Wrong Status Colors

**Problem**: Status badge shows wrong color

**Solution**:
- Use exact status values (see "Status Values" above)
- Case-sensitive: `On Track` not `on track`
- Re-run parser after fixing

---

## File Reference

| File | Purpose |
|------|---------|
| `data/task-tracker.csv` | Source CSV file (edit this) |
| `lib/parse-task-csv.ts` | Parser script |
| `lib/task-tracker-data.ts` | Generated data (don't edit manually) |
| `lib/task-tracker-types.ts` | TypeScript types |
| `components/TaskTrackerTable.tsx` | Main task table |
| `components/WeeklyFocusSection.tsx` | Weekly focus cards |
| `components/TaskDetailModal.tsx` | Task detail popup |

---

## Weekly Workflow Checklist

**Every week before the update:**

- [ ] Export latest task list from source system
- [ ] Update `data/task-tracker.csv`
- [ ] Mark completed tasks (`TRUE` in column 0)
- [ ] Update status values (column 12)
- [ ] Set weekly focus (`X` in column 1)
- [ ] Update latest update column (column 6)
- [ ] Add any adidas comments (column 7)
- [ ] Run parser: `npx tsx lib/parse-task-csv.ts`
- [ ] Test locally: `npm run dev`
- [ ] Check `/weekly-progress` and `/timeline`
- [ ] Build: `npm run build`
- [ ] Commit changes
- [ ] Deploy: `netlify deploy --prod`

---

## Support

Questions? Contact:
- **Technical**: Georgios (baresquare)
- **Content**: Lars (baresquare)
- **adidas Lead**: Zsofia Pior
