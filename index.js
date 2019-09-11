var express = require('express');
var app = express();
var graphqlHTTP = require('express-graphql');
var CalculatePrice = require('./BuyCoins')
var schema = require ('./graphQl')


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: global,
    graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');


CalculatePrice('sell', 2, 350)