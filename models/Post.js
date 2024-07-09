/**
 * Consigne : (0.5 point)
 * Créer un module de modèle Post avec les champs :
 *  - title de type String not null
 * - content de type String
 * - status de type string avec la possibilité de choisir entre "BROUILLON" et "PUBLISHED"
 * 
 * Avancé : (0.5 point)
 * Ajouter le champs author qui soit une référece vers le User (faire une liaison)
 */

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(({
  title: {type: String, require: true},
  content : String,
  status : {
    type: String,
    enum: ["BROUILLON","PUBLISHED"]
  },
  author: {//On souhaite que ce soit une ref vers l'User (faire une liaison)
    type: mongoose.Types.ObjectId,
    /**On veut récuperer le type ObjectId qui est l'identifiant 
         * dans nos documents. Nativement Js ne nous donne pas cette possibilité
         * Raison pour laquelle if faut passer par cette syntaxe (moongose library) pour ce récupérer
         * ce type particulier qui est ObjectId
        */
      ref : "User", //A quoi fait-on référence ? au modèle User

      /**
        * De cette manière nous indiquons à mongoose que le schéma d'un post(=article)
        * à un author qui est en réalité une référence à nos utilisteurs(User).
        */
  }
}))

module.exports = mongoose.model('Post', postSchema) //Exporter notre modèle à partir de ce schema afin de pouvoir l'utiliser ailleur
//Retourner dans index.js pour récuper le modèle