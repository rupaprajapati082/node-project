const userModel = require('../models/user.model');

//third validation --> check all field are not empty

module.exports.createUser = async ({username, email, password}) => {
    if (!username || !email || !password) {
        throw new Error('All fields are required');
    }
    //check email already exist or not
    const user = await userModel.create({username, email, password});
    return user;



};

//next create a controller for register