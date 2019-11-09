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
                email: 'viitalik3108@gmail.com',
                password: 'Ghbdsn412',
                firstName: 'Vitalii',
                lastName: 'Manone'
            },
            {
                email: 'vitalik@demo.com',
                password: 'Ghbdsn31',
                firstName: 'Vitalii',
                lastName: 'Palka'
            },
            {
                email: 'dev.palkeezyy@gmail.com',
                password: 'oiRedLa1412',
                firstName: 'Palkeezy',
                lastName: 'Vika'
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(DB_TABLES.USER, null, {});
    }
};
