const { Schema, model } = require('mongoose');

const pnlSchema = new Schema({
    coinId: {
        type: String,
        required: true
    },
    boughtAt: {
        type: Date,
        get: (timestamp) => dateFormat(timestamp),
      },
    quantity: {
        type: Number,
        required: true,
    },
    boughtPrice: {
        type: Number,
        required: true,
    },
    user: 
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
})

const Pnl = model('pnl', pnlSchema);

module.exports = Pnl;