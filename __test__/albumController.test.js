const mongoose = require('mongoose');
const request = require('supertest');
const { app, server } = require('../index');
const Albums = require('../models/Albums');

beforeAll(async () => {
  const uri = 'mongodb://localhost:27017/phototeque';
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
});

afterAll(async () => {
  await mongoose.disconnect();
  if (server && server.close) {
    server.close(); // Close the server after tests
  }
});

afterEach(async () => {
  await Albums.deleteMany({});
});

describe('Album Controller', () => {
  it('should get all the albums', async () => {
    const res = await request(app).get('/albums');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({});
  });

  it('should create a new album', async () => {
    const res = await request(app)
      .post('/albums/creer')
      .field('title', 'Test Album')
      .attach('images', Buffer.from(''), 'test_image.jpg');

    expect(res.statusCode).toBe(302); // Assuming the response is a redirect
    const albums = await Albums.find({});
    expect(albums.length).toBe(1);
    expect(albums[0].title).toBe('Test Album');

    // Utilisation de toMatch pour vérifier que le nom de fichier se termine par 'test_image.jpg'
    expect(albums[0].images[0]).toMatch(/test_image.jpg$/);
  });
});
