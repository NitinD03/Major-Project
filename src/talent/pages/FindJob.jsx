import { useState, useEffect } from 'react'
import JobApplicationForm from '../components/JobApplicationForm';

export default function FindJob({ setCurrentPage }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')
  const [jobType, setJobType] = useState('Any')
  const [selectedJob, setSelectedJob] = useState(null) // ✅ NEW

  const jobs = [
    {
      id: 1,
      title: 'Lead Actor – Web Series',
      company: 'DreamCraft Studios',
      location: 'Mumbai',
      type: 'On-site',
      tags: ['Acting', 'Hindi', 'English'],
      skills: ['Acting', 'Hindi', 'English'],
    },
    {
      id: 2,
      title: 'Voice Artist – Animation',
      company: 'Pixel Animations',
      location: 'Remote',
      type: 'Remote',
      tags: ['Voice-over', 'Dubbing'],
      skills: ['Voice-over', 'Dubbing'],
    },
    {
      id: 3,
      title: 'Supporting Actor – Feature Film',
      company: 'Sunrise Films',
      location: 'Bhopal',
      type: 'On-site',
      tags: ['Acting', 'Hindi'],
      skills: ['Acting', 'Hindi'],
    },
    {
      id: 4,
      title: 'Theatre Artist',
      company: 'Urban Stage',
      location: 'Delhi',
      type: 'On-site',
      tags: ['Theatre', 'Stage'],
      skills: ['Theatre', 'Stage Performance'],
    },
  ]

  useEffect(() => {
  const storedJob = localStorage.getItem('selectedJob')
  if (storedJob) {
    setSelectedJob(JSON.parse(storedJob))
    localStorage.removeItem('selectedJob')
  }
  }, [])

  const filteredJobs = jobs.filter(job => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesLocation =
      !location || job.location.toLowerCase().includes(location.toLowerCase())

    const matchesType =
      jobType === 'Any' || job.type === jobType

    return matchesSearch && matchesLocation && matchesType
  })

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Find Roles</h1>
        <p className="text-gray-600 text-lg">
          Search for acting, modeling, and voice projects that match you.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-8 shadow-card mb-12">
        <div className="grid md:grid-cols-4 gap-6">
          
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="px-4 py-3 border rounded-lg"
          />

          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="px-4 py-3 border rounded-lg"
          />

          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="px-4 py-3 border rounded-lg"
          >
            <option>Any</option>
            <option>On-site</option>
            <option>Remote</option>
          </select>

          <button
            onClick={() => {
              setSearchTerm('')
              setLocation('')
              setJobType('Any')
            }}
            className="border border-primary-600 text-primary-600 rounded-lg"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Jobs */}
      <div className="space-y-6">
        {filteredJobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-xl shadow">
            
            <h3 className="text-xl font-bold">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>

            <p className="text-sm mt-2">{job.location} • {job.type}</p>

            <p className="text-sm mt-2">
              Skills: {job.skills.join(', ')}
            </p>

            <button
              onClick={() => setSelectedJob(job)} // ✅ IMPORTANT
              className="mt-4 bg-black text-white px-4 py-2 rounded"
            >
              Apply
            </button>
          </div>
        ))}
      </div>

      {/* ✅ APPLICATION FORM MODAL */}
      {selectedJob && (
        <JobApplicationForm
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  )
}