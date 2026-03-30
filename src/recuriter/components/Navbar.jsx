import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function Navbar({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Recruiter Dashboard', page: 'dashboard' },
    { label: 'Profile', page: 'profile' },
    { label: 'Applications', page: 'applications' },
  ]

  const navigate = useNavigate()

  const handleNavClick = (page) => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
  }
  
  const handleLogout = () => {
  localStorage.removeItem("currentUser")
  navigate("/")
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavClick('dashboard')} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-gradient-purple flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-xl text-foreground-900">ActHire</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`font-medium text-sm transition-colors ${
                  currentPage === item.page
                    ? 'text-primary-900 border-b-2 border-primary-900 pb-1'
                    : 'text-gray-600 hover:text-primary-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4 pl-4 border-l border-gray-200/30">
            <button onClick={handleLogout} className="px-6 py-2 rounded-full font-medium text-sm text-white bg-gradient-purple hover:shadow-lg transition-all">
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200/30">
            <div className="flex flex-col gap-3 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left font-medium text-sm transition-colors py-2 ${
                    currentPage === item.page
                      ? 'text-primary-900'
                      : 'text-gray-600 hover:text-primary-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex gap-2 pt-4 border-t border-gray-200/30">
                <button onClick={handleLogout} className="flex-1 px-4 py-2 rounded-full font-medium text-sm text-white bg-gradient-purple hover:shadow-lg transition-all">
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
