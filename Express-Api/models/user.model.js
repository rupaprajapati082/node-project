const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//add first validation --->database validation 
let userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 5,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        select: false, //find query --- select false --> response 
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin','manager'],
        default: 'user',
    },
   
});
//create a method for jwt token

userSchema.methods.generateJwtToken = function() {
   let token = jwt.sign({_id: this._id}, process.env.JWT_SECRET_KEY, {expiresIn: '7d'});
   return token;

};

//create a method for compare password bcrypted
userSchema.statics.hashPassword = async function(password) {
    let hash = await bcrypt.hash(password, 10);
    return hash;
};

userSchema.methods.comparePassword = async function(password) {
    let result = await bcrypt.compare(password, this.password);
    return result;
};
//this.password --> database saved user's password

module.exports = mongoose.model('User', userSchema);
//user --> databsase collection name (users) --> mongoose will automatically convert model name to plural and small letter and create collection in database with that name (users)
//userSchema --> database table structure (schema) --> mongoose schema