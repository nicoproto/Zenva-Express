const express = require('express');
const routes = require('./routes/index.js');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
// Enables to extract the form data from the post request
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', routes);
// Defines views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');



app.listen(5000);
console.log('Server running on http://localhost:5000')