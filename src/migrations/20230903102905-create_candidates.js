//Generated by CreateSequelizeModelCreateMigration - sequelize create model migration
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("candidates", 
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
 candidateName: {
  type: Sequelize.STRING(100),
  field: "candidate_name"
 }
 ,
 source: {
  type: Sequelize.STRING(50),
  allowNull: true,
  field: "source"
 }
 ,
 candidateState: {
  type: Sequelize.BIGINT,
  allowNull: true,
  field: "candidate_state"
 }
 ,
 providerID: {
  type: Sequelize.BIGINT,
  allowNull: true,
  field: "provider_id"
  ,
  references: //Generated by GetReferencesKeyForModelCreationMigration - references key for model creation
  {
   model: "providers",
   key: "id",
  },
  onUpdate: "CASCADE",
  onDelete: "SET NULL"
 },
 providerState: {
  type: Sequelize.BIGINT,
  allowNull: true,
  field: "provider_state"
 }
 ,
 providerOffice: {
  type: Sequelize.STRING(50),
  allowNull: true,
  field: "provider_office"
 }
 ,
 providerSource: {
  type: Sequelize.BIGINT,
  allowNull: true,
  field: "provider_source"
 }
 ,
 providerType: {
  type: Sequelize.BIGINT,
  allowNull: true,
  field: "provider_type"
 }
 ,
 providerContactName: {
  type: Sequelize.STRING(50),
  allowNull: true,
  field: "provider_contact_name"
 }
 ,
 providerEmail: {
  type: Sequelize.STRING(50),
  allowNull: true,
  field: "provider_email"
 }
 ,
 providerContactNumber: {
  type: Sequelize.STRING(50),
  allowNull: true,
  field: "provider_contact_number"
 }
 ,
 email: {
  type: Sequelize.STRING(50),
  allowNull: true,
  field: "email"
 }
 ,
 employer: {
  type: Sequelize.STRING(50),
  allowNull: true,
  field: "employer"
 }
 ,
 employerOffice: {
  type: Sequelize.BIGINT,
  allowNull: true,
  field: "employer_office"
 }
 ,
 employerState: {
  type: Sequelize.BIGINT,
  allowNull: true,
  field: "employer_state"
 }
 ,
 employerCandidateID: {
  type: Sequelize.STRING(50),
  allowNull: true,
  field: "employer_candidate_id"
 }
 ,
 employerCandidateOwner: {
  type: Sequelize.STRING(50),
  allowNull: true,
  field: "employer_candidate_owner"
 }
 ,
 groupSite: {
  type: Sequelize.BIGINT,
  allowNull: true,
  field: "group_site"
 }
 ,
 division: {
  type: Sequelize.BIGINT,
  allowNull: true,
  field: "division"
 }
 ,
 wageSubsidyAmount: {
  type: Sequelize.DECIMAL(10,2),
  field: "wage_subsidy_amount"
 }
 ,
 benchmarkHours: {
  type: Sequelize.DECIMAL(10,2),
  field: "benchmark_hours"
 }
 ,
 startDate: {
  type: Sequelize.DATEONLY,
  field: "start_date"
 }
 ,
 stage: {
  type: Sequelize.BIGINT,
  allowNull: true,
  field: "stage"
 }
 ,
 outcomeReminder: {
  type: Sequelize.STRING(50),
  allowNull: true,
  field: "outcome_reminder"
 }
 ,
 payslipStatus: {
  type: Sequelize.STRING(50),
  allowNull: true,
  field: "payslip_status"
 }
 ,
 priority: {
  type: Sequelize.BIGINT,
  allowNull: true,
  field: "priority"
 }
 ,
 placementSent: {
  type: Sequelize.BOOLEAN,
  field: "placement_sent"
 }
 ,
 placementStatus: {
  type: Sequelize.BIGINT,
  allowNull: true,
  field: "placement_status"
 }
 ,
 archive: {
  type: Sequelize.BOOLEAN,
  field: "360archive"
 }
 ,
 invoiced: {
  type: Sequelize.BOOLEAN,
  field: "360invoiced"
 }
 ,
 invoiceNumber: {
  type: Sequelize.STRING(50),
  allowNull: true,
  field: "360_invoice_number"
 }
 ,
 enquiryDate: {
  type: Sequelize.DATEONLY,
  allowNull: true,
  field: "360_enquiry_date"
 }
 ,
 enquiryType: {
  type: Sequelize.STRING(50),
  allowNull: true,
  field: "360_enquiry_type"
 }
 ,
 wSAgreement: {
  type: Sequelize.STRING(255),
  allowNull: true,
  field: "wsagreement"
 }
 ,
 wSSchedule: {
  type: Sequelize.STRING(255),
  allowNull: true,
  field: "wsschedule"
 }
 ,
 notes: {
  type: Sequelize.TEXT,
  allowNull: true,
  field: "360notes"
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
    await queryInterface.dropTable("candidates");
  },
};
