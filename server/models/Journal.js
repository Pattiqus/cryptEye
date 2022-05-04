const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const journalSchema = new Schema({
  JournalText: {
    type: String,
    required: 'You need to leave a memoir!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  journalAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

});

const Journal = model('Journal', journalSchema);

module.exports = Journal;
