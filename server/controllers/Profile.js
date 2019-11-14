const express = require('express');
const { Profile } = require("../models/Profile");
const { Exercises } = require("../models/Exercises");
const app = express.Router();

app.get('/', (req, res)=> {
    res.send(Profile.Get_State());
});

module.exports=app;