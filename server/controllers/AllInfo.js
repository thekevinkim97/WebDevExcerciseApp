const express = require('express');
const users = require("./models/Users");
const friends = require(".models/Friends");
const exercises = require("./models/Exercises");
const app = express.Router();

const AllInfo = {
    users:[],
    friends:[],
    Exercises:[]
}

app.post('join', (req, res) => {
    const userId = req.query.userI
    AllInfo.users.push(users[userId]);
    AllInfo.friends.push(friends[friendId]);
    AllInfo.exercises.push(exercises[exerciseId]);
    res.send(users[userId])
    res.send(friends[friendId])
    res.send(exercises[exerciseId])
});

module.exports = app;