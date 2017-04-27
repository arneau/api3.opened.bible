import {
  GraphQLInt,
  GraphQLString
} from 'graphql'

import ChapterType from '../types/Chapter'

import ChapterModel from '../../database/models/Chapter'

const ChapterField = {
  type: ChapterType,
  args: {
    id: {
      type: GraphQLInt
    },
    reference: {
      type: GraphQLString
    }
  },
  resolve: async (root, args) => await ChapterModel.findByPrimary(args.id)
}

export default ChapterField