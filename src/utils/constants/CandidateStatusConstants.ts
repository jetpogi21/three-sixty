//Generated by WriteToModelconstants_ts - ModelConstants.ts
import { CandidateStatusFormikFilter } from "@/interfaces/CandidateStatusInterfaces";
import { convertDateToYYYYMMDD } from "@/utils/utilities";

export const MODEL_NAME = "CandidateStatus";
export const TABLE_NAME = "candidate_status";
export const PLURALIZED_MODEL_NAME = "CandidateStatus";
export const VERBOSE_MODEL_NAME = "Candidate Status";
export const PLURALIZED_VERBOSE_MODEL_NAME = "Candidate Statuss";
export const DEFAULT_SORT_BY = "id";
export const DEFAULT_FILTERS: Partial<CandidateStatusFormikFilter> = {
  //Generated by GetAllModelFilterDefaultBySeqModel
};
export const FIRST_FIELD_IN_FORM = "candidateID"; //Generated by GetFirstFieldInForm
export const LAST_FIELD_IN_FORM = "statusID"; //Generated by GetLastFieldInForm
export const DEFAULT_FORM_VALUE = {
  //Generated by GetAllFormDefaultValueBySeqModel
  id: "", //Generated by GetFormDefaultValue
  candidateID: "", //Generated by GetFormDefaultValue
  statusID: "", //Generated by GetFormDefaultValue,
  touched: false,
};
export const PRIMARY_KEY = "id";
export const UNIQUE_FIELDS = [
  //Generated by GetAllUniqueFieldsBySeqModel
];
export const REQUIRED_FIELDS = {
  //Generated by GetAllRequiredFieldsBySeqModel
  candidateID: "Candidate ID", //Generated by GetRequiredField - Get Required Field
  statusID: "Status ID", //Generated by GetRequiredField - Get Required Field
};

//Generated by GetControlOptionsBySeqModel
export const CONTROL_OPTIONS = {};

//Generated by GetCOLUMNSObject
export const COLUMNS = {
  id: { type: "number", db_name: "id" }, //Generated by GetConstantFieldDictionary - Constant Field Dictionary
  candidateID: { type: "number", db_name: "candidate_id" }, //Generated by GetConstantFieldDictionary - Constant Field Dictionary
  statusID: { type: "number", db_name: "status_id" }, //Generated by GetConstantFieldDictionary - Constant Field Dictionary
};