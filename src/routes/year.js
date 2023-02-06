const express = require('express')
const { getYears } = require('../controllers/year')

const router = express.Router()

router.get('/', getYears)

module.exports = router
