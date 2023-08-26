const mongoose = require('mongoose')

// CONNECT TO MONGODB SERVER

module.exports = function dbConnect(uri){
    mongoose.set("strictQuery",false)
    mongoose
    .connect(uri, {})
    .then(() => console.log('Successfully connected to mongodb'))
    .catch(e => console.error(e));
};