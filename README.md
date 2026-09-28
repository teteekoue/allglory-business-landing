# AllGlory Business — Site vitrine

> Site vitrine livré pour un client réel : **AllGlory Business**, atelier de créations artisanales en résine époxy basé à **Atakpamé, Togo**.

Le site valorise le savoir-faire de l'atelier, présente ses créations et ses formations, et permet aux visiteurs de contacter l'artisan directement via WhatsApp.

## 🧭 Le projet en bref


|            |                                                                            |
| ---------- | -------------------------------------------------------------------------- |
| **Client** | AllGlory Business — créations artisanales en résine époxy (Atakpamé, Togo) |
| **Type**   | Site vitrine multi-pages (SPA React)                                       |
| **Langue** | Français                                                                   |
| **Statut** | Livré, déployé sur Vercel                                                  |


## ✨ Fonctionnalités

- **4 pages** : Accueil, Créations, Formations, Contact
- **Hero animé** avec appels à l'action vers les créations et les formations
- **Galerie de produits** intégrant les vraies photos de l'atelier (25+ visuels)
- **Bouton WhatsApp flottant** : contact direct en un clic, sans friction
- **Animations fluides** au survol et au défilement (Framer Motion)
- **Navigation responsive** pensée mobile-first
- **Retour en haut de page** automatique

## 🛠️ Stack technique


| Technologie                                                               | Rôle                              |
| ------------------------------------------------------------------------- | --------------------------------- |
| [React 19](https://react.dev) + [React Router 7](https://reactrouter.com) | Interface et navigation SPA       |
| [Vite 8](https://vite.dev)                                                | Build et serveur de développement |
| [Tailwind CSS 3](https://tailwindcss.com)                                 | Design et responsive              |
| [Framer Motion 12](https://motion.dev)                                    | Animations                        |
| [lucide-react](https://lucide.dev)                                        | Icônes                            |
| [Vercel](https://vercel.com)                                              | Déploiement                       |


## 📂 Structure du projet

```text
allglory-business-landing/
├── index.html
├── vercel.json               # Configuration de déploiement Vercel
├── vite.config.js
├── tailwind.config.js
├── postcss.config.cjs
├── public/                   # Photos des créations, logo, favicon
└── src/
    ├── App.jsx               # Définition des routes
    ├── main.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── FloatingWhatsApp.jsx
    │   └── BackToTop.jsx
    ├── pages/
    │   ├── Home.jsx          # Hero, statistiques, appel à l'action
    │   ├── Creations.jsx     # Galerie des créations
    │   ├── Formations.jsx    # Formations proposées par l'atelier
    │   └── Contact.jsx       # Formulaire et coordonnées
    └── assets/
```

## 🚀 Démarrer le projet en local

**Prérequis** : [Node.js](https://nodejs.org) (version 18 ou supérieure) et npm.

```bash
# 1. Cloner le dépôt
git clone https://github.com/teteekoue/allglory-business-landing.git
cd allglory-business-landing

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site est accessible sur [http://localhost:5173](http://localhost:5173).

**Build de production** :

```bash
npm run build    # génère le dossier dist/
npm run preview  # prévisualise le build
```

## ☁️ Déploiement

Le projet est configuré pour **Vercel** (voir `vercel.json`) : framework Vite, build via `npm run build`, sortie dans `dist/`. Tout push sur la branche `main` redéploie automatiquement le site.

## 👤 Réalisation

Développé par **Ekoue TETE** — développeur web &amp; data scientist (Lomé, Togo).

- 💼 GitHub : [github.com/teteekoue](https://github.com/teteekoue)
- 📱 WhatsApp : **+228 98 08 44 42** (réponse rapide)

Vous avez un projet de site web ou de landing page ? Contactez-moi, je conçois des vitrines rapides, modernes et adaptées à votre activité.
