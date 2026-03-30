import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function Navbar({ currentPage, setCurrentPage, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Talent Dashboard', id: 'dashboard', icon: '⭐' },
    { label: 'Application Status', id: 'application-status', icon: '📋' },
    { label: 'Find Job', id: 'find-job', icon: '🔍' },
    { label: 'Profile', id: 'profile', icon: '👤' },
  ]

  const navigate = useNavigate()

const handleLogout = () => {
  localStorage.removeItem("currentUser")
  navigate("/")
}

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => setCurrentPage('dashboard')}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center font-bold">
            AH
          </div>
          <span className="text-xl font-bold">ActHire</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`px-4 py-2 rounded-lg transition ${
                currentPage === item.id
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:bg-purple-600/30'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* User Section */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-sm">
            <span className="text-gray-300">(Talent)</span>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-purple-600 p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id)
                setMobileMenuOpen(false)
              }}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                currentPage === item.id
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:bg-purple-600/30'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => {
              handleLogout()
              setMobileMenuOpen(false)
            }}
            className="w-full mt-2 px-4 py-2 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  )
}
