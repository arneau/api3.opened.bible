import Sequelize from 'sequelize'

import env from '../env'

const DB_HOST = env('DB_HOST')
const DB_NAME = env('DB_NAME')
const DB_USER = env('DB_USER')
const DB_PASSWORD = env('DB_PASSWORD')

const Database = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  define: {
    timestamps: false,
    underscored: true
  },
  dialect: 'mysql',
  host: DB_HOST,
  timezone: '+02:00'
})

export default Database