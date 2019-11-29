const express = require('express');
const { Profile } = require("../models/Profile");
const app = express.Router();

app.get('/', (req, res)=> {
    res.send(Profile.Get_State());
});
app.post('/friends', (req, res)=>{
    const friend_id = Profile.JoinFriend(req.body.name);
    res.send({ success: true, friend_id });
} );
app.post('/exercises', (req, res)=>{
    const exercise_id = Profile.JoinExercise(req.body.name);
    res.send({ success: true, exercise_id });
} );

module.exports=app;