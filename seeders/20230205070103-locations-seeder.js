'use strict'
const faker = require('faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const locations = []
    const count = 5000
    for (let i = 0; i < count; i++) {
      locations.push({
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude(),
        createdAt: new Date(),
      })
    }
    return await queryInterface.bulkInsert('Locations', locations)
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Locations', {}, null)
  },
}
