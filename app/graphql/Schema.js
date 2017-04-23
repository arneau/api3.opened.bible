import {
  GraphQLSchema
} from 'graphql'

import QueryType from './types/QueryType'

const Data = {
  Book: {
    id: 1,
    Chapters: [
      1,
      2,
      3
    ],
    name: 'Genesis'
  },
  Chapter: {
    id: 10,
    Book: 5,
    number: 10
  },
  Verse: {
    id: 100,
    number: 100,
    text: 'In the beginning ...'
  }
}

const Schema = new GraphQLSchema({
  query: QueryType
})

export default Schema