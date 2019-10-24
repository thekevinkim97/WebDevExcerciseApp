const express = require('express');
const exercises = require('../models/Exercises');

const app = express.Router();

app.get('/', (req, res) => res.send(exercises))
app
    .post('/add', (req, res) => {
        console.log("Adding an exercise")
        exercises.push(req.query);
        res.send(exercises[exercises.length-1]);
    })
    .post('/remove', (req, res) => {
        console.log("Removing an exercise")
        exercises.pop();
        res.send(exercises[exercises.length-1]);
    })

module.exports = app;