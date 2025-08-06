const Task = require('../models/task');
const mongoose = require('mongoose');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate('assignedTo','name email -_id').lean();
    if (!tasks || tasks.length === 0) {
      res.status(404).json({
        message: `Aucune donnée n'a encore enregistré dans la base de données`,
      });
    }
    return res.json(tasks);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createTask = async (req, res) => {
  try {
      const { title, description, assignedTo } = req.body;

    const task = new Task({
      title,
        description,
        assignedTo,
    });
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404);
      throw new Error(`ID de tache non valide`);
    }
    const task = await Task.findById(id);
    if (!task) {
      res.status(404);
      throw new Error(`Tache non trouvée`);
    }
    return res.json(task);
  } catch (err) {
    next(err);
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        completed: req.body.completed,
      },
      { new: true, runValidators: true }
    );
    if (!task) {
      return res.status(404).json({ message: `Tache n'a pas été trouvé` });
    }
    return res.json(task);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      res.status(404).json({ message: `Tache n'a pas été trouvé` });
    }
    res.json({ message: `Tache supprimé` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};