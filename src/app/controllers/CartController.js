const Product = require('../models/product');
const {singleMongooseToObject} = require('../../mongooseObjects/mongoose');
const Cart = require('../models/cart');

class CartController {
    // show(req, res, next){
    //     var cart = new Cart(req.session.cart ? req.session.cart : {items: {}})
    //     Product.findOne({ _id: req.params.id }, function(err, product) {
    //         if(err){
    //             return res.redirect('/');
    //         }
    //         cart.add(product, product.id);
    //         req.session.cart = cart;
    //         console.log(req.session.cart);
    //         res.redirect('/');

    //     })
    // }
    addToCart(req, res, next){
        // var slug = req.params.slug;
        // var name = req.params.name;
        // Product.findOne({slug: slug}, function(err, p){
        //     if(err){
        //         console.log(err);
        //     }
        //     if(typeof req.session.cart == "undefined"){
        //         req.session.cart = [];
        //         req.session.cart.push({
        //             name: name,
        //             qty: 1,
        //             price
        //         })
        //     }
        // })
    }
}

module.exports = new CartController();