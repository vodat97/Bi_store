const product = require('../models/product');
const {mutipleMongooseToObject} = require('../../mongooseObjects/mongoose');

// ----------------------------------------------------------------- //
class HomeController {
    index(req, res, next) {
        product
            .find({})
            .then((products) => {
                res.render('home', { products: mutipleMongooseToObject(products) });
                //res.json(products);
                
            })
            .catch((error) => next(error))
    }
}

module.exports = new HomeController();