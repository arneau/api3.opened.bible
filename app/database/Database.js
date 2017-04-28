import Sequelize from 'sequelize'

const getVariable = (name) => process.env['npm_config_' + name]

const DB_HOST = getVariable('DB_HOST')
const DB_NAME = getVariable('DB_NAME')
const DB_USER = getVariable('DB_USER')
const DB_PASSWORD = getVariable('DB_PASSWORD')

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