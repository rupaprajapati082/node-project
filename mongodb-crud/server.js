const express = require('express');
const app = express();
const UserModel = require("./models/users.model");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ejs
app.set("view engine", "ejs");
//ejs engine --> view folder

app.get("/", (req, res) => {
    res.render("index");
});

//crud
app.post("/create", async (req, res) => {
  let{fname,uname,email,img} = req.body; //object destructuring
  let CreateUser = await UserModel.create({
    fullname: fname,
    username: uname,
    email: email,
    image: img,
  });
  res.send(CreateUser);
  res.redirect("/card");
});

//read

app.get("/card", async (req, res) => {
let card = await UserModel.find();
    res.render("card", { data:card });
});


//update
app.get("/update", async (req, res) => {
   let updateUser = await UserModel.findOneAndUpdate({ name: 'tisha prajapati' },
     { email: 'tishaprajapati082@gmail.com' },
     {new:true}
    );
    res.send(updateUser);
});
//delete
app.get("/delete", async (req, res) => {
    let deleteUser = await UserModel.findOneAndDelete({ name: 'vidhi prajapati' });
    res.send(deleteUser);
});


app.listen(3000, () => {
    console.log("server is running on port 3000");
});