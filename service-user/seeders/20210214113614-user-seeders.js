'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
         name : "Celvine",
         profession : "Web Dev",
         avatar : null,
         role : 'admin',
         email: "admin@micro.com",
         password : await bcrypt.hash('12345678', 10),
         created_at : new Date(),
         updated_at : new Date()
    }, {
        name: "ADP",
        profession: "Web Dev",
        avatar: null,
        role: 'student',
        email: "student@micro.com",
        password: await bcrypt.hash('12345678', 10),
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
