const {Router} = require ('express');
const remove = require('../../services/product/delete.js');

const router =Router();

router.delete('/:id', remove);

module.exports = router;