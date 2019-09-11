var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var app = express();
var CalculatePrice = require('./BuyCoins')


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
type Query {
  rollDice(numDice: Int!, numSides: Int): [Int]
}
`);





app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: global,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');


CalculatePrice('buy', 0.2, 350)

