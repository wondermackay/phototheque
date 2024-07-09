const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');
const multer = require('multer');

// Configuration de Multer pour le téléchargement de fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Afficher la liste des albums
router.get('/albums', albumController.getAlbums);

// Afficher le formulaire de création d'un album
router.get('/albums/creer', albumController.getCreateAlbum);

// Créer un nouvel album
router.post('/albums/creer', upload.array('images'), albumController.createAlbum);

// Afficher le formulaire de modification d'un album
router.get('/albums/modifier/:id', albumController.getUpdateAlbum);

// Mettre à jour un album
router.post('/albums/modifier/:id', upload.array('images'), albumController.updateAlbum);

// Supprimer un album
router.post('/albums/supprimer/:id', albumController.deleteAlbum);

module.exports = router;
