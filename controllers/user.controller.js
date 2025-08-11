const User = require('../models/user.model');
const userService = require('../services/user.service');

// créer un utilisateur
exports.createUser = async (req, res) => {
  try {
   // const user = new User(req.body);
    const savedUser = await userService.createUser(req.body);
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Récuperer tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    if (users.length === 0) {
      return res.status(404).json({ message: 'La collection est vide' });
    }
    return res.status(201).json(users);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// Récuperer un seule utilisateur
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.getUserById(id);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mise à jour l'utilisateur
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.updateUserById(id, req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Suppression d'un utilisateur
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.deleteUser(id);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};