const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { protect } = require('../middleware/auth.middleware');
const { checkRole } = require('../middleware/checkRole.middleware');

router.get('/', protect, userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', protect, checkRole('admin'), userController.deleteUser);

module.exports = router;