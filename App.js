const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
require('dotenv').config();
const cors = require('cors');

const postRoutes = require('./routes/post-route');
const authRoutes = require('./routes/auth-route');
const userRoutes = require('./routes/user-route');

// Define variable
const app = express();
PORT = process.env.PORT || 8080;

// Connect database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
});

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Hello world from node js!');
});
app.use('/api/post', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Error handling Unauthorized
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({
            error: "Unauthorized!"
        });
    }
});

// App started
app.listen(PORT, (req, res) => {
    console.log(`A Node Js API is listening on port ${PORT}`);
});