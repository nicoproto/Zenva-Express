const express = require('express');
const routes = require('./routes/index.js')
const path = require('path');

const app = express();

app.use('/', routes);
// Defines views directory
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hjs');

app.listen(5000);
console.log('Server running on http://localhost:5000')