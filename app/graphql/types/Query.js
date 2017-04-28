import {
  GraphQLObjectType
} from 'graphql'

import BookField from '../fields/Book'
import ChapterField from '../fields/Chapter'
import PassageField from '../fields/Passage'
import TranslationField from '../fields/Translation'
import VerseField from '../fields/Verse'
import VerseTranslationField from '../fields/VerseTranslation'

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    Book: BookField,
    Chapter: ChapterField,
    Passage: PassageField,
    Translation: TranslationField,
    Verse: VerseField,
    VerseTranslation: VerseTranslationField
  }
})

export default QueryType