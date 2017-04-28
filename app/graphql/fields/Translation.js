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
  resolve: (root, args) => {
    if (args.id) {
      return TranslationModel.findById(args.id)
    } else if (args.code) {
      return TranslationModel.findByCode(args.code)
    }
  }
}

export default TranslationField