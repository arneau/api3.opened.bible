import {
  GraphQLInt,
  GraphQLString
} from 'graphql'

import BookType from '../types/BookType'

import Data from '../Data'

const BookField = {
  type: BookType,
  args: {
    id: {
      type: GraphQLInt
    },
    reference: {
      type: GraphQLString
    }
  },
  resolve: (root, args) => Data.Books[args.id]
}

export default BookField