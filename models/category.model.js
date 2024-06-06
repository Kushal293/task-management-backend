import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {
        category: {
            type: String,
            required: true,
        },
        tasks: {
            type: Schema.Types.ObjectId,
            ref: "Task",
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);


export const Category = mongoose.model("Category", categorySchema);