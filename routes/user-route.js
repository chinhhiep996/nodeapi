const express = require('express');

const { userById, allUsers, getUser, updateUser, deleteUser } = require('../controllers/user-controllers');
const { requireSignin } = require('../controllers/auth-controller');

const router = express.Router();

router.get("/", allUsers);
router.get("/:userId", requireSignin, getUser);
router.put("/:userId", requireSignin, updateUser);
router.delete("/:userId", requireSignin, deleteUser);

// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);


module.exports = router;