import JobCard from '../components/JobCard'
import TalentCard from '../components/TalentCard'

export default function TalentDashboard({ setCurrentPage }) {
  const recommendedJobs = [
    {
      id: 1,
      title: 'Theatre Artist',
      company: 'Indore Theatre Group',
      location: 'Indore, India',
      tags: ['Theatre', 'Stage'],
      role: 'Lead',
    },
    {
      id: 2,
      title: 'Voice Artist for Ad',
      company: 'Creative Studios',
      location: 'Remote',
      tags: ['Voice Acting', 'Ad Film'],
      role: 'Voice Artist',
    },
    {
      id: 3,
      title: 'Lead Actor for Web Series',
      company: 'Silver Screen Productions',
      location: 'Mumbai, India',
      tags: ['Lead Role', 'Web Series'],
      role: 'Lead Actor',
    },
  ]

  const talents = [
    {
      id: 1,
      name: 'Arjun Mehta',
      title: 'Film & Web Series Actor',
      location: 'Mumbai, India',
      tags: ['Theatre', 'Stage'],
      image: '👨‍💼',
    },
    {
      id: 2,
      name: 'Simran Kaur',
      title: 'Theatre Artist',
      location: 'Indore',
      tags: ['Stage', 'Method Acting'],
      image: '👩‍💼',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Talent Dashboard</h1>
        <p className="text-gray-600 text-lg">Discover new jobs and connect with other talents.</p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-lg transition">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 mb-2">Your Portfolio</p>
              <p className="text-sm text-gray-500">Create and maintain a rich multimedia portfolio visible to</p>
            </div>
            <button 
              onClick={() => setCurrentPage('profile')}
              className="bg-primary-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-700 transition"
            >
              Edit Portfolio
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-lg transition">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 mb-2">Find Opportunities</p>
              <p className="text-sm text-gray-500">Browse casting calls and apply using your profile.</p>
            </div>
            <button 
              onClick={() => setCurrentPage('find-job')}
              className="bg-primary-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-700 transition"
            >
              Browse Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Tips for Talents */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-12 shadow-soft">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Tips for Talents</h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-gray-700">
            <span className="text-green-500 text-xl">✓</span>
            <span>Keep your portfolio updated.</span>
          </li>
          <li className="flex items-center gap-3 text-gray-700">
            <span className="text-green-500 text-xl">✓</span>
            <span>Add a recent showreel video.</span>
          </li>
          <li className="flex items-center gap-3 text-gray-700">
            <span className="text-green-500 text-xl">✓</span>
            <span>Apply to matching roles daily.</span>
          </li>
        </ul>
      </div>

      {/* Random Jobs for You */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Random Jobs for You</h2>
          <button 
            onClick={() => setCurrentPage('find-job')}
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            View all jobs →
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {recommendedJobs.map((job) => (
            <JobCard 
              key={job.id} 
              job={job} 
              onApply={(job) => {
                setCurrentPage('find-job') // 🔥 redirect
                localStorage.setItem('selectedJob', JSON.stringify(job)) // 🔥 pass data
              }}
            />
          ))}
        </div> 
        {/* <div className="grid md:grid-cols-3 gap-6">
          {recommendedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div> */}
      </div>

      {/* Other Talents */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Connect with Other Talents</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {talents.map((talent) => (
            <TalentCard key={talent.id} talent={talent} />
          ))}
        </div>
      </div>
    </div>
  )
}
