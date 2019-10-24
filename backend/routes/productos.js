const express = require('express');
const router = express.Router();
const cors = require('cors');
const products = require("../controllers/products");


router.options('/', cors())
router.get('/', cors(), products.getAll);
router.get('/:productId',  cors(), products.getById);
router.post('/',  cors(), products.save);
router.patch('/:productId',  cors(), products.update);
router.post('/seed',  cors(), products.seed)


module.exports = router;