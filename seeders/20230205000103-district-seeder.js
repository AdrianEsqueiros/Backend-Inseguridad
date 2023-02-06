'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const district = []
    const districts = [
      'Carabayllo',
      'Cercado de Lima',
      'Chaclacayo',
      'Chorrillos',
      'Cieneguilla',
      'Comas',
      'El agustino',
      'Independencia',
      'Jesús maría',
      'La molina',
      'La victoria',
      'Lince',
      'Los olivos',
      'Lurigancho',
      'Lurín',
      'Magdalena del mar',
      'Miraflores',
      'Pachacámac',
      'Pucusana',
      'Pueblo libre',
      'Puente piedra',
      'Punta hermosa',
      'Punta negra',
      'Rímac',
      'San bartolo',
      'San borja',
      'San isidro',
      'San Juan de Lurigancho',
      'San Juan de Miraflores',
      'San Luis',
      'San Martin de Porres',
      'San Miguel',
      'Santa Anita',
      'Santa María del Mar',
      'Santa Rosa',
      'Santiago de Surco',
      'Surquillo',
      'Villa el Salvador',
      'Villa Maria del Triunfo',
    ]
    for (const i of districts) {
      district.push({
        district_name: i,
        ubication_id: Math.floor(Math.random() * 4) + 1,
        createdAt: new Date(),
      })
    }
    return await queryInterface.bulkInsert('Districts', district)
  },
  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Districts', {}, null)
  },
}
