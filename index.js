const express = require('express');
const app = express();
const connection = require('./connection');
const student = require('./routes/student');
connection();
app.use(express.json())
app.use(student);
app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Server is running on port 3000');
    }
})
//http://localhost:3000/add/user