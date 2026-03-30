import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from './landing/pages/LandingDashboard';
import TalentDashboard from './talent/pages/Home';
import RecruiterDashboard from './recuriter/pages/Home';
import AdminDashboard from './admin/pages/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/talent-dashboard" element={<TalentDashboard />} />
        <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;