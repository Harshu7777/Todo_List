const Task = require('../models/TaskModel');

const getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json(tasks);
};

const createTask = async (req, res) => {
    const { title, description, dueDate, category } = req.body;

    if (!title) {
        res.status(400);
        throw new Error('Task title is required');
    }

    const task = await Task.create({ title, description, dueDate, category });

    res.status(201).json(task);
};

const updateTask = async (req, res) => {
    const task = await Task.findById(req.params.id);

    if (!task) {
        res.status(404);
        throw new Error('Task not found');
    }

    const { title, description, isCompleted, dueDate, category } = req.body;

    if (task.isCompleted && isCompleted) {
        res.status(400);
        throw new Error('Task is already marked as completed');
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.isCompleted = isCompleted ?? task.isCompleted;
    task.dueDate = dueDate || task.dueDate;
    task.category = category || task.category;

    const updatedTask = await task.save();

    res.status(200).json(updatedTask);
};

const deleteTask = async (req, res) => {

    const { id } = req.params;

    const task = await Task.findById(req.params.id);

    if (!task) {
        res.status(404);
        throw new Error('Task not found');
    }

    await Task.deleteOne({ _id: id });
    
    res.status(200).json({ message: 'Task removed Successfully' });
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
}
