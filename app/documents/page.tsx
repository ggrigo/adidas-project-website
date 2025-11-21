const documents = {
  strategic: [
    {
      name: 'Executive Briefing',
      description: 'Comprehensive overview for decision-makers and stakeholders',
      date: 'November 21, 2025',
      type: 'PDF',
      size: '2.1 MB',
    },
    {
      name: 'Website Structure Outline',
      description: 'Complete blueprint for project website with 20 page specifications',
      date: 'November 21, 2025',
      type: 'PDF',
      size: '856 KB',
    },
    {
      name: 'Master Guide & README',
      description: 'Overview of all project documentation and how to navigate it',
      date: 'November 21, 2025',
      type: 'PDF',
      size: '245 KB',
    },
  ],
  operational: [
    {
      name: 'Weekly Progress Report (Nov 21)',
      description: 'Current week status, action items, and upcoming milestones',
      date: 'November 21, 2025',
      type: 'PDF',
      size: '1.3 MB',
    },
    {
      name: 'Project Timeline & Roadmap',
      description: 'Detailed timeline from March 2025 through 2026 with Gantt data',
      date: 'November 21, 2025',
      type: 'PDF',
      size: '1.8 MB',
    },
    {
      name: 'Weekly Progress Template',
      description: 'Template for ongoing weekly status updates',
      date: 'November 21, 2025',
      type: 'PDF',
      size: '623 KB',
    },
  ],
  handover: [
    {
      name: 'Project Context Document',
      description: 'Comprehensive 21-page context for successor handover',
      date: 'November 21, 2025',
      type: 'PDF',
      size: '3.4 MB',
    },
    {
      name: 'Stakeholder Map',
      description: 'Key contacts, roles, and communication protocols',
      date: 'November 21, 2025',
      type: 'PDF',
      size: '412 KB',
    },
  ],
};

export default function Documents() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Document Repository</h1>
        <p className="mt-2 text-lg text-gray-600">
          Central location for all project artifacts and materials
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search documents..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      {/* Strategic Documents */}
      <section className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="text-3xl">📋</div>
          <h2 className="text-2xl font-bold text-gray-900">Strategic Documents</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {documents.strategic.map((doc, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{doc.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{doc.description}</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                    <span>{doc.date}</span>
                    <span>•</span>
                    <span>{doc.type}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                  </div>
                </div>
                <button className="ml-4 rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Operational Documents */}
      <section className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="text-3xl">📊</div>
          <h2 className="text-2xl font-bold text-gray-900">Operational Documents</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {documents.operational.map((doc, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{doc.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{doc.description}</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                    <span>{doc.date}</span>
                    <span>•</span>
                    <span>{doc.type}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                  </div>
                </div>
                <button className="ml-4 rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Handover Documents */}
      <section className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="text-3xl">📦</div>
          <h2 className="text-2xl font-bold text-gray-900">Handover Documents</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {documents.handover.map((doc, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{doc.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{doc.description}</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                    <span>{doc.date}</span>
                    <span>•</span>
                    <span>{doc.type}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                  </div>
                </div>
                <button className="ml-4 rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Added Section */}
      <section>
        <div className="rounded-lg bg-primary-50 border border-primary-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 How to Update Documents</h3>
          <p className="text-gray-700">
            To update documents in this repository, add files to the <code className="bg-white px-2 py-1 rounded text-sm">public/documents/</code> folder
            and update the document list in <code className="bg-white px-2 py-1 rounded text-sm">app/documents/page.tsx</code>.
            The site will automatically rebuild and deploy to Netlify.
          </p>
        </div>
      </section>
    </div>
  );
}
