const express = require('express');
const middleware = require('../middleware');
const tasksController = require('../controllers/tasks.controller');

const router = express.Router();

router.get('/:id', tasksController.getById);

router.use(middleware);

router.get('/', tasksController.getAll);
router.post('/', tasksController.create);

module.exports = router;