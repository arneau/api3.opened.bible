import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

import DoctrineType from '../../types/Doctrine'

import DoctrineModel from '../../../database/models/Doctrine'

const DoctrineField = {
  type: DoctrineType,
  args: {
    doctrine_id: {
      type: GraphQLInt
    },
    text: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, args) => DoctrineModel.create(args)
}

export default DoctrineField