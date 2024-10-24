const express = require('express');
const { registerUser, loginUser, getUsers, updateUser, deleteUser } = require('../controllers/userController');
const authenticator = require('../middlewares/authenticator');
const validator = require('../middlewares/validator');

const router = express.Router();

// User Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', authenticator, validator, getUsers);
router.patch('/:id', authenticator, validator, updateUser);
router.delete('/:id', authenticator, validator, deleteUser);

module.exports = router;
