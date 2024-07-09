# Photothèque

Bienvenue dans le projet **Photothèque**. Ce projet est une application de gestion de photothèque développée avec Node.js, Express.js, EJS,  MongoDB et Mongoose. Il fournit une API RESTful pour gérer des albums d'images.

## Table des matières

- [Photothèque](#photothèque)
  - [Table des matières](#table-des-matières)
  - [Installation](#installation)
    - [Prérequis](#prérequis)
    - [Étapes d'installation](#étapes-dinstallation)
  - [Utilisation](#utilisation)
  - [Tests](#tests)
  - [Structure du projet](#structure-du-projet)
  - [Contributions](#contributions)
  - [Licence](#licence)

## Installation


### Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

- **Node.js** - Téléchargez et installez Node.js à partir de [nodejs.org](https://nodejs.org/)
- **MongoDB** - Assurez-vous que MongoDB est installé localement ou accessible via une instance Docker.

### Étapes d'installation

1. **Cloner le repository**


2. **Installer les dépendances**
 npm install 

3. **Creer une base de donne en local sur mongo**
creer un ebase de donne nome phototeque et une collection alums
 
L'application devrait maintenant être accessible à l'adresse `http://localhost:3000`.

## Utilisation

L'application permet de gérer des albums d'images via une API RESTful. Voici quelques endpoints disponibles :

- **GET `/albums`** : Récupérer tous les albums.
- **POST `/albums`** : Créer un nouvel album.
- **GET `/albums/:id`** : Récupérer un album spécifique par son identifiant.
- **PUT `/albums/:id`** : Mettre à jour un album existant.
- **DELETE `/albums/:id`** : Supprimer un album existant.

Assurez-vous de consulter le code source pour connaître toutes les routes disponibles et leurs fonctionnalités.

## Tests

Pour exécuter les tests unitaires, utilisez la commande suivante :
le test est a deux niveau :

1- executer npm test et verifier les logs 

2 - assurer vous d'etre connecté a la base de donné phototeque et avoir la collection albums
et executer npm test 


Les tests sont écrits avec Jest et Supertest. Ils vérifient le bon fonctionnement des endpoints et des opérations CRUD sur les albums.

## Structure du projet

Le projet suit une structure organisée pour faciliter le développement et la maintenance :

- **`index.js`** : Point d'entrée de l'application.
- **`/models/Album.js`** : Modèle Mongoose pour les albums.
- **`/routes/albums.js`** : Définition des routes Express pour les albums.
- **`/__tests__/albumController.test.js`** : Tests Jest pour le contrôleur des albums.

## Contributions

Les contributions sont les bienvenues! Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :

1. Forker le repository.
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalité`).
3. Commiter vos modifications (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`).
4. Pousser vers la branche (`git push origin feature/nouvelle-fonctionnalité`).
5. Ouvrir une Pull Request pour discuter des modifications proposées.

Veuillez vous assurer de respecter le guide de style et les bonnes pratiques de codage.

## Licence

Ce projet est sous licence MIT. Pour plus de détails, consultez le fichier [LICENSE](LICENSE).



