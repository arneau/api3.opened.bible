import Sequelize from 'sequelize'

import Database from '../Database'

import TranslationModel from './Translation'
import VerseModel from './Verse'

export default Database.define('verse_translation', {
  text: {
    allowNull: false,
    type: Sequelize.STRING(1000)
  },
  translation_id: {
    allowNull: false,
    references: {
      model: TranslationModel,
      key: 'id'
    },
    type: Sequelize.INTEGER
  },
  verse_id: {
    allowNull: false,
    references: {
      model: VerseModel,
      key: 'id'
    },
    type: Sequelize.INTEGER
  }
})