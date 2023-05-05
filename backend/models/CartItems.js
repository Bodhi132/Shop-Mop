const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    image:{
        type:String,
        required:true,
        trim:true
    },
    item:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    subtotal:{
        type:Number,
        required:true,
    },
    purchaser:{type:Schema.Types.ObjectId, ref:'User'}
})

const Cart = mongoose.model('Cart',cartSchema)

module.exports = Cart