export default function WeeklyProgress() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      {/* Header */}
      <div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Weekly Progress Report</h1>
            <p className="mt-2 text-lg text-gray-600">Week of November 21, 2025</p>
            <p className="text-sm text-gray-600">Prepared by: Lars Boeddener</p>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2">
              <span className="text-2xl">🟡</span>
              <span className="font-semibold text-gray-900">At Risk</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Stakeholder transition management</p>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          Key focus this week: preparing comprehensive documentation for executive briefing (Dec 2-3) and Zsofia's
          successor handover. Self-Reflection Tool mini pilot on track for Dec 9-13. Learning Agent deployment still
          awaiting LeanIX approval, but no impact to overall timeline. Face-to-face meeting in Herzogenaurach scheduled
          December 2-3 with Georgios attending.
        </p>
      </section>

      {/* Project Status - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Learning Agent */}
        <section className="border border-yellow-200 rounded-lg p-6 bg-yellow-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Agent</h2>
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold">
              🟡 Awaiting infrastructure approval
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Completed This Week</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Confirmed LeanIX approval process timeline with Lucas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Updated deployment documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Prepared demonstration environment for Dec 2-3 meeting</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">In Progress</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">○</span>
                  <span>LeanIX registration - Lucas (adidas) - Expected: Nov 29</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">○</span>
                  <span>Production environment security group configuration - NIIT/Lucas - Expected: Dec 6</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">○</span>
                  <span>User documentation draft - Lars - Expected: Nov 30</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Blockers & Risks</h3>
              <div className="bg-red-50 border border-red-200 rounded p-3 text-sm">
                <p className="font-semibold text-red-900">LeanIX Approval Delay</p>
                <p className="text-gray-700 mt-1">
                  13 weeks elapsed vs 4 weeks estimated. Latest update: approval expected by Nov 29. Impact: Cannot
                  deploy to production until complete. <strong>Action:</strong> Lucas escalating with IT governance team.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Key Metrics</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Development environment: 100% functional</li>
                <li>Core features completed: 95%</li>
                <li>Documentation: 60% complete</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Self-Reflection Tool */}
        <section className="border border-green-200 rounded-lg p-6 bg-green-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Self-Reflection Tool</h2>
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold">
              🟢 On track for mini pilot
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Completed This Week</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Executive context document prepared (21-page comprehensive version)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Executive briefing document created (landing page version)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Mini pilot logistics planned with Zsofia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Alternative UI design prepared by Nikos</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">In Progress</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">○</span>
                  <span>Micro-actions content review - Zsofia/Divya - Expected: Nov 27</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">○</span>
                  <span>Mini pilot participant confirmation (5-8 directors) - Zsofia - Expected: Nov 29</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">○</span>
                  <span>User access permissions setup - Nikos - Expected: Nov 30</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Blockers & Risks</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-sm">
                <p className="font-semibold text-yellow-900">Stakeholder Transition</p>
                <p className="text-gray-700 mt-1">
                  Zsofia departing Dec 12, successor TBD (announcement expected end of week). <strong>Action:</strong>{' '}
                  Comprehensive handover documentation prepared, face-to-face meeting scheduled Dec 2-3 for transition.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Key Metrics</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Mini pilot participants: 0/5-8 confirmed (targeting Nov 29)</li>
                <li>Content review: 80% complete</li>
                <li>UI/UX refinements: 2 alternatives prepared</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Action Items */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Action Items Tracker</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">adidas Team Actions</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action Item
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Owner
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Confirm mini pilot participants</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Zsofia</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Nov 29</td>
                  <td className="px-4 py-3 text-sm"><span className="text-yellow-600">🟡</span></td>
                  <td className="px-4 py-3 text-sm text-gray-600">In progress, communications sent</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Review micro-actions content</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Zsofia/Divya</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Nov 27</td>
                  <td className="px-4 py-3 text-sm"><span className="text-yellow-600">🟡</span></td>
                  <td className="px-4 py-3 text-sm text-gray-600">Meeting scheduled for Nov 26</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">LeanIX registration completion</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lucas</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Nov 29</td>
                  <td className="px-4 py-3 text-sm"><span className="text-yellow-600">🟡</span></td>
                  <td className="px-4 py-3 text-sm text-gray-600">Final approval pending</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Announce Zsofia's successor</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Pedro/HR</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Nov 29</td>
                  <td className="px-4 py-3 text-sm"><span className="text-yellow-600">🟡</span></td>
                  <td className="px-4 py-3 text-sm text-gray-600">Expected end of week</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Baresquare Team Actions</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action Item
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Owner
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Executive briefing deck preparation</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Georgios</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Nov 30</td>
                  <td className="px-4 py-3 text-sm"><span className="text-green-600">🟢</span></td>
                  <td className="px-4 py-3 text-sm text-gray-600">Context documents complete, slides next</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">User access setup in adidas environment</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Nikos</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Nov 30</td>
                  <td className="px-4 py-3 text-sm"><span className="text-yellow-600">🟡</span></td>
                  <td className="px-4 py-3 text-sm text-gray-600">Meeting with Lucas tomorrow</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Participant briefing materials</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lars</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Dec 5</td>
                  <td className="px-4 py-3 text-sm"><span className="text-yellow-600">🟡</span></td>
                  <td className="px-4 py-3 text-sm text-gray-600">Draft started</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Alternative UI review preparation</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Nikos</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Nov 29</td>
                  <td className="px-4 py-3 text-sm"><span className="text-green-600">🟢</span></td>
                  <td className="px-4 py-3 text-sm text-gray-600">Two versions ready for stakeholder review</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Upcoming Milestones */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Milestones</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Milestone
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Target Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Confidence
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm text-gray-900">Executive briefing materials complete</td>
                <td className="px-4 py-3 text-sm text-gray-700">Nov 30</td>
                <td className="px-4 py-3 text-sm"><span className="text-green-600">🟢</span></td>
                <td className="px-4 py-3 text-sm text-gray-600">Context docs done, slides in progress</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-900">Zsofia's successor announced</td>
                <td className="px-4 py-3 text-sm text-gray-700">Nov 29</td>
                <td className="px-4 py-3 text-sm"><span className="text-yellow-600">🟡</span></td>
                <td className="px-4 py-3 text-sm text-gray-600">Expected end of week</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-900">Face-to-face meeting (Herzogenaurach)</td>
                <td className="px-4 py-3 text-sm text-gray-700">Dec 2-3</td>
                <td className="px-4 py-3 text-sm"><span className="text-green-600">🟢</span></td>
                <td className="px-4 py-3 text-sm text-gray-600">Agenda set, materials in prep</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-900">Mini pilot testing</td>
                <td className="px-4 py-3 text-sm text-gray-700">Dec 9-13</td>
                <td className="px-4 py-3 text-sm"><span className="text-green-600">🟢</span></td>
                <td className="px-4 py-3 text-sm text-gray-600">Logistics planned, pending participant confirmation</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-900">Learning Agent LeanIX approval</td>
                <td className="px-4 py-3 text-sm text-gray-700">Nov 29</td>
                <td className="px-4 py-3 text-sm"><span className="text-yellow-600">🟡</span></td>
                <td className="px-4 py-3 text-sm text-gray-600">Lucas escalating</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Lessons Learned</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-3">What Went Well</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li>Proactive creation of comprehensive documentation helps with transition management</li>
              <li>Face-to-face meeting timing is excellent for alignment with new successor</li>
              <li>Alternative UI design prepared in advance gives stakeholders options</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-semibold text-yellow-900 mb-3">What Could Be Improved</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li>Earlier identification of stakeholder transition risks would have allowed more preparation time</li>
              <li>More frequent executive-level communication to maintain visibility and support</li>
              <li>Clearer definition of "done" for deliverables to avoid scope ambiguity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
        <p><strong>Next Report Due:</strong> November 29, 2025</p>
        <p className="mt-1">
          <strong>Questions or Issues:</strong> Contact Lars Boeddener (lars@baresquare.com) or Georgios Grigoriadis
          (georgios@baresquare.com)
        </p>
      </div>
    </div>
  );
}
