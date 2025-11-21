export interface ActionItem {
  id: string;
  title: string;
  owner: string;
  team: 'adidas' | 'baresquare';
  dueDate: string;
  status: 'complete' | 'on-track' | 'in-progress' | 'at-risk' | 'blocked';
  notes: string;
  project: 'learning-agent' | 'self-reflection' | 'both' | 'general';
}

export interface Milestone {
  id: string;
  title: string;
  targetDate: string;
  confidence: 'high' | 'medium' | 'low';
  notes: string;
  project: 'learning-agent' | 'self-reflection' | 'both' | 'general';
}

// Action Items for adidas and Baresquare teams
export const actionItems: ActionItem[] = [
  // adidas Team Actions
  {
    id: 'ai-adidas-1',
    title: 'Confirm mini pilot participants',
    owner: 'Zsofia',
    team: 'adidas',
    dueDate: '2025-11-29',
    status: 'in-progress',
    notes: 'In progress, communications sent',
    project: 'self-reflection'
  },
  {
    id: 'ai-adidas-2',
    title: 'Review micro-actions content',
    owner: 'Zsofia/Divya',
    team: 'adidas',
    dueDate: '2025-11-27',
    status: 'in-progress',
    notes: 'Meeting scheduled for Nov 26',
    project: 'self-reflection'
  },
  {
    id: 'ai-adidas-3',
    title: 'LeanIX registration completion',
    owner: 'Lucas',
    team: 'adidas',
    dueDate: '2025-11-29',
    status: 'in-progress',
    notes: 'Final approval pending',
    project: 'learning-agent'
  },
  {
    id: 'ai-adidas-4',
    title: 'Announce Zsofia\'s successor',
    owner: 'Pedro/HR',
    team: 'adidas',
    dueDate: '2025-11-29',
    status: 'in-progress',
    notes: 'Expected end of week',
    project: 'general'
  },

  // Baresquare Team Actions
  {
    id: 'ai-bsq-1',
    title: 'Executive briefing deck preparation',
    owner: 'Georgios',
    team: 'baresquare',
    dueDate: '2025-11-30',
    status: 'on-track',
    notes: 'Context documents complete, slides next',
    project: 'general'
  },
  {
    id: 'ai-bsq-2',
    title: 'User access setup in adidas environment',
    owner: 'Nikos',
    team: 'baresquare',
    dueDate: '2025-11-30',
    status: 'in-progress',
    notes: 'Meeting with Lucas tomorrow',
    project: 'self-reflection'
  },
  {
    id: 'ai-bsq-3',
    title: 'Participant briefing materials',
    owner: 'Lars',
    team: 'baresquare',
    dueDate: '2025-12-05',
    status: 'in-progress',
    notes: 'Draft started',
    project: 'self-reflection'
  },
  {
    id: 'ai-bsq-4',
    title: 'Alternative UI review preparation',
    owner: 'Nikos',
    team: 'baresquare',
    dueDate: '2025-11-29',
    status: 'complete',
    notes: 'Two versions ready for stakeholder review',
    project: 'self-reflection'
  }
];

// Upcoming Milestones
export const upcomingMilestones: Milestone[] = [
  {
    id: 'ms-1',
    title: 'Executive briefing materials complete',
    targetDate: '2025-11-30',
    confidence: 'high',
    notes: 'Context docs done, slides in progress',
    project: 'general'
  },
  {
    id: 'ms-2',
    title: 'Zsofia\'s successor announced',
    targetDate: '2025-11-29',
    confidence: 'medium',
    notes: 'Expected end of week',
    project: 'general'
  },
  {
    id: 'ms-3',
    title: 'Face-to-face meeting (Herzogenaurach)',
    targetDate: '2025-12-02',
    confidence: 'high',
    notes: 'Agenda set, materials in prep',
    project: 'both'
  },
  {
    id: 'ms-4',
    title: 'Mini pilot testing',
    targetDate: '2025-12-09',
    confidence: 'high',
    notes: 'Logistics planned, pending participant confirmation',
    project: 'self-reflection'
  },
  {
    id: 'ms-5',
    title: 'Learning Agent LeanIX approval',
    targetDate: '2025-11-29',
    confidence: 'medium',
    notes: 'Lucas escalating',
    project: 'learning-agent'
  }
];

// Helper function to get action items by team
export function getActionItemsByTeam(team: 'adidas' | 'baresquare'): ActionItem[] {
  return actionItems.filter(item => item.team === team);
}

// Helper function to get action items by status
export function getActionItemsByStatus(status: ActionItem['status']): ActionItem[] {
  return actionItems.filter(item => item.status === status);
}

// Helper function to get action items by project
export function getActionItemsByProject(project: ActionItem['project']): ActionItem[] {
  return actionItems.filter(item => item.project === project);
}

// Helper function to get overdue action items
export function getOverdueActionItems(): ActionItem[] {
  const today = new Date();
  return actionItems.filter(item => {
    const dueDate = new Date(item.dueDate);
    return dueDate < today && item.status !== 'complete';
  });
}

// Helper function to sort action items by due date
export function sortActionItemsByDueDate(items: ActionItem[], ascending = true): ActionItem[] {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.dueDate).getTime();
    const dateB = new Date(b.dueDate).getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
}

// Helper function to get milestones by confidence
export function getMilestonesByConfidence(confidence: Milestone['confidence']): Milestone[] {
  return upcomingMilestones.filter(ms => ms.confidence === confidence);
}

// Helper function to format date for display
export function formatActionItemDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
