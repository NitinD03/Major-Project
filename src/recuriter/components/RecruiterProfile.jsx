export default function RecruiterProfile() {
  const recruiterStats = [
    { label: 'Jobs Posted', value: '34' },
    { label: 'Hires', value: '18' },
    { label: 'Experience', value: '6+ yrs' },
  ]

  const postedJobs = [
    {
      title: 'Lead Actor - Web Series',
      applicants: 12,
      hired: 0,
      status: 'Active',
      statusColor: 'bg-green-100 text-green-700',
    },
    {
      title: 'Supporting Role - Feature Film',
      applicants: 8,
      hired: 0,
      status: 'Pending',
      statusColor: 'bg-yellow-100 text-yellow-700',
    },
    {
      title: 'Lead Actor - Crime Web Series',
      applicants: 24,
      hired: 1,
      status: 'Open',
      statusColor: 'bg-green-100 text-green-700',
    },
  ]

  return (
    <section id="profile" className="pt-32 pb-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button className="mb-8 px-4 py-2 text-primary-900 font-semibold hover:bg-primary-900/10 rounded-lg transition-colors">
          ← Back to Dashboard
        </button>

        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-8 shadow-card mb-8">
          <div className="text-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-purple flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-4xl">R</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground-900 mb-2">Rahul Sharma</h1>
            <p className="text-gray-600 font-medium">DreamCast Studios</p>
            <p className="text-gray-600 text-sm mt-1">Casting talent for films, web series, and ads.</p>
            <p className="text-foreground-900 font-semibold mt-3">Casting Director</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 mb-8 border-t border-b border-gray-200 py-6">
            {recruiterStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-primary-900">{stat.value}</p>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-gray-600">📞</span>
              <span className="text-foreground-900">+91 98756 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-600">✉️</span>
              <span className="text-foreground-900">rahul.sharma@dreamcaststudios.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-600">📍</span>
              <span className="text-foreground-900">Mumbai, India</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 px-6 py-3 bg-gradient-purple text-white rounded-lg font-semibold hover:shadow-lg transition-all">
              Edit Profile
            </button>
            <button className="flex-1 px-6 py-3 bg-primary-900 text-white rounded-lg font-semibold hover:bg-primary-900/90 transition-all">
              Post New Job
            </button>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl p-8 shadow-card mb-8">
          <h2 className="text-2xl font-bold text-foreground-900 mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">
            Rahul Sharma is a casting director with over 6 years of experience in films, web series, and TV commercials.
            He focuses on discovering fresh talent and building long-term collaborations with actors and production houses.
          </p>
        </div>

        {/* Posted Jobs */}
        <div className="bg-white rounded-2xl p-8 shadow-card">
          <h2 className="text-2xl font-bold text-foreground-900 mb-6">Posted Jobs</h2>
          <div className="space-y-4">
            {postedJobs.map((job, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-elevated transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground-900">{job.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Applicants: <span className="font-semibold text-foreground-900">{job.applicants}</span>
                    </p>
                  </div>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${job.statusColor}`}>
                    {job.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 text-sm">
                    Hired: <span className="font-semibold text-foreground-900">{job.hired}</span>
                  </p>
                  <div className="flex gap-2">
                    <button className="px-4 py-1 text-sm text-primary-900 font-semibold hover:bg-primary-900/10 rounded-lg transition-colors">
                      View Applications
                    </button>
                    <button className="px-4 py-1 text-sm text-gray-600 font-semibold hover:bg-gray-100 rounded-lg transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
