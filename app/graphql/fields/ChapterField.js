import {
  GraphQLInt,
  GraphQLString
} from 'graphql'

import ChapterType from '../types/ChapterType'

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
  resolve: (root, args) => []
}

export default ChapterField