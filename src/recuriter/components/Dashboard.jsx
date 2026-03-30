import { useState } from 'react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('jobs')

  const stats = [
    { label: 'Open Jobs', value: '2' },
    { label: 'Total Applicants', value: '60' },
    { label: 'Shortlisted Today', value: '3' },
  ]

  const jobs = [
    {
      id: 1,
      title: 'Lead Actor - Web Series',
      location: 'Indore - On-site',
      applicants: 12,
      status: 'Active',
      statusColor: 'bg-green-100 text-green-700',
    },
    {
      id: 2,
      title: 'Voice Artist - Radio Jingle',
      location: 'Remote - Remote',
      applicants: 24,
      status: 'Open',
      statusColor: 'bg-blue-100 text-blue-700',
    },
    {
      id: 3,
      title: 'Supporting Role - Feature Film',
      location: 'Bhopal - On-site',
      applicants: 12,
      status: 'Open',
      statusColor: 'bg-blue-100 text-blue-700',
    },
    {
      id: 4,
      title: 'Lead Actor - Crime Web Series',
      location: 'Mumbai - On-site',
      applicants: 20,
      status: 'Open',
      statusColor: 'bg-green-100 text-green-700',
    },
  ]

  const suggestions = [
    {
      initials: 'K',
      name: 'Kriti Sharma',
      specialty: 'Model & Actor',
      tags: ['Print', 'Fashion'],
    },
    {
      initials: 'A',
      name: 'Arjun Mehta',
      specialty: 'Film & Web Series Actor',
      tags: ['Drama', 'Comedy'],
    },
    {
      initials: 'R',
      name: 'Rohan Verma',
      specialty: 'Voice Artist',
      tags: ['Voice Over', 'Dubbing'],
    },
  ]

  const tips = [
    'Write clear audition requirements.',
    'Add reference images or script notes.',
    'Shortlist candidates within 48 hours.',
  ]

  return (
    <section id="dashboard" className="pt-32 pb-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground-900 mb-4">
            Recruiter Dashboard
          </h1>
          <p className="text-gray-600 text-lg">Manage your casting calls and discover talented actors</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow"
            >
              <p className="text-gray-600 text-sm font-medium mb-2">{stat.label}</p>
              <p className="text-4xl font-bold text-primary-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button className="px-8 py-3 bg-gradient-purple text-white rounded-full font-semibold hover:shadow-lg transition-all">
            Post Job
          </button>
          <button className="px-8 py-3 bg-white text-foreground-900 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-colors">
            View Applications
          </button>
          <button className="px-8 py-3 bg-white text-foreground-900 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-colors">
            Talents
          </button>
          <button className="px-8 py-3 bg-white text-foreground-900 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-colors">
            Profile
          </button>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-lg text-foreground-900 flex-1">{job.title}</h3>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${job.statusColor}`}>
                  {job.status}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{job.location}</p>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600">
                  Applicants: <span className="text-primary-900 font-bold">{job.applicants}</span>
                </p>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-primary-900 text-white rounded-lg font-semibold hover:bg-primary-900/90 transition-colors text-sm">
                View Applications
              </button>
              <button className="w-full mt-2 px-4 py-2 bg-gray-100 text-foreground-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm">
                Edit Job
              </button>
            </div>
          ))}
        </div>

        {/* Suggested Talents */}
        <div className="bg-white rounded-2xl p-8 shadow-card mb-12">
          <h2 className="text-2xl font-bold text-foreground-900 mb-8">Suggested Talents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {suggestions.map((talent, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 hover:shadow-elevated transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-purple text-white flex items-center justify-center font-bold text-lg mb-4">
                  {talent.initials}
                </div>
                <h3 className="font-bold text-lg text-foreground-900 mb-1">{talent.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{talent.specialty}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {talent.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-primary-900 text-white rounded-lg font-semibold hover:bg--900/90 transition-colors text-sm">
                    View Portfolio
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gray-100 text-foreground-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm">
                    Save
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-xl font-bold text-foreground-900 mb-6">Tips</h3>
            <ul className="space-y-4">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-900/20 text-primary-900 flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-xl font-bold text-foreground-900 mb-6">Post New Casting Call</h3>
            <p className="text-gray-600 mb-6">
              Create detailed job posts to find matching talents.
            </p>
            <p className="text-gray-600 mb-6">
              Track applications and manage shortlisting.
            </p>
            <button className="w-full px-6 py-3 bg-gradient-purple text-white rounded-lg font-semibold hover:shadow-lg transition-all">
              Start Posting
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
