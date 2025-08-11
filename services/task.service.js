const taskRepository = require('../repositories/task.repository');

exports.creatTask = async (data) => {
    const task = await taskRepository.create(data);
    return task;
}

exports.getAllTasks = async (filters, options) => {
    const tasks = await taskRepository.findAll(filters, options);
    return tasks;
}

exports.getTaskById = async (id) => {
    const task = await taskRepository.findById(id);
    return task;
}

exports.updateTask = async (id, data) => {
    const task = await taskRepository.update(id, data);
    return task;
}

exports.deleteTask = async (id) => {
    const task = await taskRepository.delete(id);
    return task;
}