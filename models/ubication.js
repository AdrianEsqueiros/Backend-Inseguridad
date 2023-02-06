'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Ubication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ubication.hasOne(models.District, {
        foreignKey: 'district_id',
        as: 'district',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    }
  }
  Ubication.init(
    {
      zone: DataTypes.STRING,
      province: DataTypes.STRING,
      region: DataTypes.STRING,
      country: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Ubication',
    },
  )
  return Ubication
}
