const Albums = require('../models/Albums');

// Afficher la liste des albums
exports.getAlbums = async (req, res) => {
  try {
    const albums = await Albums.find();
    res.render('albums', { entites: albums, editMode: false, album: null });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Afficher le formulaire de création d'un album
exports.getCreateAlbum = async (req, res) => {
  res.render('albums', { editMode: false, album: null });
};

// Afficher le formulaire de modification d'un album
exports.getUpdateAlbum = async (req, res) => {
  try {
    const album = await Albums.findById(req.params.id);
    const albums = await Albums.find();
    res.render('albums', { entites: albums, editMode: true, album: album });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Créer un nouvel album
exports.createAlbum = async (req, res) => {
  try {
    console.log("dsd",req.body)
    const { title } = req.body;
    const images = req.files.map(file => file.filename); // Récupérer les noms de fichiers des images téléchargées
    const newAlbums = new Albums({ title, images });
    await newAlbums.save();
    res.redirect('/albums');
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Mettre à jour un album
// Mettre à jour un album
exports.updateAlbum = async (req, res) => {
  try {
    console.log("req body:", req.body); // Debugging
    console.log("req files:", req.files); // Debugging

    const { title } = req.body;
    const existingAlbum = await Albums.findById(req.params.id);

    let images = existingAlbum.images;

    if (req.files && req.files.length > 0) {
      images = req.files.map(file => file.filename);
    }

    await Albums.findByIdAndUpdate(req.params.id, { title, images, updatedAt: Date.now() });
    res.redirect('/albums');
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Supprimer un album
exports.deleteAlbum = async (req, res) => {
  try {
    await Albums.findByIdAndDelete(req.params.id);
    res.redirect('/albums');
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
