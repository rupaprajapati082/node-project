//ejs --> file.ejs,<% %>,<%= %>
const express = require("express");
const app = express();
const fs = require("fs");
const { error } = require("console");
// const path = require("path");


//if you want to read data from frontend below two lines are importans
app.use(express.json());
 //usecase--> read json type data from frontend


app.use(express.urlencoded({ extended: true }));
//usecase--> read form data from frontend


// Set the view engine to ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    fs.readdir("./tasks", (e,files) => {
           console.log(files);
        if (e) throw error;
       res.render("index", { data: files });
});
    });
  

//create (create txt files)==>post
app.post("/create", (req, res) => {
    console.log(req.body);
   
let Task_data = `Title: ${req.body.title}\n Task: ${req.body.task}`;

//craete a file
fs.writeFile(`./tasks/${req.body.title.split(' ').join('')}.txt`
    , Task_data,(err) => {
        if (err) throw error;
    },
);
res.redirect("/");
  
});



//read files(open files)==>get
app.get("/files/:filename", (req, res) => {
    // console.log(req.params);
    // res.send(req.params);
    res.render("read");
});

// //read file name and edit 
// app.get("/files/:filename", (req, res) => {
//     const filename = req.params.filename;
//     res.send(`Content of file: ${filename}`);
// });

app.listen(3000, () => {
    console.log("check on you browser: http://localhost:3000 ");
});