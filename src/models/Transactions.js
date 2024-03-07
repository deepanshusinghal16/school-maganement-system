import mongoose from "mongoose";
const { Schema } = mongoose;

const transactionsSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
    },
    assignedBy: {
        type: Schema.Types.ObjectId,
        ref: 'Staff',
    },
    typeOfTransaction: {
        type: String,
        enum: ['feesPayment', 'itemPurchase'],
        required: true,
    },
    feesPayment: {
        month: {
            type: String,
            required: true,
        },
        year: {
            type: String,
            required: true,
        },
    },
    purchase: {
        itemType: {
            type: String,
            required: true,
        },
        itemId: {
            type: Schema.Types.ObjectId,
            required: true,
            refPath: 'purchase.itemType',
        },
        quantity: Number,
    },
    amountPayable: {
        type: Number,
        required: true,
    },
    amountRecived: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

export const Transactions = mongoose.models.Transactions || mongoose.model('Transactions', transactionsSchema);
