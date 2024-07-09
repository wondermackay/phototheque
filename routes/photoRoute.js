const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');

router.get('/photos', photoController.getPhotos);

module.exports = router;
