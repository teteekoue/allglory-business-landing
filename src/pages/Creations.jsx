import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const creations = [
  { id: 1, src: "porte_cles_fraises.jpeg", title: "Porte-clés Fraises", desc: "Résine translucide, fraises & paillettes." },
  { id: 2, src: "lettre_f_argent.jpeg", title: "Lettre F", desc: "Bleu océan, feuille d'argent & dorure." },
  { id: 3, src: "duo_justin_marine.jpeg", title: "Duo Justin & Marine", desc: "Cœur, coquillages, résine nacrée." },
  { id: 4, src: "collection_rose_bonbon.jpeg", title: "Collection Rose Bonbon", desc: "Pendentifs fuchsia & nacrés." },
  { id: 5, src: "duo_pierrette.jpeg", title: "Duo Pierrette", desc: "Bleu roi, coquillage & dorure." },
  { id: 6, src: "collier_double_couer.jpg", title: "Collier Double Cœur", desc: "Deux cœurs fusionnés en résine." },
  { id: 7, src: "plaque_coeur_stella.jpeg", title: "Plaque Cœur Stella", desc: "Cœur rose, papillons & message d'amour." },
  { id: 8, src: "papeterie_laura.jpeg", title: "Papeterie Laura Beatriz", desc: "Carnet, règle & stylo magenta." },
  { id: 9, src: "set_violet_tamara.jpeg", title: "Set Violet Tamara", desc: "Marque-page, stylo & porte-clés violet." },
  { id: 10, src: "porte_cles_alphabet.jpeg", title: "Porte-clés Alphabet", desc: "Lettres B, C, D, L colorées." },
  { id: 11, src: "coeur_jules_eyram.jpeg", title: "Cœur Jules & Eyram", desc: "Cœur rouge « I Love You »." },
  { id: 12, src: "set_rose_chidinma.jpeg", title: "Set Rose Chidinma", desc: "Carnet, règle & porte-clés étoilé." },
  { id: 13, src: "papillons_duo.jpeg", title: "Papillons Duo", desc: "Duo rose pastel & rouge foncé." },
  { id: 14, src: "plaque_dao_djamilatou.jpeg", title: "Plaque Dao Djamilatou", desc: "Cœur bicolore, message d'amour." },
  { id: 15, src: "formation.jpeg", title: "Affiche Formation", desc: "Visuel de notre formation pro en résine." },
]

const Creations = () => {
  const [selected, setSelected] = useState(null)

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="font-display text-6xl font-black tracking-tighter">Nos Créations</div>
        <p className="mt-3 text-[#5c3040] max-w-md mx-auto">Chaque pièce est unique et réalisée à la main avec passion.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {creations.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            onClick={() => setSelected(item)}
            className="glass rounded-3xl overflow-hidden cursor-pointer group"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={`/${item.src}`} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display font-semibold text-xl tracking-tight">{item.title}</h3>
              <p className="text-sm text-[#5c3040] mt-1.5 line-clamp-2">{item.desc}</p>
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
                className="rounded-3xl max-h-[82vh] mx-auto shadow-2xl"
              />
              <div className="text-center mt-6 text-white">
                <div className="font-display text-3xl tracking-tight">{selected.title}</div>
                <p className="text-white/70 mt-1">{selected.desc}</p>
              </div>
            </motion.div>
            <button onClick={() => setSelected(null)} className="absolute top-8 right-8 text-white text-4xl">×</button>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Creations