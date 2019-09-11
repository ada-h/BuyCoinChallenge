const fetch = require("node-fetch");

module.exports =  fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json ', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})