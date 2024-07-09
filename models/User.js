const mongoose = require('mongoose');
const {Schema} = mongoose; //Récuperer l'objet Schema depuis mongoose dans la variable Schema

const UserSchema = new Schema ({

  //¨Passer des propriétés via des objets
  email:{type: String, unique: true},
  firstname: {type: String, require : true},
  Lastname: String,
  age: {type: Number, min: 0}
})

//Un modèle dans mongoose ==> une collection dans MongoDB
const User = mongoose.model('User', UserSchema);
/**
 * 1er arg : nom du modèle (= nom du fichier)
 * 2eme arg : nom du schema
 */

module.exports = User;
//Nous exportons notre modele afin de pouvoir l'utiler depuis un autre script
