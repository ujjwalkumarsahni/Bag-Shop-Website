const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    cart:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    }],
    orders: {
        type: Array,
        default: []
    },
    contact: Number

});

const user = mongoose.model('user', userSchema);

module.exports = user;