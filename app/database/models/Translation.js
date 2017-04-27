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

// TranslationModel.getById = (id) => TranslationModel.find({
//   where: {
//     id: id
//   }
// })
// .then((data) => data.dataValues)

export default TranslationModel