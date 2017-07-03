import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

import TagType from '../../types/Tag'

import TagModel from '../../../database/models/Tag'

const TagField = {
  type: TagType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, args) => TagModel.create(args)
}

export default TagField