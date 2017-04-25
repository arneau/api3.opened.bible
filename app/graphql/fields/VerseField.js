import {
  GraphQLInt,
  GraphQLString
} from 'graphql'

import VerseType from '../types/VerseType'

import Data from '../Data'

const VerseField = {
  type: VerseType,
  args: {
    id: {
      type: GraphQLInt
    },
    reference: {
      type: GraphQLString
    }
  },
  resolve: (root, args) => Data.Verses[args.id]
}

export default VerseField