module.exports = (sequelize, Sequelize) => {
    const ClientInfo = sequelize.define("client_info", {
      id: {
        type: Sequelize.INTEGER,
      },
      create_at: {
        type: Sequelize.DATE,
      },
      client_name: {
        type: Sequelize.STRING
      },
      client_phone: {
        type: Sequelize.STRING
      }
    });
    return ClientInfo;
  };