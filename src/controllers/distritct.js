const connection = require('../../database/database')

const getDistricts = async (req, res) => {
  connection.query('select d.id,d.district_name from districts d ;', function (
    err,
    results,
    fields,
  ) {
    res.json(results)
    console.log(results) // results contains rows returned by server
    // console.log(fields) // fields contains extra meta data about results, if available
  })
}
module.exports = { getDistricts }
