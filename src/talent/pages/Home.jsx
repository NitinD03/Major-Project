import { useState } from 'react'
import Navbar from '../components/Navbar'
import TalentDashboard from './TalentDashboard'
import FindJob from './FindJob'
import ApplicationStatus from './ApplicationStatus'
import ProfilePage from './ProfilePage'
import PortfolioManager from './PortfolioManager'

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  // ✅ GLOBAL JOB STATE
  const [selectedJob, setSelectedJob] = useState(null)

  // ✅ HANDLE APPLY FROM ANY PAGE
  const handleApply = (job) => {
    setSelectedJob(job)
    setCurrentPage('find-job')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <TalentDashboard
            setCurrentPage={setCurrentPage}
            onApply={handleApply} // ✅ IMPORTANT
          />
        )

      case 'find-job':
        return (
          <FindJob
            setCurrentPage={setCurrentPage}
            selectedJob={selectedJob} // ✅ PASS JOB
            setSelectedJob={setSelectedJob} // ✅ PASS SETTER
          />
        )

      case 'application-status':
        return <ApplicationStatus setCurrentPage={setCurrentPage} />

      case 'profile':
        return <ProfilePage setCurrentPage={setCurrentPage} />

      case 'portfolio-manager':
        return <PortfolioManager setCurrentPage={setCurrentPage} />  
        
      default:
        return (
          <TalentDashboard
            setCurrentPage={setCurrentPage}
            onApply={handleApply}
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100">
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onLogout={() => {
          setIsLoggedIn(false)
          setCurrentPage('dashboard')
        }}
      />
      <main>
        {renderPage()}
      </main>
    </div>
  )
}