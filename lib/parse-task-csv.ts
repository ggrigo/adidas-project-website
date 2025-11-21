#!/usr/bin/env tsx
/**
 * CSV Task Tracker Parser
 * Converts task-tracker.csv to task-tracker-data.ts
 *
 * Usage: npx tsx lib/parse-task-csv.ts
 */

import { readFileSync, writeFileSync } from 'fs';
import { parse } from 'csv-parse/sync';
import { join } from 'path';
import type { Task, Workstream, TaskStatus, Lead } from './task-tracker-types';

// Step 2.3: Read CSV file
function readCSV(): string {
  const csvPath = join(process.cwd(), 'data', 'task-tracker.csv');
  console.log(`📖 Reading CSV from: ${csvPath}`);
  return readFileSync(csvPath, 'utf-8');
}

// Step 2.4: Parse CSV to array
function parseCSV(csvContent: string): any[] {
  const records = parse(csvContent, {
    skip_empty_lines: true,
    relax_column_count: true,
  });

  // Remove header row (row 0) and notes row (row 1)
  const dataRows = records.slice(2);
  console.log(`📊 Parsed ${dataRows.length} data rows`);
  return dataRows;
}

// Step 2.5: Validate row
function isValidRow(row: any[]): boolean {
  // Must have at least title (column 3)
  if (!row[3] || row[3].trim() === '') return false;

  // Must have at least 15 columns
  if (row.length < 15) return false;

  return true;
}

// Step 2.7: Generate unique ID
function generateId(workstream: string, title: string): string {
  const ws = workstream.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const t = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const combined = ws ? `${ws}-${t}` : t;
  return combined.slice(0, 80); // Limit length
}

// Step 2.6: Map CSV row to Task interface
function mapRowToTask(row: any[], index: number): Task {
  const workstream = (row[2] || '').trim() as Workstream;
  const title = (row[3] || '').trim();

  return {
    id: generateId(workstream, title),
    completed: row[0] === 'TRUE',
    weeklyFocus: row[1] === 'X',
    workstream,
    title,
    description: (row[4] || '').trim(),
    whyItMatters: (row[5] || '').trim(),
    latestUpdate: (row[6] || '').trim(),
    adidasComments: (row[7] || '').trim(),
    startDate: (row[8] || '').trim(),
    durationWeeks: parseFloat(row[9] || '0'),
    endDate: (row[10] || '').trim(),
    lead: (row[11] || 'adidas').trim() as Lead,
    status: (row[12] || 'Not Started').trim() as TaskStatus,
    ownerAdidas: (row[13] || '').trim(),
    ownerBaresquare: (row[14] || '').trim(),
  };
}

// Step 2.8: Generate TypeScript output
function generateTypeScriptOutput(tasks: Task[]): string {
  const tasksJson = JSON.stringify(tasks, null, 2);

  return `/**
 * Task Tracker Data
 * Auto-generated from data/task-tracker.csv
 * Last updated: ${new Date().toISOString()}
 *
 * DO NOT EDIT MANUALLY - Run: npx tsx lib/parse-task-csv.ts
 */

import type { Task } from './task-tracker-types';

export const tasks: Task[] = ${tasksJson};

// Helper: Get tasks by workstream
export function getTasksByWorkstream(workstream: string): Task[] {
  return tasks.filter(t => t.workstream === workstream);
}

// Helper: Get weekly focus tasks
export function getWeeklyFocusTasks(): Task[] {
  return tasks.filter(t => t.weeklyFocus);
}

// Helper: Get tasks by status
export function getTasksByStatus(status: string): Task[] {
  return tasks.filter(t => t.status === status);
}

// Helper: Get tasks by lead
export function getTasksByLead(lead: 'adidas' | 'baresquare'): Task[] {
  return tasks.filter(t => t.lead === lead);
}

// Helper: Get active tasks (not completed, not paused)
export function getActiveTasks(): Task[] {
  return tasks.filter(t => !t.completed && t.status !== 'Paused');
}

// Helper: Get task by ID
export function getTaskById(id: string): Task | undefined {
  return tasks.find(t => t.id === id);
}
`;
}

// Step 2.9: Write output file
function writeOutputFile(content: string): void {
  const outputPath = join(process.cwd(), 'lib', 'task-tracker-data.ts');
  writeFileSync(outputPath, content, 'utf-8');
  console.log(`✅ Generated: ${outputPath}`);
}

// Step 2.10: Main execution
function main() {
  try {
    console.log('🚀 Starting CSV import...\n');

    // Read and parse
    const csvContent = readCSV();
    const rows = parseCSV(csvContent);

    // Validate and map
    const validRows = rows.filter(isValidRow);
    console.log(`✓ Valid rows: ${validRows.length}`);

    const tasks = validRows.map((row, index) => mapRowToTask(row, index));
    console.log(`✓ Tasks mapped: ${tasks.length}`);

    // Statistics
    const focusTasks = tasks.filter(t => t.weeklyFocus).length;
    const completed = tasks.filter(t => t.completed).length;
    const workstreams = [...new Set(tasks.map(t => t.workstream).filter(Boolean))];

    console.log(`\n📈 Statistics:`);
    console.log(`   - Total tasks: ${tasks.length}`);
    console.log(`   - Completed: ${completed}`);
    console.log(`   - Weekly focus: ${focusTasks}`);
    console.log(`   - Workstreams: ${workstreams.length}`);
    console.log(`   - Workstreams: ${workstreams.join(', ')}`);

    // Generate and write
    const output = generateTypeScriptOutput(tasks);
    writeOutputFile(output);

    console.log(`\n✨ Success! Import complete.\n`);

  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

// Run if executed directly
if (require.main === module) {
  main();
}

export { main };
