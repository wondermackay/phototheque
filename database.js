const mongoose = require('mongoose');

let isConnected = false;

async function connectToDatabase() {
  if (!isConnected) {
    await mongoose.connect("mongodb://mongo:27017/phototheque", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Connexion à MongoDB établie");
  }
}

module.exports = connectToDatabase;