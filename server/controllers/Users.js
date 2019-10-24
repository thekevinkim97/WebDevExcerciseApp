const express = require('express');
const users = require('../models/Users');

const app = express.Router();

app.get('/', (req, res) => res.send(users))
app
    .post('/add', (req, res) => {
        console.log("Adding user")
        users.push(req.query);
        res.send(users[users.length-1]);
    })
    .post('/remove', (req, res) => {
        console.log("Removing user")
        const userId = req.query.userId
        const numRem = req.query.numRem
        friends.splice(userId, numRem);
        res.send(users);
    })
    .post('/editName1', (req, res) => {
        console.log("editing first name")
        const userId = req.query.userId
        const newName = req.query.newName
        users[userId].first_name = newName;
        res.send(users);
    })
    .post('/editName2', (req, res) => {
        console.log("editing last name")
        const userId = req.query.userId
        const newName = req.query.newName
        users[userId].last_name = newName;
        res.send(users);
    })
    .post('/editAge', (req, res) => {
        console.log("editing age")
        const userId = req.query.userId
        const newAge = req.query.newAge
        users[userId].age = newAge;
        res.send(users);
    })
    .post('/editHeight', (req, res) => {
        console.log("editing height")
        const userId = req.query.userId
        const newHeight = req.query.newHeight
        users[userId].height_inches = newHeight;
        res.send(users);
    })

module.exports = app;