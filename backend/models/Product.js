import mongoose from "mongoose";

const Product = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    newPrice: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    text: {
        type: String,
        default: ''
    }
})

export default mongoose.model('products', Product);