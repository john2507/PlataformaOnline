

const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(sequeize){
    super.init({
      name:DataTypes.STRING,
      password:DataTypes.STRING,
      email: DataTypes.STRING
    }, {sequelize})
  }
}

module.exports = User