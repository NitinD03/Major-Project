export default function Hero({ onBrowseTalentClick, onHireTalentClick }) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />
      
      {/* Subtle background image pattern */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      </div>

      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Amazing{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Talent
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect talented actors and models with top recruiters. Showcase your portfolio or find your next star.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBrowseTalentClick}
              className="bg-blue-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg hover:bg-blue-700 transition font-semibold flex items-center justify-center gap-2"
            >
              <span>●</span> Browse Talent
            </button>
            <button
              onClick={onHireTalentClick}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 md:px-10 md:py-4 rounded-lg hover:bg-blue-50 transition font-semibold flex items-center justify-center gap-2"
            >
              <span>🔍</span> Hire Talent
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
