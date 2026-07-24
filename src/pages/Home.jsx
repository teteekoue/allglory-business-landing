import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[100dvh] flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        <div className="max-w-4xl text-center relative z-10">
          <div className="inline-block px-5 py-1.5 rounded-full border border-[#ff2d78] text-[#ff2d78] text-xs tracking-[3px] mb-6 font-medium">
            ATAKPAMÉ • TOGO
          </div>
          
          <h1 className="font-display text-[72px] md:text-[92px] leading-[0.9] font-black tracking-[-4.5px] mb-6">
            L’ART DE LA<br /> 
            <span className="text-[#ff2d78]">RÉSINE</span>,<br /> 
            SUBLIMÉ PAR PASSION
          </h1>
          
          <p className="max-w-md mx-auto text-xl text-[#5c3040] mb-10">
            Des créations uniques en résine époxy, façonnées à la main avec soin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/creations" className="btn-primary px-9 py-4 rounded-full flex items-center justify-center gap-3 text-lg font-semibold bg-[#ff2d78] text-white hover:bg-[#e6005c] transition-all active:scale-[0.985]">
              Découvrir nos créations <ArrowRight size={22} />
            </Link>
            <Link to="/formations" className="px-9 py-4 border-2 border-[#ff2d78] text-[#ff2d78] hover:bg-[#ff2d78] hover:text-white rounded-full font-semibold transition-all text-lg">
              Nos formations
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-6 pb-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { number: "24+", label: "Créations uniques" },
          { number: "50+", label: "Clients satisfaits" },
          { number: "12", label: "Formations réalisées" },
          { number: "3", label: "Années d'expérience" },
        ].map((stat, i) => (
          <div key={i} className="glass p-8 rounded-3xl text-center">
            <div className="font-display text-5xl font-black text-[#ff2d78] tracking-tighter">{stat.number}</div>
            <div className="text-sm text-[#5c3040] mt-2 tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* CTA Créations */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="glass rounded-3xl p-14 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <div className="font-display text-4xl font-black tracking-tight">Nos Créations</div>
            <p className="mt-4 max-w-md text-[#5c3040]">Découvrez notre galerie complète de porte-clés, cœurs personnalisés, papeterie et bijoux en résine.</p>
          </div>
          <Link 
            to="/creations" 
            className="px-8 py-4 bg-black text-white rounded-full font-semibold flex items-center gap-3 hover:bg-[#ff2d78] transition-all"
          >
            Explorer la galerie <ArrowRight />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home