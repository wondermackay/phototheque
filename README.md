# Photothèque 🖼️📂

Projet académique (bachelier  en informatique) :  
Application web pour gérer, trier et visualiser des albums photo.  
Développée avec **Node.js**, **Express.js**, **EJS**, **MongoDB** et **Mongoose**.  
Intègre des tests unitaires (Jest), tests d’intégration (Supertest) et un pipeline CI/CD via GitHub Actions.

👤 Projet réalisé individuellement

---

## 🚀 Fonctionnalités principales

- 🏷️ **Gestion complète des albums** : créer, modifier et supprimer des albums contenant plusieurs photos.  
- 📸 **Visualisation des photos** : aperçu des albums et des images via une interface intuitive.  
- 🔄 **Tri et filtrage** : trier les albums par date ou par titre, avec un affichage dynamique.  
- ⚡ **Navigation fluide** : barre de navigation permettant d’accéder à l’accueil, aux albums et aux photos.  
- ✅ **Tests et qualité** : tests unitaires avec Jest et Supertest, vérification des opérations CRUD.  
- 🤖 **CI/CD** : pipeline GitHub Actions pour automatiser le déploiement.

---

## 📋 Installation

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** - [nodejs.org](https://nodejs.org/)  
- **MongoDB** - local ou via Docker  

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone <url-du-repository>
cd phototheque
```
2.Installer les dépendances
```bash
npm install
```
3.Créer la base de données MongoDB
Créez une base phototheque et une collection albums.

4.Démarrer l’application
```bash
npm start
```
L’application sera accessible sur : http://localhost:3000

## 🖥️ Utilisation

- GET /albums : récupérer tous les albums
- POST /albums : créer un nouvel album
- PUT /albums/:id : mettre à jour un album
- DELETE /albums/:id : supprimer un album

### Navigation utilisateur
- Accueil : page principale
- Albums : liste des albums existants
- Photos : visualiser toutes les photos

## 🛠️ Gestion des albums

### Créer un album
- Aller sur **Albums**
- Remplir le formulaire : titre + photos (CTRL + clic pour sélectionner plusieurs images)
- Cliquer sur **Créer** → confirmation via "Sweet Alert"

### Modifier un album
- Cliquer sur le titre de l’album
- Modifier le nom ou les photos
- Cliquer sur **Modifier** → vérifier avec l’aperçu

### Supprimer un album
- Cliquer sur **Supprimer** → l’album est retiré de la liste

### Visualiser les photos
- Cliquer sur **Photos** → grille de vignettes par album avec aperçu

### Tri et filtres
- Menu déroulant **Trier par** :
  - Date : trier par date de création
  - Titre : trier par ordre alphabétique
- Message "Aucun filtre appliqué" si aucun album ne correspond

 ## 🧪 Tests

Exécuter les tests unitaires et d’intégration :
```bash
npm test
```
Remarques : assurez-vous que la base phototheque est active et que la collection albums existe.

## 📂 Structure du projet
```bash
phototheque/
├── index.js             # Point d'entrée de l'application
├── models/Album.js      # Modèle Mongoose pour les albums
├── routes/albums.js     # Routes Express pour les albums
├── views/               # Templates EJS
├── public/              # CSS, JS, images
├── controllers/         # Logique métier
├── tests/               # Tests Jest & Supertest
├── package.json
└── .gitignore
```

## 👤 Contributeur unique

- Développement complet : backend, frontend, API REST, gestion des albums, interface graphique, tests et intégration.
- Projet réalisé de manière individuelle.

 ## ⚙️ Technologies utilisées
- Backend : Node.js, Express.js
- Base de données : MongoDB, Mongoose
- Frontend : EJS
- Tests : Jest, Supertest
- CI/CD : GitHub Actions
- IDE : VSCode

 ## 🎯 Conclusion

Cette application fournit une gestion complète et intuitive des albums photo, avec tri dynamique et interface fluide.
Elle est conçue pour être facile à utiliser tout en restant robuste et testée, adaptée pour des projets académiques ou professionnels.

 ##  💡 Feedback 
 vos retours sont les bienvenus pour améliorer l’expérience utilisateur et enrichir les fonctionnalités.
