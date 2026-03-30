import { useState } from 'react'

export default function TalentFeed() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [favorites, setFavorites] = useState(new Set())

  const categories = ['All', 'Actor', 'Model', 'Voice Actor', 'Dancer']
  const locations = ['All', 'New York', 'Atlanta', 'Miami', 'Chicago', 'Vancouver', 'Los Angeles']

  const talents = [
    {
      id: 1,
      name: 'Emma Rodriguez',
      rating: 4.9,
      category: 'Actor',
      location: 'Los Angeles, CA',
      experience: '5 years experience',
      bio: 'Versatile actress with extensive theater and film experience across multiple roles.',
      skills: ['Drama', 'Comedy', 'Theater'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%2012%2C%202026%20at%2001_45_40%20AM-HS44u3KXXKYeLP3C4Auczvn36M3SN2.png',
    },
    {
      id: 2,
      name: 'Marcus Chen',
      rating: 4.7,
      category: 'Model',
      location: 'New York, NY',
      experience: '5 years experience',
      bio: 'Fashion model specializing in high-end editorial and commercial campaigns.',
      skills: ['Fashion', 'Editorial'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%2012%2C%202026%20at%2001_45_40%20AM-HS44u3KXXKYeLP3C4Auczvn36M3SN2.png',
    },
    {
      id: 3,
      name: 'Sofia Williams',
      rating: 4.8,
      category: 'Actor',
      location: 'Atlanta, GA',
      experience: '7 years experience',
      bio: 'Award-winning actress known for powerful dramatic performances.',
      skills: ['Drama', 'Film', 'TV'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%2012%2C%202026%20at%2001_45_40%20AM-HS44u3KXXKYeLP3C4Auczvn36M3SN2.png',
    },
    {
      id: 4,
      name: 'Ryan Foster',
      rating: 4.9,
      category: 'Model',
      location: 'Chicago, IL',
      experience: '6 years experience',
      bio: 'High fashion and editorial runway specialist with international experience.',
      skills: ['High Fashion', 'Editorial'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%2012%2C%202026%20at%2001_45_40%20AM-HS44u3KXXKYeLP3C4Auczvn36M3SN2.png',
    },
  ]

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavorites(newFavorites)
  }

  const filteredTalents = talents.filter(
    (talent) =>
      (selectedCategory === 'All' || talent.category === selectedCategory) &&
      (selectedLocation === 'All' || talent.location.includes(selectedLocation))
  )

  return (
    <section id="talents" className="pt-32 pb-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground-900 mb-4">
            Talent Feed
          </h1>
          <p className="text-gray-600 text-lg">Discover amazing talents, and their portfolios</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-card sticky top-32">
              <h2 className="text-xl font-bold text-foreground-900 mb-6">Filters</h2>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                        selectedCategory === cat
                          ? 'bg-gradient-purple text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
                <div className="space-y-2">
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => setSelectedLocation(loc)}
                      className={`block w-full text-left px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                        selectedLocation === loc
                          ? 'bg-gradient-purple text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button className="w-full px-4 py-2 text-primary-900 font-semibold hover:bg-primary-900/10 rounded-lg transition-colors">
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Talent Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTalents.map((talent) => (
                <div
                  key={talent.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative h-80 bg-gray-200 overflow-hidden">
                    <img
                      src={talent.image}
                      alt={talent.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={() => toggleFavorite(talent.id)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all"
                    >
                      <span className={`text-xl ${favorites.has(talent.id) ? 'text-red-500' : 'text-gray-400'}`}>
                        ♥
                      </span>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-foreground-900">{talent.name}</h3>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="font-semibold text-gray-700">{talent.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span className="flex items-center gap-1">👤 {talent.category}</span>
                      <span className="flex items-center gap-1">📍 {talent.location}</span>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                      ⏱️ {talent.experience}
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{talent.bio}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {talent.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <button className="w-full px-4 py-2.5 bg-primary-900 text-white font-semibold rounded-lg hover:bg-primary-900/90 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredTalents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No talents found matching your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
