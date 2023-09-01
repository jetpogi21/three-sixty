//Generated by WriteToModelsRouteApi - models route next 13 with SQL
import CandidateModel, { Candidate } from "@/models/CandidateModel";
import { FindOptions, QueryTypes, Transaction } from "sequelize";
import {
  checkDuplicateCombinations,
  getSort,
  parseParams,
  reduceResult,
  removeDuplicates,
  returnJSONResponse,
} from "@/utils/utils";
import sequelize from "@/config/db";
import handleSequelizeError from "@/utils/errorHandling";
import { Op } from "sequelize";
import {
  CandidateDeletePayload,
  CandidateFormUpdatePayload,
  CandidateFormikShape,
  CandidateSearchParams,
  CandidateUpdatePayload,
} from "@/interfaces/CandidateInterfaces";
import { NextResponse } from "next/server";
import { DEFAULT_LIMIT } from "@/utils/constants";
import {
  COLUMNS,
  DEFAULT_SORT_BY,
  PRIMARY_KEY,
  TABLE_NAME,
  UNIQUE_FIELDS,
} from "@/utils/constants/CandidateConstants";
import { CandidateSchema } from "@/schema/CandidateSchema";
import {
  addCursorFilterToQuery,
  appendFieldsToSQL,
  getColumnKeyByDbName,
  getCursorString,
  getDatabaseFieldName,
  getMappedKeys,
  getSortedValue,
  processFields,
  resetSQL,
} from "@/utils/api/utils";
import clsJoin from "@/utils/clsJoin";
import clsSQL from "@/utils/clsSQL";


import { createCandidate, deleteCandidates, updateCandidate } from "@/utils/api/CandidateLibs";

const ModelObject = Candidate;

//Generated by GeneratefindOptions
const findOptions: FindOptions<typeof Candidate> = {
  //Generated by GenerateIncludeOption
  include: [],
  //Generated by GenerateAttributesOption
  attributes: [//Generated by GetAllModelAttributesBySeqModel
"candidateName","source","candidateStateID","providerID","providerStateID","providerOffice","providerSourceID","providerTypeID","providerContactName","providerEmail","providerContactNumber","email","employer","employerOfficeID","employerStateID","employerCandidateID","employerCandidateOwner","groupSiteID","divisionID","wageSubsidyAmount","benchmarkHours","startDate","statusID","stageID","outcomeReminder","payslipStatus","priorityID","placementSent","placementStatusID","archive","invoiced","invoiceNumber","enquiryDate","enquiryType","wSAgreement","wSSchedule","notes","id","createdAt","updatedAt"],
};

//Generated by GetGetmodelsqlNext13 - getModelSQL Next 13
function getCandidateSQL(query: Partial<CandidateSearchParams>, dontFilter: boolean = false) {
  const candidateAttributes = getMappedKeys(COLUMNS);

  const simpleOnly = query["simpleOnly"];
  const cursor = query["cursor"];
  const limit = query["limit"] || DEFAULT_LIMIT;

  const sort = getSortedValue(
    query["sort"]
      ? `${query["sort"].includes("-") ? "-" : ""}${getDatabaseFieldName(
          query["sort"],
          COLUMNS
        )}`
      : undefined,
    candidateAttributes,
    DEFAULT_SORT_BY
  );

  //Remove the - from the sort parameter
  const sortField = sort.includes("-") ? sort.substring(1) : sort;

  //Declare the variables
  const table = TABLE_NAME;
  const fields: ([string, string] | string)[] = //Generated by GenerateSQLFieldList
[["candidate_name","candidateName"],"source",["candidate_state_id","candidateStateID"],["provider_id","providerID"],["provider_state_id","providerStateID"],["provider_office","providerOffice"],["provider_source_id","providerSourceID"],["provider_type_id","providerTypeID"],["provider_contact_name","providerContactName"],["provider_email","providerEmail"],["provider_contact_number","providerContactNumber"],"email","employer",["employer_office_id","employerOfficeID"],["employer_state_id","employerStateID"],["employer_candidate_id","employerCandidateID"],["employer_candidate_owner","employerCandidateOwner"],["group_site_id","groupSiteID"],["division_id","divisionID"],["wage_subsidy_amount","wageSubsidyAmount"],["benchmark_hours","benchmarkHours"],["start_date","startDate"],["status_id","statusID"],["stage_id","stageID"],["outcome_reminder","outcomeReminder"],["payslip_status","payslipStatus"],["priority_id","priorityID"],["placement_sent","placementSent"],["placement_status_id","placementStatusID"],["360archive","archive"],["360invoiced","invoiced"],["360_invoice_number","invoiceNumber"],["360_enquiry_date","enquiryDate"],["360_enquiry_type","enquiryType"],["wsagreement","wSAgreement"],["wsschedule","wSSchedule"],["360notes","notes"],"id"]

  //This will be used to store the fields to be used from the joins
  const joinFields: string[] = [];

  //This will be used to store the replacements needed
  let replacements: Record<string, string> = {};

  const sql = new clsSQL();
  sql.source = table;

  const filters: string[] = [];

  if (!simpleOnly || simpleOnly !== "true") {
    //Generated by GenerateSeqModelFilters
//Generated by GetLikeFilters - LIKE Template
const q = query.q as string;

if (q && !dontFilter) {
   const fields: string[] = ["candidate_name"]
   replacements["q"] = `%${q}%`;
   filters.push(
        `(${fields
          .map((field) => `(${TABLE_NAME}.${field} LIKE :q)`)
          .join(" OR ")})`
      );
}
  }

  /* INSERT JOINS HERE */
  //Generated by GetAllSQLRightJoinSnippets
//Generated by GetSQLRightJoinSnippetFromRelationship - GetSQLRightJoinSnippetFromRelationship
let {
    sql: state_SQL,
    fieldAliases: state_fieldAliases,
    replacements: state_replacements,
    subqueryAlias: state_subqueryAlias,
    modelName: state_modelName,
    filtered: state_filtered,
  } = getStateSQL(query, dontFilter);

  replacements = { ...replacements, ...state_replacements };

  state_fieldAliases.forEach((field) => {
    joinFields.push(`${state_subqueryAlias}.${field}`);
  });

  const stateJoin = new clsJoin(
    state_SQL.sql(),
    "candidate_state_id",
    `\`${state_modelName}.id\``, //`state.id`
    state_subqueryAlias, //tempStates
    "INNER"
  );

  if (state_filtered) {
    sql.joins.push(stateJoin);
  }
//Generated by GetSQLRightJoinSnippetFromRelationship - GetSQLRightJoinSnippetFromRelationship
let {
    sql: provider_SQL,
    fieldAliases: provider_fieldAliases,
    replacements: provider_replacements,
    subqueryAlias: provider_subqueryAlias,
    modelName: provider_modelName,
    filtered: provider_filtered,
  } = getProviderSQL(query, dontFilter);

  replacements = { ...replacements, ...provider_replacements };

  provider_fieldAliases.forEach((field) => {
    joinFields.push(`${provider_subqueryAlias}.${field}`);
  });

  const providerJoin = new clsJoin(
    provider_SQL.sql(),
    "provider_id",
    `\`${provider_modelName}.id\``, //`provider.id`
    provider_subqueryAlias, //tempProviders
    "INNER"
  );

  if (provider_filtered) {
    sql.joins.push(providerJoin);
  }
//Generated by GetSQLRightJoinSnippetFromRelationship - GetSQLRightJoinSnippetFromRelationship
let {
    sql: providerSource_SQL,
    fieldAliases: providerSource_fieldAliases,
    replacements: providerSource_replacements,
    subqueryAlias: providerSource_subqueryAlias,
    modelName: providerSource_modelName,
    filtered: providerSource_filtered,
  } = getProviderSourceSQL(query, dontFilter);

  replacements = { ...replacements, ...providerSource_replacements };

  providerSource_fieldAliases.forEach((field) => {
    joinFields.push(`${providerSource_subqueryAlias}.${field}`);
  });

  const providerSourceJoin = new clsJoin(
    providerSource_SQL.sql(),
    "provider_source_id",
    `\`${providerSource_modelName}.id\``, //`providerSource.id`
    providerSource_subqueryAlias, //tempProviderSources
    "INNER"
  );

  if (providerSource_filtered) {
    sql.joins.push(providerSourceJoin);
  }
//Generated by GetSQLRightJoinSnippetFromRelationship - GetSQLRightJoinSnippetFromRelationship
let {
    sql: providerType_SQL,
    fieldAliases: providerType_fieldAliases,
    replacements: providerType_replacements,
    subqueryAlias: providerType_subqueryAlias,
    modelName: providerType_modelName,
    filtered: providerType_filtered,
  } = getProviderTypeSQL(query, dontFilter);

  replacements = { ...replacements, ...providerType_replacements };

  providerType_fieldAliases.forEach((field) => {
    joinFields.push(`${providerType_subqueryAlias}.${field}`);
  });

  const providerTypeJoin = new clsJoin(
    providerType_SQL.sql(),
    "provider_type_id",
    `\`${providerType_modelName}.id\``, //`providerType.id`
    providerType_subqueryAlias, //tempProviderTypes
    "INNER"
  );

  if (providerType_filtered) {
    sql.joins.push(providerTypeJoin);
  }
//Generated by GetSQLRightJoinSnippetFromRelationship - GetSQLRightJoinSnippetFromRelationship
let {
    sql: employerOffice_SQL,
    fieldAliases: employerOffice_fieldAliases,
    replacements: employerOffice_replacements,
    subqueryAlias: employerOffice_subqueryAlias,
    modelName: employerOffice_modelName,
    filtered: employerOffice_filtered,
  } = getEmployerOfficeSQL(query, dontFilter);

  replacements = { ...replacements, ...employerOffice_replacements };

  employerOffice_fieldAliases.forEach((field) => {
    joinFields.push(`${employerOffice_subqueryAlias}.${field}`);
  });

  const employerOfficeJoin = new clsJoin(
    employerOffice_SQL.sql(),
    "employer_office_id",
    `\`${employerOffice_modelName}.id\``, //`employerOffice.id`
    employerOffice_subqueryAlias, //tempEmployerOffices
    "INNER"
  );

  if (employerOffice_filtered) {
    sql.joins.push(employerOfficeJoin);
  }
//Generated by GetSQLRightJoinSnippetFromRelationship - GetSQLRightJoinSnippetFromRelationship
let {
    sql: groupSite_SQL,
    fieldAliases: groupSite_fieldAliases,
    replacements: groupSite_replacements,
    subqueryAlias: groupSite_subqueryAlias,
    modelName: groupSite_modelName,
    filtered: groupSite_filtered,
  } = getGroupSiteSQL(query, dontFilter);

  replacements = { ...replacements, ...groupSite_replacements };

  groupSite_fieldAliases.forEach((field) => {
    joinFields.push(`${groupSite_subqueryAlias}.${field}`);
  });

  const groupSiteJoin = new clsJoin(
    groupSite_SQL.sql(),
    "group_site_id",
    `\`${groupSite_modelName}.id\``, //`groupSite.id`
    groupSite_subqueryAlias, //tempGroupSites
    "INNER"
  );

  if (groupSite_filtered) {
    sql.joins.push(groupSiteJoin);
  }
//Generated by GetSQLRightJoinSnippetFromRelationship - GetSQLRightJoinSnippetFromRelationship
let {
    sql: division_SQL,
    fieldAliases: division_fieldAliases,
    replacements: division_replacements,
    subqueryAlias: division_subqueryAlias,
    modelName: division_modelName,
    filtered: division_filtered,
  } = getDivisionSQL(query, dontFilter);

  replacements = { ...replacements, ...division_replacements };

  division_fieldAliases.forEach((field) => {
    joinFields.push(`${division_subqueryAlias}.${field}`);
  });

  const divisionJoin = new clsJoin(
    division_SQL.sql(),
    "division_id",
    `\`${division_modelName}.id\``, //`division.id`
    division_subqueryAlias, //tempDivisions
    "INNER"
  );

  if (division_filtered) {
    sql.joins.push(divisionJoin);
  }
//Generated by GetSQLRightJoinSnippetFromRelationship - GetSQLRightJoinSnippetFromRelationship
let {
    sql: stage_SQL,
    fieldAliases: stage_fieldAliases,
    replacements: stage_replacements,
    subqueryAlias: stage_subqueryAlias,
    modelName: stage_modelName,
    filtered: stage_filtered,
  } = getStageSQL(query, dontFilter);

  replacements = { ...replacements, ...stage_replacements };

  stage_fieldAliases.forEach((field) => {
    joinFields.push(`${stage_subqueryAlias}.${field}`);
  });

  const stageJoin = new clsJoin(
    stage_SQL.sql(),
    "stage_id",
    `\`${stage_modelName}.id\``, //`stage.id`
    stage_subqueryAlias, //tempStages
    "INNER"
  );

  if (stage_filtered) {
    sql.joins.push(stageJoin);
  }
//Generated by GetSQLRightJoinSnippetFromRelationship - GetSQLRightJoinSnippetFromRelationship
let {
    sql: priority_SQL,
    fieldAliases: priority_fieldAliases,
    replacements: priority_replacements,
    subqueryAlias: priority_subqueryAlias,
    modelName: priority_modelName,
    filtered: priority_filtered,
  } = getPrioritySQL(query, dontFilter);

  replacements = { ...replacements, ...priority_replacements };

  priority_fieldAliases.forEach((field) => {
    joinFields.push(`${priority_subqueryAlias}.${field}`);
  });

  const priorityJoin = new clsJoin(
    priority_SQL.sql(),
    "priority_id",
    `\`${priority_modelName}.id\``, //`priority.id`
    priority_subqueryAlias, //tempPrioritys
    "INNER"
  );

  if (priority_filtered) {
    sql.joins.push(priorityJoin);
  }
//Generated by GetSQLRightJoinSnippetFromRelationship - GetSQLRightJoinSnippetFromRelationship
let {
    sql: placementStatus_SQL,
    fieldAliases: placementStatus_fieldAliases,
    replacements: placementStatus_replacements,
    subqueryAlias: placementStatus_subqueryAlias,
    modelName: placementStatus_modelName,
    filtered: placementStatus_filtered,
  } = getPlacementStatusSQL(query, dontFilter);

  replacements = { ...replacements, ...placementStatus_replacements };

  placementStatus_fieldAliases.forEach((field) => {
    joinFields.push(`${placementStatus_subqueryAlias}.${field}`);
  });

  const placementStatusJoin = new clsJoin(
    placementStatus_SQL.sql(),
    "placement_status_id",
    `\`${placementStatus_modelName}.id\``, //`placementStatus.id`
    placementStatus_subqueryAlias, //tempPlacementStatuss
    "INNER"
  );

  if (placementStatus_filtered) {
    sql.joins.push(placementStatusJoin);
  }  
  

  //Count should be pre-cursor
  //This part would return the count SQL
  sql.fields = [`COUNT(DISTINCT ${TABLE_NAME}.${PRIMARY_KEY}) AS count`];
  if (filters.length > 0) {
    sql.filter = filters.join(" AND ");
  }
  const countSQL = sql.sql();
  sql.filter = "";

  sql.orderBy = getSort(sort, DEFAULT_SORT_BY, PRIMARY_KEY);
  if (cursor) {
    addCursorFilterToQuery(
      cursor,
      sort,
      sortField,
      PRIMARY_KEY,
      replacements,
      filters,
      TABLE_NAME
    );
  }

  if (filters.length > 0) {
    sql.filter = filters.join(" AND ");
  }

  sql.limit = simpleOnly === "true" ? 0 : parseInt(limit);

  //This part will produce the distinct SQL
  sql.fields = [`${TABLE_NAME}.${PRIMARY_KEY}`];
  sql.groupBy = [PRIMARY_KEY];

  const distinctSQL = sql.sql();

  const distinctJoin = new clsJoin(
    distinctSQL,
    PRIMARY_KEY,
    PRIMARY_KEY,
    "tempDistinct",
    "INNER"
  );

  sql.fields = [];

  //build the sql field name and aliases (aliases are used to destructure the object)
  appendFieldsToSQL(fields, sql, table);

  sql.fields = sql.fields.concat(joinFields);

  /* Insert Join Cancellations here..*/
  //Generated by GetAllRightModelJoinCancellationSnippet
//Generated by GetRightModelJoinCancellationSnippet - GetRightModelJoinCancellationSnippet
state_SQL = getStateSQL(query, true).sql;
stateJoin.source = state_SQL.sql();
stateJoin.joinType = "LEFT";
//Generated by GetRightModelJoinCancellationSnippet - GetRightModelJoinCancellationSnippet
provider_SQL = getProviderSQL(query, true).sql;
providerJoin.source = provider_SQL.sql();
providerJoin.joinType = "LEFT";
//Generated by GetRightModelJoinCancellationSnippet - GetRightModelJoinCancellationSnippet
providerSource_SQL = getProviderSourceSQL(query, true).sql;
providerSourceJoin.source = providerSource_SQL.sql();
providerSourceJoin.joinType = "LEFT";
//Generated by GetRightModelJoinCancellationSnippet - GetRightModelJoinCancellationSnippet
providerType_SQL = getProviderTypeSQL(query, true).sql;
providerTypeJoin.source = providerType_SQL.sql();
providerTypeJoin.joinType = "LEFT";
//Generated by GetRightModelJoinCancellationSnippet - GetRightModelJoinCancellationSnippet
employerOffice_SQL = getEmployerOfficeSQL(query, true).sql;
employerOfficeJoin.source = employerOffice_SQL.sql();
employerOfficeJoin.joinType = "LEFT";
//Generated by GetRightModelJoinCancellationSnippet - GetRightModelJoinCancellationSnippet
groupSite_SQL = getGroupSiteSQL(query, true).sql;
groupSiteJoin.source = groupSite_SQL.sql();
groupSiteJoin.joinType = "LEFT";
//Generated by GetRightModelJoinCancellationSnippet - GetRightModelJoinCancellationSnippet
division_SQL = getDivisionSQL(query, true).sql;
divisionJoin.source = division_SQL.sql();
divisionJoin.joinType = "LEFT";
//Generated by GetRightModelJoinCancellationSnippet - GetRightModelJoinCancellationSnippet
stage_SQL = getStageSQL(query, true).sql;
stageJoin.source = stage_SQL.sql();
stageJoin.joinType = "LEFT";
//Generated by GetRightModelJoinCancellationSnippet - GetRightModelJoinCancellationSnippet
priority_SQL = getPrioritySQL(query, true).sql;
priorityJoin.source = priority_SQL.sql();
priorityJoin.joinType = "LEFT";
//Generated by GetRightModelJoinCancellationSnippet - GetRightModelJoinCancellationSnippet
placementStatus_SQL = getPlacementStatusSQL(query, true).sql;
placementStatusJoin.source = placementStatus_SQL.sql();
placementStatusJoin.joinType = "LEFT";
  

  //Insert joins here LEFT joins e.g. cardCardKeywordJoin, distincJoin or
  //new clsJoin("marvelduel_belongsto", "deck_id", "id", null)
  sql.joins = [distinctJoin,
    //Generated by GetAllRightJoinName
stateJoin,//Generated by GetRightJoinName - GetRightJoinName
providerJoin,//Generated by GetRightJoinName - GetRightJoinName
providerSourceJoin,//Generated by GetRightJoinName - GetRightJoinName
providerTypeJoin,//Generated by GetRightJoinName - GetRightJoinName
employerOfficeJoin,//Generated by GetRightJoinName - GetRightJoinName
groupSiteJoin,//Generated by GetRightJoinName - GetRightJoinName
divisionJoin,//Generated by GetRightJoinName - GetRightJoinName
stageJoin,//Generated by GetRightJoinName - GetRightJoinName
priorityJoin,//Generated by GetRightJoinName - GetRightJoinName
placementStatusJoin,//Generated by GetRightJoinName - GetRightJoinName
    
  ];
  resetSQL(sql);

  const sqlString: string = sql.sql();

  return {
    sqlString,
    countSQL,
    replacements,
  };
}

//Generated by GetAllGetmodelsqlChildNext13
//Generated by GetRightModelgetModelSQLSnippet - GetRightModelgetModelSQLSnippet
function getStateSQL(
  query: Partial<CandidateSearchParams>,
  dontFilter: boolean = false
) {
  const table = "states";
  const fields: (string | [string, string])[] = //Generated by GenerateSQLFieldList
["slug","id","name"]
  const fieldAliases: string[] = [];
  const modelName = "State";
  let filtered = false;
  let replacements: Record<string, string> = {};

  let sql = new clsSQL();
  sql.source = table;

  //build the sql field name and aliases (aliases are used to destructure the object)
  processFields(fields, modelName, table, fieldAliases, sql);

  const filters: string[] = [];
  //Generated by GenerateSeqModelFilters

  /*INSERT JOINS HERE*/

  if (filters.length > 0) {
    filtered = true;
    sql.filter = filters.join(" AND ");
  }

  return {
    sql,
    fieldAliases,
    replacements,
    subqueryAlias: "tempState",
    modelName,
    filtered,
  };
}
//Generated by GetRightModelgetModelSQLSnippet - GetRightModelgetModelSQLSnippet
function getProviderSQL(
  query: Partial<CandidateSearchParams>,
  dontFilter: boolean = false
) {
  const table = "providers";
  const fields: (string | [string, string])[] = //Generated by GenerateSQLFieldList
["slug","id","name"]
  const fieldAliases: string[] = [];
  const modelName = "Provider";
  let filtered = false;
  let replacements: Record<string, string> = {};

  let sql = new clsSQL();
  sql.source = table;

  //build the sql field name and aliases (aliases are used to destructure the object)
  processFields(fields, modelName, table, fieldAliases, sql);

  const filters: string[] = [];
  //Generated by GenerateSeqModelFilters

  /*INSERT JOINS HERE*/

  if (filters.length > 0) {
    filtered = true;
    sql.filter = filters.join(" AND ");
  }

  return {
    sql,
    fieldAliases,
    replacements,
    subqueryAlias: "tempProvider",
    modelName,
    filtered,
  };
}
//Generated by GetRightModelgetModelSQLSnippet - GetRightModelgetModelSQLSnippet
function getProviderSourceSQL(
  query: Partial<CandidateSearchParams>,
  dontFilter: boolean = false
) {
  const table = "provider_sources";
  const fields: (string | [string, string])[] = //Generated by GenerateSQLFieldList
["slug","id","name"]
  const fieldAliases: string[] = [];
  const modelName = "ProviderSource";
  let filtered = false;
  let replacements: Record<string, string> = {};

  let sql = new clsSQL();
  sql.source = table;

  //build the sql field name and aliases (aliases are used to destructure the object)
  processFields(fields, modelName, table, fieldAliases, sql);

  const filters: string[] = [];
  //Generated by GenerateSeqModelFilters

  /*INSERT JOINS HERE*/

  if (filters.length > 0) {
    filtered = true;
    sql.filter = filters.join(" AND ");
  }

  return {
    sql,
    fieldAliases,
    replacements,
    subqueryAlias: "tempProviderSource",
    modelName,
    filtered,
  };
}
//Generated by GetRightModelgetModelSQLSnippet - GetRightModelgetModelSQLSnippet
function getProviderTypeSQL(
  query: Partial<CandidateSearchParams>,
  dontFilter: boolean = false
) {
  const table = "provider_types";
  const fields: (string | [string, string])[] = //Generated by GenerateSQLFieldList
["slug","id","name"]
  const fieldAliases: string[] = [];
  const modelName = "ProviderType";
  let filtered = false;
  let replacements: Record<string, string> = {};

  let sql = new clsSQL();
  sql.source = table;

  //build the sql field name and aliases (aliases are used to destructure the object)
  processFields(fields, modelName, table, fieldAliases, sql);

  const filters: string[] = [];
  //Generated by GenerateSeqModelFilters

  /*INSERT JOINS HERE*/

  if (filters.length > 0) {
    filtered = true;
    sql.filter = filters.join(" AND ");
  }

  return {
    sql,
    fieldAliases,
    replacements,
    subqueryAlias: "tempProviderType",
    modelName,
    filtered,
  };
}
//Generated by GetRightModelgetModelSQLSnippet - GetRightModelgetModelSQLSnippet
function getEmployerOfficeSQL(
  query: Partial<CandidateSearchParams>,
  dontFilter: boolean = false
) {
  const table = "employer_offices";
  const fields: (string | [string, string])[] = //Generated by GenerateSQLFieldList
["slug","id","name"]
  const fieldAliases: string[] = [];
  const modelName = "EmployerOffice";
  let filtered = false;
  let replacements: Record<string, string> = {};

  let sql = new clsSQL();
  sql.source = table;

  //build the sql field name and aliases (aliases are used to destructure the object)
  processFields(fields, modelName, table, fieldAliases, sql);

  const filters: string[] = [];
  //Generated by GenerateSeqModelFilters

  /*INSERT JOINS HERE*/

  if (filters.length > 0) {
    filtered = true;
    sql.filter = filters.join(" AND ");
  }

  return {
    sql,
    fieldAliases,
    replacements,
    subqueryAlias: "tempEmployerOffice",
    modelName,
    filtered,
  };
}
//Generated by GetRightModelgetModelSQLSnippet - GetRightModelgetModelSQLSnippet
function getGroupSiteSQL(
  query: Partial<CandidateSearchParams>,
  dontFilter: boolean = false
) {
  const table = "group_sites";
  const fields: (string | [string, string])[] = //Generated by GenerateSQLFieldList
["slug","id","name"]
  const fieldAliases: string[] = [];
  const modelName = "GroupSite";
  let filtered = false;
  let replacements: Record<string, string> = {};

  let sql = new clsSQL();
  sql.source = table;

  //build the sql field name and aliases (aliases are used to destructure the object)
  processFields(fields, modelName, table, fieldAliases, sql);

  const filters: string[] = [];
  //Generated by GenerateSeqModelFilters

  /*INSERT JOINS HERE*/

  if (filters.length > 0) {
    filtered = true;
    sql.filter = filters.join(" AND ");
  }

  return {
    sql,
    fieldAliases,
    replacements,
    subqueryAlias: "tempGroupSite",
    modelName,
    filtered,
  };
}
//Generated by GetRightModelgetModelSQLSnippet - GetRightModelgetModelSQLSnippet
function getDivisionSQL(
  query: Partial<CandidateSearchParams>,
  dontFilter: boolean = false
) {
  const table = "divisions";
  const fields: (string | [string, string])[] = //Generated by GenerateSQLFieldList
["slug","id","name"]
  const fieldAliases: string[] = [];
  const modelName = "Division";
  let filtered = false;
  let replacements: Record<string, string> = {};

  let sql = new clsSQL();
  sql.source = table;

  //build the sql field name and aliases (aliases are used to destructure the object)
  processFields(fields, modelName, table, fieldAliases, sql);

  const filters: string[] = [];
  //Generated by GenerateSeqModelFilters

  /*INSERT JOINS HERE*/

  if (filters.length > 0) {
    filtered = true;
    sql.filter = filters.join(" AND ");
  }

  return {
    sql,
    fieldAliases,
    replacements,
    subqueryAlias: "tempDivision",
    modelName,
    filtered,
  };
}
//Generated by GetRightModelgetModelSQLSnippet - GetRightModelgetModelSQLSnippet
function getStageSQL(
  query: Partial<CandidateSearchParams>,
  dontFilter: boolean = false
) {
  const table = "stages";
  const fields: (string | [string, string])[] = //Generated by GenerateSQLFieldList
["slug","id","name"]
  const fieldAliases: string[] = [];
  const modelName = "Stage";
  let filtered = false;
  let replacements: Record<string, string> = {};

  let sql = new clsSQL();
  sql.source = table;

  //build the sql field name and aliases (aliases are used to destructure the object)
  processFields(fields, modelName, table, fieldAliases, sql);

  const filters: string[] = [];
  //Generated by GenerateSeqModelFilters

  /*INSERT JOINS HERE*/

  if (filters.length > 0) {
    filtered = true;
    sql.filter = filters.join(" AND ");
  }

  return {
    sql,
    fieldAliases,
    replacements,
    subqueryAlias: "tempStage",
    modelName,
    filtered,
  };
}
//Generated by GetRightModelgetModelSQLSnippet - GetRightModelgetModelSQLSnippet
function getPrioritySQL(
  query: Partial<CandidateSearchParams>,
  dontFilter: boolean = false
) {
  const table = "priorities";
  const fields: (string | [string, string])[] = //Generated by GenerateSQLFieldList
["slug","id","name"]
  const fieldAliases: string[] = [];
  const modelName = "Priority";
  let filtered = false;
  let replacements: Record<string, string> = {};

  let sql = new clsSQL();
  sql.source = table;

  //build the sql field name and aliases (aliases are used to destructure the object)
  processFields(fields, modelName, table, fieldAliases, sql);

  const filters: string[] = [];
  //Generated by GenerateSeqModelFilters

  /*INSERT JOINS HERE*/

  if (filters.length > 0) {
    filtered = true;
    sql.filter = filters.join(" AND ");
  }

  return {
    sql,
    fieldAliases,
    replacements,
    subqueryAlias: "tempPriority",
    modelName,
    filtered,
  };
}
//Generated by GetRightModelgetModelSQLSnippet - GetRightModelgetModelSQLSnippet
function getPlacementStatusSQL(
  query: Partial<CandidateSearchParams>,
  dontFilter: boolean = false
) {
  const table = "placement_status";
  const fields: (string | [string, string])[] = //Generated by GenerateSQLFieldList
["slug","id","name"]
  const fieldAliases: string[] = [];
  const modelName = "PlacementStatus";
  let filtered = false;
  let replacements: Record<string, string> = {};

  let sql = new clsSQL();
  sql.source = table;

  //build the sql field name and aliases (aliases are used to destructure the object)
  processFields(fields, modelName, table, fieldAliases, sql);

  const filters: string[] = [];
  //Generated by GenerateSeqModelFilters

  /*INSERT JOINS HERE*/

  if (filters.length > 0) {
    filtered = true;
    sql.filter = filters.join(" AND ");
  }

  return {
    sql,
    fieldAliases,
    replacements,
    subqueryAlias: "tempPlacementStatus",
    modelName,
    filtered,
  };
}



//Generated by GetSqlModelsGetRoute - GET Models route
export const GET = async (req: Request) => {
  const searchParams = new URL(req.url).searchParams;
  const query = parseParams(searchParams) as Partial<CandidateSearchParams>;

  const candidateAttributes = getMappedKeys(COLUMNS);

  const fetchCount = query["fetchCount"] === "true";
  const sort = getSortedValue(
    query["sort"]
      ? `${query["sort"].includes("-") ? "-" : ""}${getDatabaseFieldName(
          query["sort"],
          COLUMNS
        )}`
      : undefined,
    candidateAttributes,
    DEFAULT_SORT_BY
  );

  //Remove the - from the sort parameter
  const sortField = sort.includes("-") ? sort.substring(1) : sort;
  const cursorField = getColumnKeyByDbName(sortField, COLUMNS);

  let { sqlString, countSQL, replacements } = getCandidateSQL(query);

  let recordCount;
  if (fetchCount) {
    const countResult: any = await sequelize.query(countSQL, {
      replacements,
      type: QueryTypes.SELECT,
    });

    recordCount = countResult[0].count;
  }

  let data: CandidateModel[] = await sequelize.query(sqlString, {
    replacements,
    type: QueryTypes.SELECT,
    nest: true,
  });

  let cursor = "";

  if (data && data.length > 0) {
    cursor = getCursorString(cursorField, PRIMARY_KEY, data);
  }

  //Add any object that will be turned into an array
  //e.g. const result = reduceResult(result as any, [["CardCardKeyword", "CardCardKeywords"],]);
  data = reduceResult(data as any, [
    
  ]) as unknown as CandidateModel[];

  

  return NextResponse.json({
    rows: data,
    cursor,
    ...(fetchCount && { count: recordCount }),
  });
};



//Generated by GetSingleCreateModelPOSTRoute - GetSingleCreateModelPOSTRoute
export const POST = async (req: Request) => {
  const res = (await req.json()) as CandidateFormUpdatePayload;

  try {
    await CandidateSchema.validate(res);
  } catch (error) {
    return handleSequelizeError(error);
  }
  
  
  const t = await sequelize.transaction();

  try {
    const newCandidate = await createCandidate(res, t);
    const id = newCandidate[PRIMARY_KEY];

    
    

    await t.commit();

    return NextResponse.json({
      status: "success",
      id,
      
      
      
    });
  } catch (err) {
    await t.rollback();
    return handleSequelizeError(err);
  }
};

export const DELETE = async (req: Request) => {
  const body = (await req.json()) as CandidateDeletePayload;
  const { deletedCandidates } = body;

  if (deletedCandidates.length > 0) {
    const t = await sequelize.transaction();
    try {
      await deleteCandidates(PRIMARY_KEY, deletedCandidates, t);
      t.commit();
      return NextResponse.json("success");
    } catch (error) {
      t.rollback();
      return handleSequelizeError(error);
    }
  }
};
