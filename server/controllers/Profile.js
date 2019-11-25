const express = require('express');
const { Profile } = require("../models/Profile");
const app = express.Router();

app.get('/', (req, res)=> {
    res.send(Profile.Get_State());
});
app.post('/friends', (req, res)=>{
    const friend_id = Profile.Join(req.body.name);
    if(friend_id == -1){
        res.status(500).send({ success: false, message: "Invalid name" });
    }else{
        res.send({ success: true, friend_id });
    }
} );

module.exports=app;