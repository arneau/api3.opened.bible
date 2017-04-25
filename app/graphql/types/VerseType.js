import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType
} from 'graphql'

import VerseTranslationType from './VerseTranslationType'

const VerseType = new GraphQLObjectType({
  name: 'Verse',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    number: {
      type: GraphQLInt
    },
    VerseTranslations: {
      type: new GraphQLList(VerseTranslationType),
      resolve: (root, args) => {
        return [
          1,
          2
        ].map(id => []);
      }
    }
  })
})

export default VerseType