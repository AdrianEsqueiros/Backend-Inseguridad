'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class DistrictYear extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DistrictYear.init(
    {
      district_id: DataTypes.INTEGER,
      year_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'DistrictYear',
    },
  )
  return DistrictYear
}
