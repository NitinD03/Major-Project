export default function CTA({ onJoinAsTabClick, onHireTalentClick }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Join thousands of talents and recruiters already using TalentHub
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onJoinAsTabClick}
              className="bg-blue-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Join as Talent
            </button>
            <button
              onClick={onHireTalentClick}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 md:px-10 md:py-4 rounded-lg hover:bg-blue-50 transition font-semibold"
            >
              Hire Talent
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
