import mongoose from "mongoose";
const { Schema } = mongoose;

const classSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }],
    fee: {
        type: Number,
        required: true,
    },
});

export const Class = mongoose.models.Class || mongoose.model('Class', classSchema);
