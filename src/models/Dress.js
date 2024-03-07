import mongoose from "mongoose";
const { Schema } = mongoose;

const dressSchema = new Schema({
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    mrp: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        default: 0,
    },
    currency: {
        type: String,
        default: 'INR',
    }
});

export const Dress = mongoose.models.Dress ||  mongoose.model('Dress', dressSchema);
