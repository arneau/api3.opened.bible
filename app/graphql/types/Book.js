import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

import ChapterType from './Chapter'

import ChapterModel from '../../database/models/Chapter'

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    Chapters: {
      type: new GraphQLList(ChapterType),
      resolve: async (root, args) => await ChapterModel.findAll({
        where: {
          book_id: root.id
        }
      })
    },
    name: {
      type: GraphQLString
    }
  })
})

export default BookType