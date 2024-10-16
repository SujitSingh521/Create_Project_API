const express = require('express');
const { registerUser, loginUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const authenticator = require('../middlewares/authenticator');
const validator = require('../middlewares/validator');
const userLogger = require('../middlewares/userLogger');

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.get('/', authenticator, validator, getAllUsers);
router.get('/:id', authenticator, getUserById);
router.put('/:id', authenticator, validator, updateUser);
router.delete('/:id', authenticator, validator, deleteUser);

module.exports = router;
