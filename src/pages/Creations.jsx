import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const creations = [
  { id: 1, src: "IMG-20260722-WA0005.jpg", title: "Porte-clés Papillon Bleu", desc: "Un porte-clés en résine bleue composé de la lettre « F » et d'un papillon assorti." },
  { id: 2, src: "IMG-20260722-WA0006.jpg", title: "Porte-clés Lettre A & Papillon", desc: "Un porte-clés en résine bleue constitué d'une lettre « A » pailletée et d'un pendentif assorti en forme de papillon." },
  { id: 3, src: "IMG-20260722-WA0007.jpg", title: "Porte-clés Alphabet Coloré", desc: "Une poignée de plusieurs porte-clés en résine colorée faits main, façonnés en lettres de l'alphabet (« L », « D », « C », « B ») enrichies de paillettes et de petits mots." },
  { id: 4, src: "IMG-20260722-WA0008.jpg", title: "Porte-clés Lettre A Dorée", desc: "Un porte-clés élégant composé d'une grande lettre « A » garnie de paillettes dorées/marrons et d'une petite breloque en forme de diamant." },
  { id: 5, src: "IMG-20260722-WA0009.jpg", title: "Porte-clés Pierrette", desc: "Un porte-clés en résine bleue pailletée composé d'un symbole féminin et d'une lettre « P » décorée du prénom « PIERRETTE » en lettres dorées ainsi que d'un petit coquillage blanc." },
  { id: 6, src: "IMG-20260722-WA0010.jpg", title: "Ensemble Lisa", desc: "Une présentation d'accessoires en résine rose translucide et feuilles d'or (porte-clés cœur au nom de « Lisa », stylo et marque-page) sur fond de fourrure blanche." },
  { id: 7, src: "IMG-20260722-WA0011.jpg", title: "Support Transparent & Bleu", desc: "Un support de présentation en résine à deux faces, l'une transparente incrustée de paillettes argentées et l'autre bleue unie." },
  { id: 8, src: "IMG-20260722-WA0012.jpg", title: "Porte-clés Lettre F", desc: "Un porte-clés en résine bleue pailletée en forme de lettre « F », incrusté de paillettes argentées et d'un petit motif en étoile au centre." },
  { id: 9, src: "IMG-20260722-WA0013.jpg", title: "Plaque Savio & Arielle", desc: "Une plaque décorative en résine rose et blanche parsemée d'éclats dorés, ornée d'une rose rouge, de papillons et d'un texte romantique personnalisé au nom de « Savio et Arielle »." },
  { id: 10, src: "IMG-20260722-WA0014.jpg", title: "Porte-clés Anniversaire Maman Cathe", desc: "Un porte-clés circulaire en résine rose et blanche, décoré de petits coquillages, d'un papillon et de l'inscription dorée « JOYEUX ANNIVERSAIRE MAMAN CATHE »." },
  { id: 11, src: "IMG-20260722-WA0015.jpg", title: "Duo Papillons Rose & Rouge", desc: "Deux porte-clés en résine en forme de papillons à paillettes et étoiles, l'un rose clair et l'autre rouge foncé." },
  { id: 12, src: "IMG-20260722-WA0016.jpg", title: "Porte-clés Jules & Evram", desc: "Un porte-clés composé d'une grande lettre « A » rouge pailletée portant les prénoms « JULES » et « EVRAM », accompagnée d'un pendentif cœur rouge gravé « I Love You »." },
  { id: 13, src: "IMG-20260722-WA0017.jpg", title: "Ensemble Chidinma", desc: "Un ensemble rose pastel à paillettes comprenant un mini-carnet à anneaux, un marque-page et un pendentif rond, tous personnalisés avec le prénom « Chidinma »." },
  { id: 14, src: "IMG-20260722-WA0018.jpg", title: "Porte-clés Micheline & Pingouin", desc: "Un porte-clés en résine fuchsia pailletée en forme de lettre « M » au prénom « Micheline », accompagné d'une petite figurine de pingouin à chapeau rose." },
  { id: 15, src: "IMG-20260722-WA0019.jpg", title: "Porte-clés Chantal & Djiga Boy", desc: "Deux porte-clés personnalisés en résine rose et dorée : une étoile avec une grande lettre « E » gravée « CHANTAL », et un médaillon festonné gravé « DJIGA BOY »." },
  { id: 16, src: "IMG-20260722-WA0020.jpg", title: "Porte-clés Fraises", desc: "Un porte-clés transparent en forme de coquillage ou de fleur, incrusté de paillettes et de petites tranches de fraises en pâte polymère." },
  { id: 17, src: "IMG-20260722-WA0021.jpg", title: "Porte-clés Cœur & Coquillages", desc: "Un porte-clés thématique marine en résine bleue pailletée, composé d'un cœur et d'une lettre « J » décorés de véritables petits coquillages blancs." },
  { id: 18, src: "IMG-20260722-WA0052.jpg", title: "Cœur Puzzle Mon Cœur", desc: "Un pendentif en forme de cœur composé de deux pièces de puzzle (une rouge et une blanche à paillettes) gravées « Mon » et « Cœur »." },
  { id: 19, src: "IMG-20260722-WA0053.jpg", title: "Collection de Créations", desc: "Une vue d'ensemble de plusieurs créations en résine (lettres « G », « C », « N » personnalisées, cœurs de puzzle) déposées sur un moule en silicone." },
  { id: 20, src: "IMG-20260723-WA0011.jpg", title: "Ensemble Laura Beatriz", desc: "Un ensemble complet de fournitures personnalisées en résine rose brillant avec motifs pailletés et papillons au nom de « Laura Beatriz » (carnet à anneaux, marque-page, stylo, règle et porte-clés)." },
  { id: 21, src: "IMG-20260723-WA0012.jpg", title: "Plaque Matthieu & Stella", desc: "Un support/plaquet décoratif en forme de cœur rose et pailleté, gravé d'un long message poétique personnalisé pour « Matthieu » signé par « Stella »." },
  { id: 22, src: "IMG-20260723-WA0013.jpg", title: "Plaque Dao Djamilatou", desc: "Une plaque décorative personnalisée en forme de cœur bicolore (rose et bleu) avec un petit cœur suspendu, portant un message d'amour pour « Dao Djamilatou »." },
  { id: 23, src: "IMG-20260723-WA0014.jpg", title: "Ensemble Tamara", desc: "Un coffret d'accessoires de papeterie en résine violette avec paillettes dorées, papillons et personnalisations au prénom « Tamara »." },
  { id: 24, src: "IMG-20260723-WA0015.jpg", title: "Cœur Michée", desc: "Un cœur décoratif en résine pastel rose/bleu sur socle, avec dorures et texte personnalisé destiné à « Michée »." },
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