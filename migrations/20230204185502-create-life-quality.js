'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Life_Qualities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      level_education: {
        allowNull: false,

        type: Sequelize.ENUM('primary', 'secondary', 'higher'),
      },
      quality_food: {
        allowNull: false,

        type: Sequelize.ENUM('good', 'bad'),
      },
      socioeconomics: {
        allowNull: false,

        type: Sequelize.ENUM('A', 'B', 'C'),
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
    await queryInterface.dropTable('Life_Qualities')
  },
}
