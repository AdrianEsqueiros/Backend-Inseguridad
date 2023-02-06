'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class PublicCenter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PublicCenter.belongsTo(models.District, {
        foreignKey: 'district_id',
        as: 'district',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      PublicCenter.belongsTo(models.Year, {
        foreignKey: 'year_id',
        as: 'year',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    }
  }
  PublicCenter.init(
    {
      name: DataTypes.STRING,
      district_id: DataTypes.INTEGER,
      year_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'PublicCenter',
    },
  )
  return PublicCenter
}
