const { Schema, model } = require('mongoose');

const pnlSchema = new Schema({
    coinId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    boughtDate: {
        type: Date,
        get: (timestamp) => dateFormat(timestamp),
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