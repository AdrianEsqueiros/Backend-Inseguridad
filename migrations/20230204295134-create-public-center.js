'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PublicCenters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      public_center_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      public_center: {
        allowNull: false,
        type: Sequelize.ENUM(
          'Centros Educativos',
          'Hospitales',
          'Clínicas',
          'Comisarías',
          'Parques',
        ),
      },
      district_year_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'district_years',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PublicCenters')
  },
}
