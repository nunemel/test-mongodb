//DB_CONNECT = mongodb+srv://devnune:rhino1@cluster0-4qdz2.mongodb.net/test?retryWrites=true&w=majority
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//Import Routes
const authRoute = require('./routes/auth');

// Connect to DB
mongoose.connect(process.env.DB_CONNECT,
{   useNewUrlParser: true,
    useUnifiedTopology: true },
() => {
    console.log('connected to DB');
});


app.use(bodyParser.urlencoded({ extended: false }));
//Middleware
app.use(express.json());

//Route Middleware
app.use('/api/user', authRoute);


app.listen(3000, () => console.log('Server up and running'));