const {Router} = require ('express');
const read = require('../../services/order/read.js');

const router =Router();

//router.get('/', read);
router.get('/', read);
module.exports = router;