const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const journalSchema = new Schema({

  journalSubject: {
    type: String,
    required: 'Subject!',
    minlength: 1,
    maxlength: 20,
    trim: true,
  },
  journalText: {
    type: String,
    required: 'You need to leave a memoir!',
    minlength: 1,
    maxlength: 280,
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
