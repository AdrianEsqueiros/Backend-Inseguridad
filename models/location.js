'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Location.belongsToMany(models.User, {
        through: 'UserLocations',
        as: 'users',
        foreignKey: 'location_id',
      })
      Location.hasMany(models.Report, {
        foreignKey: 'location_id',
        as: 'reports',
      })
    }
  }
  Location.init(
    {
      latitude: DataTypes.DECIMAL,
      longitude: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: 'Location',
    },
  )
  return Location
}
