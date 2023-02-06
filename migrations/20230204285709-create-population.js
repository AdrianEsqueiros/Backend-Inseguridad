'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Populations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      surface_area: {
        allowNull: false,
        type: Sequelize.DECIMAL(18, 2),
      },
      birth_rate: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      death_rate: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      population: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      district_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Districts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      year_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Years',
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
    await queryInterface.dropTable('Populations')
  },
}
