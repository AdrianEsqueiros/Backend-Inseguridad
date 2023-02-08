'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Year extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Year.belongsToMany(models.District, {
        through: models.district_year,
        foreignKey: 'year_id',
        as: 'districts',
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
