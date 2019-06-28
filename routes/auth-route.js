const express = require('express');
const { signup, signin, signout } = require('../controllers/auth-controller');
const { userById } = require('../controllers/user-controllers');
const { userSignupValidator } = require('../validators');

const router = express.Router();

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.post("/signout", signout);

// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);


module.exports = router;