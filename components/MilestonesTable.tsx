'use client';

import { useState, useMemo } from 'react';
import { Milestone, formatActionItemDate } from '@/lib/action-items-data';

type SortField = 'title' | 'targetDate' | 'confidence';
type SortDirection = 'asc' | 'desc';

interface MilestonesTableProps {
  milestones: Milestone[];
}

export default function MilestonesTable({ milestones }: MilestonesTableProps) {
  const [sortField, setSortField] = useState<SortField>('targetDate');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [confidenceFilter, setConfidenceFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get confidence badge component
  const getConfidenceBadge = (confidence: Milestone['confidence']) => {
    switch (confidence) {
      case 'high':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-success/10 border border-success/30 px-2.5 py-1 text-xs font-bold text-success-dark">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            High
          </span>
        );
      case 'medium':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-warning/10 border border-warning/30 px-2.5 py-1 text-xs font-bold text-warning-dark">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Medium
          </span>
        );
      case 'low':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-error/10 border border-error/30 px-2.5 py-1 text-xs font-bold text-error-dark">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            Low
          </span>
        );
      default:
        return null;
    }
  };

  // Sort and filter milestones
  const filteredAndSortedMilestones = useMemo(() => {
    let result = [...milestones];

    // Apply confidence filter
    if (confidenceFilter !== 'all') {
      result = result.filter(ms => ms.confidence === confidenceFilter);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        ms =>
          ms.title.toLowerCase().includes(query) ||
          ms.notes.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortField) {
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case 'targetDate':
          aValue = new Date(a.targetDate).getTime();
          bValue = new Date(b.targetDate).getTime();
          break;
        case 'confidence':
          const confidenceOrder = { high: 3, medium: 2, low: 1 };
          aValue = confidenceOrder[a.confidence];
          bValue = confidenceOrder[b.confidence];
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [milestones, sortField, sortDirection, confidenceFilter, searchQuery]);

  // Handle column header click for sorting
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Get sort icon
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

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950">Upcoming Milestones</h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          {/* Search */}
          <div className="relative flex-1 md:w-64">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-info focus:border-transparent"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Confidence Filter */}
          <select
            value={confidenceFilter}
            onChange={(e) => setConfidenceFilter(e.target.value)}
            className="px-4 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-info focus:border-transparent font-semibold"
          >
            <option value="all">All Confidence</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
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
                  Milestone
                  {getSortIcon('title')}
                </div>
              </th>
              <th
                onClick={() => handleSort('targetDate')}
                className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider cursor-pointer hover:bg-neutral-100 transition-colors"
              >
                <div className="flex items-center gap-2">
                  Target Date
                  {getSortIcon('targetDate')}
                </div>
              </th>
              <th
                onClick={() => handleSort('confidence')}
                className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider cursor-pointer hover:bg-neutral-100 transition-colors"
              >
                <div className="flex items-center gap-2">
                  Confidence
                  {getSortIcon('confidence')}
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-neutral-200">
            {filteredAndSortedMilestones.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-sm text-neutral-500 font-medium">
                  No milestones found matching your filters.
                </td>
              </tr>
            ) : (
              filteredAndSortedMilestones.map((milestone) => (
                <tr key={milestone.id} className="hover:bg-neutral-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-neutral-950">{milestone.title}</td>
                  <td className="px-6 py-4 text-sm text-neutral-700 font-medium tabular-nums">
                    {formatActionItemDate(milestone.targetDate)}
                  </td>
                  <td className="px-6 py-4 text-sm">{getConfidenceBadge(milestone.confidence)}</td>
                  <td className="px-6 py-4 text-sm text-neutral-600 font-medium">{milestone.notes}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Results count */}
      <div className="mt-3 text-sm text-neutral-600 font-medium">
        Showing {filteredAndSortedMilestones.length} of {milestones.length} milestones
      </div>
    </div>
  );
}
