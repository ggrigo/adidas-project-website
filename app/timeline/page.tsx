'use client';

import { useState } from 'react';
import { timelineData, formatDate, getPhaseProgress, type TimelinePhase } from '@/lib/timeline-data';

export default function Timeline() {
  const [expandedPhase, setExpandedPhase] = useState<string | null>('phase-2');

  const togglePhase = (phaseId: string) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
        return 'success';
      case 'current':
        return 'info';
      case 'planned':
        return 'neutral-400';
      default:
        return 'neutral-400';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'complete':
        return (
          <span className="status-badge status-badge-green">
            <span className="status-dot status-dot-green"></span>
            Complete
          </span>
        );
      case 'current':
        return (
          <span className="status-badge status-badge-yellow">
            <span className="status-dot status-dot-yellow"></span>
            Current
          </span>
        );
      case 'planned':
        return (
          <span className="inline-flex items-center gap-2 rounded-xl bg-neutral-100 border border-neutral-300 px-4 py-2 text-sm font-bold text-neutral-700">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Planned
          </span>
        );
      default:
        return null;
    }
  };

  const getMilestoneStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return (
          <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'pending':
        return (
          <svg className="w-5 h-5 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
          </svg>
        );
      case 'at-risk':
        return (
          <svg className="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 mb-6 shadow-lg">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Project Timeline</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-neutral-950 mb-4">
            Project Timeline & Roadmap
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 font-medium max-w-2xl mx-auto">
            Complete journey from March 2025 through 2027 - From foundation to strategic AI platform
          </p>
        </div>

        {/* Visual Timeline Bar */}
        <div className="mb-16 relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-bold text-neutral-950 mb-6">Timeline Overview</h2>
          <div className="relative">
            {/* Timeline bars */}
            <div className="flex gap-2 mb-6">
              {timelineData.map((phase) => {
                const color = phase.status === 'complete' ? 'bg-success' : phase.status === 'current' ? 'bg-info' : 'bg-neutral-300';
                return (
                  <div
                    key={phase.id}
                    className="flex-1 group cursor-pointer"
                    onClick={() => togglePhase(phase.id)}
                  >
                    <div className={`h-12 rounded-xl ${color} hover:opacity-80 transition-all flex items-center justify-center relative`}>
                      <span className="text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        {phase.shortName}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Timeline labels */}
            <div className="flex gap-2 text-xs">
              {timelineData.map((phase) => (
                <div key={`label-${phase.id}`} className="flex-1 text-center">
                  <div className="font-bold text-neutral-950">{phase.shortName}</div>
                  <div className="text-neutral-600 mt-1 text-xs">
                    {formatDate(phase.startDate)} - {formatDate(phase.endDate)}
                  </div>
                </div>
              ))}
            </div>

            {/* Current indicator */}
            <div className="absolute top-0 left-[27%] w-0.5 h-full bg-neutral-950">
              <div className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-neutral-950 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold text-neutral-950">
                You are here
              </div>
            </div>
          </div>
        </div>

        {/* Phase Details */}
        <div className="space-y-6">
          {timelineData.map((phase) => {
            const isExpanded = expandedPhase === phase.id;
            const progress = getPhaseProgress(phase);

            return (
              <div
                key={phase.id}
                className="relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white shadow-soft hover:shadow-medium transition-all"
              >
                {/* Phase Header - Click to expand */}
                <button
                  onClick={() => togglePhase(phase.id)}
                  className="w-full text-left p-8 hover:bg-neutral-50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-2xl md:text-3xl font-black text-neutral-950">{phase.name}</h3>
                        {getStatusBadge(phase.status)}
                      </div>
                      <p className="text-sm text-neutral-600 font-medium mb-2">
                        {formatDate(phase.startDate)} → {formatDate(phase.endDate)}
                      </p>
                      {phase.status === 'complete' && (
                        <div className="inline-flex items-center gap-2 text-sm font-bold text-success">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {progress}% Complete ({phase.milestones.filter(m => m.status === 'complete').length}/{phase.milestones.length} milestones)
                        </div>
                      )}
                      {phase.status === 'current' && (
                        <div className="inline-flex items-center gap-2 text-sm font-bold text-info">
                          <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          In Progress - {progress}% Complete
                        </div>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-neutral-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t-2 border-neutral-200 p-8 bg-neutral-50">
                    {/* Key Deliverables */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-neutral-950 mb-4">Key Deliverables</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {phase.keyDeliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-neutral-700">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Milestones */}
                    <div>
                      <h4 className="text-lg font-bold text-neutral-950 mb-4">Milestones</h4>
                      <div className="space-y-4">
                        {phase.milestones.map((milestone) => (
                          <div
                            key={milestone.id}
                            className="flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-200"
                          >
                            <div className="flex-shrink-0 mt-0.5">
                              {getMilestoneStatusIcon(milestone.status)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <h5 className="font-bold text-neutral-950">{milestone.name}</h5>
                                <span className="flex-shrink-0 text-xs font-semibold text-neutral-600 tabular-nums">
                                  {formatDate(milestone.date)}
                                </span>
                              </div>
                              <p className="text-sm text-neutral-600 font-medium mb-2">{milestone.description}</p>
                              <div className="text-xs text-neutral-500 font-semibold">
                                Owner: {milestone.owner}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-16 rounded-2xl border-2 border-neutral-200 bg-white p-8 shadow-soft">
          <h3 className="text-xl font-bold text-neutral-950 mb-6">Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-bold text-neutral-950 uppercase tracking-wider mb-3">Phase Status</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-success"></div>
                  <span className="text-sm font-medium text-neutral-700">Complete</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-info"></div>
                  <span className="text-sm font-medium text-neutral-700">Current</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-300"></div>
                  <span className="text-sm font-medium text-neutral-700">Planned</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-950 uppercase tracking-wider mb-3">Milestone Status</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  {getMilestoneStatusIcon('complete')}
                  <span className="text-sm font-medium text-neutral-700">Complete</span>
                </div>
                <div className="flex items-center gap-3">
                  {getMilestoneStatusIcon('pending')}
                  <span className="text-sm font-medium text-neutral-700">Pending</span>
                </div>
                <div className="flex items-center gap-3">
                  {getMilestoneStatusIcon('at-risk')}
                  <span className="text-sm font-medium text-neutral-700">At Risk</span>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border-2 border-info/30 bg-gradient-to-br from-info-light via-white to-white p-6">
              <div className="absolute top-0 right-0 w-24 h-24 bg-info/10 rounded-full blur-2xl" />
              <div className="relative">
                <h4 className="text-sm font-bold text-info uppercase tracking-wider mb-2">Current Focus</h4>
                <p className="text-sm font-semibold text-neutral-700">
                  Phase 2: Pilot Testing
                </p>
                <p className="text-xs text-neutral-600 mt-2">
                  Dec 2-3 executive meeting and mini pilot execution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
