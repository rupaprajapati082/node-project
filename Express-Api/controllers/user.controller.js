const  userService = require('../services/user.service');

const {validationResult} = require('express-validator');

const userModel = require('../models/user.model');

module.exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
const {username,email,password} = req.body;
   //check user already exist or not in database
   let isExist = await userModel.findOne({email: email});
   if (isExist) {
       return res.status(400).json({message: 'User already exists'});
   }
   const hashPassword = await userModel.hashPassword(password);
   const user = await userService.createUser({username,email,password: hashPassword});
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

    res.status(200).json({message: 'User logged in successfully', user: checkUser, token})
};