'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class district_year extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      district_year.hasMany(models.PublicCenter, {
        foreignKey: 'district_year_id',
        as: 'public_center',
      })
      district_year.hasMany(models.Population, {
        foreignKey: 'district_year_id',
        as: 'population',
      })
      district_year.hasMany(models.LifeQuality, {
        foreignKey: 'district_year_id',
        as: 'life_quality',
      })
      district_year.hasMany(models.Report, {
        foreignKey: 'district_year_id',
        as: 'report',
      })
      district_year.belongsTo(models.District, {
        foreignKey: 'district_id',
        as: 'district',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    }
  }
  district_year.init(
    {
      district_id: DataTypes.INTEGER,
      year_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'district_year',
    },
  )
  return district_year
}
