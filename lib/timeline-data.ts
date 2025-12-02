export interface Milestone {
  id: string;
  name: string;
  date: string;
  description: string;
  owner: string;
  status: 'complete' | 'pending' | 'at-risk';
}

export interface TimelinePhase {
  id: string;
  name: string;
  shortName: string;
  startDate: string;
  endDate: string;
  status: 'complete' | 'current' | 'planned';
  color: 'success' | 'info' | 'neutral';
  milestones: Milestone[];
  keyDeliverables: string[];
}

export const timelineData: TimelinePhase[] = [
  {
    id: 'alpha',
    name: 'Alpha Release (Working Prototype)',
    shortName: 'Alpha',
    startDate: '2025-09-15',
    endDate: '2025-10-31',
    status: 'complete',
    color: 'success',
    keyDeliverables: [
      '100% Microsoft Cloud-native solution',
      'Clickable prototype with basic UI/UX',
      '24 questions with optional comment per question',
      'Automatic job position-to-Leadership Cohort matching',
      'Micro-actions generation engine v1',
      'English language support',
      'Directors Leadership Cohort support',
      'Resume/view last submission feature'
    ],
    milestones: [
      {
        id: 'a-1',
        name: 'Project Kickoff Meeting',
        date: '2025-09-15',
        description: 'W38 - Initial project kickoff with stakeholders',
        owner: 'Baresquare / adidas',
        status: 'complete'
      },
      {
        id: 'a-2',
        name: 'Power Apps Canvas Development',
        date: '2025-10-15',
        description: 'W39-W44 - App development in Microsoft Power Apps canvas',
        owner: 'Baresquare',
        status: 'complete'
      },
      {
        id: 'a-3',
        name: 'Copilot Studio AI Agent Training',
        date: '2025-10-08',
        description: 'W40-W43 - AI Agent training and prompt engineering',
        owner: 'Baresquare',
        status: 'complete'
      },
      {
        id: 'a-4',
        name: 'Privacy Assessment Meeting',
        date: '2025-10-20',
        description: 'W43 - Privacy assessment completed',
        owner: 'Baresquare / adidas',
        status: 'complete'
      },
      {
        id: 'a-5',
        name: 'Power Automate Flow',
        date: '2025-10-15',
        description: 'W41-W42 - Job position-to-Leadership Cohort matching',
        owner: 'Baresquare',
        status: 'complete'
      },
      {
        id: 'a-6',
        name: 'Alpha Release',
        date: '2025-10-28',
        description: 'W44 - Working prototype released',
        owner: 'Baresquare',
        status: 'complete'
      },
      {
        id: 'a-7',
        name: 'Micro-actions Engine v1',
        date: '2025-10-31',
        description: 'W44 - First version of micro-actions generation',
        owner: 'Baresquare / adidas',
        status: 'complete'
      },
      {
        id: 'a-8',
        name: 'Main UI Copies & Logo Sign-off',
        date: '2025-11-07',
        description: 'W45-W46 - UI copies and images approved',
        owner: 'adidas',
        status: 'complete'
      },
      {
        id: 'a-9',
        name: 'InfoSec / Data Privacy Questionnaire',
        date: '2025-11-07',
        description: 'W45-W46 - Architectural designs completed',
        owner: 'Baresquare / adidas',
        status: 'complete'
      }
    ]
  },
  {
    id: 'beta',
    name: 'Beta Release (MVP for Mini-Testing)',
    shortName: 'Beta',
    startDate: '2025-11-01',
    endDate: '2025-12-15',
    status: 'current',
    color: 'info',
    keyDeliverables: [
      'UI visual refresh (phase I)',
      'Enhanced micro-actions (v3)',
      'Actions rating feature (thumbs up/down)',
      'Qualitative feedback collection',
      'Deployed to adidas PRD_Learning_Campus env',
      'Any user with link can test MVP version'
    ],
    milestones: [
      {
        id: 'b-1',
        name: 'Task Inventory Workshop',
        date: '2025-11-11',
        description: 'W46 - Task inventory and UX review workshops',
        owner: 'Baresquare / adidas',
        status: 'complete'
      },
      {
        id: 'b-2',
        name: 'Quick-wins UI Updates',
        date: '2025-11-14',
        description: 'W45-W46 - Initial UI improvements',
        owner: 'Baresquare',
        status: 'complete'
      },
      {
        id: 'b-3',
        name: 'Micro-actions Iterations (v3)',
        date: '2025-11-14',
        description: 'W45-W46 - Enhanced micro-actions',
        owner: 'Baresquare / adidas',
        status: 'complete'
      },
      {
        id: 'b-4',
        name: 'Thumbs Up/Down Feedback',
        date: '2025-11-21',
        description: 'W46-W47 - Qualitative feedback feature',
        owner: 'Baresquare',
        status: 'complete'
      },
      {
        id: 'b-5',
        name: 'IC Tool Session',
        date: '2025-11-25',
        description: 'W48 - Individual Contributors tool session',
        owner: 'Baresquare / adidas',
        status: 'complete'
      },
      {
        id: 'b-6',
        name: 'UI Visual Refresh (Phase I)',
        date: '2025-11-28',
        description: 'W48 - First visual refresh completed',
        owner: 'Baresquare / adidas',
        status: 'complete'
      },
      {
        id: 'b-7',
        name: 'Beta Version Release',
        date: '2025-12-01',
        description: 'W49 - Beta released for mini-testing',
        owner: 'Baresquare',
        status: 'complete'
      },
      {
        id: 'b-8',
        name: 'Mini-Testing with Directors',
        date: '2025-12-09',
        description: 'W49 - 5-8 Directors testing the MVP',
        owner: 'Baresquare / adidas',
        status: 'pending'
      },
      {
        id: 'b-9',
        name: 'MVP Testing Recap Workshop',
        date: '2025-12-12',
        description: "W50 - Recap workshop, Zsofia's last week",
        owner: 'Baresquare / adidas',
        status: 'pending'
      }
    ]
  },
  {
    id: 'rc',
    name: 'Release Candidate (Pilot Testing)',
    shortName: 'RC',
    startDate: '2025-12-15',
    endDate: '2026-02-07',
    status: 'planned',
    color: 'neutral',
    keyDeliverables: [
      'UI visual refresh (phase II based on mini-testing feedback)',
      'Learning recommendations feature (TBC)',
      'Download report functionality',
      'Questions finalized for remaining Cohorts',
      'Analytics requirements defined',
      'Deployed to adidas PRD_Learning_Campus env',
      'Pilot testing with 40-50 Directors'
    ],
    milestones: [
      {
        id: 'rc-1',
        name: 'Mini-Testing Feedback Analysis',
        date: '2025-12-15',
        description: 'W49-W50 - Feedback analysis and prioritization',
        owner: 'Baresquare / adidas',
        status: 'pending'
      },
      {
        id: 'rc-2',
        name: 'Christmas Break',
        date: '2025-12-23',
        description: 'W51-W52 - Holiday break',
        owner: 'All',
        status: 'pending'
      },
      {
        id: 'rc-3',
        name: 'New Year Break',
        date: '2026-01-01',
        description: 'W1 - Holiday break',
        owner: 'All',
        status: 'pending'
      },
      {
        id: 'rc-4',
        name: 'Prioritized Input Implementation',
        date: '2026-01-17',
        description: 'W50-W3 - Visual refresh phase II and prioritized fixes',
        owner: 'Baresquare',
        status: 'pending'
      },
      {
        id: 'rc-5',
        name: 'Learning Recommendations Feature',
        date: '2026-01-24',
        description: 'W1-W4 - Learning recommendations implementation (TBC)',
        owner: 'Baresquare / adidas',
        status: 'pending'
      },
      {
        id: 'rc-6',
        name: 'Download Report Feature',
        date: '2026-01-24',
        description: 'W1-W4 - Report download functionality',
        owner: 'Baresquare / adidas',
        status: 'pending'
      },
      {
        id: 'rc-7',
        name: 'Finalize Questions for Remaining Cohorts',
        date: '2026-01-24',
        description: 'W1-W4 - Questions for all Leadership Cohorts',
        owner: 'adidas',
        status: 'pending'
      },
      {
        id: 'rc-8',
        name: 'System Integration Testing (SIT)',
        date: '2026-01-31',
        description: 'W3-W4 - SIT on adidas environment',
        owner: 'Baresquare',
        status: 'pending'
      },
      {
        id: 'rc-9',
        name: 'RC Version Release',
        date: '2026-02-03',
        description: 'W5 - Release Candidate deployed',
        owner: 'Baresquare',
        status: 'pending'
      },
      {
        id: 'rc-10',
        name: 'Pilot Testing W1 (40-50 Directors)',
        date: '2026-02-03',
        description: 'W5 - First week of pilot testing',
        owner: 'Baresquare / adidas',
        status: 'pending'
      },
      {
        id: 'rc-11',
        name: 'Pilot Testing W2',
        date: '2026-02-10',
        description: 'W6 - Second week of pilot testing',
        owner: 'Baresquare / adidas',
        status: 'pending'
      },
      {
        id: 'rc-12',
        name: 'Pilot Testing W3',
        date: '2026-02-17',
        description: 'W7 - Third week of pilot testing',
        owner: 'Baresquare / adidas',
        status: 'pending'
      }
    ]
  },
  {
    id: 'prod',
    name: 'Production Release (April 2026)',
    shortName: 'Production',
    startDate: '2026-02-17',
    endDate: '2026-04-30',
    status: 'planned',
    color: 'neutral',
    keyDeliverables: [
      'Deployed to DEV and PRD adidas environment',
      'Linked from Learning Hub 2.0 SharePoint page',
      '4 Leadership Cohorts support',
      'Additional languages (TBD)',
      'Resume progress / view past submissions',
      'Analytics dashboard / feedback sentiment analysis'
    ],
    milestones: [
      {
        id: 'p-1',
        name: 'Pilot Testing Feedback Analysis',
        date: '2026-02-24',
        description: 'W8-W9 - Feedback analysis and prioritization',
        owner: 'Baresquare / adidas',
        status: 'pending'
      },
      {
        id: 'p-2',
        name: 'Prioritized Input Implementation',
        date: '2026-03-14',
        description: 'W9-W12 - Implementation of prioritized changes',
        owner: 'Baresquare',
        status: 'pending'
      },
      {
        id: 'p-3',
        name: 'Resume Progress / View Past Submissions',
        date: '2026-03-28',
        description: 'W10-W13 - Refactoring for resume/history feature (TBC)',
        owner: 'Baresquare',
        status: 'pending'
      },
      {
        id: 'p-4',
        name: 'SharePoint Integration (LH2)',
        date: '2026-04-04',
        description: 'W10-W14 - Integration with Learning Hub 2.0',
        owner: 'Baresquare / NIIT',
        status: 'pending'
      },
      {
        id: 'p-5',
        name: 'Analytics Implementation',
        date: '2026-04-04',
        description: 'W11-W14 - Analytics dashboard development',
        owner: 'Baresquare',
        status: 'pending'
      },
      {
        id: 'p-6',
        name: 'Questions for New Cohorts',
        date: '2026-04-04',
        description: 'W12-W14 - Implementation for additional Cohorts',
        owner: 'Baresquare',
        status: 'pending'
      },
      {
        id: 'p-7',
        name: 'Data Retention/Deletion Policy',
        date: '2026-04-04',
        description: 'W13-W14 - Policy enforcement implementation',
        owner: 'Baresquare / adidas',
        status: 'pending'
      },
      {
        id: 'p-8',
        name: 'System Integration Testing (SIT)',
        date: '2026-04-11',
        description: 'W14 - Final SIT before production',
        owner: 'Baresquare',
        status: 'pending'
      },
      {
        id: 'p-9',
        name: 'PROD Release',
        date: '2026-04-13',
        description: 'W15 - Production deployment',
        owner: 'Baresquare',
        status: 'pending'
      },
      {
        id: 'p-10',
        name: 'Hypercare Support',
        date: '2026-04-27',
        description: 'W15-W18 - Post-release support period',
        owner: 'Baresquare',
        status: 'pending'
      },
      {
        id: 'p-11',
        name: 'Technical Documentation',
        date: '2026-04-27',
        description: 'W15-W18 - Documentation finalization',
        owner: 'Baresquare',
        status: 'pending'
      }
    ]
  }
];

// Helper function to get current phase
export function getCurrentPhase(): TimelinePhase | undefined {
  return timelineData.find(phase => phase.status === 'current');
}

// Helper function to get phase progress percentage
export function getPhaseProgress(phase: TimelinePhase): number {
  const completedMilestones = phase.milestones.filter(m => m.status === 'complete').length;
  const totalMilestones = phase.milestones.length;
  return Math.round((completedMilestones / totalMilestones) * 100);
}

// Helper function to format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
