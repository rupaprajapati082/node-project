// const express = require("express"); --type =>commonjs
//import express from "express"; --- Itype =>commonjs   
import express from "express"; 
const app = express();  

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

app.get("/signup", function(req, res) {
    res.render("index");
});

app.listen(3000);
 console.log("check on you browser: http://localhost:3000");