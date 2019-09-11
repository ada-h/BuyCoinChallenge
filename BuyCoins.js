


module.exports = function computeValue(data, type, margin, exchangeRate) {

    var marginPercentage = (margin / 100) * data.bpi.USD.rate_float
    var totalPrice = 0
    switch (type){
        case 'BUY':
            var price = data.bpi.USD.rate_float + marginPercentage
           totalPrice =  price * exchangeRate
        case 'SELL':
            var price = data.bpi.USD.rate_float - marginPercentage
            totalPrice = price * exchangeRate
    }
    
   return totalPrice
}