const express = require('express');
const users = require('../models/Users');

const app = express.Router();

app.get('/', (req, res) => res.send(users))
app
    .post('/add', (req, res) => {
        console.log("Adding new user")
        users.push(req.query);
        res.send(users[users.length-1]);
    })
    .post('/remove', (req, res) => {
        console.log("Removing existing user")
        users.pop();
        res.send(users[users.length-1]);
    })

module.exports = app;