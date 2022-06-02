const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

// -------------------------------------------------- //

mongoose.plugin(slug);
const product = new Schema(
    {
        name: {type: String, require: true},
        oldPrice: {type: String, maxlength: 100},
        newPrice: {type: String, maxlength: 100},
        saled: {type: String, maxlength: 100},
        origin: {type: String, maxlength: 255},
        saleOff: {type: String, maxlength: 100},
        reviews:{type: String, maxlength: 100},
        image_1: {type: String, maxlength: 300},
        image_2: {type: String, maxlength: 300},
        image_3: {type: String, maxlength: 300},
        image_4: {type: String, maxlength: 300},
        slug: {type: String, slug: 'name', unique: true}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('product', product);