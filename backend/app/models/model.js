module.exports = (sequelize, Sequelize) => {
    const clientInfo = sequelize.define("client_info", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      client_name: {
        type: Sequelize.STRING
      },
      client_phone: {
        type: Sequelize.STRING
      }
    });
    

    const prepaidCard = sequelize.define("prepaid_card", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: clientInfo,
          key: "id"
        }
      },
      prepaid_amount: {
        type: Sequelize.DECIMAL,
      },
      prepaid_balance: {
        type: Sequelize.DECIMAL,
      },
      service_name: {
        type: Sequelize.STRING,
      },
      service_price: {
        type: Sequelize.DECIMAL,
      },
      tip_included: {
        type: Sequelize.TINYINT,
      },
    });

    const timesCard = sequelize.define("times_card", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: clientInfo,
          key: "id"
        }
      },
      service_name: {
        type: Sequelize.STRING,
      },
      times_left: {
        type: Sequelize.INTEGER,
      },
      times_amount: {
        type: Sequelize.INTEGER,
      },
    });

    // prepaidCard.belongsTo(clientInfo, {
    //   foreignKey: 'client_id',
    //   sourceKey: 'id'
    // });

    // timesCard.belongsTo(clientInfo, {
    //   foreignKey: 'client_id',
    //   sourceKey: 'id'
    // });
  
    return { clientInfo, prepaidCard, timesCard };
  };