'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userLocations = []
    const count = 1000
    for (let i = 0; i < count; i++) {
      userLocations.push({
        user_id: Math.floor(Math.random() * 400) + 1,
        location_id: Math.floor(Math.random() * 5000) + 1,
        createdAt: new Date(),
      })
    }
    return await queryInterface.bulkInsert('User_Locations', userLocations)
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('User_Locations', {}, null)
  },
}
