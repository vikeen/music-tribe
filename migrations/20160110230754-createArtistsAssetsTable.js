'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('artists_assets', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: Sequelize.INTEGER,
        model: "users",
        key: "id"
      },
      assestId: {type: Sequelize.STRING, allowNull: true},
      assestType: {type: Sequelize.STRING, allowNull: true},
      assestEncoding: {type: Sequelize.STRING, allowNull: true},
      createdAt: {type: Sequelize.DATE, allowNull: true},
      updatedAt: {type: Sequelize.DATE, allowNull: true}
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('artists_assets');
  }
};
