import {
  GraphQLObjectType
} from 'graphql'

import TagField from './fields/Tag'
import TagSynonymField from './fields/TagSynonym'

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    Tag: TagField,
    TagSynonym: TagSynonymField
  }
})

export default MutationType