const {Router} =require ('express');
const login = require('../../services/user/login') 

const router = Router()
router.post('/',login);
module.exports = router