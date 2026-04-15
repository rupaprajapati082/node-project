//setup env file
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const db = require('./config/db');
const userRoute = require('./routes/web/user.route');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db();
//to excess env values in file:
//backend (node + express) --> process.env.(env file variable name) --> process.env.PORT

//frontend (react) --> import.meta.env.(env file variable name)
PORT = process.env.PORT;

//home route (temp route ) --> in backend we dont create a home route but for testing /development --> remopve home route 
app.get("/", (req, res) => {
    res.send('server homepage ');
});
app.use('/user', userRoute);
app.listen(PORT, () => {        
    console.log(`✅server is running on port ${PORT}`);
});










































