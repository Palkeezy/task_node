'use strict';
//npx sequelize-cli db:migrate
//npx sequelize-cli db:migrate:undo

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('user', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
          },
          password: {
            type: Sequelize.STRING,
            allowNull: false
          },
          firstName: {
            type: Sequelize.STRING,
            allowNull: false
          },
          lastName: {
            type: Sequelize.STRING,
            allowNull: false
          }
        });
    },

    down: (queryInterface, Sequelize) => {
          return queryInterface.dropTable('user');
    }
};
