import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

import DoctrineModel from '../../database/models/Doctrine'

const DoctrineType = new GraphQLObjectType({
  name: 'Doctrine',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    Parent: {
      type: DoctrineType,
      resolve: (root, args) => DoctrineModel.findById(root.doctrine_id)
    },
    text: {
      type: GraphQLString
    }
  })
})

export default DoctrineType