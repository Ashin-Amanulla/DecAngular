const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

// Routes 
const name1 = require('./routes/name');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    next();
});


//api



app.use('/name', name1);










//port
app.listen(PORT, () => {
    console.log(`.....SERVER started at ${PORT}`)
});