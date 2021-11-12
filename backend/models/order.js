const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem',
        required:true
    }],
    shippingAddress1: {
        type: String,
        required: true,
    },
    shippingAddress2: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'Pending',
    },
    totalPrice: {
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    dateOrdered: {
        type: Date,
        default: Date.now,
    },
})

orderSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

orderSchema.set('toJSON', {
    virtuals: true,
});

exports.Order = mongoose.model('Order', orderSchema);


/**
Order Example:
{
    "orderItems" : [
        {
            "quantity": 3,
            "product" : "61616c6e28218242e6e2e7b4"
        },
        {
            "quantity": 2,
            "product" : "61612a96f1eab67efb05b0c0"
        }
    ],
    "shippingAddress1" : "Kannamal Street",
    "shippingAddress2" : "Gurusamy Nagar",
    "city": "Chennai",
    "zip": "600094",
    "country": "India",
    "phone": "+9876543210",
    "user": "618d3c279e1054d73d460059"
}
 */