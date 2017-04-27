import {
  GraphQLInt,
  GraphQLString
} from 'graphql'

import TranslationType from '../types/Translation'

import TranslationModel from '../../database/models/Translation'

const TranslationField = {
  type: TranslationType,
  args: {
    id: {
      type: GraphQLInt
    },
    code: {
      type: GraphQLString
    }
  },
  resolve: async (root, args) => {
    let translation = await TranslationModel.findByPrimary(args.id)
    return translation.get()
  }
}

export default TranslationField