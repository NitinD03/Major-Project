import { Briefcase, Search, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function JobApprovalsTable({ isPreview }) {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Lead Actor - Web Series',
      recruiter: 'DreamCast',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Supporting Role',
      recruiter: 'Sunrise Films',
      status: 'Approved',
    },
    {
      id: 3,
      title: 'Background Extra',
      recruiter: 'Creative Studios',
      status: 'Pending',
    },
    {
      id: 4,
      title: 'Voice Actor',
      recruiter: 'Sound Productions',
      status: 'Rejected',
    },
  ])

  const [openDropdown, setOpenDropdown] = useState(null)

  const updateJobStatus = (jobId, newStatus) => {
    setJobs(jobs.map(job =>
      job.id === jobId ? { ...job, status: newStatus } : job
    ))
    setOpenDropdown(null)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-amber-100 text-amber-700'
      case 'Approved':
        return 'bg-green-100 text-green-700'
      case 'Rejected':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 p-6 flex items-center gap-3">
          <Briefcase size={24} className="text-amber-600" />
          <h3 className="text-2xl font-bold text-slate-900">Job Approvals</h3>
          <div className="ml-auto flex-1 max-w-xs">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Recruiter</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900"></th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-b border-slate-200 hover:bg-slate-50 transition">
                  <td className="px-6 py-4 text-slate-900 font-medium">{job.title}</td>
                  <td className="px-6 py-4 text-slate-600">{job.recruiter}</td>
                  <td className="px-6 py-4 relative">
                    <div className="relative inline-block w-full">
                      <button
                        onClick={() => setOpenDropdown(openDropdown === job.id ? null : job.id)}
                        className={`w-full px-3 py-1 rounded-full text-sm font-semibold flex items-center justify-between ${getStatusColor(job.status)}`}
                      >
                        <span>{job.status}</span>
                        <ChevronDown size={14} className={`transition-transform ${openDropdown === job.id ? 'rotate-180' : ''}`} />
                      </button>

                      {openDropdown === job.id && (
                        <div className="absolute top-full mt-1 w-36 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
                          <button
                            onClick={() => updateJobStatus(job.id, 'Approved')}
                            className="w-full px-4 py-2 text-left hover:bg-slate-100 text-slate-900 first:rounded-t-lg"
                          >
                            Approved
                          </button>
                          <button
                            onClick={() => updateJobStatus(job.id, 'Pending')}
                            className="w-full px-4 py-2 text-left hover:bg-slate-100 text-slate-900 border-t border-slate-200"
                          >
                            Pending
                          </button>
                          <button
                            onClick={() => updateJobStatus(job.id, 'Rejected')}
                            className="w-full px-4 py-2 text-left hover:bg-slate-100 text-slate-900 last:rounded-b-lg border-t border-slate-200"
                          >
                            Rejected
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
