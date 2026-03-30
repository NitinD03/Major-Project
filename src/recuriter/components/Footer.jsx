export default function Footer() {
  const footerLinks = [
    {
      title: 'Product',
      links: ['Jobs', 'Talents', 'Dashboard', 'Pricing'],
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Community', 'Support', 'Contact'],
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Cookie Policy', 'Security'],
    },
  ]

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', href: '#' },
    { name: 'LinkedIn', icon: 'in', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'Facebook', icon: 'f', href: '#' },
  ]

  return (
    <footer className="bg-foreground-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-purple flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl">ActHire</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Connecting talent with opportunities in the entertainment industry.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary-900 transition-colors flex items-center justify-center text-white font-semibold"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title} className="md:col-span-1">
              <h3 className="font-semibold text-white mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          {/* Newsletter Signup */}
          <div className="mb-8">
            <h3 className="font-semibold text-white mb-4">Stay Updated</h3>
            <div className="flex gap-2 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-900 transition-all"
              />
              <button className="px-6 py-2 bg-gradient-purple text-white rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <p>&copy; 2026 ActHire. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
