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
      LifeQuality.belongsTo(models.district_year, {
        foreignKey: 'district_year_id',
        as: 'district_years',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    }
  }
  LifeQuality.init(
    {
      level_education: DataTypes.ENUM('primary', 'secondary', 'higher'),
      quality_food: DataTypes.ENUM('good', 'bad'),
      socioeconomics: DataTypes.ENUM('A', 'B', 'C'),
      district_year_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'LifeQuality',
    },
  )
  return LifeQuality
}
