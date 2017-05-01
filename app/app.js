import express from 'express'
import graphqlHTTP from 'express-graphql'
import cors from 'cors'
import path from 'path'
import ip from 'ip'

import Schema from './graphql/Schema'

const app = express()

const headers = cors({
  'Access-Control-Allow-Origin': '*'
})
const graphql = graphqlHTTP({
  schema: Schema
})
const graphiql = express.static(path.resolve('graphiql'))

var host
if (process.env.NODE_ENV == 'local') {
  host = 'localhost'
} else if (process.env.NODE_ENV == 'lan') {
  host = ip.address()
}
const port = 4000

app.use(headers)
.use('/graphql', graphql)
.use('/graphiql', graphiql)
.listen(port, host)

console.log(`Node is running!\nGraphQL server: ${host}:${port}/graphql\nGraphiQL browser: ${host}:${port}/graphiql\n`)