const {Router} = require ('express');
const deleteOrder = require('../../services/order/delete.js');

const router = Router();

router.delete('/:id', deleteOrder);
//router.delete('/', deleteOrder);

module.exports = router;