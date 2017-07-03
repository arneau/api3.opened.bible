import Sequelize from 'sequelize'

import Database from '../Database'

const TagModel = Database.define('tag', {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  }
})

TagModel.findById = (id) => {
  return TagModel.find({
    where: {
      id
    }
  })
}

export default TagModel