'use strict';
//npx sequelize-cli db:seed:all
//npx sequelize-cli db:seed:undo

const {DB_TABLES} = require('../constants');
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(DB_TABLES.USER, [
            {
                email: 'test@demo.com',
                password: 'Ghbdsn31',
                firstName: 'John',
                lastName: 'Wick'
            },
            {
                email: 'vitalik@demo.com',
                password: 'Ghbdsn31',
                firstName: 'Vitalii',
                lastName: 'Palka'
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(DB_TABLES.USER, null, {});
    }
};
