const express = require('express');

const todoController = require('../controller/todo');

const router = express.Router();

router.get('/', todoController.getIndex);
router.post('/add',todoController.postAddTodo);
router.get('/todo/:todoId', todoController.getSingleTodo);
router.delete('/todo/:todoId',todoController.postDeleteTodo);


module.exports = router;