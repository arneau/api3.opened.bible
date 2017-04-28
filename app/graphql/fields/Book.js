import {
  GraphQLInt,
  GraphQLString
} from 'graphql'

import BookType from '../types/Book'

import BookModel from '../../database/models/Book'

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
  resolve: async (root, args) => {
    if (args.id) {
      return await BookModel.findById(args.id)
    } else if (args.reference) {
      return await BookModel.findByReference(args.reference)
    }
  }
}

export default BookField