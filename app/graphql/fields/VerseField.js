import {
  GraphQLInt,
  GraphQLString
} from 'graphql'

import VerseType from '../types/VerseType'

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
  resolve: (root, args) => []
}

export default VerseField