const {Router} =require ('express');
const update = require('../../services/userInfo/update') 

const router = Router()

router.put('/', update);
module.exports = router

