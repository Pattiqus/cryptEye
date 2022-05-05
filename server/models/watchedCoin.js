const { Schema, model } = require('mongoose');

const watchedCoinsSchema = new Schema({
    coinId: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const watchedCoin = model('watchedCoins', watchedCoinsSchema);

module.exports = watchedCoin;
