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
app.set('view engine', 'ejs');

// Connexion à MongoDB
connectToDatabase().then(async () => {
  // Récupération des utilisateurs
  const jean = await User.findOne({ firstname: 'Jean' });
  const alice = await User.findOne({ firstname: 'Alice-moli' });
  const alb1 = await Albums.findOne({ title: 'bruxells' });

  console.log('alb', alb1);
  console.log('liste de mes utilisateurs', jean, alice);

  // Création de deux articles (commenté car il semble être un exemple)
  // await Post.create({
  //   title: "Nouvelle version Node.js",
  //   content: "...",
  //   status: "PUBLISHED",
  //   author: jean._id,
  // });

  // await Post.create({
  //   title: "Créer un formulaire en HTML",
  //   content: "...",
  //   status: "BROUILLON",
  //   author: alice._id,
  // });

  // const posts = await Post.find().populate("author");
  // console.log(posts);
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
