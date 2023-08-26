const {Router} = require ('express');
const update = require('../../services/order/update.js');

const router = Router();

router.put('/:id', update);

module.exports = router;

