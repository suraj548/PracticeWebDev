const express = require('express');
const mongoose = require('mongoose');
var bodyParser=require('body-parser');
const users = require('./Router/Router');
const authRoutes = require('./auth/authRoutes')
const { json } = require('body-parser');
var cors = require('cors');
const passport = require('passport');
const app = express();
const port = 3000

app.use(passport.initialize());
require('./auth/auth')(passport);

var corsOptions={
    origin:'http://localhost:4200',
    optionsSucessStatus:200,
    methods:"GET,POST,PUT,DELETE"
}
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/routes',users)
app.use('/routes',passport.authenticate('jwt', {session:false}), authRoutes)
app.listen(port, () => console.log(`Example app listening on port port!`))

mongoose.connect('mongodb://localhost:27017/shopdb')
    .then(() => console.log('Now connected to MongoDB!')) 
    .catch(err => console.error('Something went wrong', err)); 

