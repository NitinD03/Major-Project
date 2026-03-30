export default function TalentCard({ talent }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center text-3xl">
          {talent.image}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-900">{talent.name}</h3>
          <p className="text-gray-700 font-semibold text-sm">{talent.title}</p>
          <p className="text-gray-600 text-sm">{talent.location}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {talent.tags.map((tag, idx) => (
          <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>

      <button className="w-full border-2 border-primary-600 text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition">
        View Profile
      </button>
    </div>
  )
}
