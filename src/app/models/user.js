const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  user = new Schema(
    {
        email: {type: String, maxlength: 255},
        password: {type: String, maxlength: 255}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('user', user);