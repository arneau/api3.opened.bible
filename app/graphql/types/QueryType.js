import {
  GraphQLObjectType
} from 'graphql'

import BookField from '../fields/BookField'
import ChapterField from '../fields/ChapterField'
import TranslationField from '../fields/TranslationField'
import VerseField from '../fields/VerseField'
import VerseTranslationField from '../fields/VerseTranslationField'

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    Book: BookField,
    Chapter: ChapterField,
    Translation: TranslationField,
    Verse: VerseField,
    VerseTranslation: VerseTranslationField
  }
})

export default QueryType