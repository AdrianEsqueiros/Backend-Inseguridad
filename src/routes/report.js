const express = require('express')
const {
  getGraphicReport,
  getGeneralReport,
  getDetailReport,
  getReport,
} = require('../controllers/report')

const router = express.Router()

router.post('/getGraphicReport', getGraphicReport)
router.post('/getDetailReport', getDetailReport)
router.post('/getGeneralReport', getGeneralReport)
router.get('/getReport', getReport)

module.exports = router
