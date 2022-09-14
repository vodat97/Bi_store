const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

// -------------------------------------------------- //

mongoose.plugin(slug);
const product = new Schema(
    {
        name: {type: String, require: true},
        oldPrice: {type: Number},
        newPrice: {type: Number},
        saled: {type: Number},
        origin: {type: String, maxlength: 255},
        saleOff: {type: Number},
        reviews:{type: Number},
        category:{type: String},
        description:{type: String},
        image: {type: String},
        image_1: {type: String, maxlength: 300},
        image_2: {type: String, maxlength: 300},
        image_3: {type: String, maxlength: 300},
        image_4: {type: String, maxlength: 300},
        slug: {type: String, slug: 'name', unique: true}
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('product', product);