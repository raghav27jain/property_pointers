// server/models/Host.js
const mongoose = require('mongoose');

const hostSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
});

module.exports = mongoose.model('Host', hostSchema);
