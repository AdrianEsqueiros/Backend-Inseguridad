'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Categories', [
      {
        category_name: 'Limpieza',
        createdAt: new Date(),
      },
      {
        category_name: 'Delincuencia',
        createdAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Categories', {}, null)
  },
}
