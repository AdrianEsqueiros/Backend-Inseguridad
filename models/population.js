'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Population extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Population.belongsTo(models.District, {
        foreignKey: 'district_id',
        as: 'district',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      Population.belongsTo(models.Year, {
        foreignKey: 'year_id',
        as: 'year',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    }
  }
  Population.init(
    {
      surface_area: DataTypes.DECIMAL,
      birth_rate: DataTypes.INTEGER,
      death_rate: DataTypes.INTEGER,
      population: DataTypes.INTEGER,
      district_id: DataTypes.INTEGER,
      year_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Population',
    },
  )
  return Population
}
