const express = require('express');
const mongoose = require('mongoose');
var bodyParser=require('body-parser');
const users = require('./Router/Router');
const { json } = require('body-parser');
const app = express();
const port = 3000
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/routes',users)

app.listen(port, () => console.log(`Example app listening on port port!`))

mongoose.connect('mongodb://localhost:27017/userdb')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));