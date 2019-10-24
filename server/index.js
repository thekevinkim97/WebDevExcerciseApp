const express = require('express');
const path = require('path');
const userController = require('./controllers/Users');
const friendController = require('./controllers/Friends');
const exerciseController = require('./controllers/Exercises');

const app = express();
const port = 9000;

app
    .get('/', (req, res) => {
        res.send("Hello There!")
    })
    .use('/users', userController )
    .use('/friends', friendController)
    .use('/exercises', exerciseController)
    
    .listen(port, () => console.log(`Running on http://localhost:${port}`));