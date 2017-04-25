import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType
} from 'graphql'

import BookType from './BookType'
import VerseType from './VerseType'

import Data from '../Data'

const ChapterType = new GraphQLObjectType({
  name: 'Chapter',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    Book: {
      type: BookType,
      resolve: (root, args) => Data.Books[root.Book]
    },
    number: {
      type: GraphQLInt
    },
    Verses: {
      type: new GraphQLList(VerseType),
      resolve: (root, args) => Data.Chapters[root.id].Verses.map(id => Data.Verses[id])
    }
  })
})

export default ChapterType