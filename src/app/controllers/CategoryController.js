const { singleMongooseToObject } = require('../../mongooseObjects/mongoose');
const {categorySchema} = require('../models/category');

class CategoryController {
    index(req,res,next){
        categorySchema.find(function(err, categories){
            if(err) return console.log(err);
            res.render('categories/category', {categories: categories})
        }).lean()
    }
    delete(req, res, next) {
        categorySchema.deleteOne({_id: req.params.id})
            .then(() => {
                console.log(req.params.id)
                res.redirect('back')
            })
            .catch(next)
    }
    create(req, res, next) {
        res.render('categories/create');
    }
    post(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        const category = new categorySchema(formData);
        category
            .save()
            .then(() => res.redirect('/category'))
            .catch(next);
    }
    edit(req, res, next) {
        categorySchema.findById({_id: req.params.id}, req.body)
            .then((category) => {
                res.render('categories/edit', {
                    category: singleMongooseToObject(category)
                })
            })
            .catch(next)
    }
    update(req, res, next) {
        categorySchema.updateOne({_id: req.params.id}, req.body)
            .then(() => {
                res.redirect('/category')
                
            })
            .catch(next)
    }
}

module.exports = new CategoryController();