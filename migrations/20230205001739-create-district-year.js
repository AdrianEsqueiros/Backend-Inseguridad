'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'District_Years',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        district_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Districts',
            key: 'id',
          },
        },
        year_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Years',
            key: 'id',
          },
        },
      },
      { timestamps: true },
    )
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('District_Years')
  },
}
