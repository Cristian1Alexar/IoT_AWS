module.exports = (sequelize, Sequelize) => {
    const Sensor = sequelize.define('sensor', {
      value: {
      type: Sequelize.INTEGER
      },
      actuator: {
        type: Sequelize.STRING
      }
    });
    return Sensor;
  }