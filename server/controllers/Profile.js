const express = require('express');
const { Profile } = require("../models/Profile");
const app = express.Router();

app.get('/', (req, res)=> {
    res.send(Profile.Get_State());
});
app.post('/friends', (req, res)=>{
    const friend_id = Profile.Join(req.body.name);
    res.send({ success: true, Friend_id });
} );

module.exports=app;