import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Dashboard from '../components/Dashboard'
import JobPosting from '../components/JobPosting'
import TalentFeed from '../components/TalentFeed'
import RecruiterProfile from '../components/RecruiterProfile'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const renderPage = () => {
    switch (currentPage) {
      case 'jobs':
        return <JobPosting />
      case 'applications':
        return <JobPosting />
      case 'talents':
        return <TalentFeed />
      case 'profile':
        return <RecruiterProfile />
      case 'dashboard':
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-light flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 pt-20">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
