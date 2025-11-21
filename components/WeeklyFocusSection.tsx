'use client';

import { useState } from 'react';
import type { Task } from '@/lib/task-tracker-types';
import { formatTaskDate } from '@/lib/task-tracker-types';
import TaskDetailModal from './TaskDetailModal';

interface WeeklyFocusSectionProps {
  focusTasks: Task[];
}

export default function WeeklyFocusSection({ focusTasks }: WeeklyFocusSectionProps) {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  if (focusTasks.length === 0) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-success text-white';
      case 'On Track':
        return 'bg-success text-white';
      case 'On Watch':
        return 'bg-warning text-white';
      case 'Paused':
        return 'bg-neutral-400 text-white';
      case 'Not Started':
        return 'bg-neutral-400 text-white';
      default:
        return 'bg-neutral-400 text-white';
    }
  };

  return (
    <>
      <section className="mb-16">
        <div className="relative overflow-hidden rounded-2xl border-2 border-warning/30 bg-gradient-to-br from-warning-light via-white to-warning-light/30 p-8 shadow-soft">
          <div className="absolute top-0 right-0 w-64 h-64 bg-warning/10 rounded-full blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warning/20">
                <svg className="w-7 h-7 text-warning" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950">
                  This Week's Focus
                </h2>
                <p className="text-sm text-neutral-600 font-medium mt-1">
                  {focusTasks.length} priority {focusTasks.length === 1 ? 'task' : 'tasks'} requiring attention
                </p>
              </div>
            </div>

            {/* Focus Task Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {focusTasks.map((task) => (
                <button
                  key={task.id}
                  onClick={() => setSelectedTask(task)}
                  className="relative overflow-hidden rounded-xl border-2 border-neutral-200 bg-white p-5 shadow-sm hover:shadow-medium transition-all hover:scale-105 text-left group"
                >
                  {/* Status indicator */}
                  <div className={`absolute top-0 right-0 w-20 h-20 ${getStatusColor(task.status)} opacity-10 rounded-bl-full`} />

                  <div className="relative">
                    {/* Workstream badge */}
                    {task.workstream && (
                      <div className="text-xs font-bold text-info uppercase tracking-wider mb-2">
                        {task.workstream}
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-base font-bold text-neutral-950 mb-3 line-clamp-2 group-hover:text-info transition-colors">
                      {task.title}
                    </h3>

                    {/* Meta info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-neutral-600 font-medium">
                        <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatTaskDate(task.endDate)}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-neutral-600 font-medium">
                        <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {task.ownerAdidas || task.ownerBaresquare || 'TBD'}
                      </div>
                    </div>

                    {/* Status badge */}
                    <div className="mt-3 pt-3 border-t border-neutral-200">
                      <span className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-bold ${getStatusColor(task.status)}`}>
                        {task.status}
                      </span>
                    </div>
                  </div>

                  {/* Click indicator */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <TaskDetailModal task={selectedTask} onClose={() => setSelectedTask(null)} />
    </>
  );
}
