'use client';

import { useState, useMemo } from 'react';
import type { Task, Workstream, TaskStatus } from '@/lib/task-tracker-types';
import { formatTaskDate } from '@/lib/task-tracker-types';
import TaskDetailModal from './TaskDetailModal';

type SortField = 'title' | 'endDate' | 'status' | 'workstream';
type SortDirection = 'asc' | 'desc';

interface TaskTrackerTableProps {
  tasks: Task[];
  title?: string;
}

export default function TaskTrackerTable({ tasks, title = "All Tasks" }: TaskTrackerTableProps) {
  const [sortField, setSortField] = useState<SortField>('endDate');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [workstreamFilter, setWorkstreamFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  // Get unique workstreams
  const workstreams = useMemo(() => {
    const unique = [...new Set(tasks.map(t => t.workstream).filter(Boolean))];
    return unique.sort();
  }, [tasks]);

  // Filter and sort
  const filteredAndSortedTasks = useMemo(() => {
    let result = [...tasks];

    // Workstream filter
    if (workstreamFilter !== 'all') {
      result = result.filter(t => t.workstream === workstreamFilter);
    }

    // Status filter
    if (statusFilter !== 'all') {
      result = result.filter(t => t.status === statusFilter);
    }

    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(t =>
        t.title.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query) ||
        t.ownerAdidas.toLowerCase().includes(query) ||
        t.ownerBaresquare.toLowerCase().includes(query)
      );
    }

    // Sort
    result.sort((a, b) => {
      let aValue: any;
      let bValue: any;

      switch (sortField) {
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case 'endDate':
          aValue = new Date(a.endDate || '9999-12-31').getTime();
          bValue = new Date(b.endDate || '9999-12-31').getTime();
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        case 'workstream':
          aValue = a.workstream;
          bValue = b.workstream;
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [tasks, sortField, sortDirection, workstreamFilter, statusFilter, searchQuery]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return (
        <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }
    return sortDirection === 'asc' ? (
      <svg className="w-4 h-4 text-neutral-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    ) : (
      <svg className="w-4 h-4 text-neutral-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    );
  };

  const getStatusBadge = (status: TaskStatus) => {
    const badges = {
      'Completed': 'bg-success/10 border-success/30 text-success-dark',
      'On Track': 'bg-success/10 border-success/30 text-success-dark',
      'On Watch': 'bg-warning/10 border-warning/30 text-warning-dark',
      'Paused': 'bg-neutral-100 border-neutral-300 text-neutral-700',
      'Not Started': 'bg-neutral-100 border-neutral-300 text-neutral-700',
    };
    return (
      <span className={`inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-xs font-bold ${badges[status] || badges['Not Started']}`}>
        {status}
      </span>
    );
  };

  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <h3 className="text-2xl font-bold text-neutral-950">{title}</h3>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            {/* Search */}
            <div className="relative flex-1 lg:w-64">
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-info focus:border-transparent"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Workstream Filter */}
            <select
              value={workstreamFilter}
              onChange={(e) => setWorkstreamFilter(e.target.value)}
              className="px-4 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-info focus:border-transparent font-semibold"
            >
              <option value="all">All Workstreams</option>
              {workstreams.map(ws => (
                <option key={ws} value={ws}>{ws}</option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-info focus:border-transparent font-semibold"
            >
              <option value="all">All Status</option>
              <option value="On Track">On Track</option>
              <option value="Completed">Completed</option>
              <option value="On Watch">On Watch</option>
              <option value="Paused">Paused</option>
              <option value="Not Started">Not Started</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border-2 border-neutral-200 shadow-soft">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead>
              <tr className="bg-gradient-to-r from-neutral-50 to-neutral-100">
                <th
                  onClick={() => handleSort('title')}
                  className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider cursor-pointer hover:bg-neutral-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    Task
                    {getSortIcon('title')}
                  </div>
                </th>
                <th
                  onClick={() => handleSort('workstream')}
                  className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider cursor-pointer hover:bg-neutral-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    Workstream
                    {getSortIcon('workstream')}
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider">
                  Owners
                </th>
                <th
                  onClick={() => handleSort('endDate')}
                  className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider cursor-pointer hover:bg-neutral-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    Due Date
                    {getSortIcon('endDate')}
                  </div>
                </th>
                <th
                  onClick={() => handleSort('status')}
                  className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider cursor-pointer hover:bg-neutral-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    Status
                    {getSortIcon('status')}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {filteredAndSortedTasks.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-sm text-neutral-500 font-medium">
                    No tasks found matching your filters.
                  </td>
                </tr>
              ) : (
                filteredAndSortedTasks.map((task) => (
                  <tr
                    key={task.id}
                    onClick={() => setSelectedTask(task)}
                    className="hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {task.weeklyFocus && (
                          <svg className="w-5 h-5 text-warning flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        )}
                        <span className="text-sm font-semibold text-neutral-950">{task.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-600 font-medium">{task.workstream || '—'}</td>
                    <td className="px-6 py-4 text-sm text-neutral-600 font-medium">
                      {task.ownerAdidas && task.ownerBaresquare
                        ? `${task.ownerAdidas} / ${task.ownerBaresquare}`
                        : task.ownerAdidas || task.ownerBaresquare || 'TBD'}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-700 font-medium tabular-nums">
                      {formatTaskDate(task.endDate)}
                    </td>
                    <td className="px-6 py-4 text-sm">{getStatusBadge(task.status)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Results count */}
        <div className="mt-3 text-sm text-neutral-600 font-medium">
          Showing {filteredAndSortedTasks.length} of {tasks.length} tasks
        </div>
      </div>

      {/* Modal */}
      <TaskDetailModal task={selectedTask} onClose={() => setSelectedTask(null)} />
    </>
  );
}
