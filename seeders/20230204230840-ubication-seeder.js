'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const ubications = []
    for (const i of ['Centro', 'Norte', 'Sur', 'Este', 'Oeste']) {
      ubications.push({
        zone: i,
        province: 'Lima',
        region: 'Lima',
        country: 'Perú',
        createdAt: new Date(),
      })
    }
    return await queryInterface.bulkInsert('Ubications', ubications)
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Ubications', {}, null)
  },
}
