const mongoose = require('mongoose');

function conectToDb() {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('📊 Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
      
    }); 
}
module.exports = conectToDb;

