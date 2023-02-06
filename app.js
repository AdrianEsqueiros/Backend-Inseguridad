require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')

const app = express()
app.use(cors())
app.use(express.json())

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json({ type: 'aplication/json' }))

const port = process.env.PORT || 3000
app.use('/api', require('./src/routes/'))
app.listen(port, () => {
  console.log(`http://localhost:${port}/api`)
})
app.get('*', (req, res) =>
  res.status(200).send({
    message:
      'Bienvenid@s, estás en la Web Services de Limpieza Y Delincuencia.',
  }),
)
module.exports = app
