const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Le titre est obligatoire'],
    trim: true,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "L'utilisateur est obligatoire"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
    {
        timestamps: true,
    });

module.exports = mongoose.model('Task', taskSchema);