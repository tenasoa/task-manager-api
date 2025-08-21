const userRepository = require('../repositories/user.repository');
const UserDto = require('../dtos/user.dto');

exports.getAllUsers = async (filters, options) => {
    const users = await userRepository.findAll(filters, options);
    return users.map(user => new UserDto(user));
}

exports.getUserById = async (id) => {
    const user = await userRepository.findById(id);
    return user ? new UserDto(user) : null;
};
exports.createUser = async (data) => userRepository.create(data);
exports.updateUserById = async (id, data) => userRepository.updateBydId(id, data, { new: true, runValidators: true})
exports.deleteUser = async (id) => userRepository.delete(id);