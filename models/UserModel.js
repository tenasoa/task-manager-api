const mongoose = require('mongoose');
const {formatTitle} = require("../middleware/task.middleware");
const {formatName, logUserCreation} = require("../middleware/user.middleware");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Le nom est obligatoire'],
    trim: true,
    minLength: [2, 'Le nom doit contenir au mois 2 caractères'],
    maxLength: [50, 'Le nom doit contenir mois de 50 caractères'],
  },
  email: {
    type: String,
    required: [true, "L'email est obligatoire"],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "L'email n'est pas valide",
    ],
  },
  age: {
    type: Number,
    min: [0, 'Age minimum: 0'],
    max: [150, 'Age maximum: 150'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware pre save: formater le nom
userSchema.pre('save', formatName);
userSchema.post('save', logUserCreation);

module.exports = mongoose.models.User || mongoose.model('User', userSchema);