const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cors = require('cors');

router.get('/prices', cors(), async function(req, res) {
    const now = (new Date()).getTime();
    const apiUrl = `https://www.coinspot.com.au/charts/history_basic?symbol=${req.query.coinId}&from=${now-1}&to=${now}`;
    const response = await fetch(apiUrl);    
    const priceList = await response.json();

    let price = null;

    if (priceList.length) {
        price = priceList[priceList.length - 1][1];
    }
    res.json(price);
})

module.exports = router