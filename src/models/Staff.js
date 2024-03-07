import mongoose from "mongoose";
const { Schema } = mongoose;

const staffSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    joiningDate: {
        type: Date,
        default: Date.now,
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
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        maxlength: 10,
    },
    amountOwe: {
        type: Number,
        default: 0,
    },
    transactions: [{
        type: Schema.Types.ObjectId,
        ref: 'Transactions'
    }]
});
export const Staff = mongoose.models.Staff || mongoose.model('Staff', staffSchema);
