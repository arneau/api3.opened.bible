import Sequelize from 'sequelize'

import Database from '../Database'

const BookModel = Database.define('book', {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  }
})

export default BookModel