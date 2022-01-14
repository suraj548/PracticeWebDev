const { string } = require('mathjs');
const mongoose = require('mongoose');
const Message = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    }, 
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
    }
}) 
var message = mongoose.model('Message',Message,'message')
module.exports = message