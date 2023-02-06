'use strict'
import { Model } from 'sequelize'
export default (sequelize, DataTypes) => {
  class Year extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Year.belongsToMany(models.District, {
        through: models.DistrictYear,
        foreignKey: 'year_id',
        as: 'districts',
      })
      Year.hasMany(models.Report, {
        foreignKey: 'year_id',
        as: 'reports',
      })
      Year.hasMany(models.LifeQuality, {
        foreignKey: 'year_id',
        as: 'reports',
      })
      Year.hasMany(models.Population, {
        foreignKey: 'year_id',
        as: 'reports',
      })
      Year.hasMany(models.PublicCenter, {
        foreignKey: 'year_id',
        as: 'reports',
      })
    }
  }
  Year.init(
    {
      year_date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: 'Year',
    },
  )
  return Year
}
