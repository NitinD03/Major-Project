export default function Stats() {
  const stats = [
    { value: '10K+', label: 'Active Talents' },
    { value: '500+', label: 'Recruiters' },
    { value: '2.5K+', label: 'Jobs Posted' },
    { value: '95%', label: 'Success Rate' },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <p className="text-blue-100 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
