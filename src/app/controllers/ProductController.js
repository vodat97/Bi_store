const Product = require('../models/product');
const { singleMongooseToObject } = require('../../mongooseObjects/mongoose');
const { mutipleMongooseToObject} = require('../../mongooseObjects/mongoose');

class ProductController {
    // [GET] product/detailProduct
    detailProduct(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then((product) => {
                //res.json(product);
                res.render('product/detailProduct', {product: singleMongooseToObject(product)});
            })
            .catch(next)
    }

    
}

module.exports = new ProductController();