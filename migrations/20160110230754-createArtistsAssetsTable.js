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
      size: {type: Sequelize.INTEGER, allowNull: false},
      uuid: {type: Sequelize.STRING, allowNull: false},
      type: {type: Sequelize.STRING, allowNull: false},
      fileName: {type: Sequelize.STRING, allowNull: false},
      url: {type: Sequelize.STRING, allowNull: false},
      createdAt: {type: Sequelize.DATE, allowNull: true},
      updatedAt: {type: Sequelize.DATE, allowNull: true}
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('artists_assets');
  }
};
