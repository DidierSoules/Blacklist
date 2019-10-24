var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');
require('dotenv').config()
var productosRoute = require('./routes/productos');

var app = express();

app.use('/products', productosRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

    next();
});

// Connect to DB
mongoose.connect(process.env.MONGO_DB_CONNECTION, { useNewUrlParser: true }, function(error){
   if(error){
      console.log('error mongo');
      throw error; 
   }else{
      console.log('Conectado a MongoDB');
   }
});

app.listen(3000);