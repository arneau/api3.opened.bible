import Sequelize from 'sequelize'

import Database from '../Database'

import BookModel from './Book'

export default Database.define('chapter', {
  book_id: {
    allowNull: false,
    references: {
      model: BookModel,
      key: 'id'
    },
    type: Sequelize.INTEGER
  },
  number: {
    allowNull: false,
    type: Sequelize.INTEGER
  }
})