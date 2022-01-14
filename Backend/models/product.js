const mongoose = require('mongoose');
const Product = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    }, 
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    }
}) 
var product = mongoose.model('Product',Product,'products')
module.exports = product