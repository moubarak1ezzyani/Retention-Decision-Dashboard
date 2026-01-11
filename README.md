# 💻 Retention Decision Dashboard

<div>

![Next.js](https://img.shields.io/badge/Next.js-13+-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-20232A?style=flat&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Available-2496ED?style=flat&logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-000000?style=flat&logo=vercel&logoColor=white)

</div>

> **Tableau de bord décisionnel pour l'analyse du turnover et la gestion des talents.**

## 🔗 API Intelligente
Ce dashboard consomme les services prédictifs hébergés ici :
👉 **[Retention-AI-API](https://github.com/moubarak1ezzyani/RetentionAI---Pr-dicteur-de-D-part-Assistant-RH-_BackEnd.git)**

**Retention Decision Dashboard** est l'interface utilisateur destinée aux managers RH. Développée avec **Next.js**, elle permet d'interagir avec l'API prédictive, de visualiser les risques de départ des employés et de consulter les plans de rétention générés par l'IA.

---

## 📋 Fonctionnalités Clés

Ce frontend a été conçu pour offrir une expérience utilisateur fluide et ergonomique :

1. **Authentification Sécurisée** : Connexion via JWT pour accéder au tableau de bord.
2. **Formulaire Employé** : Saisie intuitive des données RH (Âge, Département, Satisfaction, etc.).
3. **Visualisation du Risque** : Affichage clair de la probabilité de départ (Churn Score).
4. **Assistant IA** : Affichage dynamique du plan de rétention généré si le risque est critique (>50%).

---

## 🛠️ Architecture & Technologies

### Interface & Logique

* **Framework** : Next.js (App Router) - Pour le rendu côté serveur et le routing.
* **Langage** : JavaScript (ES6+)
* **Style** : CSS Modules / Tailwind CSS (pour le Responsive Design).
* **Gestion d'état** : React Hooks (`useState`, `useEffect`).

### Intégration

* **Communication API** : Fetch / Axios (situé dans le dossier `services/`).
* **Conteneurisation** : Docker (pour un déploiement iso-prod).

---

## 📂 Structure du Projet

Voici l'arborescence basée sur l'architecture Next.js App Router :

```text
RetentionAI-Frontend/
├── src/
│   └── my-app/
│       ├── app/
│       │   ├── dashboard/       # Espace protégé (Tableau de bord RH)
│       │   │   └── page.js      # Vue principale du Dashboard
│       │   ├── layout.js        # Structure globale (Nav, Footer)
│       │   └── page.js          # Page d'accueil / Login
│       │
│       ├── components/          # Composants UI réutilisables (Forms, Cards...)
│       ├── services/            # Logique d'appel à l'API Backend (Auth, Predict)
│       ├── utils/               # Fonctions utilitaires (Formatage, Helpers)
│       └── node_modules/        # Dépendances NPM
│
├── public/                      # Images et assets statiques
├── .next/                       # Build de production
├── Dockerfile                   # Configuration de l'image Docker
├── package.json                 # Gestion des dépendances
└── README.md                    # Documentation

```

---

## 🚀 Installation et Démarrage

### Pré-requis

* Le **Backend RetentionAI** doit être lancé (localement ou sur serveur).
* Node.js (v18+) ou Docker.

### Configuration

Créez un fichier `.env.local` à la racine pour lier le frontend à votre API Backend :

```env
# URL de votre API FastAPI (Backend)
NEXT_PUBLIC_API_URL=http://localhost:8000

```

### Option 1 : Démarrage avec Docker (Recommandé)

1. **Construire l'image**
```bash
docker build -t retention-frontend .

```


2. **Lancer le conteneur**
```bash
docker run -p 3000:3000 retention-frontend

```



L'application sera accessible sur `http://localhost:3000`.

### Option 2 : Installation Manuelle (Local)

1. **Installer les dépendances**
```bash
npm install
# ou
yarn install

```


2. **Lancer le serveur de développement**
```bash
npm run dev

```



---

## 🌐 Déploiement Vercel

Le projet est déployé en production et accessible via le lien ci-dessous :

👉 **[LIEN_DE_VOTRE_APP_VERCEL_ICI]**

> *Note pour le jury : Si le lien est inactif, assurez-vous que le backend (API) est également en ligne pour traiter les requêtes.*

---

## 🔗 Intégration Backend

Ce frontend communique avec les endpoints suivants du Backend FastAPI :

* `POST /login` : Récupération du Token JWT (stocké en `localStorage` ou `Cookie`).
* `POST /predict` : Envoi des données employé pour analyse ML.
* `POST /generate-retention-plan` : Appel de l'IA Générative en cas de risque élevé.

---

## 📸 Aperçu du Parcours Utilisateur

1. **Login** : L'utilisateur RH s'identifie (`hr_manager`).
2. **Input** : Il remplit les caractéristiques du collaborateur évalué.
3. **Analyse** : Le système affiche une jauge de risque (ex: **78%**).
4. **Action** : Si le risque est "High", le plan de rétention s'affiche automatiquement sous forme de liste d'actions concrètes.
