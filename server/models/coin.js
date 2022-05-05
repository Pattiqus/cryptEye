const { Schema, model } = require('mongoose');

const coinSchema = new Schema ({
    coinName: {
        type: String
    },
    Pair: {
        type: String
    },
    currentPriceUpper: {
        type: Int
    },
    currentPriceLower: {
        type: Int
    }
})

const Coin = model('Coin', coinSchema);

module.exports = Coin;
    
