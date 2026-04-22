const  userService = require('../services/user.service');

const {validationResult} = require('express-validator');

const userModel = require('../models/user.model');

module.exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
const {username,email,password,role} = req.body;
   //check user already exist or not in database
   let isExist = await userModel.findOne({email: email});
   if (isExist) {
       return res.status(400).json({message: 'User already exists'});
   }
   const hashPassword = await userModel.hashPassword(password);
   const user = await userService.createUser({username,email,password: hashPassword ,role});
   let token = await user.generateJwtToken();
   res.status(200).json({message: 'User registered successfully', user, token});
};

module.exports.loginUser = async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email,password} = req.body;
    let checkUser = await userModel.findOne({email: email}).select('+password');
    if (!checkUser) {
        return res.status(401).json({message: 'Invalid email or password'});
    }
    const isMatch = await checkUser.comparePassword(password);
   if (!isMatch) {
       return res.status(401).json({message: 'Invalid email or password'});
   }
    const token = await checkUser.generateJwtToken();
    res.cookie('token', token,);
    res.status(200).json({message: 'User login successfully', user: checkUser, token})

};

module.exports.profileUser = async (req, res) => {
    res.status(200).json({message: 'User profile retrieved successfully', user: req.user});
};

//update users
module.exports.updateProfile = async (req, res) => {
    const userId = req.user._id;  
       const {username,email} = req.body;

       const user = await userService.updateUser({userId, username, email});

       if(!user) {
        return res.status(404).json({message: 'User not found'});
       }
       return res.status(200).json({message: 'User profile updated successfully', user});

};

//logout user
module.exports.logoutUser = async (req, res) => 
{
    res.clearCookie('token');
    return res.status(200).json({message: 'User logged out successfully'});
};