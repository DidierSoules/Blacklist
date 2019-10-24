const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    list_price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    enabled: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('Products', ProductSchema);