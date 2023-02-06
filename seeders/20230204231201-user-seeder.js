;('use strict')
const faker = require('faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const person = []
    countUsers = 400
    for (let i = 0; i < countUsers; i++) {
      let DNI = ''
      for (let j = 0; j < 7; j++) {
        DNI += Math.floor(Math.random() * 9) + 1
      }
      person.push({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        age: Math.floor(Math.random() * 80) + 21,
        dni: DNI,
        createdAt: new Date(),
      })
    }
    return queryInterface.bulkInsert('Users', person)
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Users', {}, null)
  },
}
