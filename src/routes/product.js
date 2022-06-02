const express = require('express');
const router = express.Router();
const productsController = require('../app/controllers/ProductController');

router.get('/:slug', productsController.detailProduct);

module.exports = router;