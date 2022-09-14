const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug);
const category = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            slug: 'title',
            unique: true
        }
    }
);
const origin = new Schema(
    {
        title:{
            type: String,
            required: true
        },
        slug:{
            type: String,
            slug: 'title',
            unique: true
        }
    }
);

const categorySchema = mongoose.model('category', category);
const originSchema = mongoose.model('origin', origin);

module.exports = {categorySchema, originSchema}
