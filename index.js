const express = require('express');
const app = express();
const port = 5000;
const db = require('./config/mongoose');


const expresslayouts = require('express-ejs-layouts');
app.use(express.urlencoded());
app.use(express.static('assets'));
app.use(expresslayouts);
const path = require('path');

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Use express routes
app.use('/', require('./routes'));

app.listen(port , (err)=> {
    if(err){console.log(`Error while starting the server: ${port}`)}
    console.log(`Successfully started the server at ${port}`);
});