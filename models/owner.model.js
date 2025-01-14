const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    products:{
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String,
    gstin: String

});

const owner = mongoose.model('owner', ownerSchema);

module.exports = owner;