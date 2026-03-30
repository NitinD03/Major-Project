export default function Features() {
  const features = [
    {
      id: 1,
      title: 'Video Portfolios',
      description: 'Showcase your talent with stunning video reels and photo galleries',
      icon: '▶',
      bgColor: 'bg-blue-50',
      iconBgColor: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Smart Matching',
      description: 'Advanced filters to find the perfect talent for your projects',
      icon: '🔍',
      bgColor: 'bg-purple-50',
      iconBgColor: 'bg-purple-500',
    },
    {
      id: 3,
      title: 'Direct Connect',
      description: 'Connect directly with talent and recruiters for seamless collaboration',
      icon: '💼',
      bgColor: 'bg-green-50',
      iconBgColor: 'bg-green-500',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose TalentHub?
          </h2>
          <p className="text-gray-600 text-lg">
            The most comprehensive platform for talent discovery and recruitment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`${feature.bgColor} p-8 rounded-2xl transition hover:shadow-lg`}
            >
              <div
                className={`${feature.iconBgColor} w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
