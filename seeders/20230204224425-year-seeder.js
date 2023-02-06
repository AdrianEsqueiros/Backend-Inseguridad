'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const years = []
    for (let i = 1998; i <= 2023; i++) {
      years.push({
        year_date: `${i}/01/01`,
      })
    }
    return await queryInterface.bulkInsert('Years', years)
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Years', {}, null)
  },
}
