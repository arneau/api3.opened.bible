import { buildSchema } from 'graphql'

import express from 'express'
import graphqlHTTP from 'express-graphql'

import cors from 'cors'
import path from 'path'

var schema = buildSchema(`
type Query {
  hello: String
}
`)

var root = {
  hello: () => {
    return 'Hello world!';
  },
}

var app = express()

app.use(cors({
  'Access-Control-Allow-Origin': '*'
}))

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root
}))

app.use('/graphiql', express.static(path.resolve('graphiql')))

app.listen(4000)

console.log('Servers running!\nGraphQL server: localhost:4000/graphql\nGraphiQL browser: localhost:4000/graphql')