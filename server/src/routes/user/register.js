const {Router} = require ('express')
const register = require('../../services/user/register.js')

const router =Router();

router.post('/',register);
module.exports = router;