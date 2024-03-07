import mongoose from "mongoose";
const { Schema } = mongoose;

const inventorySchema = new Schema({
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book',
    }],
    notebooks: [{
        type: Schema.Types.ObjectId,
        ref: 'Notebook',
    }],
    dresses: [{
        type: Schema.Types.ObjectId,
        ref: 'Dress',
    }],
});

export const Inventory = mongoose.models.Inventory || mongoose.model('Inventory', inventorySchema);
