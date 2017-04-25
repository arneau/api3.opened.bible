import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType
} from 'graphql'

import VerseTranslationType from './VerseTranslationType'

import Data from '../Data'

const VerseType = new GraphQLObjectType({
  name: 'Verse',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    number: {
      type: GraphQLInt
    },
    VerseTranslations: {
      type: new GraphQLList(VerseTranslationType),
      resolve: (root, args) => Data.Verses[root.id].VerseTranslations.map(id => Data.VerseTranslations[id])
    }
  })
})

export default VerseType