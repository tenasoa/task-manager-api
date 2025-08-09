const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const validateTask = require('../middleware/validateTask');
const { getTaskIndexes, getStatsByUser} = require('../controllers/task.controller');


router.get('/', taskController.getAllTasks);

router.get('/stats-by-user', getStatsByUser)

router.get('/indexes', getTaskIndexes);

router.get('/:id', taskController.getTaskById);
router.post('/', validateTask, taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;