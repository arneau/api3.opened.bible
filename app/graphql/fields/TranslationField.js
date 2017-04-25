import {
  GraphQLInt,
  GraphQLString
} from 'graphql'

import TranslationType from '../types/TranslationType'

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
  resolve: (root, args) => []
}

export default TranslationField