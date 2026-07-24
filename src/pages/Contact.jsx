import React from 'react'
import { Phone, MapPin, MessageCircle } from 'lucide-react'

const Contact = () => {
  return (
    <div className="pt-24 pb-20 px-6 max-w-3xl mx-auto text-center">
      <div className="font-display text-6xl font-black tracking-tighter mb-3">Contactez-nous</div>
      <p className="text-[#5c3040]">Une question ? Une commande personnalisée ? Parlons-en !</p>

      <div className="glass mt-12 p-12 md:p-16 rounded-3xl">
        <div className="font-display text-4xl font-black tracking-tighter">AllGlory Business</div>
        <div className="text-[#ff2d78] mt-1 font-semibold">Gloria — Artisane Résiniste</div>

        <a href="tel:+22891460332" className="block mt-8 text-4xl font-black tracking-tight hover:text-[#ff2d78] transition-colors">
          +228 91 46 03 32
        </a>

        <div className="flex items-center justify-center gap-2 text-[#5c3040] mt-3">
          <MapPin size={18} /> Atakpamé, Togo
        </div>

        <a 
          href="https://wa.me/22891460332" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1da851] transition-all text-white rounded-full font-semibold text-lg"
        >
          <MessageCircle size={22} /> Écrire sur WhatsApp
        </a>
      </div>

      <div className="text-xs text-[#5c3040] mt-8 tracking-wider">
        Réponse rapide garantie • 7j/7
      </div>
    </div>
  )
}

export default Contact