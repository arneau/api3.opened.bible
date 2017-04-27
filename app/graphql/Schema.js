import {
  GraphQLSchema
} from 'graphql'

import QueryType from './types/Query'

const Schema = new GraphQLSchema({
  query: QueryType
})

export default Schema