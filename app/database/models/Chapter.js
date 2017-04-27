import Sequelize from 'sequelize'

import Database from '../Database'

import BookModel from './Book'

const ChapterModel = Database.define('chapter', {
  number: {
    allowNull: false,
    type: Sequelize.INTEGER
  }
})

ChapterModel.belongsTo(BookModel)

export default ChapterModel