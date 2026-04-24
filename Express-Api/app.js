//setup env file
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//router
const userRouter = require('./routes/web/user.route');
const adminRouter= require('./routes/web/admin.route');
const productRouter = require('./routes/web/product.route');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db();
app.use(cookieParser());

//cors origin --> allow only that website or port that mentioned in origin to access the backend 
// server 3002 requests other than give cors origin error

app.use(cors({origin: 'http://localhost:3002' , credentials: true}));
//to excess env values in file:
//backend (node + express) --> process.env.(env file variable name) --> process.env.PORT

//frontend (react) --> import.meta.env.(env file variable name)
PORT = process.env.PORT;

//home route (temp route ) --> in backend we dont create a home route but for testing /development --> remopve home route 
app.get("/", (req, res) => {
    res.send('server homepage ');
});
app.use('/user', userRouter);

app.use("/admin", adminRouter);

app.use("/product", productRouter);


app.listen(PORT, () => {        
    console.log(`✅server is running on port ${PORT}`);
});










































