import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function SignInModal({ isOpen, onClose, onSwitchToSignUp }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
  e.preventDefault()

  const users = JSON.parse(localStorage.getItem("users")) || []

  const user = users.find(
    (u) => u.email === email && u.password === password
  )

  if (!user) {
    alert("Invalid email or password")
    return
  }

  // Save logged in user
  localStorage.setItem("currentUser", JSON.stringify(user))

  // Redirect based on role
  if (user.userType === "talent") {
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
          <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
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
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Don't have an account?{' '}
          <button
            onClick={onSwitchToSignUp}
            className="text-blue-600 hover:text-blue-700 font-semibold transition"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  )
}
