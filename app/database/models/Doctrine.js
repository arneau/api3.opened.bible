import Sequelize from 'sequelize'

import Database from '../Database'

const DoctrineModel = Database.define('doctrine', {
  text: {
    allowNull: false,
    type: Sequelize.STRING
  }
})

DoctrineModel.belongsTo(DoctrineModel)

DoctrineModel.findById = (id) => {
  return DoctrineModel.find({
    where: {
      id
    }
  })
}

export default DoctrineModel