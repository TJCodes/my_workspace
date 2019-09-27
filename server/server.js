import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import express from 'express';
const spaceti = require('./src/recommendation');
require('dotenv').config();

const app = new express();

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


//START SERVER
app.listen(process.env.SERVER_PORT, () => {
    console.log('app listening on port ' + process.env.SERVER_PORT)
});


//CONNECT TO DATABASE
mongoose.connect('mongodb+srv://' + process.env.MDB_USERNAME + ':' + process.env.MDB_PASSWORD + '@' + process.env.MDB_DATABASE + '-yx3lc.mongodb.net/test?retryWrites=true&w=majority' , { useNewUrlParser: true })

mongoose.connection.on('connected', () => {console.log('Connected to the DB')});
mongoose.connection.on('error', (err) => {console.log(err)});
mongoose.connection.on('disconnected', () => {console.log('Disconnected from the DB')});

// spaceti.apiCall();