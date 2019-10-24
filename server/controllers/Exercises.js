const express = require('express');
const exercises = require('../models/Exercises');

const app = express.Router();

app.get('/', (req, res) => res.send(exercises))
app.post('/', (req, res) => {
    users.push(req.query);
    res.send(exercises[exercisess.length - 1]);
})

module.exports = app;