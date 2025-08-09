const User = require('../models/user.model');

class UserRepository {
    async create(userData) {
        const user = new User(userData);
        return await user.save();
    }

    async findById(id) {
        return await User.findById(id);
    }

     async findAll(filters = {}, options = {}) {
        const { skip = 0, limit = 10, sort = { createdAt: -1} } = options;
        return await User.find(filters).skip(skip).limit(limit).sort(sort);
    }

    async updateBydId(id, updateData) {
        return await User.findByIdAndUpdate(id, updateData, { new: true });
    }

    async delete(id) {
        return await User.findByIdAndDelete(id);
    }
}

module.exports = new UserRepository();