import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Enter the title of task."],
        },
        description: {
            type: String,
            required: [true, "Enter description of task."],
        },
        completed: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

export const Task = mongoose.model("Task", taskSchema);
