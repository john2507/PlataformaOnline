const sequelize = require('sequelize')

const dbCOnfig = require("../config/database")
const { Sequelize } = require('sequelize')

const connection = new Sequelize(dbCOnfig)

try {
  connection.authenticate()
  console.log('Banco conectato com sucesso')
} catch (error) {
  console.error('erro ao se conectar com o banco de dados')
}

module.exports = connection