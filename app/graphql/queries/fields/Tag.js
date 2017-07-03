import {
  GraphQLInt,
  GraphQLString
} from 'graphql'

import TagType from '../../types/Tag'

import TagModel from '../../../database/models/Tag'

const TagField = {
  type: TagType,
  args: {
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    }
  },
  resolve: (root, args) => {
    if (args.id) {
      return TagModel.findById(args.id)
    } else if (args.name) {
      return TagModel.findById(args.name)
    }
  }
}

export default TagField