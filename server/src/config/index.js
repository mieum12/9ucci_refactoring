require('dotenv').config(); 

const { MONGO_URI, PORT , JWT_TOKEN_KEY} = process.env;

module.exports = {MONGO_URI,PORT,JWT_TOKEN_KEY}