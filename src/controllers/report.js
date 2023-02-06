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
    'select d.district_name, p.surface_area ,p.birth_rate ,p.death_rate  ,p.population ,lq.level_education ,lq.quality_food ,lq.socioeconomics, year(y.year_date ) as year, count(*) as total_denuncias, CAST(AVG(r.rate) AS UNSIGNED) as promedio, c.category_name , CONCAT(        ROUND(( (select  CAST(AVG(r.rate) AS UNSIGNED) as promedio) / 10 * 100 ), 2), "%") AS porcentaje from districts d left join reports r on r.district_id  = d.id left join categories c on c.id = r.category_id left join populations p on p.district_id =d.id  left join life_qualities lq ON lq.district_id  = d.id left join district_years dy on dy.district_id = d.id left join years y on y.id = dy.year_id  where dy.year_id  = r.year_id and p.year_id =r.year_id  and lq.year_id =r.year_id  and d.id =? and r.year_id =? GROUP BY r.category_id;',
    [req.body.districtId, req.body.yearId],
    function (err, results, fields) {
      res.json(results)
      console.log(results) // results contains rows returned by server
      // console.log(fields) // fields contains extra meta data about results, if available
    },
  )
}
module.exports = { getGraphicReport, getGeneralReport }
