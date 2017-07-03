import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

import TagType from './Tag'

import TagModel from '../../database/models/Tag'

const TagSynonymType = new GraphQLObjectType({
  name: 'TagSynonym',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    Tag: {
      type: TagType,
      resolve: (root, args) => TagModel.findById(root.tag_id)
    }
  })
})

export default TagSynonymType