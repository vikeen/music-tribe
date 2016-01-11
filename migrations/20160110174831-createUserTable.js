'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {type: Sequelize.STRING, allowNull: true},
      firstName: {type: Sequelize.STRING, allowNull: false},
      lastName: {type: Sequelize.STRING, allowNull: false},
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      photo: {type: Sequelize.STRING, allowNull: true},
      socialProfiles: {type: Sequelize.STRING, defaultValue: '{}'},
      password: {type: Sequelize.STRING, allowNull: false},
      createdAt: {type: Sequelize.DATE, allowNull: true},
      updatedAt: {type: Sequelize.DATE, allowNull: true}
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
