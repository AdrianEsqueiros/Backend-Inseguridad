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
      PublicCenter.belongsTo(models.district_year, {
        foreignKey: 'district_year_id',
        as: 'district_year',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    }
  }
  PublicCenter.init(
    {
      public_center_name: DataTypes.STRING,
      public_center: DataTypes.ENUM(
        'Centros Educativos',
        'Hospitales',
        'Clínicas',
        'Comisarías',
        'Parques',
      ),
      district_year_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'PublicCenter',
    },
  )
  return PublicCenter
}
