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
      Population.belongsTo(models.district_year, {
        foreignKey: 'district_year_id',
        as: 'district_year',
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
      district_year_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Population',
    },
  )
  return Population
}
