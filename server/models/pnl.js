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
    amount: {
        type: Float,
        required: true,
    },
    boughtPrice: {
        type: Float,
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