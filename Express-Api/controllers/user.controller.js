const  userService = require('../services/user.service');

const {validationResult} = require('express-validator');

const userModel = require('../models/user.model');

module.exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
const {username, email, password} = req.body;
   //check user already exist or not in database
   let isExist = await userModel.findOne({email: email});
   if (isExist) {
       return res.status(400).json({message: 'User already exists'});
   }
   const hashPassword = await userModel.hashPassword(password);
   const user = await userService.createUser({username, email, password: hashPassword});
   let token = await user.generateAuthToken();
   res.status(200).json({message: 'User registered successfully', user, token});
};