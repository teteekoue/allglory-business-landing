import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const creations = [
  { id: 1, src: "IMG-20260722-WA0005.jpg", title: "Porte-clés Papillon Bleu", desc: "Résine bleue avec papillon et lettre F dorée." },
  { id: 2, src: "IMG-20260722-WA0006.jpg", title: "Porte-clés Lettre A", desc: "Lettre A bleue avec papillon et chaîne dorée." },
  { id: 3, src: "IMG-20260722-WA0007.jpg", title: "Porte-clés LOVE Multicolore", desc: "Lettres B E L O V E avec inclusions colorées." },
  { id: 4, src: "IMG-20260722-WA0008.jpg", title: "Porte-clés Œil & Lettre A", desc: "Résine dorée avec œil protecteur et lettre A." },
  { id: 5, src: "IMG-20260722-WA0009.jpg", title: "Porte-clés Cœur & Coquillages", desc: "Cœur bleu avec coquillages naturels incrustés." },
  { id: 6, src: "IMG-20260722-WA0010.jpg", title: "Porte-clés Cœur Bleu & Coquillages", desc: "Cœur bleu clair avec coquillages et lettre M." },
  { id: 7, src: "IMG-20260722-WA0011.jpg", title: "Porte-clés Cœur Rouge", desc: "Cœur rouge avec texte « I Love You »." },
  { id: 8, src: "IMG-20260722-WA0012.jpg", title: "Porte-clés Fraises", desc: "Porte-clés fraises avec paillettes dorées." },
  { id: 9, src: "IMG-20260722-WA0013.jpg", title: "Duo Papillons Rose & Rouge", desc: "Deux papillons en résine rose et rouge." },
  { id: 10, src: "IMG-20260722-WA0014.jpg", title: "Porte-clés Canard & Lettre M", desc: "Canard mignon rose avec lettre M." },
  { id: 11, src: "IMG-20260722-WA0015.jpg", title: "Porte-clés Fraises & Coquille", desc: "Coquille transparente avec fraises roses." },
  { id: 12, src: "IMG-20260722-WA0016.jpg", title: "Porte-clés Cœur & Coquillages", desc: "Cœur bleu avec coquillages et initiales." },
  { id: 13, src: "IMG-20260722-WA0017.jpg", title: "Porte-clés Cœur Rose", desc: "Cœur rose avec texte et paillettes." },
  { id: 14, src: "IMG-20260722-WA0018.jpg", title: "Porte-clés Alphabet Coloré", desc: "Ensemble de lettres colorées B, C, D, L." },
  { id: 15, src: "IMG-20260722-WA0019.jpg", title: "Porte-clés Cœur Puzzle", desc: "Cœur puzzle « Mon Cœur »." },
  { id: 16, src: "IMG-20260722-WA0020.jpg", title: "Porte-clés Cœur Rose", desc: "Cœur rose avec message d’amour." },
  { id: 17, src: "IMG-20260722-WA0021.jpg", title: "Porte-clés Cœur Rouge", desc: "Cœur rouge avec texte doré." },
  { id: 18, src: "IMG-20260722-WA0052.jpg", title: "Porte-clés Lettre F", desc: "Lettre F bleue avec paillettes argentées." },
  { id: 19, src: "IMG-20260722-WA0053.jpg", title: "Porte-clés Cœur Rose", desc: "Cœur rose avec texte et paillettes." },
  { id: 20, src: "IMG-20260723-WA0011.jpg", title: "Porte-clés Cœur Rose", desc: "Cœur rose avec message." },
  { id: 21, src: "IMG-20260723-WA0012.jpg", title: "Porte-clés Cœur Rose", desc: "Cœur rose avec texte." },
  { id: 22, src: "IMG-20260723-WA0013.jpg", title: "Porte-clés Cœur Rose", desc: "Cœur rose avec paillettes." },
  { id: 23, src: "IMG-20260723-WA0014.jpg", title: "Porte-clés Cœur Rose", desc: "Cœur rose avec message." },
  { id: 24, src: "IMG-20260723-WA0015.jpg", title: "Porte-clés Cœur Rose", desc: "Cœur rose avec texte et paillettes." },
]

const Creations = () => {
  const [selected, setSelected] = useState(null)

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <div className="font-display text-6xl font-black tracking-tighter">Nos Créations</div>
        <p className="mt-3 text-[#5c3040] max-w-md mx-auto text-lg">
          Chaque pièce est réalisée à la main avec passion.
        </p>
      </div>

      {/* Animated Scrolling Gallery */}
      <div className="overflow-hidden mb-12 relative">
        <div className="flex gap-6 animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...creations, ...creations].map((item, index) => (
            <div 
              key={index} 
              onClick={() => setSelected(item)}
              className="min-w-[280px] cursor-pointer rounded-3xl overflow-hidden glass border border-white/40"
            >
              <img 
                src={`/${item.src}`} 
                alt={item.title} 
                className="w-full h-72 object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold tracking-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {creations.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            onClick={() => setSelected(item)}
            className="glass rounded-3xl overflow-hidden cursor-pointer group border border-white/40"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#ffe5ec]">
              <img 
                src={`/${item.src}`} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display font-semibold text-xl tracking-tight">{item.title}</h3>
              <p className="text-sm text-[#5c3040] mt-2 leading-snug">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <div 
            className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={`/${selected.src}`} 
                alt={selected.title}
                className="rounded-3xl max-h-[82vh] mx-auto shadow-2xl object-contain"
              />
              <div className="text-center mt-8 text-white">
                <div className="font-display text-4xl tracking-tighter">{selected.title}</div>
                <p className="text-white/70 mt-2 text-lg max-w-md mx-auto">{selected.desc}</p>
              </div>
            </motion.div>
            <button onClick={() => setSelected(null)} className="absolute top-8 right-8 text-white text-6xl">×</button>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Creations