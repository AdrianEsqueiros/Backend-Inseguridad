'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const lifeQuality = []
    const totalDistricts = 39
    const totalYears = 26
    for (let i = 1; i <= totalDistricts; i++) {
      for (let j = 1; j <= totalYears; j++) {
        lifeQuality.push({
          level_education: Math.floor(Math.random() * 3) + 1,
          quality_food: Math.floor(Math.random() * 2) + 1,
          socioeconomics: Math.floor(Math.random() * 3) + 1,
          district_id: i,
          year_id: j,

          createdAt: new Date(),
        })
      }
    }

    return await queryInterface.bulkInsert('Life_Qualities', lifeQuality)
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Life_Qualities', {}, null)
  },
}
