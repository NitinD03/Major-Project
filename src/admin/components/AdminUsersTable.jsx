import { Users, Search, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function UsersTable({ isPreview }) {
  const [users, setUsers] = useState([
    { id: 1, name: 'Riya', role: 'Talent', status: 'Active' },
    { id: 2, name: 'DreamCast Studios', role: 'Recruiter', status: 'Active' },
    { id: 3, name: 'Priya Kumar', role: 'Talent', status: 'Active' },
    { id: 4, name: 'Sunrise Productions', role: 'Recruiter', status: 'Inactive' },
  ])

  const [openDropdown, setOpenDropdown] = useState(null)

  const updateUserStatus = (userId, newStatus) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ))
    setOpenDropdown(null)
  }

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 p-6 flex items-center gap-3">
          <Users size={24} className="text-blue-600" />
          <h3 className="text-2xl font-bold text-slate-900">Users</h3>
          <div className="ml-auto flex-1 max-w-xs">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search users..."
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Role</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-slate-200 hover:bg-slate-50 transition">
                  <td className="px-6 py-4 text-slate-900 font-medium">{user.name}</td>
                  <td className="px-6 py-4 text-slate-600">{user.role}</td>
                  <td className="px-6 py-4 relative">
                    <div className="relative inline-block w-full">
                      <button
                        onClick={() => setOpenDropdown(openDropdown === user.id ? null : user.id)}
                        className={`w-full px-3 py-1 rounded-full text-sm font-semibold flex items-center justify-between ${
                          user.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        <span>{user.status}</span>
                        <ChevronDown size={14} className={`transition-transform ${openDropdown === user.id ? 'rotate-180' : ''}`} />
                      </button>

                      {openDropdown === user.id && (
                        <div className="absolute top-full mt-1 w-32 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
                          <button
                            onClick={() => updateUserStatus(user.id, 'Active')}
                            className="w-full px-4 py-2 text-left hover:bg-slate-100 text-slate-900 first:rounded-t-lg"
                          >
                            Active
                          </button>
                          <button
                            onClick={() => updateUserStatus(user.id, 'Inactive')}
                            className="w-full px-4 py-2 text-left hover:bg-slate-100 text-slate-900 last:rounded-b-lg border-t border-slate-200"
                          >
                            Inactive
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
