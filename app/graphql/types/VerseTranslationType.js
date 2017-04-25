import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

import TranslationType from './TranslationType'

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
      resolve: (root, args) => []
    }
  })
})

export default VerseTranslationType