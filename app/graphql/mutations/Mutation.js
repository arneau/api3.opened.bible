import {
  GraphQLObjectType
} from 'graphql'

import DoctrineField from './fields/Doctrine'
import TagField from './fields/Tag'
import TagSynonymField from './fields/TagSynonym'

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    Doctrine: DoctrineField,
    Tag: TagField,
    TagSynonym: TagSynonymField
  }
})

export default MutationType