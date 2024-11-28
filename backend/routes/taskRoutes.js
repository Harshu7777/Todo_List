const express = require('express');
const {getTasks,createTask, updateTask,deleteTask} = require('../controllers/taskController');

const router = express.Router();

router
    .route('/')
    .get(getTasks)
    

router
    .route('/create')
    .post(createTask)
    

router
    .route('/:id')
    .put(updateTask)
    .delete(deleteTask);

module.exports = router;
