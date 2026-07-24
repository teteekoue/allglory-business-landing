import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/creations', label: 'Créations' },
    { path: '/formations', label: 'Formations' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 bg-[#ff2d78] rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-display text-2xl font-black tracking-tighter">A</span>
          </div>
          <span className="font-display text-2xl font-black tracking-tighter">ALLGLORY</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-9 text-sm font-medium">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`transition-colors hover:text-[#ff2d78] ${location.pathname === link.path ? 'text-[#ff2d78]' : 'text-[#5c3040]'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link 
          to="/contact" 
          className="hidden md:block px-6 py-3 rounded-full bg-[#ff2d78] text-white font-semibold text-sm hover:bg-[#e6005c] transition-all active:scale-[0.985]"
        >
          Nous contacter
        </Link>

        {/* Mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t px-6 py-6 flex flex-col gap-4 text-sm">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="mt-2 px-6 py-3 bg-[#ff2d78] text-white text-center rounded-full font-semibold"
          >
            Nous contacter
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar