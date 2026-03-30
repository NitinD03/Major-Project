import { useState } from 'react'
import Navbar from '../components/AdminNavbar'
import ManagementCards from '../components/AdminManagementCards'
import UsersTable from '../components/AdminUsersTable'
import JobApprovalsTable from '../components/AdminJobApprovalsTable'

export default function Home() {
  const [view, setView] = useState('all') // 'all', 'users', 'jobs'

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      {view === 'all' && <ManagementCards onViewChange={setView} />}
      
      {(view === 'all' || view === 'users') && view !== 'jobs' && (
        <div className={view === 'users' ? 'max-w-7xl mx-auto px-6 md:px-12 lg:px-20' : ''}>
          {view === 'users' && (
            <button
              onClick={() => setView('all')}
              className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              ← Back to Dashboard
            </button>
          )}
          {view === 'users' && <UsersTable />}
        </div>
      )}

      {(view === 'all' || view === 'jobs') && view !== 'users' && (
        <div className={view === 'jobs' ? 'max-w-7xl mx-auto px-6 md:px-12 lg:px-20' : ''}>
          {view === 'jobs' && (
            <button
              onClick={() => setView('all')}
              className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              ← Back to Dashboard
            </button>
          )}
          {view === 'jobs' && <JobApprovalsTable />}
        </div>
      )}

      {view === 'all' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-12">
          <UsersTable isPreview={true} />
          <JobApprovalsTable isPreview={true} />
        </div>
      )}
    </div>
  )
}
