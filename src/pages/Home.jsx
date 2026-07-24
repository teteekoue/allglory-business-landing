import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Users, Clock } from 'lucide-react'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[100dvh] flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        <div className="max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[#ff2d78]/40 text-[#ff2d78] text-xs tracking-[3px] mb-8 font-medium">
            ATAKPAMÉ • TOGO
          </div>
          
          <h1 className="font-display text-[72px] md:text-[92px] leading-[0.9] font-black tracking-[-5px] mb-6">
            L’ART DE LA<br /> 
            <span className="text-[#ff2d78]">RÉSINE</span>,<br /> 
            SUBLIMÉ PAR PASSION
          </h1>
          
          <p className="max-w-md mx-auto text-xl text-[#5c3040] mb-10">
            Des créations uniques en résine époxy, façonnées à la main avec soin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/creations" 
              className="group flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#ff2d78] text-white font-semibold text-lg hover:bg-[#e6005c] transition-all active:scale-[0.985]"
            >
              Découvrir nos créations <ArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
            <Link 
              to="/formations" 
              className="px-9 py-4 border-2 border-[#ff2d78] text-[#ff2d78] hover:bg-[#ff2d78] hover:text-white rounded-full font-semibold transition-all text-lg"
            >
              Nos formations
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <Award className="w-8 h-8" />, number: "24+", label: "Créations uniques" },
          { icon: <Users className="w-8 h-8" />, number: "50+", label: "Clients satisfaits" },
          { icon: <Clock className="w-8 h-8" />, number: "3", label: "Années d'expérience" },
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -4 }}
            className="glass p-8 rounded-3xl flex flex-col items-center text-center border border-white/30"
          >
            <div className="text-[#ff2d78] mb-4">{stat.icon}</div>
            <div className="font-display text-6xl font-black text-[#ff2d78] tracking-tighter">{stat.number}</div>
            <div className="text-sm text-[#5c3040] mt-2 tracking-wide">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="glass rounded-3xl p-14 flex flex-col md:flex-row items-center justify-between gap-10 border border-white/30">
          <div>
            <div className="font-display text-4xl font-black tracking-tighter">Prêt à découvrir nos créations ?</div>
            <p className="mt-3 max-w-md text-[#5c3040]">Chaque pièce est unique et réalisée avec passion.</p>
          </div>
          <Link 
            to="/creations" 
            className="px-9 py-4 bg-black hover:bg-[#ff2d78] text-white rounded-full font-semibold flex items-center gap-3 transition-all"
          >
            Explorer la galerie <ArrowRight />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home