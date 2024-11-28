const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Task title is required'],
        },
        description: {
            type: String,
        },
        isCompleted: {
            type: Boolean,
            default: false,
        },
        dueDate: {
            type: Date, 
        },
        category: {
            type: String, 
            default: 'General',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Task', taskSchema);
