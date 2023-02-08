'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const population = []
    const totalDistrictsYears = 1014

    for (let i = 1; i <= totalDistrictsYears; i++) {
      population.push({
        surface_area: Math.floor(Math.random() * 1000000.99) + 60000.01,
        birth_rate: Math.floor(Math.random() * 10000) + 3200,
        death_rate: Math.floor(Math.random() * 10000) + 3200,
        population: Math.floor(Math.random() * 2000000) + 100000,
        district_year_id: i,

        createdAt: new Date(),
      })
    }
    return await queryInterface.bulkInsert('Populations', population)
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Populations', {}, null)
  },
}
