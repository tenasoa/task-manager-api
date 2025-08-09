const Task = require('../models/task.model');

class TaskRepository {
    async findAll(filter = {}, options = {
}) {
    const { skip = 0, limit = 10 , sort  = { createdAt: -1 } } = options;
    return Task.find(filter)
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .populate('assignedTo', 'name email');
    }

    async findById(id) {
        return Task.findById(id).populate('assignedTo', 'name email');
    }

    async create(data) {
        const task = await Task(data);
        return task.save();
    }

    async update(id, data) {
        return Task.findByIdAndUpdate(id, data, { new: true , runValidators: true });
    }

    async delete(id) {
        return Task.findByIdAndDelete(id);
    }
}

module.exports = new TaskRepository;