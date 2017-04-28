import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

import BookType from './Book'
import ChapterType from './Chapter'
import VerseType from './Verse'

import BookModel from '../../database/models/Book'
import ChapterModel from '../../database/models/Chapter'
import VerseModel from '../../database/models/Verse'

const PassageType = new GraphQLObjectType({
  name: 'Passage',
  fields: () => ({
    Book: {
      type: BookType,
      resolve: async (root, args) => {
        return await BookModel.findByReference(root.reference)
      }
    },
    Chapter: {
      type: ChapterType,
      resolve: async (root, args) => await ChapterModel.findByReference(root.reference)
    },
    reference: {
      type: GraphQLString
    },
    Verses: {
      type: new GraphQLList(VerseType),
      resolve: async (root, args) => await VerseModel.findAllByReference(root.reference)
    }
  })
})

export default PassageType