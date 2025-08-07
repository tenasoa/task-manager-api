const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Le titre est obligatoire'],
    minLength:[5, 'Le titre ait au moins 5 caractères'],
    trim: true,
      validate: {
        validator: (value) => !/\d/.test(value),
        message: 'Le titre ne peut pas contenir de chiffres',
      }
  },
  description: {
    type: String,
      maxLength: [100, 'La description ne dépasse pas 100 caractères'],
      validate: {
        validator: (value) => !/urgent/i.test(value),
          message: 'La description ne doit pas contenir "urgent"'
      }
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

module.exports = mongoose.models.Task || mongoose.model('Task', taskSchema);