var { buildSchema, GraphQLObjectType, GraphQLSchema, GraphQLFloat, GraphQLEnumType } = require('graphql');
const axios = require('axios')
var computeValue = require('./BuyCoins')


const TransactionType = new GraphQLEnumType({
    name: 'Transaction',
    description: 'Transaction Type',
    values: {
        buy: {
            value: 'BUY'
        },
        sell: {
            value: 'SELL'
        }
    }
})

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "CalculatePriceQuery",
        fields: {
            calculatePrice: {
                type: GraphQLFloat,
                args: {
                    type: { type: TransactionType },
                    margin: { type: GraphQLFloat },
                    exchangeRate: { type: GraphQLFloat }
                },

                resolve: async (root, args, context, info) => {
                    let response =  await axios
                        .get(`https://api.coindesk.com/v1/bpi/currentprice/USD.json`)
                        .then(response => response.data);
                        return computeValue(response, args.type, args.margin, args.exchangeRate)
                       
                }
            },
        },
    })
})

module.exports = schema

