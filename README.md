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

