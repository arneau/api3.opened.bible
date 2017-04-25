import {
  GraphQLInt
} from 'graphql'

import VerseTranslationType from '../types/VerseTranslationType'

const VerseTranslationField = {
  type: VerseTranslationType,
  args: {
    id: {
      type: GraphQLInt
    }
  },
  resolve: (root, args) => []
}

export default VerseTranslationField