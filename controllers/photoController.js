
const Albums = require('../models/Albums');

exports.getPhotos = async (req, res) => {
  try {
    let photos = [];
    const albums = await Albums.find();

    albums.forEach(album => {
      photos = photos.concat(album.images);
    });

    if (req.query.sort === 'title') {
      photos.sort(); // Trie alphabétique des noms de fichiers (titres)
    } else {
      photos.sort((a, b) => {
        const timeA = parseInt(a.split('-')[0], 10);
        const timeB = parseInt(b.split('-')[0], 10);
        return timeA - timeB;
      }); // Trie par date (timestamp)
    }

    res.render('photos', { photos });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
