const userModel = require('../models/user.model');

//third validation --> check all field are not empty

module.exports.createUser = async ({username,email,password,role}) => {
    if (!username || !email || !password) {
        throw new Error('All fields are required');
    }
    //check email already exist or not
    const user = await userModel.create({username,email,password,role});
    return user;



};

//update user
module.exports.updateUser = async ({userId ,username, email}) => {
if (!username || !email) {
    throw new Error('All fields are required');
}

const updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { username, email }, { new: true });
if (!updatedUser) {
    throw new Error('User not found');
}
return updatedUser;
};