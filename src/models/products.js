const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    category:String,
    filter: String,
    price: Number
},{collection:'products'})

module.exports = mongoose.model('Product',productSchema)