import {
  GraphQLInt,
  GraphQLString
} from 'graphql'

import PassageType from '../../types/Passage'

const PassageField = {
  type: PassageType,
  args: {
    reference: {
      type: GraphQLString
    }
  },
  resolve: (root, args) => {
    return {
      reference: args.reference
    }
  }
}

export default PassageField