const express = require('express'),
    app = express();

const db = require('./db'), 
    employeeRoutes = require('./controllers/employee.controller')

// middleware
app.use('/api/employees', employeeRoutes)


// first make sure db is connected
// then start express server

db.query('SELECT * FROM employees')
// .then(data => console.log(data))
.then(() => {
    console.log('db connection succeded')
    app.listen(3001, ()=> console.log('server started at 3001'))
})
.catch(err => console.log('db connection failed. \n' + err))
    
