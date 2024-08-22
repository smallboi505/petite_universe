const mongoose = require('mongoose');

const vocabularySchema = new mongoose.Schema({
  word: { type: String, required: true },
  definition: { type: String, required: true },
  language: { type: String, required: true },
});

module.exports = mongoose.model('Vocabulary', vocabularySchema);
