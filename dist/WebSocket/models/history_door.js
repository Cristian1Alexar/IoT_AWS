module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('customer', {
      message: {
      type: Sequelize.STRING
      },
      actuator: {
        type: Sequelize.STRING
      }
    });
    
    return Customer;
  }