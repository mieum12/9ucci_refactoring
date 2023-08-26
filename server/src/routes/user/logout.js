const {Router} =require ('express');
const logout = require('../../services/user/logout') 

const router = Router()

router.get('/',logout);
module.exports = router