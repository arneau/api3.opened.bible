import {
  GraphQLInt,
  GraphQLObjectType
} from 'graphql'

import BookType from './BookType'

const ChapterType = new GraphQLObjectType({
  name: 'Chapter',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    Book: {
      type: BookType,
      resolve: (root, args) => []
    },
    number: {
      type: GraphQLInt
    }
  })
})

export default ChapterType