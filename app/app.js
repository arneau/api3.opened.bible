import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} from 'graphql'

import express from 'express'
import graphqlHTTP from 'express-graphql'

import cors from 'cors'
import path from 'path'

const Data = {
  Book: {
    id: 1,
    Chapters: [1,2,3],
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

const Book = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLInt },
    Chapters: {
      type: new GraphQLList(Chapter),
      resolve: (root, { id }) => {
        return Data.Book.Chapters.map(id => Data.Chapter);
      }
    },
    name: { type: GraphQLString }
  })
})

const Chapter = new GraphQLObjectType({
  name: 'Chapter',
  fields: () => ({
    id: { type: GraphQLInt },
    Book: {
      type: Book,
      resolve: () => Data.Book
    },
    number: { type: GraphQLInt }
  })
})

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    Book: {
      type: Book,
      args: {
        id: { type: GraphQLInt },
        reference: { type: GraphQLString }
      },
      resolve: function(_, { id, reference }) {
        return Data.Book;
      }
    },
    Chapter: {
      type: Chapter,
      args: {
        id: { type: GraphQLInt },
        reference: { type: GraphQLString }
      },
      resolve: function(_, { id, reference }) {
        return Data.Chapter;
      }
    }
  }
})

const Schema = new GraphQLSchema({
  query: Query
})

const app = express()

app.use(cors({
  'Access-Control-Allow-Origin': '*'
})).use('/graphql', graphqlHTTP({
  schema: Schema
})).use('/graphiql', express.static(path.resolve('graphiql')))

app.listen(4000)

console.log('Node is running!\nGraphQL server: localhost:4000/graphql\nGraphiQL browser: localhost:4000/graphql')