const products = require('../models/product');
const {originSchema, categorySchema} = require('../models/category');

const { mutipleMongooseToObject } = require('../../mongooseObjects/mongoose');
const { singleMongooseToObject } = require('../../mongooseObjects/mongoose');

var mkdir = require('mkdirp');
var fs = require('fs-extra');
var resizeImg = require('resize-img');




class CrudController{
    //[GET] /crud/listProduct
    listProduct(req, res, next) {
        var count;
        products.count(function(err, c) {
            count = c;
        })
        products
            .find({})
            .then((Products) => {
                // res.json(products);
                res.render('crud/listProduct',{
                    Products: mutipleMongooseToObject(Products),
                    count: count
                });
            })
            .catch(next);
    }
    delete(req, res, next) {
        products.deleteOne({ _id: req.params.id })
            .then(() => {res.redirect('back')})
            .catch(next)
    }
    //[GET] /crud/create
    create(req, res, next) {
        categorySchema.find(function(err, cate){
            originSchema.find(function(err, ori){
                res.render('crud/create', {
                    categories: cate,
                    origins: ori,
                })
            }).lean()
        }).lean();
    }
//[POST] /crud/post
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
        //res.render('crud/edit')
        categorySchema.find(function(err, cate){
            originSchema.find(function(err, orig){
                products.findById(req.params.id)
                    .then((product) => {
                        res.render('crud/edit', {
                            product: singleMongooseToObject(product),
                            category: cate,
                            origin: orig
                        })
                        
                    })
            }).lean()
        }).lean()
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