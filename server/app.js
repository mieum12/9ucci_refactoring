const express = require('express');
const dbConnect = require('./src/loader/dbConnect.js')
const app = express();
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const ENV = require('./src/config/index')
const { MONGO_URI, PORT } = ENV;
dbConnect(MONGO_URI);
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser())
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


const cors = require('cors');
app.use(cors({
    origin: true,
    credentials: true
  }));

const routers = require ('./src/routes/index.js')
app.use('/',routers)
