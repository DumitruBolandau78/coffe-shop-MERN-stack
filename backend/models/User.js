import { Schema, model } from "mongoose";

const User = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cart: [
        {
            type: Schema.Types.ObjectId,
            ref: 'products'
        }
    ]
})

export default model('users', User)