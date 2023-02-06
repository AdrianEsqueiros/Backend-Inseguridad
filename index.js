const faker = require('faker')
const fs = require('fs')

const numRecords = 30
const fileName = 'locations.csv'

const writeStream = fs.createWriteStream(fileName)
writeStream.write('latitude,longitude,pictures,comments,category,rate\n')

for (let i = 0; i < numRecords; i++) {
  const latitude = faker.address.latitude()
  const longitude = faker.address.longitude()
  const pictures = faker.image.image()
  const comments = faker.lorem.sentence()
  const category = Math.floor(Math.random() * (2 - 1 + 1)) + 1
  const rate = Math.floor(Math.random() * (10 - 1 + 1)) + 1

  const line = `${latitude},${longitude},${pictures}, ${comments}, ${category} , ${rate}\n`
  writeStream.write(line)
}

writeStream.end()
