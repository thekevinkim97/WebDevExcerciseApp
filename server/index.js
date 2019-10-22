const express = require('express');
const path = require('path');
const allInfoController = require('./controllers/AllInfo');

const app = express();
const port = process.env.PORT || 9000;

app
    .get('/port', (req, res) => res.send("Using port: "+ port)
    .get('/sql', (req, res) => res.send(process.env.MYSQLCONNSTR_localdb)))
    .use('/profile', allInfoController);

app.listen(port, () => console.log(`Running app on http://localhost:${port}`));