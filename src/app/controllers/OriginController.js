const { singleMongooseToObject } = require('../../mongooseObjects/mongoose');
const {originSchema, categorySchema} = require('../models/category');

class OriginController{
    index(req, res, next){
        originSchema.find((err, origin) => {
            if(err) return console.log(err);
            res.render('origins/origin', {origin: origin})
        }).lean();
    }
    delete(req, res, next) {
        originSchema.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    create(req, res, next){
        res.render('origins/create');
    }
    post(req, res, next) {
        const formData = req.body;
        const origin = new originSchema(formData);
        origin
            .save()
            .then(() => res.redirect('/origin'))
            .catch(next);
    }
    edit(req, res, next){
        originSchema.findById({_id: req.params.id})
            .then((origin) => {
                res.render('origins/edit', {
                    origin: singleMongooseToObject(origin)
                })
            })
    }
    update(req, res, next) {
        originSchema.updateOne({_id: req.params.id}, req.body)
            .then(() => {
                res.redirect('/origin')
            })
            .catch(next);
    }
}

module.exports = new OriginController();