const mongoose = require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/user-card");

//schema  --> document look
const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    username: String,
    image: String,
},{
    timestamps: true
    });

    module.exports = mongoose.model("User", userSchema);