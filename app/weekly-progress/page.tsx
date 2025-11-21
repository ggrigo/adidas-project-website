export default function WeeklyProgress() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-20">
        {/* Header with Status Badge */}
        <div className="mb-12 relative overflow-hidden rounded-2xl border-2 border-warning/30 bg-gradient-to-br from-warning-light via-white to-warning-light/30 p-8 shadow-soft">
          <div className="absolute top-0 right-0 w-64 h-64 bg-warning/10 rounded-full blur-3xl" />
          <div className="relative flex justify-between items-start flex-wrap gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 mb-4 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-warning animate-pulse" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Weekly Update</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral-950 mb-2">
                Weekly Progress Report
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 font-medium">Week of November 21, 2025</p>
              <p className="text-sm text-neutral-500 font-medium mt-1">Last Updated: November 21, 2025 at 4:30 PM CET</p>
              <p className="text-sm text-neutral-600 font-medium">Prepared by: Lars Boeddener</p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="inline-flex items-center gap-3 rounded-xl bg-warning/10 border-2 border-warning/30 px-5 py-3 shadow-medium">
                <svg className="w-6 h-6 text-warning" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-bold text-warning-dark text-lg">At Risk</div>
                  <div className="text-sm text-neutral-600 font-medium">Stakeholder transition</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950 mb-6">Executive Summary</h2>
          <div className="relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white p-8 shadow-soft">
            <p className="text-lg leading-relaxed text-neutral-700 font-medium">
              Key focus this week: preparing comprehensive documentation for executive briefing (Dec 2-3) and Zsofia's
              successor handover. Self-Reflection Tool mini pilot on track for Dec 9-13. Learning Agent deployment still
              awaiting LeanIX approval, but no impact to overall timeline. Face-to-face meeting in Herzogenaurach scheduled
              December 2-3 with Georgios attending.
            </p>
          </div>
        </section>

        {/* Project Status - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Learning Agent */}
          <section className="relative overflow-hidden rounded-2xl border-2 border-warning/30 bg-gradient-to-br from-warning-light via-white to-white p-8 shadow-soft">
            <div className="absolute top-0 right-0 w-32 h-32 bg-warning/10 rounded-full blur-2xl" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-950 mb-4">Learning Agent</h2>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 rounded-lg bg-warning/10 border border-warning/30 px-4 py-2 text-sm font-bold text-warning-dark">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Awaiting infrastructure approval
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-neutral-950 mb-3">Completed This Week</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700 font-medium">Confirmed LeanIX approval process timeline with Lucas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700 font-medium">Updated deployment documentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700 font-medium">Prepared demonstration environment for Dec 2-3 meeting</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-950 mb-3">In Progress</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-info bg-white mt-0.5" />
                      <span className="text-neutral-700 font-medium">LeanIX registration - Lucas (adidas) - Expected: Nov 29</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-info bg-white mt-0.5" />
                      <span className="text-neutral-700 font-medium">Production environment security group configuration - NIIT/Lucas - Expected: Dec 6</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-info bg-white mt-0.5" />
                      <span className="text-neutral-700 font-medium">User documentation draft - Lars - Expected: Nov 30</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-950 mb-3">Blockers & Risks</h3>
                  <div className="rounded-xl bg-error-light border-2 border-error/30 p-4">
                    <div className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-error mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <div className="flex-1">
                        <p className="font-bold text-error-dark mb-1">LeanIX Approval Delay</p>
                        <p className="text-sm text-neutral-700 font-medium">
                          13 weeks elapsed vs 4 weeks estimated. Latest update: approval expected by Nov 29. Impact: Cannot
                          deploy to production until complete. <strong>Action:</strong> Lucas escalating with IT governance team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-950 mb-3">Key Metrics</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-100">
                      <span className="text-sm font-semibold text-neutral-700">Development environment</span>
                      <span className="text-sm font-black text-success">100% functional</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-100">
                      <span className="text-sm font-semibold text-neutral-700">Core features completed</span>
                      <span className="text-sm font-black text-success">95%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-100">
                      <span className="text-sm font-semibold text-neutral-700">Documentation</span>
                      <span className="text-sm font-black text-warning">60% complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Self-Reflection Tool */}
          <section className="relative overflow-hidden rounded-2xl border-2 border-success/30 bg-gradient-to-br from-success-light via-white to-white p-8 shadow-soft">
            <div className="absolute top-0 right-0 w-32 h-32 bg-success/10 rounded-full blur-2xl" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-950 mb-4">Self-Reflection Tool</h2>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 rounded-lg bg-success/10 border border-success/30 px-4 py-2 text-sm font-bold text-success-dark">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  On track for mini pilot
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-neutral-950 mb-3">Completed This Week</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700 font-medium">Executive context document prepared (21-page comprehensive version)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700 font-medium">Executive briefing document created (landing page version)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700 font-medium">Mini pilot logistics planned with Zsofia</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700 font-medium">Alternative UI design prepared by Nikos</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-950 mb-3">In Progress</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-info bg-white mt-0.5" />
                      <span className="text-neutral-700 font-medium">Micro-actions content review - Zsofia/Divya - Expected: Nov 27</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-info bg-white mt-0.5" />
                      <span className="text-neutral-700 font-medium">Mini pilot participant confirmation (5-8 directors) - Zsofia - Expected: Nov 29</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-info bg-white mt-0.5" />
                      <span className="text-neutral-700 font-medium">User access permissions setup - Nikos - Expected: Nov 30</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-950 mb-3">Blockers & Risks</h3>
                  <div className="rounded-xl bg-warning-light border-2 border-warning/30 p-4">
                    <div className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-warning mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <div className="flex-1">
                        <p className="font-bold text-warning-dark mb-1">Stakeholder Transition</p>
                        <p className="text-sm text-neutral-700 font-medium">
                          Zsofia departing Dec 12, successor TBD (announcement expected end of week). <strong>Action:</strong>{' '}
                          Comprehensive handover documentation prepared, face-to-face meeting scheduled Dec 2-3 for transition.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-950 mb-3">Key Metrics</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-100">
                      <span className="text-sm font-semibold text-neutral-700">Mini pilot participants</span>
                      <span className="text-sm font-black text-warning">0/5-8 confirmed</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-100">
                      <span className="text-sm font-semibold text-neutral-700">Content review</span>
                      <span className="text-sm font-black text-success">80% complete</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-100">
                      <span className="text-sm font-semibold text-neutral-700">UI/UX refinements</span>
                      <span className="text-sm font-black text-success">2 alternatives prepared</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Action Items */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950 mb-8">Action Items Tracker</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-950 mb-4">adidas Team Actions</h3>
              <div className="overflow-x-auto rounded-2xl border-2 border-neutral-200 shadow-soft">
                <table className="min-w-full divide-y divide-neutral-200">
                  <thead>
                    <tr className="bg-gradient-to-r from-neutral-50 to-neutral-100">
                      <th className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider">
                        Action Item
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider">
                        Owner
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider">
                        Due Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-neutral-950">Confirm mini pilot participants</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 font-medium">Zsofia</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 font-medium tabular-nums">Nov 29</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-warning/10 border border-warning/30 px-2.5 py-1 text-xs font-bold text-warning-dark">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          In Progress
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-600 font-medium">In progress, communications sent</td>
                    </tr>
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-neutral-950">Review micro-actions content</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 font-medium">Zsofia/Divya</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 font-medium tabular-nums">Nov 27</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-warning/10 border border-warning/30 px-2.5 py-1 text-xs font-bold text-warning-dark">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          In Progress
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-600 font-medium">Meeting scheduled for Nov 26</td>
                    </tr>
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-neutral-950">LeanIX registration completion</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 font-medium">Lucas</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 font-medium tabular-nums">Nov 29</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-warning/10 border border-warning/30 px-2.5 py-1 text-xs font-bold text-warning-dark">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          In Progress
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-600 font-medium">Final approval pending</td>
                    </tr>
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-neutral-950">Announce Zsofia's successor</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 font-medium">Pedro/HR</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 font-medium tabular-nums">Nov 29</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-warning/10 border border-warning/30 px-2.5 py-1 text-xs font-bold text-warning-dark">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          In Progress
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-600 font-medium">Expected end of week</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-neutral-950 mb-4">Baresquare Team Actions</h3>
              <div className="overflow-x-auto rounded-2xl border-2 border-neutral-200 shadow-soft">
                <table className="min-w-full divide-y divide-neutral-200">
                  <thead>
                    <tr className="bg-gradient-to-r from-neutral-50 to-neutral-100">
                      <th className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider">
                        Action Item
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider">
                        Owner
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider">
                        Due Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-neutral-950">Executive briefing deck preparation</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 font-medium">Georgios</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 font-medium tabular-nums">Nov 30</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-success/10 border border-success/30 px-2.5 py-1 text-xs font-bold text-success-dark">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          On Track
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-600 font-medium">Context documents complete, slides next</td>
                    </tr>
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-neutral-950">User access setup in adidas environment</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 font-medium">Nikos</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 font-medium tabular-nums">Nov 30</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-warning/10 border border-warning/30 px-2.5 py-1 text-xs font-bold text-warning-dark">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          In Progress
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-600 font-medium">Meeting with Lucas tomorrow</td>
                    </tr>
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-neutral-950">Participant briefing materials</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 font-medium">Lars</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 font-medium tabular-nums">Dec 5</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-warning/10 border border-warning/30 px-2.5 py-1 text-xs font-bold text-warning-dark">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          In Progress
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-600 font-medium">Draft started</td>
                    </tr>
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-neutral-950">Alternative UI review preparation</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 font-medium">Nikos</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 font-medium tabular-nums">Nov 29</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-success/10 border border-success/30 px-2.5 py-1 text-xs font-bold text-success-dark">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Complete
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-600 font-medium">Two versions ready for stakeholder review</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Milestones */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950 mb-8">Upcoming Milestones</h2>
          <div className="overflow-x-auto rounded-2xl border-2 border-neutral-200 shadow-soft">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead>
                <tr className="bg-gradient-to-r from-neutral-50 to-neutral-100">
                  <th className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider">
                    Milestone
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider">
                    Target Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider">
                    Confidence
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-neutral-950 uppercase tracking-wider">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-neutral-950">Executive briefing materials complete</td>
                  <td className="px-6 py-4 text-sm text-neutral-700 font-medium tabular-nums">Nov 30</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-success/10 border border-success/30 px-2.5 py-1 text-xs font-bold text-success-dark">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      High
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600 font-medium">Context docs done, slides in progress</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-neutral-950">Zsofia's successor announced</td>
                  <td className="px-6 py-4 text-sm text-neutral-700 font-medium tabular-nums">Nov 29</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-warning/10 border border-warning/30 px-2.5 py-1 text-xs font-bold text-warning-dark">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Medium
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600 font-medium">Expected end of week</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-neutral-950">Face-to-face meeting (Herzogenaurach)</td>
                  <td className="px-6 py-4 text-sm text-neutral-700 font-medium tabular-nums">Dec 2-3</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-success/10 border border-success/30 px-2.5 py-1 text-xs font-bold text-success-dark">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      High
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600 font-medium">Agenda set, materials in prep</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-neutral-950">Mini pilot testing</td>
                  <td className="px-6 py-4 text-sm text-neutral-700 font-medium tabular-nums">Dec 9-13</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-success/10 border border-success/30 px-2.5 py-1 text-xs font-bold text-success-dark">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      High
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600 font-medium">Logistics planned, pending participant confirmation</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-neutral-950">Learning Agent LeanIX approval</td>
                  <td className="px-6 py-4 text-sm text-neutral-700 font-medium tabular-nums">Nov 29</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-warning/10 border border-warning/30 px-2.5 py-1 text-xs font-bold text-warning-dark">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Medium
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600 font-medium">Lucas escalating</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950 mb-8">Lessons Learned</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl border-2 border-success/30 bg-gradient-to-br from-success-light via-white to-white p-8 shadow-soft">
              <div className="absolute top-0 right-0 w-32 h-32 bg-success/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-bold text-success-dark">What Went Well</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-success mt-2" />
                    <span className="text-neutral-700 font-medium">Proactive creation of comprehensive documentation helps with transition management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-success mt-2" />
                    <span className="text-neutral-700 font-medium">Face-to-face meeting timing is excellent for alignment with new successor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-success mt-2" />
                    <span className="text-neutral-700 font-medium">Alternative UI design prepared in advance gives stakeholders options</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border-2 border-warning/30 bg-gradient-to-br from-warning-light via-white to-white p-8 shadow-soft">
              <div className="absolute top-0 right-0 w-32 h-32 bg-warning/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-warning" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-bold text-warning-dark">What Could Be Improved</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-warning mt-2" />
                    <span className="text-neutral-700 font-medium">Earlier identification of stakeholder transition risks would have allowed more preparation time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-warning mt-2" />
                    <span className="text-neutral-700 font-medium">More frequent executive-level communication to maintain visibility and support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-warning mt-2" />
                    <span className="text-neutral-700 font-medium">Clearer definition of "done" for deliverables to avoid scope ambiguity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t-2 border-neutral-200 pt-8 text-center text-sm text-neutral-500">
          <p className="font-semibold"><strong>Next Report Due:</strong> November 29, 2025</p>
          <p className="mt-2">
            <strong>Questions or Issues:</strong> Contact{' '}
            <a href="mailto:lars@baresquare.com" className="text-info hover:text-info-dark font-semibold">
              Lars Boeddener
            </a>
            {' '}or{' '}
            <a href="mailto:georgios@baresquare.com" className="text-info hover:text-info-dark font-semibold">
              Georgios Grigoriadis
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
