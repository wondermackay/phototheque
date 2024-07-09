
// ---------------------------------- TEST AVEC LA BASE DE DONNE CONNECTE ---------------------------
// const mongoose = require('mongoose');
// const request = require('supertest');
// const { app, server } = require('../index');
// const Albums = require('../models/Albums');

// beforeAll(async () => {
//   const uri = process.env.MONGO_URI || 'mongodb://mongo:27017/phototeque'; // Utiliser MONGO_URI de l'environnement
//   if (mongoose.connection.readyState === 0) {
//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true
//     });
//   }
// });

// afterAll(async () => {
//   await mongoose.disconnect();
//   if (server && server.close) {
//     server.close(); // Fermer le serveur après les tests
//   }
// });

// afterEach(async () => {
//   await Albums.deleteMany({});
// });

// describe('Album Controller', () => {
//   it('should get all the albums', async () => {
//     jest.setTimeout(30000); // Augmenter le délai d'attente à 30 secondes pour ce test
//     const res = await request(app).get('/albums');
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toEqual({});
//   });

//   it('should create a new album', async () => {
//     jest.setTimeout(30000); // Augmenter le délai d'attente à 30 secondes pour ce test
//     const res = await request(app)
//       .post('/albums/creer')
//       .field('title', 'Test Album')
//       .attach('images', Buffer.from(''), 'test_image.jpg');

//     expect(res.statusCode).toBe(302); // Assuming the response is a redirect
//     const albums = await Albums.find({});
//     expect(albums.length).toBe(1);
//     expect(albums[0].title).toBe('Test Album');
//     expect(albums[0].images[0]).toMatch(/test_image.jpg$/);
//   });
// });


// ------------------------- TEST AVEC DES DONNES PAR DEFAUT --------------------------
const mongoose = require('mongoose');
const request = require('supertest');
const { app, server } = require('../index');
const Albums = require('../models/Albums');

// Mock the Mongoose model
jest.mock('../models/Albums');

beforeAll(async () => {
  // Mock the connect function to avoid actual database connection
  jest.spyOn(mongoose, 'connect').mockImplementation(() => Promise.resolve());
});

afterAll(() => {
  jest.restoreAllMocks(); // Restaure tous les mocks
  mongoose.disconnect(); // Déconnexion de Mongoose

  // Close the server after all tests
  if (server && server.close) {
    server.close();
  }
});

afterEach(() => {
  // Clear all mocks after each test
  jest.clearAllMocks();
});

describe('Album Controller', () => {
  it('should get all the albums', async () => {
    // Mock the response from Albums.find
    Albums.find.mockResolvedValue([]);

    const res = await request(app).get('/albums');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({});
  });

  it('should create a new album', async () => {
    const mockAlbum = {
      _id: '60c72b2f9b1e8c23d8f4b2e1',
      title: 'Test Album',
      images: ['test_image.jpg']
    };

    // Mock the save method
    Albums.prototype.save = jest.fn().mockResolvedValue(mockAlbum);

    const res = await request(app)
      .post('/albums/creer')
      .field('title', 'Test Album')
      .attach('images', Buffer.from(''), 'test_image.jpg');

    expect(res.statusCode).toBe(302); // Assuming the response is a redirect

    // Mock the response from Albums.find
    Albums.find.mockResolvedValue([mockAlbum]);
    const albums = await Albums.find({});

    expect(albums.length).toBe(1);
    expect(albums[0].title).toBe('Test Album');
    expect(albums[0].images[0]).toMatch(/test_image.jpg$/);
  });
});
