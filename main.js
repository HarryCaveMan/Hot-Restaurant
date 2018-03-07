const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
const http = require('http');

app.use('/assets',express.static(path.join(__dirname, '/assets')));

//static html routes
require('./helpers/html_routes.js')(app);
//api routes
require('./helpers/api_routes.js')(app);


