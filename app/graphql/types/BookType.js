import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

import ChapterType from './ChapterType'

import Data from '../Data'

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    Chapters: {
      type: new GraphQLList(ChapterType),
      resolve: (root, args) => Data.Books[root.id].Chapters.map(id => Data.Chapters[id])
    },
    name: {
      type: GraphQLString
    }
  })
})

export default BookType