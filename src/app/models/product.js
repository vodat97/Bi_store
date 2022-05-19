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
        image: {type: String, maxlength: 300}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('product', product);