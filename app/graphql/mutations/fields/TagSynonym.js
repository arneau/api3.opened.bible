import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

import TagSynonymType from '../../types/TagSynonym'

import TagSynonymModel from '../../../database/models/TagSynonym'

const TagSynonymField = {
  type: TagSynonymType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    tag_id: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve: (root, args) => TagSynonymModel.create(args)
}

export default TagSynonymField