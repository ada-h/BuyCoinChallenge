var fetch = require('./api')

module.exports = function CalculatePrice(type, margin, exchangeRate) {
    if (type == 'buy' || type == 'sell' || margin == undefined || exchangeRate == undefined) {
            fetch
            .then(r => r.json())
            .then(data => computeValue(data, type, margin, exchangeRate))
            .catch(err => console.log(err, ''));
    } else {
        return false
    }
}


function computeValue(data, type, margin, exchangeRate) {

    var marginPercentage = (margin / 100) * data.bpi.USD.rate_float
    var totalPrice = ''
    if (type == 'buy') {
        var price = data.bpi.USD.rate_float + marginPercentage
        totalPrice = 'N' + price * exchangeRate
    } else {
        var price = data.bpi.USD.rate_float - marginPercentage
        totalPrice = 'N' + price * exchangeRate
    }

    return totalPrice

}