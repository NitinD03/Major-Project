import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()

  const handleLogout = () => {
  localStorage.removeItem("currentUser")
  navigate("/")
  }

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-slate-900">
              A
            </div>
            <span className="text-2xl font-bold">ActHire</span>
          </div>

          {/* Center Title */}
          <div className="hidden md:block text-xl font-semibold">
            Admin Dashboard
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={handleLogout} className="px-6 py-2 bg-white text-slate-900 font-semibold rounded-full hover:bg-gray-100 transition">
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-slate-700 rounded transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <button onClick={handleLogout} className="px-6 py-2 bg-white text-slate-900 font-semibold rounded-full hover:bg-gray-100 transition w-full">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
