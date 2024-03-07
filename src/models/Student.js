import mongoose from "mongoose";
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    class: {
        type: Schema.Types.ObjectId,
        ref: 'Class',
    },
    admissionDate: {
        type: Date,
        default: Date.now,
    },
    fathers_Name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String
    },
    phoneNo: {
        type: String,
        maxlength: 10,
    },
    amountPending: {
        type: Number,
        default: 0,
    },
    transactions: [{
        type: Schema.Types.ObjectId,
        ref: 'Transactions'
    }]
});

export const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

