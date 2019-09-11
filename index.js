var express = require('express');
var app = express();
var graphqlHTTP = require('express-graphql');
var schema = require ('./graphQl')


app.use('/graphiql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphiql');

