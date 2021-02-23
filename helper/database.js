const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) =>{
   MongoClient.connect('mongodb+srv://JeanPaul:dusabimana2019@cluster0.uwya5.mongodb.net/todoapp?retryWrites=true&w=majority')
   .then(client => {
      console.log('mongo database is connected successfully');
      _db = client.db();
      callback( );
   })
   .catch(err=>{
      console.log(err);
      throw err;
   });
}

const getDb = () =>{
   if(_db){
      return _db;
   }
   throw 'No database found'; 
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
