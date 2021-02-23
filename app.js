const mongoConnect = require('./helper/database').mongoConnect;
const express = require('express');

const app = express();

const bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// routes
 const TodoRoutes = require('./route/todo');

// listen port
app.use(TodoRoutes);

mongoConnect(() =>{
    app.listen(3300);

})
  
