import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CursorFollower from './CursorFollower'
import WorkDetail from './pages/Projects/WorkDetail'
import Work from './pages/Projects/Work'
import AdminPage from './pages/Admin/AdminPage' // <-- Add this import

const App = () => {
  return (
    <Router>
      <CursorFollower />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<WorkDetail />} />
        {/* <Route path="/admin" element={<AdminPage />} />  */}
      </Routes>
    </Router>
  )
}

export default App