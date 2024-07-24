// models/Teacher.js

const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  quizzesCreated: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz'
  }]
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
