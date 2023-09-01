//Generated by WriteToModelconstants_ts - ModelConstants.ts
import { CandidateFormikFilter } from "@/interfaces/CandidateInterfaces";
import { convertDateToYYYYMMDD } from "@/utils/utilities";

export const MODEL_NAME = "Candidate";
export const TABLE_NAME = "candidates";
export const PLURALIZED_MODEL_NAME = "Candidates";
export const VERBOSE_MODEL_NAME = "Candidate";
export const PLURALIZED_VERBOSE_MODEL_NAME = "Candidates";
export const DEFAULT_SORT_BY = "id";
export const DEFAULT_FILTERS: Partial<CandidateFormikFilter> = { 
//Generated by GetAllModelFilterDefaultBySeqModel
 
};
export const FIRST_FIELD_IN_FORM = "candidateName"; //Generated by GetFirstFieldInForm
export const LAST_FIELD_IN_FORM = "notes"; //Generated by GetLastFieldInForm
export const DEFAULT_FORM_VALUE = {
  //Generated by GetAllFormDefaultValueBySeqModel
candidateName: "",//Generated by GetFormDefaultValue
source: null,//Generated by GetFormDefaultValue
candidateStateID: "",//Generated by GetFormDefaultValue
providerID: "",//Generated by GetFormDefaultValue
providerStateID: "",//Generated by GetFormDefaultValue
providerOffice: "",//Generated by GetFormDefaultValue
providerSourceID: "",//Generated by GetFormDefaultValue
providerTypeID: "",//Generated by GetFormDefaultValue
providerContactName: "",//Generated by GetFormDefaultValue
providerEmail: "",//Generated by GetFormDefaultValue
providerContactNumber: "",//Generated by GetFormDefaultValue
email: "",//Generated by GetFormDefaultValue
employer: "",//Generated by GetFormDefaultValue
employerOfficeID: "",//Generated by GetFormDefaultValue
employerStateID: "",//Generated by GetFormDefaultValue
employerCandidateID: "",//Generated by GetFormDefaultValue
employerCandidateOwner: "",//Generated by GetFormDefaultValue
groupSiteID: "",//Generated by GetFormDefaultValue
divisionID: "",//Generated by GetFormDefaultValue
wageSubsidyAmount: "0.00",//Generated by GetFormDefaultValue
benchmarkHours: "0.00",//Generated by GetFormDefaultValue
startDate: convertDateToYYYYMMDD(new Date()),//Generated by GetFormDefaultValue
statusID: "",//Generated by GetFormDefaultValue
stageID: "",//Generated by GetFormDefaultValue
outcomeReminder: "",//Generated by GetFormDefaultValue
payslipStatus: "",//Generated by GetFormDefaultValue
priorityID: "",//Generated by GetFormDefaultValue
placementSent: false,//Generated by GetFormDefaultValue
placementStatusID: "",//Generated by GetFormDefaultValue
archive: false,//Generated by GetFormDefaultValue
invoiced: false,//Generated by GetFormDefaultValue
invoiceNumber: "",//Generated by GetFormDefaultValue
enquiryDate: "",//Generated by GetFormDefaultValue
enquiryType: "",//Generated by GetFormDefaultValue
wSAgreement: "",//Generated by GetFormDefaultValue
wSSchedule: "",//Generated by GetFormDefaultValue
notes: "",//Generated by GetFormDefaultValue
id: "",//Generated by GetFormDefaultValue,
  touched: false,
};
export const PRIMARY_KEY = "id";
export const UNIQUE_FIELDS = [//Generated by GetAllUniqueFieldsBySeqModel
];
export const REQUIRED_FIELDS = { 
//Generated by GetAllRequiredFieldsBySeqModel
candidateName: "Candidate Name",//Generated by GetRequiredField - Get Required Field
wageSubsidyAmount: "Wage Subsidy Amount",//Generated by GetRequiredField - Get Required Field
benchmarkHours: "Benchmark Hours",//Generated by GetRequiredField - Get Required Field
startDate: "Start Date",//Generated by GetRequiredField - Get Required Field 
};

//Generated by GetControlOptionsBySeqModel
export const CONTROL_OPTIONS = {source: [{id: "360 Consulting",name: "360 Consulting"},{id: "Aramex",name: "Aramex"},{id: "Toll Direct",name: "Toll Direct"}],//Generated by GetFieldOptions
}

//Generated by GetCOLUMNSObject
export const COLUMNS = {candidateName: {type: "string", db_name: "candidate_name"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
source: {type: "string", db_name: "source"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
candidateStateID: {type: "number", db_name: "candidate_state_id"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
providerID: {type: "number", db_name: "provider_id"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
providerStateID: {type: "number", db_name: "provider_state_id"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
providerOffice: {type: "string", db_name: "provider_office"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
providerSourceID: {type: "number", db_name: "provider_source_id"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
providerTypeID: {type: "number", db_name: "provider_type_id"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
providerContactName: {type: "string", db_name: "provider_contact_name"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
providerEmail: {type: "string", db_name: "provider_email"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
providerContactNumber: {type: "string", db_name: "provider_contact_number"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
email: {type: "string", db_name: "email"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
employer: {type: "string", db_name: "employer"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
employerOfficeID: {type: "number", db_name: "employer_office_id"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
employerStateID: {type: "number", db_name: "employer_state_id"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
employerCandidateID: {type: "string", db_name: "employer_candidate_id"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
employerCandidateOwner: {type: "string", db_name: "employer_candidate_owner"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
groupSiteID: {type: "number", db_name: "group_site_id"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
divisionID: {type: "number", db_name: "division_id"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
wageSubsidyAmount: {type: "string", db_name: "wage_subsidy_amount"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
benchmarkHours: {type: "string", db_name: "benchmark_hours"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
startDate: {type: "string", db_name: "start_date"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
statusID: {type: "number", db_name: "status_id"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
stageID: {type: "number", db_name: "stage_id"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
outcomeReminder: {type: "string", db_name: "outcome_reminder"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
payslipStatus: {type: "string", db_name: "payslip_status"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
priorityID: {type: "number", db_name: "priority_id"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
placementSent: {type: "boolean", db_name: "placement_sent"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
placementStatusID: {type: "number", db_name: "placement_status_id"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
archive: {type: "boolean", db_name: "360archive"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
invoiced: {type: "boolean", db_name: "360invoiced"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
invoiceNumber: {type: "string", db_name: "360_invoice_number"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
enquiryDate: {type: "string", db_name: "360_enquiry_date"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
enquiryType: {type: "string", db_name: "360_enquiry_type"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
wSAgreement: {type: "string", db_name: "wsagreement"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
wSSchedule: {type: "string", db_name: "wsschedule"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
notes: {type: "string", db_name: "360notes"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
id: {type: "number", db_name: "id"},//Generated by GetConstantFieldDictionary - Constant Field Dictionary
}
