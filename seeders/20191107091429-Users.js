'use strict';
const {DB_TABLES} = require('../constants');
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(DB_TABLES.USER, [
            {
                email: 'test@demo.com',
                password: '1',
                firstName: 'John',
                lastName: 'Wick'
            },
            {
                email: 'vitalik@demo.com',
                password: '2',
                firstName: 'Vitalii',
                lastName: 'Palka'
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(DB_TABLES.USER, null, {});
    }
};
