const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const validateTask = require('../middleware/validateTask');
const auth = require('../middleware/auth');
const { getTaskIndexes, getStatsByUser} = require('../controllers/taskController');

router.use(auth);
router.get('/', taskController.getAllTasks);

router.get('/stats-by-user', getStatsByUser)

router.get('/indexes', getTaskIndexes);

router.get('/:id', taskController.getTaskById);
router.post('/', validateTask, taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;