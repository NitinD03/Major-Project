import { useState } from 'react'

export default function Navbar({ onSignInClick, onSignUpClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">★</span>
          </div>
          <span className="font-bold text-xl text-gray-900">ActHire</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#talent" className="text-gray-600 hover:text-gray-900 transition">
            Talent Feed
          </a>
          <a href="#hire" className="text-gray-600 hover:text-gray-900 transition">
            Hire Talent
          </a>
          <a href="#jobs" className="text-gray-600 hover:text-gray-900 transition">
            Jobs
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onSignInClick}
            className="text-gray-600 hover:text-gray-900 transition font-medium"
          >
            Sign In
          </button>
          <button
            onClick={onSignUpClick}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-all ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-all ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-all ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container py-4 flex flex-col gap-4">
            <a href="#talent" className="text-gray-600 hover:text-gray-900 transition">
              Talent Feed
            </a>
            <a href="#hire" className="text-gray-600 hover:text-gray-900 transition">
              Hire Talent
            </a>
            <a href="#jobs" className="text-gray-600 hover:text-gray-900 transition">
              Jobs
            </a>
            <hr className="my-2" />
            <button
              onClick={onSignInClick}
              className="text-gray-600 hover:text-gray-900 transition font-medium text-left"
            >
              Sign In
            </button>
            <button
              onClick={onSignUpClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
