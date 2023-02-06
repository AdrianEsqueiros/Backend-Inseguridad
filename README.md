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

