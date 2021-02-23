const Todo = require('../model/todo');
const date = require('date-and-time')

exports.getIndex = (req,res,next) => {
    Todo.fetchAll()
    .then(todoItem => res.status(200).send({
        success: true,
        message: 'Todo successfully Generated',
        data: {
            
        }
        
      }))
    .catch(err=>console.log(err));
}
// to get single to do

exports.getSingleTodo = (req,res,next) => {
    const todoId = req.params;
    Todo.findById(todoId)
    .then(todo => {
        // console.log(todo)
    })
    .catch(err => console.log(err));
}

// insert data Todo
exports.postAddTodo = (req,res,next)=>{ 
    const { title,description,priority } = req.body;
    const now = new Date();
    const dateCreated = date.format(now, 'YYYY/MM/DD HH:mm:ss');
    const todo = new Todo(title,description,priority,dateCreated);
    todo.save()
        .then(result => res.status(201).send({
            success: true,
            message: 'Todo Created Successful',
            data: {
            
            }
            
        }))
        .catch(err=>{
            console.log(err);
        })
};

// delete

exports.postDeleteTodo = (req,res,next) => {
    const { todoId } = req.params;
    Todo.deleteById(todoId)
    .then(result=>{
        console.log('Todo deleted successful');

    })
    .catch(err=>console.log(err))
    
}