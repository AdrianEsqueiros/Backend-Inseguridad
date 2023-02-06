const express = require('express')
const {
  getGraphicReport,
  getGeneralReport,
  getDetailReport,
} = require('../controllers/report')

const router = express.Router()

router.post('/getGraphicReport', getGraphicReport)
router.post('/getDetailReport', getDetailReport)
router.get('/getGeneralReport', getGeneralReport)

module.exports = router
