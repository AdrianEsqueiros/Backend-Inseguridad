const connection = require('../../database/database')
const models = require('../../models')
const Op = models.Sequelize.Op

const getGraphicReport = async (req, res) => {
  const query =
    'select count(r.id)as report_per_month,c.category_name as category ,AVG(r.rate) as avg_rate, month(r.createdAt) as month,\
      d.district_name as district , year(y.year_date) as year  from reports r\
      join categories c on c.id = r.category_id \
      join district_years dy on dy.id = r.district_year_id \
      join districts d on d.id  =  dy.district_id \
      join years y on y.id = dy.year_id \
      where d.district_name = ? and  year(y.year_date) = ?\
      group by r.category_id , month(r.createdAt)\
      ;'
  const params = [req.body.district, req.body.year]

  await models.sequelize
    .query(query, {
      replacements: params,
      type: models.Sequelize.QueryTypes.SELECT,
    })
    .then((data) => {
      const response = data
      res.send(response)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving reports.',
      })
    })
}
const getGeneralReport = async (req, res) => {
  const query = 'CALL get_reports(?,?,?,?)'
  //     'select 	x.id, d.district_name, year(y.year_date) as year,	x.total as total_reports, \
  // 	(	select count(p3.id) 	from 	publiccenters p3 	where		p3.district_year_id = 3)as total_centers, \
  // 	x.avg_rate,	x.porcentaje,	p2.surface_area ,	p2.birth_rate ,	p2.death_rate ,	p2.population ,	lq.level_education , \
  // 	lq.quality_food ,	lq.socioeconomics,	u.`zone` ,	u.province ,	u.region ,	u.country from	(	select		dy.id as id, \
  // 		dy.district_id,		dy.year_id,		COUNT(r.id) as total,		ROUND(AVG(r.rate), 2) as avg_rate,		CONCAT(ROUND((COUNT(r.id)) / (avg(r.rate) * 100), 2), "%"    ) as porcentaje \
  // 	from		reports r	left join    district_years dy on		dy.id = r.district_year_id	group by		dy.id) x join populations p2 on	p2.district_year_id = x.id \
  // join life_qualities lq on	lq.district_year_id = x.id join districts d on	d.id = x.district_id join years y on	y.id = x.year_id join ubications u on	u.id = d.ubication_id \
  // 	where (? IS NULL OR year(y.year_date) = ?) AND (? IS NULL OR d.district_name = ?) group by 	x.id limit ?  offset ?; '

  const { offset, limit } = req.query

  await models.sequelize
    .query(query, {
      // replacements: {},
      replacements: [
        // req.body.offset,
        // req.body.limit,
        offset,
        limit,
        req.body.year,
        req.body.district,
      ],
      type: models.Sequelize.QueryTypes.SELECT,
    })
    .then((data) => {
      // console.log(data)
      const response = getPagingReport(data, offset, limit)
      res.send(response)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.',
      })
    })
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

const getReport = (req, res) => {
  const { page, size, _id } = req.query
  var condition = _id ? { user_id: { [Op.eq]: _id } } : null

  const { limit, offset } = getPagination(page, size)

  models.Report.findAndCountAll({
    where: condition,
    limit,
    offset,
    include: [
      {
        model: models.Category,
        as: 'category',
        attributes: ['category_name'],
      },
      {
        model: models.User,
        as: 'user',
        attributes: ['first_name', 'last_name'],
      },
      {
        model: models.Location,
        as: 'location',
        attributes: ['longitude', 'latitude'],
      },
    ],
  })
    .then((data) => {
      const response = getPagingData(data, page, limit)
      res.send(response)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.',
      })
    })
}
const getPagination = (page, size) => {
  const limit = size ? +size : 1
  const offset = page ? page * limit : 0

  return { limit, offset }
}

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: reports } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)

  return { totalItems, reports, totalPages, currentPage }
}
const getPagingReport = (data, page, limit) => {
  const totalItems = 1014
  const reports = Object.values(data[0])
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)

  return { totalItems, reports, totalPages, currentPage }
}
module.exports = {
  getGraphicReport,
  getGeneralReport,
  getDetailReport,
  getReport,
}
