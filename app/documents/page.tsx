const documents = {
  strategic: [
    {
      name: 'Executive Briefing',
      description: 'Comprehensive overview for decision-makers and stakeholders',
      date: 'November 21, 2025',
      type: 'PDF',
      size: '3.6 MB',
      file: '/documents/executive-briefing.pdf',
    },
    {
      name: 'Website Structure Outline',
      description: 'Complete blueprint for project website with 20 page specifications',
      date: 'November 21, 2025',
      type: 'PDF',
      size: '107 KB',
      file: '/documents/website-structure-outline.pdf',
    },
    {
      name: 'Master Guide & README',
      description: 'Overview of all project documentation and how to navigate it',
      date: 'November 21, 2025',
      type: 'PDF',
      size: '111 KB',
      file: '/documents/master-guide-readme.pdf',
    },
  ],
  operational: [
    {
      name: 'Weekly Progress Report (Nov 21)',
      description: 'Current week status, action items, and upcoming milestones',
      date: 'November 21, 2025',
      type: 'PDF',
      size: '2.1 MB',
      file: '/documents/weekly-progress-nov-21.pdf',
    },
    {
      name: 'Project Timeline & Roadmap',
      description: 'Detailed timeline from March 2025 through 2026 with Gantt data',
      date: 'November 21, 2025',
      type: 'PDF',
      size: '165 KB',
      file: '/documents/project-timeline-roadmap.pdf',
    },
    {
      name: 'Weekly Progress Template',
      description: 'Template for ongoing weekly status updates',
      date: 'November 21, 2025',
      type: 'PDF',
      size: '190 KB',
      file: '/documents/weekly-progress-template.pdf',
    },
  ],
  handover: [
    {
      name: 'Project Context Document',
      description: 'Comprehensive 21-page context for successor handover',
      date: 'November 21, 2025',
      type: 'PDF',
      size: '154 KB',
      file: '/documents/project-context-document.pdf',
    },
    {
      name: 'Stakeholder Map',
      description: 'Key contacts, roles, and communication protocols',
      date: 'November 21, 2025',
      type: 'PDF',
      size: '148 KB',
      file: '/documents/stakeholder-map.pdf',
    },
  ],
};

export default function Documents() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 mb-6 shadow-lg">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
              <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Document Repository</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-neutral-950 mb-4">
            Project Documents
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 font-medium max-w-2xl mx-auto">
            Central location for all project artifacts and materials
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-16 max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full rounded-xl border-2 border-neutral-200 bg-white pl-11 pr-4 py-4 text-neutral-950 font-medium placeholder-neutral-400 focus:border-info focus:outline-none focus:ring-2 focus:ring-info/20 shadow-soft transition-all"
            />
          </div>
        </div>

        {/* Strategic Documents */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-info to-info-dark shadow-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight text-neutral-950">Strategic Documents</h2>
              <p className="text-sm text-neutral-600 font-medium">High-level overviews and strategic materials</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {documents.strategic.map((doc, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white p-6 shadow-soft transition-all hover:shadow-medium hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Document Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-info/10 border border-info/20 flex items-center justify-center group-hover:bg-info/20 transition-colors">
                      <svg className="w-6 h-6 text-info" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                    </div>

                    {/* Document Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-neutral-950 mb-1">{doc.name}</h3>
                      <p className="text-sm text-neutral-600 font-medium mb-3">{doc.description}</p>
                      <div className="flex items-center gap-3 text-xs text-neutral-500 font-semibold">
                        <span className="inline-flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {doc.date}
                        </span>
                        <span className="text-neutral-300">•</span>
                        <span className="tabular-nums">{doc.type}</span>
                        <span className="text-neutral-300">•</span>
                        <span className="tabular-nums">{doc.size}</span>
                      </div>
                    </div>
                  </div>

                  {/* Download Button */}
                  <a
                    href={doc.file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-bold text-white hover:bg-neutral-800 transition-all hover:scale-105 shadow-medium"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Operational Documents */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-success to-success-dark shadow-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight text-neutral-950">Operational Documents</h2>
              <p className="text-sm text-neutral-600 font-medium">Progress reports and operational materials</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {documents.operational.map((doc, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white p-6 shadow-soft transition-all hover:shadow-medium hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Document Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-success/10 border border-success/20 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                      <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                    </div>

                    {/* Document Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-neutral-950 mb-1">{doc.name}</h3>
                      <p className="text-sm text-neutral-600 font-medium mb-3">{doc.description}</p>
                      <div className="flex items-center gap-3 text-xs text-neutral-500 font-semibold">
                        <span className="inline-flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {doc.date}
                        </span>
                        <span className="text-neutral-300">•</span>
                        <span className="tabular-nums">{doc.type}</span>
                        <span className="text-neutral-300">•</span>
                        <span className="tabular-nums">{doc.size}</span>
                      </div>
                    </div>
                  </div>

                  {/* Download Button */}
                  <a
                    href={doc.file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-bold text-white hover:bg-neutral-800 transition-all hover:scale-105 shadow-medium"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Handover Documents */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-ai to-ai-dark shadow-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight text-neutral-950">Handover Documents</h2>
              <p className="text-sm text-neutral-600 font-medium">Transition materials for project continuity</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {documents.handover.map((doc, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white p-6 shadow-soft transition-all hover:shadow-medium hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Document Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-ai/10 border border-ai/20 flex items-center justify-center group-hover:bg-ai/20 transition-colors">
                      <svg className="w-6 h-6 text-ai" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                    </div>

                    {/* Document Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-neutral-950 mb-1">{doc.name}</h3>
                      <p className="text-sm text-neutral-600 font-medium mb-3">{doc.description}</p>
                      <div className="flex items-center gap-3 text-xs text-neutral-500 font-semibold">
                        <span className="inline-flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {doc.date}
                        </span>
                        <span className="text-neutral-300">•</span>
                        <span className="tabular-nums">{doc.type}</span>
                        <span className="text-neutral-300">•</span>
                        <span className="tabular-nums">{doc.size}</span>
                      </div>
                    </div>
                  </div>

                  {/* Download Button */}
                  <a
                    href={doc.file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-bold text-white hover:bg-neutral-800 transition-all hover:scale-105 shadow-medium"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
