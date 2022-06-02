const Product = require('../models/product');
const {singleMongooseToObject} = require('../../mongooseObjects/mongoose');

class CartController {
    show(req, res, next){
        res.render('cart');
    }
}

module.exports = new CartController();