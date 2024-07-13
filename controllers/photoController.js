const Albums = require('../models/Albums');

exports.getPhotos = async (req, res) => {
  try {
    const { sort, filter } = req.query;
    let albums = await Albums.find();

    if (sort === 'title' && filter) {
      albums = albums.filter(album => album.title.toLowerCase().includes(filter.toLowerCase()));
    } else if (sort === 'date' && filter) {
      const filterDate = new Date(filter);
      albums = albums.filter(album => new Date(album.createdAt).toDateString() === filterDate.toDateString());
    }

    let message = '';
    if (albums.length === 0) {
      if (sort === 'title' && filter) {
        message = `Aucune photo trouvée avec le titre "${filter}".`;
      } else if (sort === 'date' && filter) {
        message = `Aucune photo trouvée à la date "${filter}".`;
      } else {
        message = 'Aucune photo trouvée pour ce filtre.';
      }
    }

    res.render('photos', { albums, message });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
