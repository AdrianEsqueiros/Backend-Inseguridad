# Backend-limpieza-delincuencia


## Project Setup

```sh
npm install
```
## Configurar el .env para la conexion de la base de datos

### Create a schema

```sh
create schema inseguridad;
```
### Stored Procedure

```sh
USE `inseguridad`;
DROP procedure IF EXISTS `inseguridad`.`paginate_results`;
;

DELIMITER $$
USE `inseguridad`$$
CREATE DEFINER=paginate_results`root`@`localhost` PROCEDURE `paginate_results`(IN npage INT, IN perpage INT, IN _year int)
BEGIN
 DECLARE offset INT;
  SET offset = (perpage * (npage - 1));

select r.id ,r.photos, r.comments, r.rate, r.category_id, u.first_name , u.last_name, r.location_id, r.district_id, r.year_id
  FROM  reports r 
  left join locations l on l.id = r.location_id
  left join users u on u.id = r.user_id 
  where _year is null or r.year_id =_year
  LIMIT perpage OFFSET offset
  ;
END$$

DELIMITER ;
;

```
```sh
USE `inseguridad`;
DROP procedure IF EXISTS `inseguridad`.`get_reports`;
;

DELIMITER $$
USE `inseguridad`$$
CREATE DEFINER=get_reports`root`@`localhost` PROCEDURE `get_reports`(IN npage INT, IN perpage INT, IN _year int, in _district varchar(50))
begin

  SET npage = (perpage * (npage - 1));
 
     
select
	x.id,
	d.district_name,
	year(y.year_date) as year,
	x.total as total_reports, 
	(
	select
		count(p3.id)
	from
		publiccenters p3
	where
		p3.district_year_id = 3)as total_centers, 
	x.avg_rate,
	x.porcentaje,
	p2.surface_area ,
	p2.birth_rate ,
	p2.death_rate ,
	p2.population ,
	lq.level_education , 
	lq.quality_food ,
	lq.socioeconomics,
	u.`zone` ,
	u.province ,
	u.region ,
	u.country
from
	(
	select
		dy.id as id, 
		dy.district_id,
		dy.year_id,
		COUNT(r.id) as total,
		ROUND(AVG(r.rate), 2) as avg_rate,
		CONCAT(ROUND((COUNT(r.id)) / (avg(r.rate) * 100), 2), "%" ) as porcentaje
	from
		reports r
	left join district_years dy on
		dy.id = r.district_year_id
	group by
		dy.id) x
join populations p2 on
	p2.district_year_id = x.id
join life_qualities lq on
	lq.district_year_id = x.id
join districts d on
	d.id = x.district_id
join years y on
	y.id = x.year_id
join ubications u on
	u.id = d.ubication_id
where
	(_year is null
		or year(y.year_date) = _year)
	and (_district is null
		or d.district_name = _district)
group by
	x.id
limit perpage OFFSET npage ;

	
end$$

DELIMITER ;
;

```
## Sequilize cli para las migraciones y seeders
```sh
npm i sequelize-cli
```

### Migrate con Sequelize cli
```sh
sequilize db:migrate
```
### Seeders con Sequelize-cli 
Para los 3 millones de registros demora aprox 5min pero los datos van cargando progresivamente  
```sh
sequilize db:seed:all
```
### Compile and Hot-Reload for Development
```sh
npm run dev
```

