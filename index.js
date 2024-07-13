const express = require('express');
const path = require('path');
const connectToDatabase = require('./database'); // Importer la fonction de connexion
const User = require('./models/User');
const Post = require('./models/Post');
const Albums = require('./models/Albums');
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');
const albumRoute = require('./routes/albumRoute');
const photoRoute = require('./routes/photoRoute');

const app = express();

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.set('view engine', 'ejs');

// Connexion à MongoDB
connectToDatabase().then(async () => {
  // Récupération des albums
  //--------- A DESCATIVER POUR UN TEST SANS  CONNEXION -------------------
  const alb1 = await Albums.findOne({ title: 'bruxells' });
  console.log('alb', alb1);
  // --------- A DESCATIVER POUR UN TEST SANS  CONNEXION --------------------
});

// pour l'affichage de la page d'accueil
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/', userRoute);
app.use('/', postRoute);
app.use('/', albumRoute);
app.use('/', photoRoute);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server };
