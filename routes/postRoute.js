const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/home', postController.getPost);
router.post('/posts/delete/:id', postController.deletePost);

module.exports = router;