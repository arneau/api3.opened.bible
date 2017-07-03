import {
  GraphQLInt,
  GraphQLString
} from 'graphql'

import DoctrineType from '../../types/Doctrine'

import DoctrineModel from '../../../database/models/Doctrine'

const DoctrineField = {
  type: DoctrineType,
  args: {
    id: {
      type: GraphQLInt
    },
    text: {
      type: GraphQLString
    }
  },
  resolve: (root, args) => DoctrineModel.findById(args.id)
}

export default DoctrineField