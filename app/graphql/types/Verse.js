import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType
} from 'graphql'

import VerseTranslationType from './VerseTranslation'

import VerseTranslationModel from '../../database/models/VerseTranslation'

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
      resolve: async (root, args) => await VerseTranslationModel.findAll({
        where: {
          verse_id: root.id
        }
      })
    }
  })
})

export default VerseType