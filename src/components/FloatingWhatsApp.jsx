import React from 'react'
import { MessageCircle } from 'lucide-react'

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/22891460332"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[999] flex items-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold hidden md:block">Écrire sur WhatsApp</span>
      <span className="font-semibold md:hidden">WhatsApp</span>
    </a>
  )
}

export default FloatingWhatsApp