import Sequelize from 'sequelize'

import Database from '../Database'

import ChapterModel from './Chapter'

export default Database.define('verse', {
  chapter_id: {
    allowNull: false,
    references: {
      model: ChapterModel,
      key: 'id'
    },
    type: Sequelize.INTEGER
  },
  number: {
    allowNull: false,
    type: Sequelize.INTEGER
  }
})