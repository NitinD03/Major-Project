import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function SignUpModal({ isOpen, onClose, onSwitchToSignIn }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    userType: 'talent',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
  e.preventDefault()

  // Get existing users
  const users = JSON.parse(localStorage.getItem("users")) || []

  // Check if user already exists
  const userExists = users.find(user => user.email === formData.email)

  if (userExists) {
    alert("User already exists. Please login.")
    return
  }

  // Save new user
  users.push(formData)
  localStorage.setItem("users", JSON.stringify(users))

  // Save current logged in user
  localStorage.setItem("currentUser", JSON.stringify(formData))

  // Redirect based on role
  if (formData.userType === "talent") {
    navigate("/talent-dashboard")
  } else {
    navigate("/recruiter-dashboard")
  }

  onClose()
}

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Sign Up</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition text-2xl"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              I am a...
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, userType: 'talent' }))}
                className={`py-3 px-4 rounded-lg border-2 font-semibold transition ${
                  formData.userType === 'talent'
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                👤 Talent
              </button>
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, userType: 'recruiter' }))}
                className={`py-3 px-4 rounded-lg border-2 font-semibold transition ${
                  formData.userType === 'recruiter'
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                💼 Recruiter
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{' '}
          <button
            onClick={onSwitchToSignIn}
            className="text-blue-600 hover:text-blue-700 font-semibold transition"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  )
}
