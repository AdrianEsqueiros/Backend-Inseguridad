'use strict'
const faker = require('faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const publicCenters = []
    const totalPublicCenters = 20
    const totalYears = 1014
    for (let i = 1; i <= totalPublicCenters; i++) {
      for (let j = 1; j <= totalYears; j++) {
        publicCenters.push({
          public_center_name: faker.company.companyName(),
          public_center: Math.floor(Math.random() * 5) + 1,
          district_year_id: j,
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
