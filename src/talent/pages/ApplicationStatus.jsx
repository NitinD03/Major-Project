export default function ApplicationStatus({ setCurrentPage }) {
  const stats = [
    { label: 'Total Applications', value: '3', color: 'bg-gray-50' },
    { label: 'Shortlisted', value: '1', color: 'bg-green-50' },
    { label: 'Rejected', value: '1', color: 'bg-red-50' },
  ]

  const applications = [
    {
      id: 1,
      title: 'Lead Role – Short Film',
      company: 'Silver Frame Studios',
      appliedDate: '12 Jan 2026',
      status: 'Shortlisted',
      statusColor: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      id: 2,
      title: 'TV Commercial Model',
      company: 'BrightAds Media',
      appliedDate: '08 Jan 2026',
      status: 'Applied',
      statusColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 3,
      title: 'Web Series Supporting Actor',
      company: 'Urban Screen',
      appliedDate: '02 Jan 2026',
      status: 'Rejected',
      statusColor: 'text-red-600',
      bgColor: 'bg-red-50',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Your Applications</h1>
          <p className="text-gray-600 text-lg">Track where you are in the casting process for each role.</p>
        </div>
        <button 
          onClick={() => setCurrentPage('dashboard')}
          className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Back to Dashboard
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat) => (
          <div key={stat.label} className={`${stat.color} rounded-2xl p-8 shadow-soft`}>
            <p className="text-gray-700 text-sm font-medium mb-2">{stat.label}</p>
            <p className="text-4xl font-bold text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Featured Applications */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Your Recent Applications</h2>

        <div className="space-y-4">
          {applications.map((app) => (
            <div key={app.id} className="bg-white rounded-2xl p-8 shadow-card hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{app.title}</h3>
                      <p className="text-gray-700 font-semibold">{app.company}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${app.bgColor} ${app.statusColor}`}>
                      {app.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">Applied on {app.appliedDate}</p>
                </div>

                <div className="flex gap-3">
                  <button className="px-6 py-2 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition">
                    View details
                  </button>
                  <button className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition">
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Table View */}
      <div className="bg-white rounded-2xl p-8 shadow-card overflow-x-auto">
        <h3 className="text-xl font-bold text-slate-900 mb-6">All applications (table view)</h3>

        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-4 px-4 font-semibold text-gray-700">Job</th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700">Company</th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700">Applied On</th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                <td className="py-4 px-4 font-semibold text-slate-900">{app.title}</td>
                <td className="py-4 px-4 text-gray-700">{app.company}</td>
                <td className="py-4 px-4 text-gray-600">{app.appliedDate}</td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${app.bgColor} ${app.statusColor}`}>
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
