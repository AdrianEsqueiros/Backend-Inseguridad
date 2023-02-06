'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const districtYear = []
    for (let i = 1; i <= 39; i++) {
      for (let j = 1; j <= 26; j++) {
        districtYear.push({
          district_id: i,
          year_id: j,
        })
      }
    }
    return await queryInterface.bulkInsert('District_Years', districtYear)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('District_Years', {}, null)
  },
}
