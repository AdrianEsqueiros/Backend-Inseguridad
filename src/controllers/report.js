const connection = require('../../database/database')

const getGraphicReport = async (req, res) => {
  connection.query(
    'SELECT d.district_name, YEAR(y.year_date) AS year, c.category_name, MONTH(r.createdAt) AS month, CAST(AVG(r.rate) AS UNSIGNED) AS avg_rate FROM reports r LEFT JOIN districts d ON d.id = r.district_id LEFT JOIN categories c ON c.id = r.category_id LEFT JOIN years y ON y.id = r.year_id WHERE r.district_id = ? AND r.year_id = ?  AND YEAR(r.createdAt) = YEAR(y.year_date) GROUP BY r.category_id, MONTH(r.createdAt);',
    [req.body.districtId, req.body.yearId],
    function (err, results, fields) {
      res.json(results)
      console.log(results) // results contains rows returned by server
      // console.log(fields) // fields contains extra meta data about results, if available
    },
  )
}
const getGeneralReport = async (req, res) => {
  connection.query(
    'select count(r.id)as total, r.year_id as year, r.district_id as district, round(AVG(r.rate),2)  as avg_rate, concat(round(( AVG(r.rate)  / 10 * 100 ),2), "%") AS porcentaje from reports r	 group by r.year_id, r.district_id;',
    function (err, results, fields) {
      res.json(results)
      console.log(results) // results contains rows returned by server
      // console.log(fields) // fields contains extra meta data about results, if available
    },
  )
}
const getDetailReport = async (req, res) => {
  connection.query(
    'CALL `inseguridad`.`paginate_results`(?, ?, ?);',
    [req.body.npage, req.body.perpage, req.body.yearId],
    function (err, results, fields) {
      res.json(results[0])
      console.log(results) // results contains rows returned by server
      // console.log(fields) // fields contains extra meta data about results, if available
    },
  )
}
module.exports = { getGraphicReport, getGeneralReport, getDetailReport }
