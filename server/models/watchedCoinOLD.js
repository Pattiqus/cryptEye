const { Schema, model } = require('mongoose');

const watchedCoinsSchema = new Schema({
    coinId: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const WatchedCoin = model('WatchedCoins', watchedCoinsSchema);

module.exports = WatchedCoin;
