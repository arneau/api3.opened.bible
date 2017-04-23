import {
  GraphQLInt,
  GraphQLString
} from 'graphql'

import BookType from '../types/BookType'

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
  resolve: (root, args) => []
}

export default BookField