export default function ProfilePage({ setCurrentPage }) {
  const profile = {
    name: 'Arjun Mehta',
    title: 'Film & Web Series Actor',
    location: 'Mumbai, India',
    email: '@arjun_mehta',
    rating: 4.7,
    experience: '4+ yrs',
    followers: '1.2k',
    languages: ['Hindi', 'English'],
    about: 'Actor with 4+ years of experience in films, web series, and theatre. Comfortable with intense dramatic roles as well as light comedy. Open to projects across Mumbai and nearby cities.',
    skills: ['Drama', 'Comedy', 'Theatre', 'Voice Acting'],
  }

  const credits = [
    {
      year: 2025,
      title: 'City Lights (Web Series)',
      role: 'Supporting Lead',
      type: 'Web Series',
    },
    {
      year: 2024,
      title: 'Silver Streets',
      role: 'Cameo',
      type: 'Feature Film',
    },
    {
      year: 2023,
      title: 'The Last Curtain',
      role: 'Lead',
      type: 'Theatre',
    },
  ]

  const media = [
    { id: 1, title: 'Drama Monologue', type: 'Video' },
    { id: 2, title: 'Headshot', type: 'Photo' },
    { id: 3, title: 'Comedy Reel', type: 'Video' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
      {/* Header Navigation */}
      <div className="flex gap-4 mb-8 border-b border-gray-200">
        <button className="px-4 py-3 font-semibold text-primary-600 border-b-2 border-primary-600">
          Profile Edit
        </button>
        <button 
          onClick={() => setCurrentPage('find-job')}
          className="px-4 py-3 font-semibold text-gray-700 hover:text-primary-600"
        >
          Find Job
        </button>
        <button 
          onClick={() => setCurrentPage('application-status')}
          className="px-4 py-3 font-semibold text-gray-700 hover:text-primary-600"
        >
          Application Status
        </button>
        <button className="px-4 py-3 font-semibold text-gray-700 hover:text-primary-600">
          Feed
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Left Sidebar */}
        <div className="md:col-span-1">
          {/* Profile Image */}
          <div className="bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl aspect-square mb-6 flex items-center justify-center">
            <span className="text-9xl">👨‍💼</span>
          </div>

          {/* Profile Info */}
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">{profile.name}</h1>
            <p className="text-gray-700 font-semibold mb-2">{profile.title}</p>
            <p className="text-gray-600 mb-6">{profile.location}</p>

            {/* Stats */}
            <div className="space-y-3 mb-8 bg-gray-50 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Rating</span>
                <span className="font-bold">⭐ {profile.rating}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Experience</span>
                <span className="font-bold">{profile.experience}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Followers</span>
                <span className="font-bold">👥 {profile.followers}</span>
              </div>
            </div>

            {/* Languages */}
            <div className="mb-8">
              <p className="font-semibold text-gray-700 mb-3">Languages</p>
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Edit Button */}
            <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition mb-4">
              Edit Portfolio
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-2">
          {/* About Section */}
          <div className="bg-white rounded-2xl p-8 shadow-card mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{profile.about}</p>

            <h3 className="text-lg font-bold text-slate-900 mb-4">Key Skills</h3>
            <div className="flex flex-wrap gap-3">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Credits Section */}
          <div className="bg-white rounded-2xl p-8 shadow-card mb-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Credits</h2>
              <button className="text-primary-600 hover:text-primary-700 font-semibold">
                View all
              </button>
            </div>

            <div className="space-y-6">
              {credits.map((credit, idx) => (
                <div key={idx} className="pb-6 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-gray-600 text-sm font-semibold">{credit.year}</p>
                      <h3 className="text-lg font-bold text-slate-900">{credit.title}</h3>
                      <p className="text-gray-700 text-sm">{credit.role} • {credit.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photos & Reels Section */}
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Photos & Reels</h2>
              <button
                onClick={() => setCurrentPage('portfolio-manager')}
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                 Manage media
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {media.map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl aspect-square flex items-center justify-center text-white font-semibold text-center p-4"
                >
                  <div>
                    <p className="text-2xl mb-2">📸</p>
                    <p className="text-xs">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
