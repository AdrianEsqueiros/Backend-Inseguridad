const express = require('express')
const { getDistricts } = require('../controllers/distritct')

const router = express.Router()

router.get('/', getDistricts)
module.exports = router
