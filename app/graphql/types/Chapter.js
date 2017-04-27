import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType
} from 'graphql'

import BookType from './Book'
import VerseType from './Verse'

import BookModel from '../../database/models/Book'
import VerseModel from '../../database/models/Verse'

const ChapterType = new GraphQLObjectType({
  name: 'Chapter',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    Book: {
      type: BookType,
      resolve: async (root, args) => await BookModel.findByPrimary(root.book_id)
    },
    number: {
      type: GraphQLInt
    },
    Verses: {
      type: new GraphQLList(VerseType),
      resolve: async (root, args) => await VerseModel.findAll({
        where: {
          chapter_id: root.id
        }
      })
    }
  })
})

export default ChapterType