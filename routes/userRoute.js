const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/admin', userController.getUsers);
router.post('/admin/creer', userController.createUser);

// Modifier un utilisateur (affichage du formulaire de modification)
router.get('/admin/modifier/:id', userController.getUpdateUser);

// Mettre à jour un utilisateur
router.post('/admin/modifier/:id', userController.updateUser);

// Supprimer un utilisateur
router.post('/admin/supprimer/:id', userController.deleteUser);

module.exports = router;