'use client';

import { useEffect } from 'react';
import type { Task, TaskStatus } from '@/lib/task-tracker-types';
import { formatTaskDate, formatDuration } from '@/lib/task-tracker-types';

interface TaskDetailModalProps {
  task: Task | null;
  onClose: () => void;
}

export default function TaskDetailModal({ task, onClose }: TaskDetailModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (task) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [task]);

  if (!task) return null;

  // Get status badge
  const getStatusBadge = (status: TaskStatus) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-success/10 border border-success/30 px-3 py-1.5 text-sm font-bold text-success-dark">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Completed
          </span>
        );
      case 'On Track':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-success/10 border border-success/30 px-3 py-1.5 text-sm font-bold text-success-dark">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            On Track
          </span>
        );
      case 'On Watch':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-warning/10 border border-warning/30 px-3 py-1.5 text-sm font-bold text-warning-dark">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            On Watch
          </span>
        );
      case 'Paused':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-100 border border-neutral-300 px-3 py-1.5 text-sm font-bold text-neutral-700">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Paused
          </span>
        );
      case 'Not Started':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-100 border border-neutral-300 px-3 py-1.5 text-sm font-bold text-neutral-700">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            Not Started
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border-2 border-neutral-200 bg-white shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-start gap-3 mb-4">
              {task.weeklyFocus && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-warning/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              )}
              <div className="flex-1">
                <h2 className="text-3xl font-black text-neutral-950 mb-3">{task.title}</h2>
                <div className="flex flex-wrap items-center gap-3">
                  {getStatusBadge(task.status)}
                  {task.workstream && (
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-info/10 border border-info/30 px-3 py-1.5 text-sm font-bold text-info-dark">
                      {task.workstream}
                    </span>
                  )}
                  {task.completed && (
                    <span className="text-sm font-semibold text-success">✓ Completed</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Owners & Lead */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-200">
              <div className="text-xs font-bold text-neutral-600 uppercase tracking-wider mb-1">adidas Owner</div>
              <div className="text-sm font-semibold text-neutral-950">{task.ownerAdidas || 'TBD'}</div>
            </div>
            <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-200">
              <div className="text-xs font-bold text-neutral-600 uppercase tracking-wider mb-1">Baresquare Owner</div>
              <div className="text-sm font-semibold text-neutral-950">{task.ownerBaresquare || 'TBD'}</div>
            </div>
            <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-200">
              <div className="text-xs font-bold text-neutral-600 uppercase tracking-wider mb-1">Lead</div>
              <div className="text-sm font-semibold text-neutral-950 capitalize">{task.lead}</div>
            </div>
          </div>

          {/* Timeline */}
          <div className="rounded-xl bg-gradient-to-br from-info-light via-white to-white p-6 border-2 border-info/30 mb-6">
            <h3 className="text-lg font-bold text-neutral-950 mb-4">Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-xs font-bold text-neutral-600 uppercase tracking-wider mb-1">Start Date</div>
                <div className="text-sm font-semibold text-neutral-950">{formatTaskDate(task.startDate)}</div>
              </div>
              <div>
                <div className="text-xs font-bold text-neutral-600 uppercase tracking-wider mb-1">Duration</div>
                <div className="text-sm font-semibold text-neutral-950">{formatDuration(task.durationWeeks)}</div>
              </div>
              <div>
                <div className="text-xs font-bold text-neutral-600 uppercase tracking-wider mb-1">End Date</div>
                <div className="text-sm font-semibold text-neutral-950">{formatTaskDate(task.endDate)}</div>
              </div>
            </div>
          </div>

          {/* Description */}
          {task.description && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-neutral-950 mb-3">Description</h3>
              <p className="text-sm text-neutral-700 font-medium leading-relaxed whitespace-pre-wrap">{task.description}</p>
            </div>
          )}

          {/* Why it matters */}
          {task.whyItMatters && (
            <div className="rounded-xl bg-success-light border-2 border-success/30 p-6 mb-6">
              <h3 className="text-lg font-bold text-success-dark mb-3">Why It Matters</h3>
              <p className="text-sm text-neutral-700 font-medium leading-relaxed whitespace-pre-wrap">{task.whyItMatters}</p>
            </div>
          )}

          {/* Latest Update */}
          {task.latestUpdate && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-neutral-950 mb-3">Latest Update (Nov 19, 2025)</h3>
              <p className="text-sm text-neutral-700 font-medium leading-relaxed whitespace-pre-wrap">{task.latestUpdate}</p>
            </div>
          )}

          {/* adidas Comments */}
          {task.adidasComments && (
            <div className="rounded-xl bg-warning-light border-2 border-warning/30 p-6">
              <h3 className="text-lg font-bold text-warning-dark mb-3">adidas Comments for Next Review</h3>
              <p className="text-sm text-neutral-700 font-medium leading-relaxed whitespace-pre-wrap">{task.adidasComments}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
