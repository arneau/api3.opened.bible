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
  resolve: async (root, args) => await BookModel.findByPrimary(args.id)
}

export default BookField