import {
  GraphQLList,
  GraphQLString
} from 'graphql'

import VerseType from '../../types/Verse'

import VerseModel from '../../../database/models/Verse'

const VersesField = {
  type: new GraphQLList(VerseType),
  args: {
    reference: {
      type: GraphQLString
    }
  },
  resolve: (root, args) => VerseModel.findAllByReference(args.reference)
}

export default VersesField