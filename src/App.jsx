import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Creations from './pages/Creations'
import Formations from './pages/Formations'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#ffe5ec] text-[#1a0a10]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creations" element={<Creations />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App