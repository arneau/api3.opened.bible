import {
  GraphQLObjectType
} from 'graphql'

import BookField from './fields/Book'
import ChapterField from './fields/Chapter'
import DoctrineField from './fields/Doctrine'
import PassageField from './fields/Passage'
import TagField from './fields/Tag'
import TranslationField from './fields/Translation'
import VerseField from './fields/Verse'
import VersesField from './fields/Verses'
import VerseTranslationField from './fields/VerseTranslation'

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    Book: BookField,
    Chapter: ChapterField,
    Doctrine: DoctrineField,
    Passage: PassageField,
    Tag: TagField,
    Translation: TranslationField,
    Verse: VerseField,
    Verses: VersesField,
    VerseTranslation: VerseTranslationField
  }
})

export default QueryType