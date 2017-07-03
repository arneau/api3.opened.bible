import {
  GraphQLSchema
} from 'graphql'

import MutationType from './mutations/Mutation'
import QueryType from './queries/Query'

const Schema = new GraphQLSchema({
  mutation: MutationType,
  query: QueryType
})

export default Schema