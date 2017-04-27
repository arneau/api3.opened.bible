import Sequelize from 'sequelize'

import Database from '../Database'

import ChapterModel from './Chapter'

const VerseModel = Database.define('verse', {
  number: {
    allowNull: false,
    type: Sequelize.INTEGER
  }
})

VerseModel.belongsTo(ChapterModel)

export default VerseModel