
const mongodb = require('mongodb');
const getDb = require('../helper/database').getDb;

class Todo{
    constructor(title,description,priority,dateCreated,id){
      this.title = title;
      this.description = description;
      this.priority=priority;
      this.dateCreated=dateCreated;
      this._id = id ? new mongodb.ObjectId(id) : null;

    }
    save(){
      const db = getDb();
      let dbOp;
      if(this._id){
        dbOp = db.collection('todo')
        .updateOne({_id:this._id},{$set: this});

      }
      else{
        dbOp = db
        .collection('todo')
        .insertOne(this)

      }
      return dbOp
      .then(result =>{
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });

    }
    // fetch all to dos

    static fetchAll(){
      const db = getDb();
      return db.collection('todo')
      .find()
      .toArray()
      .then(result=>{
        console.log(result);
        // return todos;
      })
      .catch(err=>{
        console.log(err);
      })
    }

    // single to dos
    static findById(todoId){
      const db = getDb();
      return db.collection('todo')
      .find({_id: new mongodb.ObjectId(todoId) })
      .next()
      .then(todo => {
        console.log(todo);
        // return todo;  
      })
      .catch(err => {
        console.log(err);  
      })
    }
    // delete single todo
    static deleteById(todoId){
      const db = getDb();
     return db
     .collection('todo')
     .deleteOne({_id: new mongodb.ObjectId(todoId)})
     .then(result =>{
       console.log('deleted successful');
     })
     .catch(err =>{
       console.log(err);
     })
  
    }
}

module.exports = Todo;