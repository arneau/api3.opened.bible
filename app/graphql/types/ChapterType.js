import {
  GraphQLInt,
  GraphQLObjectType
} from 'graphql'

import BookType from './BookType'

import Data from '../Data'

const ChapterType = new GraphQLObjectType({
  name: 'Chapter',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    Book: {
      type: BookType,
      resolve: (root, args) => Data.Books[root.Book]
    },
    number: {
      type: GraphQLInt
    }
  })
})

export default ChapterType