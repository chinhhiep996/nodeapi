const express = require('express');

const { getAllPosts, createPost } = require('../controllers/post-controller');
const { createUserValidator } = require('../validators');

const router = express.Router();

router.get('/', getAllPosts);
router.post('/', createUserValidator, createPost);

module.exports = router;