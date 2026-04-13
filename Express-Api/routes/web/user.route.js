const express = require('express');
const {body} = require('express-validator');
const userController = require("../../controllers/user.controller");

const router = express.Router();



//register user
//second validator --user express validator package
router.post('/register', [body('username').isLength({min: 5}).withMessage('Username must be at least 5 characters long')
    , body('email').isEmail().withMessage('Please provide a valid email'),
     body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
    ]
     ,userController.registerUser
    );
module.exports = router;