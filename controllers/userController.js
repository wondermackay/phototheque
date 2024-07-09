const User = require('../models/User');
const express = require('express');
const app = express();


exports.getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Récupère tous les utilisateurs
    console.log('liste des utilisateurs', users)
    res.render('admin', { entites: users }); // Passe les utilisateurs à la vue admin.ejs
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

exports.createUser = async (req, res) => {
  try {
    const { firstname, lastname } = req.body;
    const newUser = new User({ firstname, lastname });
    await newUser.save();
    res.redirect('/admin'); // Redirige vers la liste des utilisateurs après la création
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Afficher le formulaire de modification d'un utilisateur
exports.getUpdateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render('modifier-utilisateur', { user });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Mettre à jour un utilisateur
exports.updateUser = async (req, res) => {
  try {
    const { firstname, lastname } = req.body;
    await User.findByIdAndUpdate(req.params.id, { firstname, lastname });
    res.redirect('/admin');
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Supprimer un utilisateur
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/admin');
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

