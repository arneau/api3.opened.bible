import Sequelize from 'sequelize'

import Database from '../Database'

export default Database.define('translation', {
  code: {
    allowNull: false,
    type: Sequelize.STRING
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING
  }
})