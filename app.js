const express = require('express');
const app = express();
require('dotenv').config();

const db = require('./dataBase').getInstance();
db.setModels();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const {userRouter, authRouter} = require('./routes');

app.use('/user', userRouter);
app.use('/auth', authRouter);


app.all('*', (req, res) => {
    res.status(404).end();
});

app.listen(process.env.PORT, (err) => {
    console.log(`server is up on ${process.env.HOST}:${process.env.PORT}`);
});
