const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
require('dotenv').config();

const postRoutes = require('./routes/post-route');

// Define variable
const app = express();
PORT = process.env.PORT || 8080;

// Connect database
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(expressValidator());

// Routes
app.get('/', (req, res) => {
    res.send('This is a NodeApi!');
});
app.use('/api/posts', postRoutes);

// App started
app.listen(PORT, (req, res) => {
    console.log(`App listening on port ${PORT}`);
});