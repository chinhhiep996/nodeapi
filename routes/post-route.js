const express = require('express');

const {
    getPosts,
    createPost,
    postsByUser,
    postById,
    isPoster,
    updatePost,
    deletePost
} = require('../controllers/post-controller');
const {
    createUserValidator
} = require('../validators');
const {
    requireSignin
} = require('../controllers/auth-controller');
const {
    userById
} = require('../controllers/user-controllers');

const router = express.Router();

router.get('/', getPosts);
router.post('/create/:userId', requireSignin, createPost, createUserValidator);
router.get('/:userId', requireSignin, postsByUser);
router.put('/:postId', requireSignin, isPoster, updatePost);
router.delete('/:postId', requireSignin, isPoster, deletePost);

// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);
// any route containing :postId, our app will first execute postByID()
router.param("postId", postById);

module.exports = router;