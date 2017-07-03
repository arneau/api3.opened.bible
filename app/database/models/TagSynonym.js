import Sequelize from 'sequelize'

import Database from '../Database'

import TagModel from './Tag'

const TagSynonymModel = Database.define('tag_synonym', {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  }
})

TagSynonymModel.belongsTo(TagModel)

TagSynonymModel.findById = (id) => {
  return TagSynonymModel.find({
    where: {
      id
    }
  })
}

export default TagSynonymModel