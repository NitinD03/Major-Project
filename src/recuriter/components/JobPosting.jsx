import { useState } from 'react'

export default function JobPosting() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    skills: '',
    location: 'Mumbai, Remote',
    experience: '2-4 years',
    salary: '₹50,000 - ₹80,000',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted:', formData)
    // Reset form
    setFormData({
      title: '',
      company: '',
      description: '',
      skills: '',
      location: 'Mumbai, Remote',
      experience: '2-4 years',
      salary: '₹50,000 - ₹80,000',
    })
  }

  return (
    <section id="jobs" className="pt-32 pb-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Job List */}
          <div>
            <h2 className="text-3xl font-bold text-foreground-900 mb-8">Your Jobs</h2>

            <button className="mb-6 px-6 py-3 bg-gradient-purple text-white rounded-full font-semibold hover:shadow-lg transition-all">
              + New Job
            </button>

            <div className="space-y-4">
              {/* Job Cards */}
              {[
                {
                  title: 'Lead Actor - Web Series',
                  status: 'Active',
                  statusColor: 'bg-green-100 text-green-700',
                  applications: 'View Applications',
                },
                {
                  title: 'Supporting Role - Feature Film',
                  status: 'Pending',
                  statusColor: 'bg-yellow-100 text-yellow-700',
                  applications: 'View Applications',
                },
                {
                  title: 'Lead Actor - Crime Web Series',
                  status: 'Open',
                  statusColor: 'bg-blue-100 text-blue-700',
                  applications: 'View Applications',
                },
                {
                  title: 'Supporting Role - Feature Film',
                  status: 'Open',
                  statusColor: 'bg-blue-100 text-blue-700',
                  applications: 'View Applications',
                },
                {
                  title: 'Voice Artist - Radio Jingle',
                  status: 'Closed',
                  statusColor: 'bg-red-100 text-red-700',
                  applications: 'View Applications',
                },
              ].map((job, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-card hover:shadow-elevated transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground-900">{job.title}</h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${job.statusColor}`}>
                      {job.status}
                    </span>
                  </div>
                  <a href="#" className="text-primary-900 font-medium text-sm hover:underline">
                    {job.applications}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Job Form */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-card sticky top-32">
              <h2 className="text-2xl font-bold text-foreground-900 mb-6">Create Job Posting</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-foreground-900 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g., Lead Actor for Web Series"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 transition-all"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-foreground-900 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the role..."
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 transition-all"
                  />
                </div>

                {/* Required Skills */}
                <div>
                  <label className="block text-sm font-medium text-foreground-900 mb-2">
                    Required Skills
                  </label>
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="e.g. Acting, Dancing, Voice-over"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 transition-all"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-foreground-900 mb-2">
                    Location
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 transition-all"
                  >
                    <option>Mumbai, Remote</option>
                    <option>Delhi, On-site</option>
                    <option>Bangalore, Hybrid</option>
                    <option>Remote</option>
                  </select>
                </div>

                {/* Experience Range */}
                <div>
                  <label className="block text-sm font-medium text-foreground-900 mb-2">
                    Experience Range
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 transition-all"
                  >
                    <option>Fresher</option>
                    <option>1-2 years</option>
                    <option>2-4 years</option>
                    <option>4-6 years</option>
                    <option>6+ years</option>
                  </select>
                </div>

                {/* Salary Range */}
                <div>
                  <label className="block text-sm font-medium text-foreground-900 mb-2">
                    Salary Range
                  </label>
                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    placeholder="e.g. ₹50,000 - ₹80,000"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-purple text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Submit for Approval
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
