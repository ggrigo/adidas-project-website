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
    id: 'phase-1',
    name: 'Phase 1: Foundation',
    shortName: 'Foundation',
    startDate: '2025-03-01',
    endDate: '2025-11-30',
    status: 'complete',
    color: 'success',
    keyDeliverables: [
      'SOW signed and engagement initiated',
      'Workshop completed with key stakeholders',
      'Infrastructure setup (Azure, SharePoint, Power Platform)',
      'Prototype development for both solutions',
      'Technical architecture finalized'
    ],
    milestones: [
      {
        id: 'm1-1',
        name: 'Initial Engagement',
        date: '2025-03-15',
        description: 'First discussions with adidas stakeholders',
        owner: 'Georgios Grigoriadis',
        status: 'complete'
      },
      {
        id: 'm1-2',
        name: 'SOW Signed',
        date: '2025-06-10',
        description: 'Statement of Work finalized and signed',
        owner: 'Georgios Grigoriadis',
        status: 'complete'
      },
      {
        id: 'm1-3',
        name: 'Discovery Workshop',
        date: '2025-08-04',
        description: 'Face-to-face workshop in Herzogenaurach',
        owner: 'Georgios Grigoriadis',
        status: 'complete'
      },
      {
        id: 'm1-4',
        name: 'Infrastructure Setup Complete',
        date: '2025-09-30',
        description: 'Azure environment and SharePoint integration ready',
        owner: 'Nikos Vogiatzis',
        status: 'complete'
      },
      {
        id: 'm1-5',
        name: 'Learning Agent Prototype',
        date: '2025-10-15',
        description: 'Initial working prototype demonstrated',
        owner: 'Nikos Vogiatzis',
        status: 'complete'
      },
      {
        id: 'm1-6',
        name: 'Self-Reflection Tool Prototype',
        date: '2025-11-01',
        description: 'First version ready for testing',
        owner: 'Panayotis',
        status: 'complete'
      }
    ]
  },
  {
    id: 'phase-2',
    name: 'Phase 2: Pilot Testing',
    shortName: 'Pilot Testing',
    startDate: '2025-11-01',
    endDate: '2025-12-31',
    status: 'current',
    color: 'info',
    keyDeliverables: [
      'Mini pilot planning and participant recruitment',
      'Executive briefing and documentation',
      'Face-to-face meeting with stakeholders',
      'Mini pilot execution (Dec 9-13)',
      'Pilot results analysis and recommendations'
    ],
    milestones: [
      {
        id: 'm2-1',
        name: 'Mini Pilot Planning',
        date: '2025-11-15',
        description: 'Pilot scope and timeline finalized',
        owner: 'Lars Boeddener',
        status: 'complete'
      },
      {
        id: 'm2-2',
        name: 'Executive Briefing Completed',
        date: '2025-11-21',
        description: 'Comprehensive documentation prepared',
        owner: 'Lars Boeddener',
        status: 'complete'
      },
      {
        id: 'm2-3',
        name: 'Zsofia Successor Announcement',
        date: '2025-11-29',
        description: 'New project lead identified',
        owner: 'Zsofia Pior',
        status: 'pending'
      },
      {
        id: 'm2-4',
        name: 'Face-to-Face Meeting',
        date: '2025-12-02',
        description: 'Executive meeting in Herzogenaurach (Dec 2-3)',
        owner: 'Georgios Grigoriadis',
        status: 'pending'
      },
      {
        id: 'm2-5',
        name: 'Mini Pilot Kickoff',
        date: '2025-12-09',
        description: '5-8 leaders begin testing Self-Reflection Tool',
        owner: 'Lars Boeddener',
        status: 'pending'
      },
      {
        id: 'm2-6',
        name: 'Mini Pilot Complete',
        date: '2025-12-13',
        description: 'Pilot concluded, feedback collected',
        owner: 'Lars Boeddener',
        status: 'pending'
      },
      {
        id: 'm2-7',
        name: 'LeanIX Approval (Learning Agent)',
        date: '2025-12-20',
        description: 'Infrastructure approval for deployment',
        owner: 'Lucas',
        status: 'at-risk'
      },
      {
        id: 'm2-8',
        name: 'Phase 1 Billing Complete',
        date: '2025-12-05',
        description: 'SAP Goods Receipt confirmed for Phase 1',
        owner: 'Zsofia',
        status: 'complete'
      },
      {
        id: 'm2-9',
        name: 'Product Roadmap Review',
        date: '2025-12-10',
        description: 'Post-MVP test roadmap review session',
        owner: 'Nikos',
        status: 'pending'
      },
      {
        id: 'm2-10',
        name: 'Learning Recommendations Mapped',
        date: '2025-12-12',
        description: 'Director cohort learning recs deadline',
        owner: 'Zsofia/Lars',
        status: 'pending'
      },
      {
        id: 'm2-11',
        name: 'System Integration Test Complete',
        date: '2025-12-15',
        description: 'SIT complete on adidas environment',
        owner: 'Nikos',
        status: 'pending'
      }
    ]
  },
  {
    id: 'phase-3',
    name: 'Phase 3: Enterprise Rollout',
    shortName: 'Enterprise Rollout',
    startDate: '2026-01-01',
    endDate: '2026-03-31',
    status: 'planned',
    color: 'neutral',
    keyDeliverables: [
      'Director cohort pilot (80-100 leaders)',
      'Infrastructure scaling and optimization',
      'Learning Agent enterprise deployment',
      'Self-Reflection Tool enterprise launch',
      'User training and support materials'
    ],
    milestones: [
      {
        id: 'm3-1',
        name: 'UI Copy Finalized for Pilot',
        date: '2026-01-14',
        description: 'All UI copy and privacy statements approved',
        owner: 'Zsofia/Nikos',
        status: 'pending'
      },
      {
        id: 'm3-2',
        name: 'Director Cohort Pilot Start',
        date: '2026-01-15',
        description: '80-100 directors begin using Self-Reflection Tool',
        owner: 'Lars',
        status: 'pending'
      },
      {
        id: 'm3-3',
        name: 'InfoSec Approval Complete',
        date: '2026-01-26',
        description: 'InfoSec signs off on LeanIX entry',
        owner: 'Lukas',
        status: 'pending'
      },
      {
        id: 'm3-4',
        name: 'Learning Agent Deployment',
        date: '2026-02-01',
        description: 'Learning Agent goes live for all employees',
        owner: 'TBD',
        status: 'pending'
      },
      {
        id: 'm3-5',
        name: 'Privacy Approval Complete',
        date: '2026-02-12',
        description: 'Privacy team signs off on LeanIX entry',
        owner: 'Lukas/Lars',
        status: 'pending'
      },
      {
        id: 'm3-6',
        name: 'Infrastructure Scaling Complete',
        date: '2026-02-15',
        description: 'Systems optimized for enterprise load',
        owner: 'Nikos Vogiatzis',
        status: 'pending'
      },
      {
        id: 'm3-7',
        name: 'Enterprise Launch',
        date: '2026-03-01',
        description: 'Both solutions available to all 60,000 employees',
        owner: 'TBD',
        status: 'pending'
      }
    ]
  },
  {
    id: 'phase-4',
    name: 'Phase 4: Scale & Enhance',
    shortName: 'Scale & Enhance',
    startDate: '2026-04-01',
    endDate: '2027-12-31',
    status: 'planned',
    color: 'neutral',
    keyDeliverables: [
      'Advanced AI capabilities and features',
      'Integration with additional adidas systems',
      'Expanded use cases and applications',
      'Platform optimization and enhancements',
      'Strategic roadmap for 2027+'
    ],
    milestones: [
      {
        id: 'm4-1',
        name: 'Q2 2026: Integration & Expansion',
        date: '2026-06-30',
        description: 'Additional system integrations completed',
        owner: 'TBD',
        status: 'pending'
      },
      {
        id: 'm4-2',
        name: 'Q3 2026: Advanced Capabilities',
        date: '2026-09-30',
        description: 'New AI features and enhancements launched',
        owner: 'TBD',
        status: 'pending'
      },
      {
        id: 'm4-3',
        name: 'Q4 2026: Platform Optimization',
        date: '2026-12-31',
        description: 'Performance improvements and refinements',
        owner: 'TBD',
        status: 'pending'
      },
      {
        id: 'm4-4',
        name: '2027: Strategic Platform',
        date: '2027-12-31',
        description: 'Foundation for future AI initiatives',
        owner: 'TBD',
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
