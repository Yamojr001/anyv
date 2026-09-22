import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TrackingModal from './components/TrackingModal'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LeadershipPage from './pages/LeadershipPage'
import ProgramsPage from './pages/ProgramsPage'
import ChaptersPage from './pages/ChaptersPage'
import MembershipPage from './pages/MembershipPage'
import NewsPage from './pages/NewsPage'
import CmsPage from './pages/CmsPage'

export default function App() {
  const [trackModalOpen, setTrackModalOpen] = useState(false)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#f1ecde] text-[#20241d] font-sans flex flex-col selection:bg-[#c9963c]/30 selection:text-[#10241f]">
        
        {/* Navigation Bar */}
        <Navbar onVerifyClick={() => setTrackModalOpen(true)} />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/chapters" element={<ChaptersPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/cms" element={<CmsPage />} />
          </Routes>
        </main>

        {/* Global Institutional Footer */}
        <Footer onVerifyClick={() => setTrackModalOpen(true)} />

        {/* Verification / Tracking Modal */}
        <TrackingModal
          isOpen={trackModalOpen}
          onClose={() => setTrackModalOpen(false)}
        />

      </div>
    </BrowserRouter>
  )
}
