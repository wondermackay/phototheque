
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(({
  title: {type: String, require: true},
  content : String,
  status : {
    type: String,
    enum: ["BROUILLON","PUBLISHED"]
  },
  author: {
    type: mongoose.Types.ObjectId,
   
      ref : "User", //Je fais  référence  au modèle User
  }
}))

module.exports = mongoose.model('Post', postSchema) //Exporter notre modèle à partir de ce schema afin de pouvoir l'utiliser ailleur
//Retourner dans index.js pour récuper le modèle