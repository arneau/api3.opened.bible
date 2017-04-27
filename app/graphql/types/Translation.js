import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

const TranslationType = new GraphQLObjectType({
  name: 'Translation',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    code: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    }
  })
})

export default TranslationType