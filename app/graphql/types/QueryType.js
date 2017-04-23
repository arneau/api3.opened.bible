import {
  GraphQLObjectType
} from 'graphql'

import BookField from '../fields/BookField'
import ChapterField from '../fields/ChapterField'

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    Book: BookField,
    Chapter: ChapterField
  }
})

export default QueryType