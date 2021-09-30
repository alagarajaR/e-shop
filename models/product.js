const mongoose = require('mongoose');

// Create Product Scheme
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    description :{
        type: String,
        requi : true
    },
    richDescription : {
        type: String,
        default :  ''
    },
    image: {
        type: String,
        default :  ''
    },
    images: [{
        type: String,
    }],
    brand: {
        type: String,
        default :  ''
    },
    price: {
        type: Number,
        default :  0
    },
    catgory: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Category',
        required : true
    },
    countInStock: {
        type: Number,
        required : true,
        min : 0,
        max : 255
    },
    numReviews: {
        type: Number,
        default :  0
    },
    rating: {
        type: Number,
        default :  0
    },
    isFeatured: {
        type: Boolean,
        default :  false
    },
    dateCreated :{
        type : Date,
        default : Date.Now,
        
    }
})

// Create Model
exports.Product = mongoose.model('Product',productSchema)