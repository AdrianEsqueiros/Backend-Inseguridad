const express = require('express')
const { getGraphicReport, getGeneralReport } = require('../controllers/report')

const router = express.Router()

router.post('/getGraphicReport', getGraphicReport)
router.post('/getGeneralReport', getGeneralReport)

module.exports = router
