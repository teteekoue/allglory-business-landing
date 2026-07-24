import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 left-8 z-[999] p-4 rounded-full bg-white/90 hover:bg-white shadow-xl border flex items-center justify-center transition-all hover:scale-110"
      aria-label="Retour en haut"
    >
      <ArrowUp className="w-5 h-5 text-[#ff2d78]" />
    </button>
  )
}

export default BackToTop