import React from 'react'
import { Link } from 'react-router-dom'

const Formations = () => {
  return (
    <div className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="font-display text-6xl font-black tracking-tighter">Nos Formations</div>
        <p className="mt-3 text-[#5c3040]">Apprenez l’art de la résine époxy avec AllGlory Business</p>
      </div>

      <div className="glass rounded-3xl p-10 md:p-14">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          {/* Affiche */}
          <div className="md:col-span-3">
            <img 
              src="/formation.jpeg" 
              alt="Affiche de formation professionnelle en résine époxy" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

          {/* Texte */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <div className="font-display text-4xl font-black tracking-tighter">Formation Professionnelle</div>
              <div className="text-[#ff2d78] text-3xl font-black">RÉSINE ÉPOXY</div>
            </div>

            <div className="text-[#5c3040] space-y-4 text-[15px]">
              <p><strong>À Atakpamé</strong> • +228 91 46 03 32</p>
              <p>Tu vas apprendre à fabriquer :</p>
              <ul className="list-disc list-inside pl-1 space-y-1">
                <li>Des bijoux (boucles d’oreilles, colliers, bracelets)</li>
                <li>Des objets de décoration (tableaux, plateaux, sous-verres, blocs notes)</li>
                <li>Des accessoires personnalisés (portes clés, stylos, coques de téléphone)</li>
              </ul>
            </div>

            <div className="pt-4">
              <div className="font-semibold text-sm tracking-widest mb-2">BONUS EXCLUSIFS</div>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Kit de démarrage offert", "Fiches techniques", "Astuces de pro", "Accompagnement après formation"].map((b,i) => (
                  <div key={i} className="px-4 py-1.5 bg-white/70 rounded-full border">{b}</div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <div className="text-xs font-medium tracking-widest">FRAIS</div>
              <div className="font-display text-3xl font-black">Inscription : 2 000 F</div>
              <div className="font-display text-3xl font-black">Formation : 5 000 F</div>
              <div className="text-sm text-[#5c3040]">Attestation délivrée en fin de formation.</div>
            </div>

            <Link to="/contact" className="inline-block mt-3 px-8 py-4 bg-[#ff2d78] text-white rounded-full font-semibold">
              S’inscrire maintenant
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formations