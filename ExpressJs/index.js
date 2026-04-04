// const express = require("express"); --type =>commonjs
//import express from "express"; --- Itype =>commonjs   
import express from "express"; 
const app = express();  
import path from "path";



//middleware : that run before all routes ,you can create multiple middlewares in server
//use case : user data verification, authentication, cookies management, etc
app.use(function(req, res, next)    {            
    console.log("Middleware is running!!");
   next();//important to run next code
});

//create a route
//app.get('frontend path', callback function)
app.get("/", function(req, res) {
    res.send("Hello Rups Prajapati!!");
});

// app.listen(3000, (e) => {
//     console.log("check on you browser: http://localhost:3000");
//     console.log(e);
// });

app.get("/profile", function(req, res) {
    res.send("This is Profile Page!!");
});

app.get("/login", function(req, res) {
    res.send("Welcome To Login Page!!");
});

// render file
app.get("/signup", (req, res) => {
    const __dirname = path.resolve();
    const filePath = path.join(__dirname, "view", "index.html");
    res.sendFile(filePath);
});

// error handling : always write after all routes
app.use(function (req, res, next) {
    res.status(404).send("Not Found");
    res.status(500).send("Something went wrong!!");
});

app.listen(1234);
 console.log("check on you browser: http://localhost:1234");