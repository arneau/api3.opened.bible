import Sequelize from 'sequelize'

import Database from '../Database'

const TranslationModel = Database.define('translation', {
  code: {
    allowNull: false,
    type: Sequelize.STRING
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING
  }
})

TranslationModel.findById = (id) => {
  return TranslationModel.find({
    where: {
      id
    }
  })
}
TranslationModel.findByCode = (code) => {
  return TranslationModel.find({
    where: {
      code
    }
  })
}

export default TranslationModel