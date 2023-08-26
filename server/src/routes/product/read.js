const {Router} = require ('express');
const read = require('../../services/product/read.js');

const router =Router();

router.get('/', read);
router.get('/:id', read);
module.exports = router;