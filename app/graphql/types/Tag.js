import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

const TagType = new GraphQLObjectType({
  name: 'Tag',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    }
  })
})

export default TagType