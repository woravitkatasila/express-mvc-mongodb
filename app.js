const express = require('express')
const app = express()
const port = 8000;
const user = require('./routes/user');

app.use(express.json())

app.use('/', user);  //ไปเรียก rout product


app.listen(port,()=> console.log('sever 8000'))
