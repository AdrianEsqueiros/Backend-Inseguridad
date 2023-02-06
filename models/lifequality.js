'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class LifeQuality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LifeQuality.belongsTo(models.District, {
        foreignKey: 'district_id',
        as: 'district',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      LifeQuality.belongsTo(models.Year, {
        foreignKey: 'year_id',
        as: 'year',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    }
  }
  LifeQuality.init(
    {
      level_education: DataTypes.ENUM,
      quality_food: DataTypes.ENUM,
      socioeconomics: DataTypes.ENUM,
      district_id: DataTypes.INTEGER,
      year_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'LifeQuality',
    },
  )
  return LifeQuality
}
