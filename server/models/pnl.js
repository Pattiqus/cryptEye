const { Schema, model } = require('mongoose');

const pnlSchema = new Schema({
    coinId: {
        type: String,
        required: true
    },
    amount: {
        type: Float,
        required: true,
    },
    boughtAt: {
        type: Float,
        required: true,
    },
    currentPrice: {
        type: Float,
        required: true,
    },
    netPosition: {
        type: Float,
        required: true
    }
})

const Pnl = model('pnl', pnlSchema);

module.exports = Pnl;