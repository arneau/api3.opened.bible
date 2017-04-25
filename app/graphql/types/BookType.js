import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

import ChapterType from './ChapterType'

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    Chapters: {
      type: new GraphQLList(ChapterType),
      resolve: (root, args) => {
        return [
          1,
          2
        ].map(id => []);
      }
    },
    name: {
      type: GraphQLString
    }
  })
})

export default BookType