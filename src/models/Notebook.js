import mongoose from "mongoose";
const { Schema } = mongoose;

const notebookSchema = new Schema({
    name: {
        type: String,
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

export const Notebook = mongoose.models.Notebook || mongoose.model('Notebook', notebookSchema);
