const connection = require('../../database/database')
const getYears = async (req, res) => {
  connection.query(
    ' select y.id, YEAR (y.year_date) as year_date from years y order by y.id desc;',
    function (err, results, fields) {
      res.json(results)
      console.log(results) // results contains rows returned by server
    },
  )
}
module.exports = { getYears }
