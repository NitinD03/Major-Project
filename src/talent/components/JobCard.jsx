export default function JobCard({ job, onApply }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition duration-300 flex flex-col">
      <h3 className="text-lg font-bold text-slate-900 mb-2">{job.title}</h3>
      <p className="text-gray-700 font-semibold mb-3">{job.company}</p>

      <div className="flex flex-wrap gap-2 mb-4 flex-1">
        {Array.isArray(job.tags) ? (
          job.tags.map((tag, idx) => (
            <span key={idx} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))
        ) : (
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
            {job.tags}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-600">{job.location}</span>
        
        <button
          onClick={() => onApply(job)}
          className="bg-slate-900 text-white px-4 py-2 rounded-full font-semibold hover:bg-slate-800 transition text-sm"
        >
          Apply
        </button>
      </div>
    </div>
  )
}