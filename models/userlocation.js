'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class UserLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserLocation.init(
    {
      user_id: DataTypes.INTEGER,
      location_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'UserLocation',
    },
  )
  return UserLocation
}
