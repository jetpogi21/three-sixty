//Generated by CreateSequelizeModelCreateMigration - sequelize create model migration
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("states", 
      //Generated by GenerateFieldsForModelMigration
//Generated by GetModelFieldsDictionary
{
 id: {
  type: Sequelize.BIGINT,
  autoIncrement: true,
  primaryKey: true,
  field: "id"
 }
 ,
 name: {
  type: Sequelize.STRING(50),
  unique: true,
  field: "name"
 }
 ,
 slug: {
  type: Sequelize.STRING,
  unique: true
 }
 ,
 createdAt: {
  type: Sequelize.DATE,
  defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  field: "createdAt"
 },
 updatedAt: {
  type: Sequelize.DATE,
  defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  field: "updatedAt"
 }}
,
      {
        
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("states");
  },
};
