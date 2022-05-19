const Product = require('../models/product');
const { singleMongooseToObject } = require('../../mongooseObjects/mongoose');

class ProductController {
    // [GET] /product/create
    create(req, res, next) {
        res.render('product/create');
    }
    // [POST] /product/store
    store(req, res, next) {
        res.json(req.body);
        // const formData = req.body;
        // const product = new Product(formData);
        // product
        //     .save()
        //     .then(() => res.redirect('/'))
        //     .catch((error) => {})
    }
}

module.exports = new ProductController();