import { Users, FileText, ArrowRight } from 'lucide-react'

export default function ManagementCards({ onViewChange }) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* User Management Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Users size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-900">User Management</h2>
              <p className="text-slate-600 text-base mt-2">
                Monitor and manage all talents and recruiters.
              </p>
            </div>
          </div>
          <button
            onClick={() => onViewChange('users')}
            className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition flex items-center justify-center gap-2"
          >
            Manage Users
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Job Approvals Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-900">Job Approvals</h2>
              <p className="text-slate-600 text-base mt-2">
                Approve or reject casting calls before they go live.
              </p>
            </div>
          </div>
          <button
            onClick={() => onViewChange('jobs')}
            className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg hover:from-blue-600 hover:to-cyan-600 transition flex items-center justify-center gap-2"
          >
            Manage Jobs
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
