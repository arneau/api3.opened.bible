import {
  GraphQLInt,
  GraphQLString
} from 'graphql'

import ChapterType from '../types/Chapter'
import ChapterModel from '../../database/models/Chapter'

import { getReferenceData } from '../../functions'

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
  resolve: (root, args) => {
    if (args.id) {
      return ChapterModel.findById(args.id)
    } else if (args.reference) {
      return ChapterModel.findByReference(args.reference)
    }
  }
}

export default ChapterField