const express = require('express');
const { Profile } = require("../models/Profile");
const app = express.Router();

app.get('/', (req, res)=> {
    res.send(Profile.Get_State());
});
app.post('/user', (req, res) => {
    const current_id = Profile.JoinUser(req.body.name);
    res.send({ success: true, current_id });
})
app.post('/signout', (req, res) => {
    Profile.RemoveUser();
    const current_id = null;
    res.send({ success: true, current_id });
})

app.post('/addfriends', (req, res)=>{
    const friend_id = Profile.JoinFriend(req.body.name);
    res.send({ success: true, friend_id });
} );
app.post('/addexercises', (req, res)=>{
    const exercise_id = Profile.JoinExercise(req.body.name, req.body.sets, req.body.reps, req.body.max);
    res.send({ success: true, exercise_id });
} );
app.post('/addfoods', (req, res)=>{
    const food_id = Profile.JoinFood(req.body.name, req.body.calories, req.body.servings);
    res.send({ success: true, food_id });
} );

app.post('/delfriends', (req, res)=>{
    const friend_id = Profile.UnlinkFriend(req.body.index);
    res.send({ success: true, friend_id });
} );
app.post('/delexercises', (req, res)=>{
    const exercise_id = Profile.UnlinkExercise(req.body.index);
    res.send({ success: true, exercise_id });
} );
app.post('/delfoods', (req, res)=>{
    const food_id = Profile.UnlinkFood(req.body.index);
    res.send({ success: true, food_id });
} );

app.post('/weighty', (req, res)=>{
    const weight_id = Profile.JoinWeight(req.body.lbs);
    res.send({ success: true, weight_id });
} );
app.post('/heighty', (req, res)=>{
    const height_id = Profile.JoinHeight(req.body.inch);
    res.send({ success: true, height_id });
} );

module.exports=app;