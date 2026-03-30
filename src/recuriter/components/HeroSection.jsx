export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground-900 leading-tight mb-6">
              Find Your Perfect
              <span className="gradient-text"> Talent</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with skilled actors, models, and performers. Post casting calls, manage applications, and discover top talent in the entertainment industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-purple text-white rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-primary-900 text-primary-900 rounded-full font-semibold hover:bg-primary-900/5 transition-all">
                Explore Talents
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-primary-900">5000+</p>
                <p className="text-gray-600 text-sm">Talented Professionals</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-900">2000+</p>
                <p className="text-gray-600 text-sm">Active Recruiters</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-900">50K+</p>
                <p className="text-gray-600 text-sm">Successful Placements</p>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-secondary-900/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-3xl p-8 shadow-elevated">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 bg-gradient-purple rounded-2xl h-40 flex items-center justify-center text-white">
                    <span className="text-5xl">🎬</span>
                  </div>
                  <div className="bg-primary-900/10 rounded-xl h-24 flex items-center justify-center">
                    <span className="text-3xl">👤</span>
                  </div>
                  <div className="bg-secondary-900/10 rounded-xl h-24 flex items-center justify-center">
                    <span className="text-3xl">🎤</span>
                  </div>
                  <div className="bg-accent-900/10 rounded-xl h-24 flex items-center justify-center">
                    <span className="text-3xl">🎭</span>
                  </div>
                  <div className="bg-primary-900/5 rounded-xl h-24 flex items-center justify-center">
                    <span className="text-3xl">💼</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
