import {
  GraphQLInt
} from 'graphql'

import VerseTranslationType from '../types/VerseTranslationType'

import Data from '../Data'

const VerseTranslationField = {
  type: VerseTranslationType,
  args: {
    id: {
      type: GraphQLInt
    }
  },
  resolve: (root, args) => Data.VerseTranslations[args.id]
}

export default VerseTranslationField