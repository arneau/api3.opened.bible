import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

import TranslationType from './TranslationType'

import Data from '../Data'

const VerseTranslationType = new GraphQLObjectType({
  name: 'VerseTranslation',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    text: {
      type: GraphQLString
    },
    Translation: {
      type: TranslationType,
      resolve: (root, args) => Data.Translations[root.Translation]
    }
  })
})

export default VerseTranslationType