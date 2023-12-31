//Generated by CreateSequelizeModelCreateMigration
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("password_tokens", 
      //Generated by GenerateFieldsForModelMigration
//Generated by GetModelFieldsDictionary
{
 token: {
  type: Sequelize.STRING(6),
  primaryKey: true,
  field: "token"
 }
 ,
 email: {
  type: Sequelize.STRING(100),
  field: "email"
 }
 ,
 expires: {
  type: Sequelize.DATE,
  field: "expires"
 }
}

    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("password_tokens");
  },
};
