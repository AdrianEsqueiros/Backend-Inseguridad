'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const subCategories = []
    for (const i of [
      { name: 'Basura', category_id: 1 },
      { name: 'Mal estado', category_id: 1 },
      { name: 'Falta de depósitos de basura', category_id: 1 },
      { name: 'Mal vecino', category_id: 1 },
      { name: 'Robos', category_id: 2 },
      { name: 'Hurtos', category_id: 2 },
      { name: 'Enfrentamientos', category_id: 2 },
      { name: 'Vandalismo', category_id: 2 },
    ]) {
      subCategories.push({
        sub_category_name: `${i.name}`,
        category_id: `${i.category_id}`,
        createdAt: new Date(),
      })
    }
    return await queryInterface.bulkInsert('Sub_Categories', subCategories)
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('SubCategories', {}, null)
  },
}
