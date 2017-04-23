import express from 'express'
import graphqlHTTP from 'express-graphql'

import cors from 'cors'
import path from 'path'

import Schema from './graphql/Schema'

const app = express()

app.use(cors({
  'Access-Control-Allow-Origin': '*'
})).use('/graphql', graphqlHTTP({
  schema: Schema
})).use('/graphiql', express.static(path.resolve('graphiql')))

app.listen(4000)

console.log('\nNode is running!\nGraphQL server: localhost:4000/graphql\nGraphiQL browser: localhost:4000/graphql')