import Sequelize from 'sequelize'

import Database from '../Database'

export default Database.define('book', {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  }
})