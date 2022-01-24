const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//Import Route
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')


dotenv.config();

//Connect to Db
mongoose.connect(process.env.DB_CONNECT,
    {useNewUrlParser:true },
    ()=>console.log('connected to db!')
);

//Miidleware
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, ()=> console.log('Up and running'));