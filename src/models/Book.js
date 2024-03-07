import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
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

export const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);
