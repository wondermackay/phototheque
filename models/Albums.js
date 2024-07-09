const mongoose = require('mongoose');
const { Schema } = mongoose;

// Définition du schéma pour la collection "albums"
const AlbumSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  images: {
    type: [String], // Tableau de chaînes (liens vers les images)
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Création du modèle à partir du schéma
const Albums = mongoose.model('Albums', AlbumSchema);

module.exports = Albums;
