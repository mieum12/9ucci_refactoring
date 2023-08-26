const {Router} = require ('express');
const create = require('../../services/product/create.js');

const router =Router();

router.post('/', create);

module.exports = router;