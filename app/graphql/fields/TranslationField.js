import {
  GraphQLInt,
  GraphQLString
} from 'graphql'

import TranslationType from '../types/TranslationType'

import Data from '../Data'

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
  resolve: (root, args) => Data.Translations[args.id]
}

export default TranslationField