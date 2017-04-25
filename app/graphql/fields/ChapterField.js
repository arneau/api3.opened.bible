import {
  GraphQLInt,
  GraphQLString
} from 'graphql'

import ChapterType from '../types/ChapterType'

import Data from '../Data'

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
  resolve: (root, args) => Data.Chapters[args.id]
}

export default ChapterField