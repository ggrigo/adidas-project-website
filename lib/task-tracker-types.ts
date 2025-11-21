// Task Tracker Type Definitions
// Generated from CSV structure: LSRT Weekly Task Tracker

export type Workstream =
  | 'PRODUCT DEV'
  | 'USER TESTING'
  | 'STAKEHOLDER MGT.'
  | 'CHANGE REQUESTS'
  | 'CONTENT OPS'
  | 'ANALYTICS'
  | 'PROJECT ADMIN'
  | '';

export type TaskStatus =
  | 'On Track'
  | 'Completed'
  | 'Paused'
  | 'On Watch'
  | 'Not Started';

export type Lead = 'adidas' | 'baresquare';

export interface Task {
  id: string;
  completed: boolean;
  weeklyFocus: boolean;
  workstream: Workstream;
  title: string;
  description: string;
  whyItMatters: string;
  latestUpdate: string;
  adidasComments: string;
  startDate: string;
  durationWeeks: number;
  endDate: string;
  lead: Lead;
  status: TaskStatus;
  ownerAdidas: string;
  ownerBaresquare: string;
}

// Helper function to get status badge color
export function getStatusColor(status: TaskStatus): string {
  switch (status) {
    case 'Completed':
      return 'success';
    case 'On Track':
      return 'success';
    case 'On Watch':
      return 'warning';
    case 'Paused':
      return 'neutral';
    case 'Not Started':
      return 'neutral';
    default:
      return 'neutral';
  }
}

// Helper function to format duration
export function formatDuration(weeks: number): string {
  if (weeks === 0) return 'Same day';
  if (weeks === 1) return '1 week';
  if (weeks < 1) return `${Math.round(weeks * 7)} days`;
  return `${weeks} weeks`;
}

// Helper function to format date
export function formatTaskDate(dateString: string): string {
  if (!dateString) return 'TBD';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString; // Return as-is if invalid
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
