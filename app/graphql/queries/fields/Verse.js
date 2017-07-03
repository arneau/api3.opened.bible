import {
  GraphQLInt,
  GraphQLString
} from 'graphql'

import VerseType from '../../types/Verse'

import VerseModel from '../../../database/models/Verse'

const VerseField = {
  type: VerseType,
  args: {
    id: {
      type: GraphQLInt
    },
    reference: {
      type: GraphQLString
    }
  },
  resolve: async (root, args) => await VerseModel.findByPrimary(args.id)
}

export default VerseField