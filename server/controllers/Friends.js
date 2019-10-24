const express = require('express');
const friends = require('../models/Friends');

const app = express.Router();

app.get('/', (req, res) => res.send(friends))
app
    .post('/add', (req, res) => {
        console.log("Adding a friend")
        friends.push(req.query);
        res.send(friends[friends.length-1]);
    })
    .post('/remove', (req, res) => {
        console.log("Removing a friend")
        friends.pop();
        res.send(friends[friends.length-1]);
    })

module.exports = app;