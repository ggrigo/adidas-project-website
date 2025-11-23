# adidas AI Learning & Leadership Development - Project Website

Professional project website for enterprise AI deployment tracking and stakeholder communication. This site provides real-time visibility into project progress, task tracking, timeline management, and document access for all stakeholders.

## Live URL

Production: [https://adidas-project-website.netlify.app](https://adidas-project-website.netlify.app)

## Features

- **Landing Page**: Hero section, key stats, status dashboard, value proposition
- **Executive Briefing**: Comprehensive overview for decision-makers
- **Weekly Progress**: CSV-based task tracking with sortable/filterable tables
- **CSV Task Tracker**:
  - 27 project tasks across 7 workstreams
  - Weekly focus highlighting (10 priority tasks)
  - Sortable and filterable task table
  - Click-to-expand modal with full 15-field task details
  - Real-time status tracking (On Track, Completed, Paused, On Watch, Not Started)
- **Project Timeline**: Phase-based milestone visualization
- **Document Repository**: Central location for all project artifacts
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Password Protection**: Netlify-based access control

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Data Management**: CSV-based with automated parsing
- **Deployment**: Netlify (static export)
- **Build Tool**: Turbopack

## Getting Started

### Installation

```bash
# Clone the repository
cd adidas-project-delivery/adidas-project-website

# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Create production build
npm run build

# Preview production build locally
npm run start
```

## Project Structure

```
adidas-project-website/
├── app/
│   ├── page.tsx                           # Landing page
│   ├── executive-briefing/
│   │   └── page.tsx                      # Executive briefing
│   ├── weekly-progress/
│   │   └── page.tsx                      # Weekly progress with task tracker
│   ├── timeline/
│   │   └── page.tsx                      # Project timeline visualization
│   ├── documents/
│   │   └── page.tsx                      # Document repository
│   ├── layout.tsx                         # Root layout with header/footer
│   └── globals.css                        # Global styles
├── components/
│   ├── Header.tsx                         # Navigation header
│   ├── Footer.tsx                         # Site footer
│   ├── StatusCard.tsx                     # Status card component
│   ├── ProgressBar.tsx                    # Progress bar component
│   ├── WeeklyFocusSection.tsx            # Weekly priority tasks section
│   ├── TaskTrackerTable.tsx              # Sortable/filterable task table
│   └── TaskDetailModal.tsx               # Full task detail modal
├── data/
│   └── task-tracker.csv                   # SOURCE OF TRUTH for all tasks
├── lib/
│   ├── task-tracker-types.ts             # TypeScript types for tasks
│   ├── parse-task-csv.ts                 # CSV parser script
│   ├── task-tracker-data.ts              # Auto-generated task data
│   └── timeline-data.ts                   # Timeline milestones
├── docs/
│   └── updating-tasks.md                  # Detailed task update guide
├── public/
│   └── documents/                         # Static document files
├── netlify.toml                           # Netlify configuration
└── package.json                           # Dependencies
```

## CSV Task Tracking System

The website uses a CSV-based task tracking system for easy weekly updates without touching code.

### Architecture

1. **Source of Truth**: `data/task-tracker.csv` (15 columns, Excel-compatible)
2. **Parser Script**: `lib/parse-task-csv.ts` converts CSV → TypeScript
3. **Generated Data**: `lib/task-tracker-data.ts` (auto-generated, do not edit manually)
4. **Components**: Display task data with filtering, sorting, and detail views

### CSV Structure (15 Columns)

| Column | Type | Description |
|--------|------|-------------|
| Completed | Y/N | Task completion flag |
| Weekly Focus | Y/N | Priority task for current week |
| Workstream | Text | One of 7 workstreams (PRODUCT DEV, USER TESTING, etc.) |
| Action Item / Task | Text | Task title |
| Description | Text | Detailed task description |
| Why it matters | Text | Business value and impact |
| Latest Update | Text | Most recent progress note |
| adidas Comments | Text | Comments from adidas team |
| Start Date | Date | Task start date (YYYY-MM-DD) |
| Duration (weeks) | Number | Task duration |
| End Date | Date | Target completion date (YYYY-MM-DD) |
| Lead | Text | 'adidas' or 'baresquare' |
| Status | Text | On Track, Completed, Paused, On Watch, Not Started |
| Owner (adidas) | Text | Adidas team member name |
| Owner (baresquare) | Text | Baresquare team member name |

### 7 Workstreams

1. **PRODUCT DEV** - Core product development tasks
2. **USER TESTING** - User research and testing activities
3. **STAKEHOLDER MGT.** - Communication and stakeholder management
4. **CHANGE REQUESTS** - Scope changes and adjustments
5. **CONTENT OPS** - Content creation and maintenance
6. **ANALYTICS** - Measurement and reporting
7. **PROJECT ADMIN** - Administrative tasks

### 5 Task Statuses

- **On Track**: Progressing as planned (green badge)
- **Completed**: Task finished (gray badge)
- **Paused**: Temporarily on hold (yellow badge)
- **On Watch**: Needs attention (orange badge)
- **Not Started**: Not yet begun (blue badge)

## Weekly Task Update Workflow

This is the process you should follow every week to update the website with the latest task information.

### Quick Update Process (5 Steps)

```bash
# 1. Export latest task tracker from Excel/Google Sheets to CSV
#    Save as: LSRT Weekly Task Tracker - [DATE].csv

# 2. Copy CSV to project data folder
cp ~/Downloads/LSRT\ Weekly\ Task\ Tracker\ -\ [DATE].csv \
   adidas-project-website/data/task-tracker.csv

# 3. Run the parser to generate TypeScript data
cd adidas-project-website
npx tsx lib/parse-task-csv.ts

# 4. Review the output
#    You should see: "✅ Successfully imported X tasks"
#    Check the statistics match your expectations

# 5. Build and deploy
npm run build
git add .
git commit -m "Update task tracker - [DATE]"
git push origin main
```

### Detailed Weekly Workflow

#### Monday Morning Update

1. **Export Latest CSV**
   - Open the master task tracker (Excel/Google Sheets)
   - Update all task statuses, dates, and weekly focus flags
   - Export to CSV format
   - Save with date: `LSRT Weekly Task Tracker - DD.MM.YYYY.csv`

2. **Replace CSV File**
   ```bash
   # Navigate to project
   cd ~/Documents/Projects/adidas-project-delivery/adidas-project-website

   # Backup previous version (optional)
   cp data/task-tracker.csv data/task-tracker-backup.csv

   # Copy new CSV
   cp ~/Downloads/LSRT\ Weekly\ Task\ Tracker\ -\ *.csv data/task-tracker.csv
   ```

3. **Run Parser Script**
   ```bash
   # This regenerates lib/task-tracker-data.ts
   npx tsx lib/parse-task-csv.ts
   ```

   Expected output:
   ```
   📊 CSV Task Tracker Parser
   ━━━━━━━━━━━━━━━━━━━━━━━━━

   📁 Reading CSV from: data/task-tracker.csv
   ✅ Successfully imported X tasks

   📈 Statistics:
   - Total tasks: X
   - Weekly focus tasks: X
   - Workstreams: X
   - Completed tasks: X
   - Active tasks: X

   💾 Generated: lib/task-tracker-data.ts
   ```

4. **Verify Changes**
   ```bash
   # Run development server
   npm run dev

   # Open http://localhost:3000/weekly-progress
   # Check:
   # - Weekly Focus section shows correct priority tasks
   # - Task table has all tasks with correct statuses
   # - Click a task to verify all 15 fields are correct
   # - Test filters (workstream, status, search)
   ```

5. **Build and Deploy**
   ```bash
   # Create production build
   npm run build

   # If build succeeds, commit and push
   git add data/task-tracker.csv lib/task-tracker-data.ts
   git commit -m "Update task tracker - $(date +%d.%m.%Y)

   - Updated X tasks
   - Y new weekly focus items
   - Status changes: [list major changes]"

   git push origin main
   ```

6. **Verify Production**
   - Wait 1-2 minutes for Netlify deployment
   - Visit https://adidas-project-website.netlify.app/weekly-progress
   - Verify all changes are live

### Common Task Updates

#### Adding a New Task

1. Open `data/task-tracker.csv` in Excel/text editor
2. Add new row with all 15 columns filled
3. Ensure dates are in YYYY-MM-DD format
4. Set appropriate workstream, status, and owners
5. Run parser: `npx tsx lib/parse-task-csv.ts`

#### Marking Tasks as Completed

1. In CSV, change `Status` column to "Completed"
2. Optionally change `Completed` column to "Y"
3. Add final update to `Latest Update` column
4. Run parser and deploy

#### Changing Weekly Focus

1. In CSV, set `Weekly Focus` to "Y" for priority tasks
2. Recommended: Keep 8-12 weekly focus tasks maximum
3. Run parser - Weekly Focus section will update automatically

#### Updating Dates

1. Modify `Start Date`, `End Date`, or `Duration (weeks)` in CSV
2. Ensure dates are YYYY-MM-DD format
3. Run parser and deploy

#### Adding Task Updates

1. Update `Latest Update` column with progress notes
2. Optionally add to `adidas Comments` for client feedback
3. Run parser and deploy

## Timeline Integration

Selected high-priority tasks from the CSV automatically appear as milestones on the Timeline page.

### Current CSV Tasks on Timeline

9 tasks are synchronized with the timeline:

**Phase 2 (SIT Development & Testing)**
- Billing and Invoice Module (Dec 5)
- Roadmap Review & Prioritization (Dec 10)
- Learning Recommendations Strategy (Dec 12)
- SIT Feature Completion (Dec 15)

**Phase 3 (UAT & Go-Live)**
- UI Copy Finalization (Jan 14)
- InfoSec Review Completion (Jan 26)
- Privacy Review Completion (Feb 12)

### Updating Timeline Milestones

If task dates change in CSV:
1. Update `data/task-tracker.csv` with new dates
2. Manually update corresponding milestone in `lib/timeline-data.ts`
3. Keep CSV and timeline in sync

Example:
```typescript
// In lib/timeline-data.ts
{
  id: 'm2-8',
  title: 'Billing and Invoice Module',
  date: new Date('2025-12-05'), // Match CSV end date
  status: 'upcoming',
  description: '...'
}
```

## Deployment to Netlify

The site automatically deploys when you push to the main branch.

### Automatic Deployment (Default)

```bash
# Commit your changes
git add .
git commit -m "Your update message"

# Push to GitHub
git push origin main

# Netlify automatically builds and deploys
# Check deployment status at https://app.netlify.com
```

### Manual Deployment via Netlify CLI

```bash
# Install Netlify CLI (one-time)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
netlify deploy --prod
```

### Build Configuration

Build settings are in `netlify.toml`:
- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Node version**: 20

## Troubleshooting

### Parser Issues

**Problem**: "Error parsing CSV"
```bash
# Solution: Check CSV format
# - Ensure 15 columns per row
# - Check for unescaped quotes or commas in text fields
# - Verify dates are YYYY-MM-DD format
```

**Problem**: "Task count mismatch"
```bash
# Solution: Check for empty rows or header rows
# The parser skips:
# - Rows without a title
# - Rows with less than 15 columns
# - Header rows (first row with column names)
```

### Build Errors

**Problem**: Build fails with type errors
```bash
# Solution: Regenerate task data
npx tsx lib/parse-task-csv.ts
npm run build
```

**Problem**: "Module not found: csv-parse"
```bash
# Solution: Reinstall dependencies
npm install
```

### Data Display Issues

**Problem**: Tasks not showing on website
```bash
# 1. Check if parser ran successfully
npx tsx lib/parse-task-csv.ts

# 2. Verify lib/task-tracker-data.ts was updated
ls -l lib/task-tracker-data.ts

# 3. Clear Next.js cache and rebuild
rm -rf .next
npm run build
```

**Problem**: Filters not working
```bash
# Check browser console for errors
# Verify workstream and status values match exactly:
# - Case-sensitive
# - Must be one of the 7 workstreams
# - Must be one of the 5 statuses
```

## Advanced Usage

### Custom Helper Functions

The auto-generated `lib/task-tracker-data.ts` includes helper functions:

```typescript
import {
  tasks,
  getTasksByWorkstream,
  getWeeklyFocusTasks,
  getTasksByStatus,
  getActiveTasks,
  getTaskById
} from '@/lib/task-tracker-data';

// Get all tasks for a specific workstream
const productTasks = getTasksByWorkstream('PRODUCT DEV');

// Get only weekly focus tasks
const focusTasks = getWeeklyFocusTasks();

// Get tasks by status
const completedTasks = getTasksByStatus('Completed');

// Get a specific task
const task = getTaskById('product-dev-billing-and-invoice-module');
```

### CSV Validation

Before running the parser, you can validate your CSV:

```bash
# Count rows (should match expected task count + 1 header)
wc -l data/task-tracker.csv

# Check for formatting issues
cat data/task-tracker.csv | head -5
```

### Parser Customization

To modify parser behavior, edit `lib/parse-task-csv.ts`:

- Change ID generation format (line ~65)
- Add custom validation rules (line ~50)
- Modify output format (line ~90)

After changes:
```bash
npx tsx lib/parse-task-csv.ts
```

## Documentation

- **Task Update Guide**: See [docs/updating-tasks.md](docs/updating-tasks.md) for detailed CSV instructions
- **Timeline Data**: See `lib/timeline-data.ts` for milestone structure
- **Component Docs**: See inline TypeScript comments in component files

## File Ownership

**DO NOT EDIT MANUALLY:**
- `lib/task-tracker-data.ts` - Auto-generated by parser

**SAFE TO EDIT:**
- `data/task-tracker.csv` - Your weekly updates go here
- `lib/timeline-data.ts` - Manually maintained timeline
- All component files in `components/`
- All page files in `app/`

**VERSION CONTROL:**
- `data/task-tracker.csv` - Tracked in git (source of truth)
- `lib/task-tracker-data.ts` - Tracked in git (for deployment)
- `.next/` - Ignored (build cache)
- `out/` - Ignored (build output)

## Support

**Technical Questions:**
- Lars Boeddener: lars@baresquare.com
- Georgios Grigoriadis: georgios@baresquare.com

**Task Tracking Issues:**
- Check [docs/updating-tasks.md](docs/updating-tasks.md) first
- Review troubleshooting section above
- Contact Georgios for parser/workflow issues

**Deployment Issues:**
- Check Netlify deployment logs
- Verify build succeeds locally first
- Contact technical team

## Project History

- **November 19, 2025**: CSV task tracking system implemented
- **November 21, 2025**: Initial deployment to Netlify
- **Current Phase**: Weekly task updates via CSV workflow

## License

Proprietary - adidas & Baresquare Partnership

---

**Last Updated**: November 23, 2025
**Deployment**: Automatic via GitHub → Netlify
**Review Schedule**: Weekly (Monday mornings)
