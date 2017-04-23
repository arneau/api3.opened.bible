var { buildSchema } = require('graphql')
var express = require('express')
var graphqlHTTP = require('express-graphql')
var cors = require('cors')

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
}

var app = express()

app.use(cors({
  'Access-Control-Allow-Origin': '*'
}))

app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root
}))

app.get('/graphiql', (req, res) => res.sendFile('../graphiql/index.html'))

app.listen(4000)

console.log('Running a GraphQL API server at localhost:4000/graphql')