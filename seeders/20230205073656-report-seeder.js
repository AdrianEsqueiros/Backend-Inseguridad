'use strict'
const faker = require('faker')
const sequelize = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const chunkSize = 1000
    const totalChunks = 3000
    for (let i = 0; i < totalChunks; i++) {
      const reports = []
      for (let j = 0; j < chunkSize; j++) {
        reports.push({
          photos: faker.image.image(),
          comments: faker.lorem.sentence(),
          rate: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 2) + 1,
          user_id: Math.floor(Math.random() * 400) + 1,
          district_id: Math.floor(Math.random() * 39) + 1,
          location_id: Math.floor(Math.random() * 5000) + 1,
          year_id: Math.floor(Math.random() * 26) + 1,
          createdAt: `${Math.floor(Math.random() * (2023 - 1998 + 1)) + 1998}/${
            Math.floor(Math.random() * 12) + 1
          }/01`,
        })
      }
      await queryInterface.bulkInsert('Reports', reports)
      console.log(`Chunk 1k Reports ${i + 1}/${totalChunks} seeded`)
    }
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Reports', {}, null)
  },
}
