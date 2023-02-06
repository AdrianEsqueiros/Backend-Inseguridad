'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Report.belongsToMany(models.Location, {
        through: models.ReportLocation,
        as: 'locations',
        foreignKey: 'report_id',
      })
      Report.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'category',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      Report.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      Report.belongsTo(models.District, {
        foreignKey: 'district_id',
        as: 'district',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      Report.belongsTo(models.Location, {
        foreignKey: 'location_id',
        as: 'location',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      Report.belongsTo(models.Year, {
        foreignKey: 'year_id',
        as: 'year',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    }
  }
  Report.init(
    {
      photos: DataTypes.STRING,
      comments: DataTypes.TEXT,
      rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 1,
          max: 10,
        },
      },
      category_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      district_id: DataTypes.INTEGER,
      location_id: DataTypes.INTEGER,
      year_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Report',
    },
  )
  return Report
}
