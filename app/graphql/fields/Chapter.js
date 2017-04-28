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
  resolve: async (root, args) => {
    if (args.id) {
      return await ChapterModel.findByPrimary(args.id)
    } else if (args.reference) {
      let data = getReferenceData(args.reference)
      console.log(data)
      return await ChapterModel.find({
        where: {
          name: data.chapter
        }
      })
    }
  }
}

export default ChapterField