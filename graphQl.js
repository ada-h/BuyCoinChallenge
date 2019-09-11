var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
module.exports = schema = buildSchema(`
type Query {
  rollDice(numDice: Int!, numSides: Int): [Int]
}
`);