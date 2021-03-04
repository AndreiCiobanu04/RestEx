const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  lastName: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  phone: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
});

module.exports = mongoose.model("NewUsers", usersSchema);
