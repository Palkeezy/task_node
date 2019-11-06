const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.all('*', (req, res) => {
    res.status(404).end();
});

app.listen(process.env.PORT, (err) => {
    console.log(`server is up on ${process.env.HOST}:${process.env.PORT}`);
});
