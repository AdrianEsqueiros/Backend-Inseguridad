'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      District.hasMany(models.PublicCenter, {
        foreignKey: 'district_id',
        as: 'public_centers',
      })
      District.hasOne(models.LifeQuality, {
        foreignKey: 'district_id',
        as: 'life_quality',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })

      District.hasOne(models.Population, {
        foreignKey: 'district_id',
        as: 'population',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })

      District.hasMany(models.Report, {
        foreignKey: 'district_id',
        as: 'reports',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      District.belongsToMany(models.Year, {
        through: models.DistrictYear,
        foreignKey: 'district_id',
        as: 'year',
      })
      District.belongsTo(models.Ubication, {
        foreignKey: 'ubication_id',
        as: 'ubication',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    }
  }
  District.init(
    {
      name: DataTypes.STRING,
      ubication_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'District',
    },
  )
  return District
}
