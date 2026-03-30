import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import JobPosting from '../components/JobPosting'
import TalentFeed from '../components/TalentFeed'
import Dashboard from '../components/Dashboard'
import RecruiterProfile from '../components/RecruiterProfile'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <main>
        <HeroSection />
        <JobPosting />
        <TalentFeed />
        <Dashboard />
        <RecruiterProfile />
      </main>
      <Footer />
    </div>
  )
}
