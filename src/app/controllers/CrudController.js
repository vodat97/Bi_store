const products = require('../models/product');
const { mutipleMongooseToObject } = require('../../mongooseObjects/mongoose');
const { singleMongooseToObject } = require('../../mongooseObjects/mongoose');

class CrudController{
    //[GET] /crud/listProduct
    listProduct(req, res, next) {
        products
            .find({})
            .then((products) => {
                //res.json(products);
                res.render('crud/listProduct',{products: mutipleMongooseToObject(products)});
            })
            .catch(next);
    }
    delete(req, res, next) {
        products.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[GET] crud/create
    create(req, res, next) {
        res.render('crud/create');
    }
    post(req, res, next) {
        //res.json(req.body);
        const formData = req.body;
        const product = new products(formData);
        product
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {})
    }
    edit(req, res, next) {
        //res.json(req.body);
        // res.render('crud/edit')
        products.findById(req.params.id)
            .then((product) =>
            res.render('crud/edit', {
                    product: singleMongooseToObject(product),
                }),
            )
            .catch(next);
    }
    update(req, res, next) {
        console.log({_id: req.params.id});
        products.updateOne({_id: req.params.id}, req.body)
        .then(() => {
            console.log({_id: req.params.id})
            res.redirect('/crud/list-product')
        })
        .catch(next);
    }
}

module.exports = new CrudController();