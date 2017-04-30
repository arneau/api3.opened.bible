import Sequelize from 'sequelize'

import Database from '../Database'

import TranslationModel from './Translation'
import VerseModel from './Verse'

const VerseTranslationModel = Database.define('verse_translation', {
  text: {
    allowNull: false,
    type: Sequelize.STRING(1000)
  }
})

VerseTranslationModel.belongsTo(TranslationModel)
VerseTranslationModel.belongsTo(VerseModel)

VerseTranslationModel.findAllByVerseId = (id) => {
  return VerseTranslationModel.findAll({
    where: {
      verse_id: id
    }
  })
}

export default VerseTranslationModel