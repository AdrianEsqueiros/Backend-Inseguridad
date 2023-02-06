'use strict'
const faker = require('faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const publicCenters = []
    const totalDistricts = 195
    const totalYears = 26
    for (let i = 1; i <= totalDistricts; i++) {
      for (let j = 1; j <= totalYears; j++) {
        publicCenters.push({
          public_center_name: faker.company.companyName(),
          public_center: Math.floor(Math.random() * 5) + 1,
          district_id: Math.floor(Math.random() * 39) + 1,
          year_id: j,
          createdAt: new Date(),
        })
      }
    }
    return await queryInterface.bulkInsert('PublicCenters', publicCenters)
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('PublicCenters', {}, null)
  },
}
