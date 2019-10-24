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
        console.log("Removing friends")
        const friendId = req.query.friendId
        const numRem = req.query.numRem
        friends.splice(friendId, numRem);
        res.send(friends);
    })
    .post('/edit1', (req, res) => {
        console.log("editing first name")
        const userId = req.query.userId
        const newName = req.query.newName
        friends[userId].first_name = newName;
        res.send(friends);
    })
    .post('/edit2', (req, res) => {
        console.log("editing last name")
        const userId = req.query.userId
        const newName = req.query.newName
        friends[userId].last_name = newName;
        res.send(friends);
    })

module.exports = app;