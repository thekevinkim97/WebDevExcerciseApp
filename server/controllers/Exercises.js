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
        const exerciseId = req.query.exerciseId
        const numRem = req.query.numRem
        exercises.splice(exerciseId, numRem);
        res.send(exercises);
    })
    .post('/editName', (req, res) => {
        console.log("editing name of an exercise")
        const exerciseId = req.query.exerciseId
        const newName = req.query.newName
        exercises[exerciseId].name = newName;
        res.send(exercises);
    })
    .post('/editSets', (req, res) => {
        console.log("editing sets")
        const exerciseId = req.query.exerciseId
        const newSets = req.query.newSets
        exercises[exerciseId].sets = newSets;
        res.send(exercises);
    })
    .post('/editReps', (req, res) => {
        console.log("editing reps")
        const exerciseId = req.query.exerciseId
        const newReps = req.query.newReps
        exercises[exerciseId].reps = newReps;
        res.send(exercises);
    })

module.exports = app;