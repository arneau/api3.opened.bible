import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType
} from 'graphql'

import ChapterType from './Chapter'
import VerseTranslationType from './VerseTranslation'

import ChapterModel from '../../database/models/Chapter'
import VerseTranslationModel from '../../database/models/VerseTranslation'

const VerseType = new GraphQLObjectType({
  name: 'Verse',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    Chapter: {
      type: ChapterType,
      resolve: (root, args) => ChapterModel.findById(root.chapter_id)
    },
    number: {
      type: GraphQLInt
    },
    VerseTranslations: {
      type: new GraphQLList(VerseTranslationType),
      resolve: (root, args) => VerseTranslationModel.findAllByVerseId(root.id)
    }
  })
})

export default VerseType