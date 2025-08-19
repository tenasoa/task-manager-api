const userRepository = require('../repositories/user.repository');

exports.getAllUsers = async () => userRepository.findAll();
exports.getUserById = async (id) => userRepository.findById(id);
exports.createUser = async (data) => userRepository.create(data);
exports.updateUserById = async (id, data) => userRepository.updateBydId(id, data, { new: true, runValidators: true})
exports.deleteUser = async (id) => userRepository.delete(id);