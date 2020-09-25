const Sequelize = require('sequelize');
/* const sequelize = new Sequelize('tec', 'utec', 'utec', {
  host: 'ec2-54-157-145-4.compute-1.amazonaws.com',
  dialect: 'mariadb',
  operatorsAliases: false,
  timezone: '-06:00',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}); */
const sequelize = new Sequelize('iot', 'root', '1234', {
  host: '127.0.0.1',
  port: 3306,
  timestamps: false,
  dialect: 'mysql' 
});

const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.customers = require('./models/history_door.js')(sequelize, Sequelize);
db.sensors = require('./models/sensor.js')(sequelize, Sequelize);
 
module.exports = db;
